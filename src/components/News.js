import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [
    {
      "source" : "gsjdf",
      "author" : "Dhuru",
      "title" : "Cricket",
      "description" : "India won",
      "url" : "https://hellowworld",
      "urlToImage" : "sdfgukg",
      "content" : "India won with westIndies and world cup byu 28 runs for that i have celebrated pary at 12.00" 
    },
    {
      "source" : "gsjdf",
      "author" : "Dhuru",
      "title" : "Cricket",
      "description" : "Russia won",
      "url" : "https://hellowworldu",
      "urlToImage" : "sdfgukg",
      "content" : "India won with westIndies and world cup byu 28 runs for that i have celebrated pary at 12.00" 
    },
    {
      "source" : "gsjdf",
      "author" : "Dhuru",
      "title" : "Cricket",
      "description" : "Russia won",
      "url" : "https://hellowworldue",
      "urlToImage" : "sdfgukg",
      "content" : "India won with westIndies and world cup byu 28 runs for that i have celebrated pary at 12.00" 
    }
  ]
  constructor(){
    super();
    this.state = {
      articles:this.articles
    }
  }
  render() {
    return (
      <div className='container'>
        <h2>NewZee - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
             <Newsitem title = {element.title.slice(0,45)} desc = {element.description.slice(0,88)} imgUrl = {element.urlToImage} newsUrl = {element.url}/>
           </div>
          })}
           
        </div>
       
      </div>
    )
  }
}

export default News
