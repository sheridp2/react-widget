import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos'

const VideoSearch = () =>{
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('Forest')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default VideoSearch;
