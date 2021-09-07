import React from "react";
import { useEffect, useState } from "react";

function Home(props) {
  //useState for json data file
  const [homeData, setHomeData] = useState({});

  //useEffect for fetching the json data file
  useEffect(() => {
    fetch("/homePageData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main);
        setHomeData(data.main);
      });
  }, []);

  //function for phrases on home page

  const ShowPhrases = () => {
    return homeData.phrase.map((phrase) => {
      return (
        <>
          <div>{phrase.one}</div>
          <div>{phrase.two}</div>
          <div>{phrase.three}</div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        <ShowPhrases />
      </div>
      <div>
        <button>JOIN NOW - IT'S FREE</button>
      </div>
    </>
  );
}

export default Home;
