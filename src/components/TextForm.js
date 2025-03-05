import React, {useState}from 'react'

export default function TextForm() {
    const[text,setText] = useState('')

    const handleUpClick=()=>{
        console.log("Uppercase is clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("Uppercase is clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        console.log("Uppercase is clicked " + text)
        let newText = "";
        setText(newText)
    }

    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
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
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>

        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{(0.008*text.split(" ").length).toFixed(3)} Minutes read</p>
            <p>{text.split(/\r\n|\r|\n/).length} Lines</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
