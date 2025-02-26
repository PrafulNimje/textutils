import React, {useState}from 'react'

export default function TextForm() {
    const[text,setText] = useState('Enter text here')

    const handleUpClick=()=>{
        console.log("Uppercase is clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnClick=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <br />
            <h3>Enter text to analyse</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnClick} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
        </div>
        </>
    )
}
