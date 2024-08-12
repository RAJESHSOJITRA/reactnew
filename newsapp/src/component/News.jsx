/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// 3ca0ecda6680484c89855862717aab4d
// https://newsapi.org/v2/everything?q=tesla&from=2024-07-10&sortBy=publishedAt&apiKey=3ca0ecda6680484c89855862717aab4d
import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    console.log("I am a constructor from news component ");
    this.state = {
      articles: [],
      loading: false,
      // key:[],
    }
  }
  async componentDidMount() {
    console.log("component Did Mount");
    let url = `https://newsapi.org/v2/everything?q=in&from=2024-07-12&sortBy=publishedAt&apiKey=3ca0ecda6680484c89855862717aab4d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
  }
  handlePrevclick = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) ) {
      let url = `https://newsapi.org/v2/everything?q=in&from=2024-07-12&sortBy=publishedAt&apiKey=3ca0ecda6680484c89855862717aab4d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })
    }

  }
  handleNextclick = async () => {
    let url = `https://newsapi.org/v2/everything?q=in&from=2024-07-12&sortBy=publishedAt&apiKey=3ca0ecda6680484c89855862717aab4d
    &page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })
  }

  render() {
    console.log("the page is rendered");

    return (
      <>
        <div className='container my-3'>
          <h2>News Details Top Headline</h2>
        {this.state.loading && <Spinner/>}
          <div className="row my-3">
            {this.state.articles.map((element) => {
              // console.log(element)
              return <>
                <div className="col-md-4"  >
                  <Newsitem key={element.url} title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""} urlToImage={element.urlToImage}
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
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3"
            onClick={this.handlePrevclick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary"
            onClick={this.handleNextclick}>Next &rarr;</button>

        </div>
      </>
    )
  }
}
export default News


