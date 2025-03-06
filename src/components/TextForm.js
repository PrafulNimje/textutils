import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        console.log("Uppercase is clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!",'success')
    }

    const handleLoClick = () => {
        console.log("Uppercase is clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!",'success')

    }

    const handleClearClick = () => {
        console.log("Uppercase is clicked " + text)
        let newText = "";
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!",'success')

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Removed Extra Spaces!",'success')

    }

    const handleOnClick = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <br />
                <h3>Enter text to analyse</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnClick}
                        style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 67 108)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length).toFixed(3)} Minutes read</p>
                <p>{text.split(/\r\n|\r|\n/).length} Lines</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter text to preview it here.'}</p>
            </div>
        </>
    )
}
