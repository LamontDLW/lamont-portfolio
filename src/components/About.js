import React from "react"
import amlogo from "../resources/apple-music.png"
import Tidbit from "../data/components/tidbit"
import tidbitdata from "../data/objects/tidbitdata"

const tidbits = tidbitdata.map(item => {
  return (
    <Tidbit key={item.id} {...item} />
  )
})

export default function About() {
  return (
    <div id="About" className="About">
      <div className="about-info">
        <h1 className="lamont-title">LAMONT</h1>
        <p className="about-paragraph">
          My name is Lamont, (if you haven’t realized already :P), I’ve been into web development for many years. When I’m not in the studio working I’m listening to The Weeknd, trying out a new coffee shop, at the gym or traveling.
          <br />
          <br />
          My biggest inspiration has been seeing and understanding the ability to create a body of work, share it with the world, and see how it inspires others. I gain most of my inspiration from music and art. I like to think of programming as an art form, calling myself an artist.
        </p>
      </div>

    <div className="music-card">
      <div className="album-art"></div>
      <div className="card-info">
          <h3>Now Playing:</h3>
          <h2>Spin The Block</h2>
          <h4>RAAHiiM</h4>
      </div>
      <img src={amlogo} alt="."/>
    </div>

    <div className="tidbit-zone">
      <h3 className="tidbit-zone-title">tidbit zone</h3>
      <div className="tidbit-grid">
        {tidbits}
      </div>
    </div>


    </div>
  );
}
