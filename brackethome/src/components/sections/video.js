import React from 'react';

const Video = () => {
    return <section id="video_background">
        <div className="container-fluid">
            <div className="overlay h-100"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="img/slidervideo.mp4" type="video/mp4"/> 
        </video>
    </div>
</section>

}

export default Video;