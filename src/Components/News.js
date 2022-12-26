import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{

  const[articles,setArticles]=useState ([])
  const[loading,setLoading]=useState (false)
  const[page,setPage]=useState (1)
  const[totalResults,setTotalResults]=useState (0)

  // document.title = `${props.category} - NewsTree`;

  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles)
    setLoading(false)
    setTotalResults(parseData.totalResults)
    
    props.setProgress(100);
  }
  
useEffect(()=>{
  updateNews();
},[])
  
  
  const handlePrev = async () => {
    setPage(page-1)
    updateNews();
  };
  const handleNext = async () => {
    setPage(page+1)
    updateNews();
  };
  const fetchMoreData = async() => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pages}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)
  };
  
    return (
      <div className="container my-4 NewsMainText">
        <h1>
          <strong>NewsTree - Top {props.category} headLines</strong>
        </h1>
        {/* {loading && <Loading/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Loading />}
        >
          <div className="container">

          
          <div className="row my-5">
            {articles.map((element) => {
              console.log(element);
              return (
                <div className="col-sm-4 center my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsId={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-dark"        
              onClick={handlePrev}
            >
              &laquo; Prev
            </button>
            <button type="button" disabled={page + 1 > Math.ceil(totalResults/props.pages)} className="btn btn-dark" onClick={handleNext}>
              Next &raquo;
            </button>
          </div> */}
      </div>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
  category: PropTypes.string,
};
export default News;
