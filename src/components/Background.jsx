import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Background = () => {
  useGSAP(() => {
    gsap.to('#Homepage', { opacity: 1, delay: 1 , y: -50})
  }, [])
    return (
      <>
        <div className="bg-[url('public/assets/image2.jpg')] bg-cover bg-center  h-screen flex flex-col justify-center items-center pt-20">
          <div id ="Homepage" className="flex flex-col gap-9 justify-center items-center opacity-0">
            <h1 className="text-white text-6xl font-bold ml-9">
              Join the Bot Revolution
            </h1>
            <button className="text-white bg-gray-600 bg-opacity-25 hover:opacity-35 rounded-full p-4 text-2xl ml-9 w-fit">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="w-full h-[1000px] flex flex-col justify-center items-center bg-black gap-14">
          <h1 className="text-white text-5xl font-light">3D Model POV</h1>
          <div className="flex justify-center items-center w-[90%] h-[50%] gap-2">
          <div class="sketchfab-embed-wrapper w-[50%] h-full"> <iframe className="w-full h-full" title="Drone 3D sketch - DDS#2" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e6dbb7fbd93e476eab81bdd21e482dc1/embed"> </iframe></div>
          <div class="sketchfab-embed-wrapper h-full w-[50%]"> <iframe className="w-full h-full" title="SF Light Drone-ZR7" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bdced13af1994ea8a0d0037ae6dd5d94/embed"> </iframe></div>
          </div>
        </div>
        <div className="bg-[url('public/assets/video1.mp4')] bg-cover bg-center h-screen flex justify-center items-center flex-col gap-4">
          <h1 className="text-white text-6xl font-bold   underline">
            Past Events
          </h1>
          <div className="h-[60%] w-[60%] bg-slate-600 bg-opacity-45 pl-10 rounded-2xl text-white">
            <ul className="py-5 text-white">
              <li className="py-3">Event 1</li>
              <li className="py-3">Event 2</li>
              <li className="py-3">Event 3</li>
              <li className="py-3">Event 4</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 h-[1000px] flex items-center flex-col py-12">
          <h1 className="text-6xl font-thin py-14">Latest blog articles</h1>
          <br />
          <br />
          <div className="cards flex gap-24 ">
            <div className="h-[500px] w-[300px] border border-black rounded-xl bg-black text-white">
              <img src="public/assets/image6.jpeg" alt="image6" className="h-[250px] w-[300px] rounded-t-xl"/>
              <div className="flex flex-col justify-center items-center h-1/2 w-[300px] p-7 gap-6">
                <p>The future of cognitive robots: household gadgets or human substitutes?</p>
                <button className="border border-white rounded-full p-2 ">Read More</button>
              </div>
            </div>

            <div className="h-[500px] w-[300px] border border-black rounded-xl bg-black text-white">
              <img src="public/assets/image7.jpeg" alt="image6" className="h-[250px] w-[300px] rounded-t-xl"/>
              <div className="flex flex-col justify-center items-center h-1/2 w-[300px] p-7 gap-6">
                <p>TanzKompanie Esslingen & Cognitive Robot MAiRA Showcase New Dance Interaction</p>
                <button className="border border-white rounded-full p-2 hover:bg-slate-500 hover:font-bold">Read More</button>
              </div>
            </div>

            <div className="h-[500px] w-[300px] border border-black rounded-xl bg-black text-white">
              <img src="public/assets/image8.jpeg" alt="image6" className="h-[250px] w-[300px] rounded-t-xl"/>
              <div className="flex flex-col justify-center items-center h-1/2 w-[300px] p-7 gap-6">
                <p>Is Germany the innovation leader Europe is looking for?</p>
                <button className="border border-white rounded-full p-2 ">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  
};

export default Background;
