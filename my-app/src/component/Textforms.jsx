import {useState} from "react"

function Textforms() {  
  
  const [text, setText] = useState("enter a text for rajesh sojitra");

    //copy thetext
  const handleCopy=()=>{
    let text=document.getElementById("fewdetails");
    // text.select();
    navigator.clipboard.writeText(text.value);
}

    //remove the extra space
  const handleExtraspace=()=>{
    let newtext=text.split(/[ ] + /);
    setText(newtext.join(""));

  }
  
      //text analyzer ,wordcounter
    const handleclear=()=>{
      let text="";
      setText(text);
    }

    //lowercase
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  } 
  
  //upper case
  const handleUpclick=()=>{       
    console.log("upper Case was Clicked" +text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }  

    // for enter a text
  const handleOnChange=(event)=>{
    console.log(event.target.value);
    setText(event.target.value); 
  }


  // text="rajesh sojitra"; //wromg way to change the state
    // setText="rajesh sojitra"; //correct way to change the state
  
  return (
    <>
    <div className="container">
  
  <div className="mb-3">
  <label htmlFor="details">Enter a Few Details About Your self</label>  <br />
  <textarea name="enter deatls" value={text} onChange={handleOnChange} 
  id="fewdetails" cols={150} rows={8}> </textarea>  <br/>
  <button className="btn btn-primary mx-2" onClick={handleUpclick}>UpperCase</button>

    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lower Case</button>
  
    <button className="btn btn-primary mx-2" onClick={handleclear}>cleartext</button>

    <button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button> 
       <button className="btn btn-primary mx-2" onClick={handleExtraspace}>extraspace remove</button>
        </div>  

</div>

  <div className="container">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words  {text.length}character</p>
    <p>{(0.008)*(text.split(" ").length)}  minute to read the words</p>

    <h2>Preview</h2>
    <p>{text}</p>
  </div>
    </>
  )
}

export default Textforms;