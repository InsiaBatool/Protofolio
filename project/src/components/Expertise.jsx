import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
    <div className="mt-2">
      
      <h1 className="mb-16 text-5xl font-bold underline text-center">My Expertise</h1>
       {/* box section */}
     <div
       style={
        {
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover"
        }
    } 
      className="box-container flex items-center my-16">  
        <div className="flex text-white justify-center">
            {/* text-container */}
            <div className="w-2/3 mb-10 text-center space-y-3">
            <h1 className="text-2xl p-10 font-bold">I Love These Technologies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga, ducimus laboriosam sit odio excepturi vitae maxime. Ad consectetur cumque, ratione officia illum fugit debitis deserunt, sint ipsa eveniet possimus.</p>
            <button className="px-2 px1 bg-orange-500 rounded-full shadow-lg">Hire me</button>
            </div>


        </div>

           <div className="flex justify-center">
            {/* skills container */}
            
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate(ORM Tool)</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Spring Boot Framework</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Spring Security</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Javascript</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">ReactJS</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">NextJS</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Tailwind Css</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">State Management</p>
            <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-3 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
            </div>

        </div>
     </div>

    </div>
   
    </>
  )
}

export default Expertise;
