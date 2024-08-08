import { gsap } from "gsap";
import video4 from '../assets/video4.mp4'
const Background = ({ playstatus }) => {
  if (playstatus) {
    return (
      <>
        <div className="bg-[url('src/assets/image2.jpg')] bg-cover bg-center  h-screen flex flex-col justify-center">
          <div className="flex flex-col gap-9">
          <h1 className="text-white text-6xl font-bold ml-9">Join the Bot Revolution</h1>
          <button className="text-white bg-gray-600 bg-opacity-25 rounded-full p-4 text-2xl ml-9 w-fit">Enroll Now</button>
          </div>
        </div>
        {/* <div className="bg-[url('src/assets/video4.mp4')] bg-cover bg-center h-screen flex justify-center items-center">
        
        </div> */}
        <video  className="nkjn" autoPlay loop muted>
            <source src={video4} type='video/mp4'/>
            <p>njknjknknjklkjlkknkjnkjnkknkjmnjkn</p>
        </video>
        <div className="bg-[url('src/assets/video1.mp4')] bg-cover bg-center h-screen flex flex-col gap-4 pl-10">
            <h1 className="text-white text-6xl font-bold pt-28  underline">Past Events</h1>
            <div className="h-[60%] w-[30%]  bg-slate-600 bg-opacity-45 pl-10 rounded-2xl text-white">
                <ul className="py-5 text-white">
                    <li className="py-3">Event 1</li>
                    <li className="py-3">Event 2</li>
                    <li className="py-3">Event 3</li>
                    <li className="py-3">Event 4</li>
                </ul>
            </div>
        </div>
        <div className="bg-[url('src/assets/image1.jpg')] bg-cover bg-center h-screen flex py-32 pl-10">
          <h1 className="text-white text-6xl font-bold">About Us</h1>
        </div>
        
         
      </>
    );
  }
};

export default Background;
