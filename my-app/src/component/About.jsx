import { useState } from "react"

export default function About() {
    const [mystyle,setMystyle]=useState( {color:"black",backgroundColor:"white ", border:"2px solid black"})
        const [btntext,setbtnText]=useState('Enable Darkmode')

    const toggelstyle=()=>{
        if(mystyle.backgroundColor==="white"){
                setMystyle({
                    color:"white",
                    backgroundColor:"black ", 
                })
                setbtnText('Enable lightmode')
          } 
        else{
              setMystyle({
                    color:"black",
                    backgroundColor:"white",
              })  
              setbtnText('Enable Darkmode')

        }
    }


  return (
<>
            <div className="container"  style={mystyle}>
                <h1 className="my-2">About us </h1>
        <div className="accordion" id="accordionExample"  >
        <div className="accordion-item"  style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"  >
            <div className="accordion-body" >
                <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"  style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"  style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="container">
        <button onClick={toggelstyle} type="button" className="btn btn-primary my-3">{btntext}</button>
        </div> 
</>
  )
}

