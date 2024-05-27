import React from 'react';

export const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Gram's Hall Of Fame</h1>
      </div>
      <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
        <p>This website is going to be a tribute to our Grandma and everything that she wrote as well as a place that we can compile all of our favorite songs to have a jam session whereever we are!</p>
        <p>To start this website off, only <a href="/originals/timothy_james">Timothy James</a> will be available, but I will be updating this frequently. So check back often!</p>
        <p>I will also be including a progress roadmap in the <a href="/about">About</a> page soon, so take a look at that too!</p>
      </div>
    </div>
  );
};
