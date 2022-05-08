import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
  const News = (props)=>{
  // const article = [
  //   {
  //     // "author": "NDTV Sports Desk",
  //     "author": null,
  // "content": "IPL 2022, GT vs RCB Live Updates: Chasing a target of 171, Gujarat Titans two wickets down against Royal Challengers Bangalore in Match 43 at the Brabourne Stadium in Mumbai. Shubman Gill and Wriddhi… [+897 chars]",
  // "description": "IPL 2022, GT vs RCB Live Updates: Chasing a target of 171, Gujarat Titans two wickets down against Royal Challengers Bangalore in Match 43 at the Brabourne Stadium in Mumbai.",
  // "publishedAt": "2022-04-30T12:27:40Z",
  // "source": {id: null, name: 'NDTV News'},
  // "title": "IPL 2022, GT vs RCB Live Score: Shubman Gill, Wriddhiman Saha Give GT Strong Start In Chase Of 171 vs RCB - NDTV Sports",
  // "url": "https://sports.ndtv.com/ipl-2022/,ipl-2022-gt-vs-rcb-live-score-updates-gujarat-titans-vs-royal-challengers-bangalore-live-score-2934255",
  // "urlToImage": "https://c.ndtvimg.com/2022-04/25kopkng_rcb-ipl-bcci_625x300_30_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
  //   },{
  //     "author": "The Tribune India",
  // "content": "Tribune News Service\r\nChandigarh, April 30\r\nWith improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9… [+1157 chars]",
  // "description": "With improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9.30 am to 4 pm in the wake of a clash between two groups on Friday.",
  // "publishedAt": "2022-04-30T11:25:00Z",
  // "source": {id: null, name: 'The Tribune India'},
  // "title": "As situation improves, mobile internet services resume in Patiala at 4 pm instead of 6 pm - The Tribune India",
  // "url": "https://www.tribuneindia.com/news/punjab/mobile-internet-services-suspended-in-patiala-district-till-6-pm-on-saturday-390632",
  // "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_829170412.jpg"
  //   },{
  //     "author": "The Tribune India",
  // "content": "Tribune News Service\r\nChandigarh, April 30\r\nWith improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9… [+1157 chars]",
  // "description": "With improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9.30 am to 4 pm in the wake of a clash between two groups on Friday.",
  // "publishedAt": "2022-04-30T11:25:00Z",
  // "source": {id: null, name: 'The Tribune India'},
  // "title": "As situation improves, mobile internet services resume in Patiala at 4 pm instead of 6 pm - The Tribune India",
  // "url": "https://www.tribuneindia.com/news/punjab/mobile-internet-services-suspended-in-patiala-district-till-6-pm-on-saturday-390632",
  // "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_829170412.jpg"
  //   },{
  //     "author": "The Tribune India",
  // "content": "Tribune News Service\r\nChandigarh, April 30\r\nWith improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9… [+1157 chars]",
  // "description": "With improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9.30 am to 4 pm in the wake of a clash between two groups on Friday.",
  // "publishedAt": "2022-04-30T11:25:00Z",
  // "source": {id: null, name: 'The Tribune India'},
  // "title": "As situation improves, mobile internet services resume in Patiala at 4 pm instead of 6 pm - The Tribune India",
  // "url": "https://www.tribuneindia.com/news/punjab/mobile-internet-services-suspended-in-patiala-district-till-6-pm-on-saturday-390632",
  // "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_829170412.jpg"
  //   },{
  //     "author": "The Tribune India",
  // "content": "Tribune News Service\r\nChandigarh, April 30\r\nWith improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9… [+1157 chars]",
  // "description": "With improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9.30 am to 4 pm in the wake of a clash between two groups on Friday.",
  // "publishedAt": "2022-04-30T11:25:00Z",
  // "source": {id: null, name: 'The Tribune India'},
  // "title": "As situation improves, mobile internet services resume in Patiala at 4 pm instead of 6 pm - The Tribune India",
  // "url": "https://www.tribuneindia.com/news/punjab/mobile-internet-services-suspended-in-patiala-district-till-6-pm-on-saturday-390632",
  // "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_829170412.jpg"
  //   },{
  //     "author": "The Tribune India",
  // "content": "Tribune News Service\r\nChandigarh, April 30\r\nWith improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9… [+1157 chars]",
  // "description": "With improvement in the situation, mobile internet services and SMS services were restored in Patiala district on Saturday after remaining suspended from 9.30 am to 4 pm in the wake of a clash between two groups on Friday.",
  // "publishedAt": "2022-04-30T11:25:00Z",
  // "source": {id: null, name: 'The Tribune India'},
  // "title": "As situation improves, mobile internet services resume in Patiala at 4 pm instead of 6 pm - The Tribune India",
  // "url": "https://www.tribuneindia.com/news/punjab/mobile-internet-services-suspended-in-patiala-district-till-6-pm-on-saturday-390632",
  // "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_829170412.jpg"
  //   }
  // ]
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);


  // const constructor(props){
  //   super(props);
  //   this.state = {
  //     articles:this.articles,
  //     // articles:[],
  //     loading:true,
  //     page:1,
  //     totalResults:0
  //   }
  //   document.title = `${this.capitalize(props.category)} - NewZee`
  // }
  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(()=>{
    update();
  },[]);
  // async componentDidMount(){
  //   console.log("hahah");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.counrty}&category=${props.category}&apikey=7e4e45473bc74f9293ec48a150d508b1&page=1&pageSize=${props.pageSize}`;
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   console.log(parseddata);
  //   this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false});
  //   // this.update();
  // }
  const update = async()=>{
    // console.log(props.setProgress());
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.counrty}&category=${props.category}&apikey=7e4e45473bc74f9293ec48a150d508b1&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);
    console.log(parseddata);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    // this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false});
    props.setProgress(100);
  }
  const handlePrevious = async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.counrty}&category=${props.category}&apikey=7e4e45473bc74f9293ec48a150d508b1&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // console.log(parseddata);
        
    // this.setState({
    //   page:this.state.page-1,
    //   articles:parseddata.articles,
    //   loading:false
    // })
    // this.setState({page:this.state.page - 1});
    setPage(page-1);
    update();
    
  }
  const handleNext = async()=>{     
    // if(!this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.counrty}&category=${props.category}&apikey=7e4e45473bc74f9293ec48a150d508b1&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);

    //   let parseddata = await data.json();
    //   console.log(parseddata);
          
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parseddata.articles,
    //     loading:false
    //   })
    // }
    // this.setState({page:this.state.page + 1});
    setPage(page+1)
    update();
  }
  const fetchMoreData = async() =>{
    // this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.counrty}&category=${props.category}&apikey=7e4e45473bc74f9293ec48a150d508b1&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
    // setState({articles:this.state.articles.concat(parseddata.articles),totalResults:parseddata.totalResults});
  };
  // render() {
    return (
       <>
     
        <h1 className='text-center' style={{margin:"30px 0"}}>NewZee - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner/>}
      
        <InfiniteScroll dataLength={articles.length}
          next = {fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
            <div className="container">
                <div className="row">
                {/*!this.state.loading &&*/ articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                  <Newsitem source = {element.source.name}author ={element.author} date = {element.publishedAt} title = {element.title?element.title.slice(0,45):""} desc = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2022-04/jtpnh0og_general-manoj-pande-general-mm-naravane-ani_625x300_30_April_22.jpg"} newsUrl = {element.url}/>
                </div>
                })}
              </div>
            </div>
          </InfiniteScroll>

        
       {/* <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type='button' className='btn btn-dark'onClick={this.handlePrevious}>&larr; Previous</button>
         <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
       </div> */}
      </>
    )
  
}
News.defaultProps ={
  counrty : "in",
  pageSize : 8,
  category : "general"
};
News.propTypes = {
  counrty : PropTypes.string,
  pageSize :PropTypes.number,
  category : PropTypes.string,
};
export default News
