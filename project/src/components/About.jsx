import { useState } from "react";
import bennerImage from "../assets/bi2.png";

const About =()=>{

  const[data,setdata] = useState({
        image:bennerImage ,
        title:"Java Developer & Android Developer",
        desc1:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laboriosam, aut explicabo.`,
        desc2:`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum optio ipsum beatae officiis ipsa molestiae voluptas. `,
        actionButton:{
            title:"Read More..",
            link:"/read more"
        }
    })
return(
    <>
    
    <div className="main-container bg-gray-200 border py-16">

        <h1 className=" text-center pb-16 text-5xl underline font-bold">About Me</h1>

        <div className="flex items-center">
            {/* image container */}
            <div className="w-full flex justify-center">
                <img className="w-fit"
                 src={data.image} alt="" />
            </div>

            {/* text container */}
            <div className="w-full flex justify-center">
                <div className="space-y-5 w-2/3">
                <h1 className="text-4xl w-2/3 font-semibold">
                   {data.title}
                    </h1>
                <p>
                    {data.desc1}
                </p>

                <p>
                    {data.desc2}
                </p>

                <button className="bg-orange-500 px-2 py-1 text-1xl rounded-full shadow-lg ">
                    {data.actionButton.title}
                </button>
                </div>
            </div>

        </div>

    </div>
    </>

)
}

export default About;