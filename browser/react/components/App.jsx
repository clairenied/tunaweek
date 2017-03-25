import React, { Component } from 'react'

import Navbar from './Navbar.jsx'
import OpinionContainer from '../containers/OpinionContainer.jsx'

const App = props => {
  return(
    <div>
      <OpinionContainer/>
      <div>
        <p>Beginning in April tunaweek.net will podcast your original music for free!</p>
        <p>Three reasons why you should submit your music to tunaweek.net:​​</p>
        <ol>
          ​​​​​<li>More new music is more better. People need to hear your work whether they know it or not.</li>
          <li>If folks hear your song on tunaweek.net and make it a hit, you win, we win, the audience wins, everybody wins.</li>
          <li>It&#8217;s fun.</li>
        </ol>
        <p>Soon you&#8217;ll be able to download the tunaweek podcast through iTunes, Google Play and Podcast Republic. Yay! Until then, please submit downloadable links or MP3s of your tunes to: tunaweek.net@gmail.com.
        </p>
      </div>
      <div>
        <h2>Questions?</h2>

        <h3>Who owns the songs tunaweek.net podcasts? </h3>
        <p>You do. Even after you submit your original song to tunaweek.net you retain your copyright, which, according to U.S. copyright law, goes into effect the moment you put your name and a date to your work. That simple. Name, date, boom! You own your song. We just want people to hear it!</p>

        <h3>What exactly is tunaweek.net looking for?</h3>
        <p>Anything and everything -- as long as it&#8217;s original. There are clever songwriters and songwriting geniuses out there and people need to hear you! Even if you submit something you think just might stink, our crack team of musicians, engineers and producers will make it smell and sound sweet. Sweet!</p>
​
        <h3>Wait, when tunaweek.net says they&#8217;ll podcast anything and everything people submit, is that for real?</h3>
        <p>Yes. Send us finished songs, unfinished songs, lyrics with no music or vice-versa, poems, stories, interviews, snippets, found sounds, sketches, photos... anything you think of as a song or anything you believe should be a song. Whatever it is, we&#8217;ll podcast it -- although we may edit the hell out of it first.</p>

        <h3>What else?</h3>
        <p>In addition to podcasting your music and making songs out of your lyrics and suggestions, tunaweek features original music, interviews with famous and non-famous musicians, interviews with experts and non-experts, stories, and obscure news. and </p>

        <h3>Who&#8217;s this PIPI?</h3>
        <p>PIPI&#8217;s (or Podcast Intelligence Programmed Irresponsibly) is our resident AI.​​​</p>
      </div>
    </div>
  )
}

export default App