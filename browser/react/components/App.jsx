import React, { Component } from 'react'

import Navbar from './Navbar.jsx'
import OpinionContainer from '../containers/OpinionContainer.jsx'

const App = props => {
  return(
    <div>
      <Navbar/>
      <OpinionContainer/>
      <div className="container section">
        <h2>Three reasons why you should submit your music to tunaweek.net:​​</h2>
        <ol>
        ​​​​​  <li><span>More new music is better. People need to hear your work whether they know it or not.</span></li>
          <li><span>If folks hear your song on tunaweek.net and make it a hit, you win, we win, the audience wins, everybody wins.</span></li>
          <li><span>It&#8217;s fun.</span></li>
        </ol>
        <p>Beginning in April, you&#8217;ll be able to download the tunaweek podcast through iTunes, Google Play and Podcast Republic. Yay! Until then, please submit downloadable links or MP3s of your tunes to: tunaweek.net@gmail.com.
        </p>
      </div>
      <div className="container section">
        <h2>Other frequently asked questions:</h2>

        <div className="rule"/>
        <div className="sub-section">
          <h3>Who owns the songs tunaweek.net podcasts? </h3>
          <p>You do. Even after you submit your original song to tunaweek.net you retain your copyright, which, according to U.S. copyright law, goes into effect the moment you put your name and a date to your work. That simple. Name, date, boom! You own your song. We just want people to hear it!</p>
        </div>

        <div className="rule"/>
        <div className="sub-section">
          <h3>What exactly is tunaweek.net looking for?</h3>
          <p>Anything and everything -- as long as it&#8217;s original. There are clever songwriters and songwriting geniuses out there and people need to hear you! Even if you submit something you think just might stink, our crack team of musicians, engineers and producers will make it smell and sound sweet. Sweet!</p>
        </div>

        <div className="rule"/>
        <div className="sub-section">
          <h3>Wait, when tunaweek.net says they&#8217;ll podcast anything and everything people submit, is that for real?</h3>
          <p>Yes. Send us finished songs, unfinished songs, lyrics with no music or vice-versa, poems, stories, interviews, snippets, found sounds, sketches, photos... anything you think of as a song or anything you believe should be a song. Whatever it is, we&#8217;ll podcast it -- although we may edit the hell out of it first.</p>
        </div>

        <div className="rule"/>
        <div className="sub-section">
          <h3>What else?</h3>
          <p>In addition to podcasting your music and making songs out of your lyrics and suggestions, tunaweek features original music, interviews with famous and non-famous musicians, interviews with experts and non-experts, stories, and obscure news.</p>
        </div>

        <div className="rule"/>
        <div className="sub-section">
          <h3>Who&#8217;s this PIPI?</h3>
          <p>PIPI (or Podcast Intelligence Programmed Irresponsibly) is our resident 'AI'.​</p>
        </div>
      </div>

      <div className="container section footer">
        <p>Please send further questions, comments and songs or songs-to-be to <a href="mailto:tunaweek.net@gmail.com​​">tunaweek.net@gmail.com</a>.</p>
      </div>
    </div>
  )
}

export default App