// import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div className="comment-action">
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
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
        <img src={jack} alt="" />
        <div>
          <p>great stack</p>
          <span>500k subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>channel that makes learning easy</p>
        <p>Subscribe GreateStack to watch more videos</p>
        <hr />
        <h4>120 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack nicholson <span>2 days ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo
