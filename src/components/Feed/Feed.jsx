import { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import {value_converter} from '../../data'
import moment from "moment";



const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  // Corrected function name and added error handling
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoList_url);
      const result = await response.json();
      setData(result.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => {
        const { id, snippet,  } = item;
        const { title, channelTitle, publishedAt } = snippet;

        // Format views and date (optional)
        // const views = statistics?.viewCount || "N/A";
        // const date = new Date(publishedAt).toLocaleDateString();

        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={id}
            className="feed-item"
          >
            <div className="card">
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={title}
                className="thumbnail"
              />
              <h2 className="video-title">{item.snippet.title}</h2>
              <h3 className="channel-name">{channelTitle}</h3>
              <p className="video-stats">
                {value_converter(item.statistics.viewCount)} views &bull; {' '}
                {moment(publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
