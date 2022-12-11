import React, { Component } from "react";

export class NewsItem extends Component {
    render(){
  let {title,description,imageUrl,newsId,author,date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://www.gizchina.com/wp-content/uploads/images/2022/10/cibercrime-o-que-e-1200x800-1.jpg":imageUrl}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsId} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    )
  }
}


export default NewsItem;
