import {useState} from 'react'
import React from 'react'
import './App.css'

export default function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF");

    const colorChange = (e) =>{
        setColor(e.target.value);
    }
    return (
        <div className = "top">
            <p className = "heading">Color Picker</p>
            <div className = "color-Container" style = {{backgroundColor: color}}>
                <p className='container-text'>Selected Color : {color}</p>
            </div>
            <div className='inside'>
            <label className = "lable">Select a Color : </label><br></br>
                <input type="color" value = {color} onChange = {colorChange}/>
            </div>
            
        </div>
    )
}
