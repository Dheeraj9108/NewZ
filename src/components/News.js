import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <h2>NewZee - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
              <Newsitem title = "myTitel" desc = "my desc"/>
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
