import React from "react";
import { useEffect, useState } from "react";

function Home(props) {
  //useState for json data file
  const [homeData, setHomeData] = useState();

  //useEffect for fetching the json data file
  useEffect(() => {
    fetch("/homePageData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main);
        setHomeData(data.main);
      });
  }, []);

  //Variables
  if (homeData) {
    var phrases = homeData.phrase.map((something) => {
      return (
        <>
          <div>{something.one}</div>
          <div>{something.two}</div>
          <div>{something.three}</div>
        </>
      );
    });
    var socialMessage = homeData.socialMessage;
    var reviewMessage = homeData.reviewsMessage;
  }

  return (
    <>
      <div>{phrases}</div>
      <div>
        <button>JOIN NOW - IT'S FREE</button>
      </div>
      <div>{socialMessage}</div>
      <div>{reviewMessage}</div>
    </>
  );
}

export default Home;
