import {useState} from "react"

function Textforms() {  
  const handleUpclick=()=>{       
    console.log("upper Case was Clicked +text");
    let newtext=text.toUpperCase();
    setText(newtext);
  }  
  const handleOnChange=(event)=>{
    console.log(event.target.value);
    setText(event.target.value); 
  }
  const [text, setText] = useState("enter a text for rajesh sojitra");


  // text="rajesh sojitra"; //wromg way to change the state
    // setText="rajesh sojitra"; //correct way to change the state
  
  return (
    <>
    <div className="container">
  
  <div className="mb-3">
  <label htmlFor="details">Enter a Few Details About Your self</label>  <br />
  <textarea name="enter deatls" value={text} onChange={handleOnChange} id="few details"></textarea>  <br/>
  <button className="btn btn-primary" onClick={handleUpclick}>UpperCase</button>
        </div>

</div>

  <div className="container">
    <h1>your text summary</h1>
    <p>26 words  {text.length}character</p>
  </div>
    </>
  )
}

export default Textforms;