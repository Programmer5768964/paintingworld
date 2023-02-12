
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { isHtmlElement } from 'react-router-dom/dist/dom';
const ShowPotraits = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
       getPotrait();
    },[]);


    const getPotrait = ()=>{
        axios.get('http://localhost:5000/potrait')
        .then((res) =>
            setData(res.data))
        .catch((err) =>
            console.log(err, "error has occured"))

    }
    // const numbers = [1, 2, 3, 4, 5];
    // let count = 0;

    const searchPotrait = async (event)=>{
        let key = event.target.value;
        console.log(key);
        if(key)
        {

            let result = await fetch(`http://localhost:5000/search/${key}`)
            result = await result.json();
            if(result){
                setData(result);
            }
            
        }else{
            getPotrait();
        }
    }
    const DownloadImg = ()=>{
        navigate("/download")
    }


    return (
        <div className='uploaded-potrait'>
            <input type="text" placeholder="Search Box" className='searchBox' onChange={searchPotrait} />


            {
                data.map((singleData, index) => {
                    return (

                        <div className="image-3" key={index + 1}>
                            <div className='all-images'>
                                <img src={`http://localhost:5000/${singleData?.imgUrl}`} alt="..." width="150" />
                                <button onClick={DownloadImg} className='btn2' type='button'>Download</button>
                            </div>
                            <div className='all-names'>
                                <h1>{singleData.name}</h1>
                                <h2>{singleData.desc}</h2>
                            </div>

                        </div>
                    )
                })
            }
        </div>

    )
}

export default ShowPotraits;