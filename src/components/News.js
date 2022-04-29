import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
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
            <div className="col-md-4">
              <Newsitem title = "myTitel" desc = "my desc" imgUrl = "" newsUrl = ""/>
            </div>
            <div className="col-md-4">
              <Newsitem title = "myTitel" desc = "my desc"/>
            </div>
            <div className="col-md-4">
              <Newsitem title = "myTitel" desc = "my desc"/>
            </div>
        </div>
       
      </div>
    )
  }
}

export default News
