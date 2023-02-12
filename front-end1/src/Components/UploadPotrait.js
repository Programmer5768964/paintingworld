import React, { useState} from 'react';
import axios from 'axios';


const ImageControle =  ()=>{
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [image,setImage] = useState('')
  
    const inputHandler = (e)=>{
        setName(e.target.value)
    }
    const inputHandlerdesc = (e)=>{
        setDesc(e.target.value)
    }


    const submitpic =()=>{
        console.log(name,desc,image,19)
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('desc',desc);
        formdata.append('image',image);
        axios.post('http://localhost:5000/upload',formdata,{
            headers:{'Authorization':localStorage.getItem('token')}
        })
        .then((res)=>{
            console.log(res.data)
            if(res.data.code === 403 && res.data.message === "Token Expired" ){
				localStorage.setItem('token',null)
			}
        })
        .catch((err)=>{
            console.log(err,"error has occured")
        })
    }
        
        
       
       
    

    return (
        <div className='register'>
            <h1>Hello Admin, Welcome to the Upload Control Page</h1>
            <input className='SignupBox'   placeholder = "Enter name" value={name}  onChange={inputHandler} />
            <input className='SignupBox'  placeholder = "Enter Description" value={desc}  onChange={inputHandlerdesc} />
            <input className='SignupBox'  type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <button className='btn' onClick={submitpic} type='button'>Submit</button>
        </div>
    )
}

export default ImageControle;