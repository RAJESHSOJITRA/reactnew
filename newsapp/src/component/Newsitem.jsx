/* eslint-disable react/prop-types */
// 3ca0ecda6680484c89855862717aab4d
import  { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,url}=this.props;  
    return (
        <>             
      <div className="card" style={{width: "18rem"}}>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
        </>
    )
  }
}

export default Newsitem
