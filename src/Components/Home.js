import React from "react";
import { useEffect, useState } from "react";
import eldenring from '../Images/eldenring.jpeg'
import nbacover from '../Images/2k22cover.jpeg'
import fifacover from '../Images/fifa22cover.jpeg'
import humankind from '../Images/humankindcover.jpeg'
import kenacover from '../Images/kenacover.webp'
import deathloop from '../Images/deathloopcover.jpeg'

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
    var phrases = homeData.phrase.map((phrase) => {
      return (
        <div class='flex-row bg-gradient-to-b from-yellow-300 to-gray-800'>
          <img src={eldenring} alt='...' class='mx-auto w-2/3 pt-3'></img>
          <div class='text-white italic font-sans text-xl font-bold pt-5'>{phrase.one}</div>
          <div class='text-white italic font-sans text-xl font-bold pt-1'>{phrase.two}</div>
          <div class='text-white italic font-sans text-xl font-bold pt-1 pb-5'>{phrase.three}</div>
        </div>
      );
    });
    var socialMessage = homeData.socialMessage;
    var reviewMessage = homeData.reviewsMessage;
  }

  return (
    <>
      <div>{phrases}</div>
      <div className='pt-7 pb-7 bg-gradient-to-b from-gray-800 to-gray-800'>
        <button class="shadow bg-yellow-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">JOIN NOW - IT'S FREE</button>
      </div>
      <div class='text-white italic pt-6 pb-6 font-sans text-xl font-bold pt-5 bg-gradient-to-b from-gray-800 to-gray-800'>{socialMessage}</div>
      <div class='flex justify-center bg-gradient-to-b from-gray-800 to-gray-800'>
        <img src={nbacover} alt='...' class='pt-3 px-4 h-60'></img>
        <img src={fifacover} alt='...' class='pt-3 px-4 h-60'></img>
        <img src={humankind} alt='...' class='pt-3 px-4 h-60'></img>
        <img src={kenacover} alt='...' class='pt-3 px-4 h-60'></img>
        <img src={deathloop} alt='...' class='pt-3 px-4 h-60'></img>
      </div>
      <div class='text-white italic pt-6 pb-6 font-sans text-xl font-bold pt-5 bg-gradient-to-b from-gray-800 to-gray-800'>{reviewMessage}</div>
      
      <div class="flex pt-6 bg-gradient-to-b from-gray-800 to-gray-800 mx-auto px-8">
          <div class="flex table w-full">
             <div class="flex block sm:table-cell">
                    <p class="uppercase pl-5 text-red-700 text-sm sm:mb-6"></p>
                    <ul class="list-reset text-xs mb-6">
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="" class="text-white hover:text-grey-dark">Contact Us</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="http://vimeo.com/trigan" class="text-white hover:text-grey-dark">News</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="/testimonials" class="text-white hover:text-grey-dark">Podcast</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                            <a href="/testimonials" class="text-white hover:text-grey-dark">Help</a>
                        </li>
                    </ul>
                </div>
          </div>
      </div>
    </>
  );
}

export default Home;
