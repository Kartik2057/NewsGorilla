import React from 'react'

const NewsItem = (props)=> {
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_640.jpg"} style={{ height: '350px' }} className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column" style={{ height: '400px' }}>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text flex-grow-1">{description}</p>
                            <span className="badge text-bg-warning my-1" style={{ width: 'fit-content' }}>{source}</span>
                            <p className="card-text flex-shrink-0"><small className="text-body-secondary mx-1 my-1">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm btn-info" style={{ width: 'fit-content' }}>Read more</a>
                        </div>
                </div>
            </div>
        )
    }
export default NewsItem
