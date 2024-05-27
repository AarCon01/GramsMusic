import React from "react";
import { Button } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h1>About</h1>
      </div>
      <div style={{display: "flex", flexDirection: "column", maxWidth: "850px"}}>
        <p>This website is going to be a tribute to our Grandma and everything that she wrote as well as a place that we can compile all of our favorite songs to have a jam session whereever we are!</p>
        <p>To start this website off, only <a href="/originals/timothy_james">Timothy James</a> will be available, but I will be updating this frequently. So check back often!</p>
        <p> If there's a song that you'd like to see next, feel free to email me at aaronconnelly110@gmail.com or text me if you have my phone number 😋</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "850px"
        }}
      >
        <h2>Roadmap</h2>
        <p>I will be prioritizing certain elements of the music to make sure I can get them out sooner to everyone. Because I'm transcribing from written records without sheet music, it's harder to get everything in first go around.</p>
        <p>This is an expected Release Roadmap that I'll do my best at following.</p>
        <dl>
          <dt>Version 0.1.0 Initial Release</dt>
          <li>Rhythms</li>
          <li>Ukulele Chords (Notated)</li>
          <li>Lyrics</li>
        </dl>
        <dl>
          <dt>Version 0.2.0</dt>
          <li>Melodies</li>
          <li>Harmonies</li>
        </dl>
        <dl>
          <dt>Version 0.3.0</dt>
          <li>Accompaniment</li>
        </dl>
        <dl>
          <dt>Version 0.4.0</dt>
          <li>Auto Scrolling Scores</li>
        </dl>
        <dl>
          <dt>Version 0.5.0</dt>
          <li>Images of the chords used in the song?</li>
        </dl>
      </div>
      <footer>
        <p>This is a zero cost project. If you'd like to help support me tho, feel free to donate on my Ko-Fi.</p>
        <Button variant="link">
          <a href='https://ko-fi.com/C0C6YL2QO' target='_blank' rel="noreferrer">
            <img
            height='36'
            style={{border:"0px",height:"36px"}}
            src='https://storage.ko-fi.com/cdn/kofi2.png?v=3'
            border='0'
            alt='Support Me on ko-fi.com'
            />
          </a>
        </Button>
        <p>(No, this isn't to buy coffees with)</p>
      </footer>
    </div>
  )
}

export default AboutPage;
