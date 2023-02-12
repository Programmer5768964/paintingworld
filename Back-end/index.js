const express = require('express');
const cors = require('cors');
require('./db/config');
const userModel = require('./db/User');
const multer = require('multer');

const ImagesModel = require('./db/ImageModel');

const AdminModel = require('./db/Admin')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))
app.post('/signup', async (req, resp) => {
    const user = new userModel(req.body)
    let result = await user.save();
    resp.send(result);
});

app.post('/login', async (req, resp) => {
    if (req.body.password && req.body.email) {
        let User = await userModel.findOne(req.body).select("-password");
        if (User) {
            resp.send(User);
        } else {
            resp.send({ result: "No user found" })
        }
    } else {
        resp.send({ result: "No user found" })
    }
})
app.get('/', async (req, resp) => {
    const result = await ImagesModel.find();
    resp.json(result);
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage })
app.post("/upload",upload.single('image'), async (req, resp) => {
    const name = req.body.name
    const desc = req.body.desc
    const imgUrl = req.file.path
    const newImage = new ImagesModel({
            name: name,
            desc: desc,
            imgUrl: imgUrl
        } 
    );
    const result = await newImage.save();
    console.log(req.file.path, 65)
})
app.get("/potrait", async (req, resp) => {
    let result = await ImagesModel.find();
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "No potrait found" })
    }
})
app.post("/admin", async (req, resp) => {
    // resp.send("Get Api working")
    let result = await AdminModel.findOne(req.body).select("-password");
    
    if (result) {
        delete result.password
        resp.send(result)
    } else {
        resp.send({ result: "Not valid admin" });
    }

})

app.get("/search/:key",async(req,resp)=>{
    const result = await ImagesModel.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {desc:{$regex:req.params.key}}
           
        ]
    })

    resp.send(result)
})

app.listen(5000);