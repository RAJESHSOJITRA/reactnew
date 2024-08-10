/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Newsitem from './newsitem'

export class News extends Component {
  articles=[
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Banksy howling wolf artwork removed after reveal",
  "description": "Men wearing balaclavas were seen taking the artwork down hours after it was revealed.",
  "url": "https://www.bbc.co.uk/news/articles/cgrjyv2dwnvo",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a0eb/live/ccf4c370-558c-11ef-9ae6-47d584e77449.jpg",
  "publishedAt": "2024-08-09T10:52:23.0654814Z",
  "content": "A witness, Tom Kellow, was on his lunch break when he saw the satellite dish getting removed. \r\nHe said: \"They had a ladder. There was one guy on the roof and the other two were watching the ladder.\r… [+329 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Cannabis: Drug production booming in UK's empty high streets",
  "description": "Criminals target empty shops and pubs in once-busy town centres to grow cannabis, say police.",
  "url": "https://www.bbc.co.uk/news/articles/c2x0x6ypgneo",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3474/live/54e2d860-50da-11ef-88da-d34d3edb3c84.jpg",
  "publishedAt": "2024-08-09T10:52:20.9253874Z",
  "content": "Last year saw an intensification of police operations to target cannabis farms, with the issue of 1,000 warrants and nearly 1,000 arrests.\r\nGwent Police has successfully raided several cannabis farms… [+680 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "They went to space for eight days - and could be stuck until 2025",
  "description": "Two American astronauts face the sudden prospect of spending Christmas and New Year in space.",
  "url": "https://www.bbc.co.uk/news/articles/cg4yqepr469o",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/775f/live/e07ef050-551e-11ef-8481-7905ff38b187.jpg",
  "publishedAt": "2024-08-09T10:52:18.674136Z",
  "content": "This is the third stint aboard the ISS for Ms Williams, a retired Navy helicopter pilot, while Mr Wilmore is a former fighter jet pilot who has been to space twice before.\r\nWe've been thoroughly busy… [+1295 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "What we know about military records of Walz and Vance",
  "description": "Walz's military record has been under scrutiny after a series of claims made by veterans and leading Republicans.",
  "url": "https://www.bbc.co.uk/news/articles/cze5gzr97ewo",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5c06/live/2e6d8e60-5593-11ef-b2d2-cdb23d5d7c5b.jpg",
  "publishedAt": "2024-08-09T10:37:19.4873998Z",
  "content": "Mr Vance claimed: When Tim Walz was asked by his country to go to Iraq, you know what he did? He dropped out of the army and allowed his unit to go without him.\r\nSeveral former National Guard colleag… [+1494 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "San José galleon: Artefacts found on Colombian coast shipwreck",
  "description": "An anchor and glass bottles are among the treasures found in the \"unprecedented\" haul, researchers say.",
  "url": "https://www.bbc.co.uk/news/articles/c2kj0153zn0o",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3b7f/live/9042cb90-5625-11ef-8f0f-0577398c3339.jpg",
  "publishedAt": "2024-08-09T10:22:24.1894561Z",
  "content": "\"Results of this exploration have revealed an unprecedented set of archaeological evidence, which has greatly expanded our knowledge,\" the institutions in charge of exploring the wreck said in a stat… [+1079 chars]"
  }
]
  constructor(){
    super();
    console.log("I am a constructor from news component ");
    this.state={
        articles:this.articles,
        loading:false,
    }
  }
  componentDidMount(){
    console.log("component Did Mount")
  }

  render() { 
    console.log("the page is rendered");
    return (
      <div className='container my-3'>
        <h2>News Details Top Headline</h2>
     
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          console.log(element)
         return <>
         <div className="col-md-4" key={element.url} >
          <Newsitem title={element.title.slice(0,45)} 
          description={element.description.slice(0,88)} urlToImage={element.urlToImage}
            url={element.url}
          />
          </div>
          </>
          })}
      
        
        {/* <div className="col-md-4">
        <Newsitem title="mytitle" description="mydesc"/>
        </div> */}
        </div>
          </div>

       )
  }
}
export default News


