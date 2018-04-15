import React from 'react';

const VideoInfo = ({video}) => {
  if (!video) {
    return <div>Data is loading......</div>;
  }
  /*var request = new XMLHttpRequest();

  request.open('GET', 'https://private-eee5-nn4mjstest.apiary-mock.com/dashboard');
  request.onreadystatechange = function() {
    if(this.readystate === 4) {
        console.log('Status:', this.status);
        console.log('headers:', this.getAllResponseHeaders());
        console.log('Body', this.responseText);
    }
  };

  request.send();*/
  //const videoId = video.id.videoId;
  //const url = 'https://www.youtube.com/embed/' + videoId;
  const url = 'https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard'
  console.log(url)
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoInfo;
