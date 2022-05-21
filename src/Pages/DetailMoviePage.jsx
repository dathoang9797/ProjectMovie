import React from 'react'
import { FilmInfo, Article } from './DetailMoviePage.style'


function DetailMoviePage() {
  return (
    <Article id="post-6707" className="post-6707 movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama movie_tag-4k-ultra movie_tag-brother">
      <div className="gen-video-holder">
        <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ" frameBorder={0} allowFullScreen />
      </div>
      <h2>The warrior life</h2>
      <div>
        <span>R</span>
        <span>
          <i className="fas fa-eye">
          </i>
          <span className='ml-3'>2.7K Views</span>
        </span>
      </div>
      <div className="gen-excerpt">
        Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.
      </div>
      <div className="mt-1">
        <FilmInfo>
          <ul>
            <li>
              <span>Language</span>
              <span>English</span>
            </li>
            <li>
              <span>Subtitles</span>
              <span>English</span>
            </li>
            <li>
              <span>Audio Languages</span>
              <span>English</span>
            </li>
            <li>
              <span>Genre</span>
              <span>
                <a href="http://preview.gentechtreedesign.com/streamlab/red-demo/movie-genre/action/">
                  Action,				   </a>
              </span>
              <span>
                <a href="http://preview.gentechtreedesign.com/streamlab/red-demo/movie-genre/adventure/">
                  Adventure,				   </a>
              </span>
              <span>
                <a href="http://preview.gentechtreedesign.com/streamlab/red-demo/movie-genre/drama/">
                  Drama				   </a>
              </span>
            </li>
            <li>
              <span>Run Time</span>
              <span>2hr 00mins</span>
            </li>
            <li>
              <span>Release Date</span>
              <span>14 Jan, 2020</span>
            </li>
          </ul>
        </FilmInfo>
        <div className="gen-socail-share">
          <h4 className="align-self-center">Social Share :</h4>
          <ul className="social-inner">
            <li><a target="_blank" href="www.facebook.com?share=http://preview.gentechtreedesign.com/streamlab/red-demo/movie/the-dance-life/" className="facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a target="_blank" href="#http://preview.gentechtreedesign.com/streamlab/red-demo/movie/the-dance-life/" className="facebook"><i className="fab fa-instagram" /></a></li>
            <li><a target="_blank" href="#http://preview.gentechtreedesign.com/streamlab/red-demo/movie/the-dance-life/" className="facebook"><i className="fab fa-twitter" /></a></li>
          </ul>
        </div>
      </div>
    </Article>
  )
}

export default DetailMoviePage