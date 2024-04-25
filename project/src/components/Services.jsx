import { useState } from "react";


const Services = () => {
    useState([
        {
            id:"",
            title:"",
            description:"",
            asctionButton:"",
            link:"",

        }
    ])
  return (
    <>
    <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">My Services</h1>

        <div className="services-container space-x-4 px-10 flex mt-12">
            
            <div className="cursor-pointer hover:bg-gray-100  space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-x-4">
                <i className=" text-5xl fa-brands fa-aws"></i>
                <h1 className="text-4xl">Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis dicta maxime autem ullam temporibus, optio deserunt mollitia ipsa quaerat. lorm ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt aspernatur dolore.</p>
                <button className="px-1 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
            </div>

            <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
                <i className=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis dicta maxime autem ullam temporibus, optio deserunt mollitia ipsa quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt aspernatur dolore.</p>
                <button className="px-1 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
            </div>

            <div className="cursor-pointer hover:bg-gray-100  space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis dicta maxime autem ullam temporibus, optio deserunt mollitia ipsa quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt aspernatur dolore .</p>
                <button className="px-1 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
            </div>
        </div>
      
    </div>
    </>
  );
};

export default Services;
