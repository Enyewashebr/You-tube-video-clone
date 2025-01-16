// import React from 'react'
import './PlayVideo.css'
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
// import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from "../../data";
import moment from 'moment'

const PlayVideo = ({videoId}) => {


  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);


  const fetchVideoData = async () =>{
    // Fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))

  }

  const fetchOtherData = async () => {
    // Fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

    // fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2CrepliesmaxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items));
  }

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  useEffect(()=>{
    fetchVideoData();
  }, [videoId])
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        width="787"
        height="443"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="React Projects For Beginners | Master React.js In One Video | React Projects for Resume"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : ""}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="comment-action">
          <span>
            <img src={like} alt="" />
            {apiData
              ? value_converter(apiData.statistics.likeCount)
              : 155}
          </span>
          <span>
            <img src={dislike} alt="" />
            <span>
              <img src={share} alt="" />
              share
            </span>
            <span>
              <img src={save} alt="" />
            </span>
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):""} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"description here"}</p>
        
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):"100"} comments</h4>

        {commentData.map((items, index) => {
          return(
          <div key={index} className="comment">
            <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
              <h3>
                {items.snippet.topLevelComment.snippet.authorDisplayName} <span>2 days ago</span>
              </h3>
              <p>{items.snippet.topLevelComment.snippet.textDisplay} </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>{value_converter(items.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          
)})}
        
      </div>
     
    </div>
  );
}

export default PlayVideo
