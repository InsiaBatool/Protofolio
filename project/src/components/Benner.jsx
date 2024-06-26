import bannerImage from "../assets/pic.png.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Bennar=()=>{
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Android Developer", "Frontend Developer", "Backend Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 100,
          loop: true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

    return(
        <div
        style={
            {
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover"
            }
        } 
             className="main-container flex items-center">
                
            
            {/* first dabba */}
            <div className=" w-full flex items-center justify-center text-white">
                {/* text */}
                <div className="w-2/3 space-y-2 my-10">
                <h3 className="text-3xl font-semibold">Hi,I am</h3>
                <h1 className="text-5xl font-bold">Insia Batool</h1>
                <h2 className="text-3xl ">I am <span className="font-bold underline" ref={el}></span></h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos enim eius nemo dicta rem est nihil a quod similique voluptates? Lorem ipsum dolor sit amet consectetur  </p>

                <div className="icons-container : flex space-x-5">
                    <a className=" border hover:bg-orange-600 cursor-pointer px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
                <i class="fa-brands text-3xl fa-facebook"></i>
                </a>

                <a className=" border hover:bg-orange-600 cursor-pointer px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
                <i class="fa-brands text-3xl fa-instagram"></i>
                </a>

                <a className=" border hover:bg-orange-600 cursor-pointer px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
                <i class="fa-brands text-3xl fa-youtube"></i>
                </a>

                <a className=" border hover:bg-orange-600 cursor-pointer px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
                <i class="fa-brands text-3xl fa-linkedin"></i>
                </a>
                    
                </div>
                <br />

                <a className="px-2 mt-3 py-1 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact me</a>
                </div>
            </div>

               {/* second dabba */}
            <div className=" w-full flex justify-center">
                {/* img */}
                <img className="rounded-full my-2 shadow-lg w-80 h-80 " src={bannerImage}/>
            </div>

        </div>
    )
}
export default Bennar;