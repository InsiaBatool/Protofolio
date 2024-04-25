const Footer=()=>{
    return(
        <>
        <div className="py-5 border bg-gray-100 flex justify-between px-72">
            <div>
                <p>@2024 Durgesh Kumar Tiwari <span>All Rights Reserved</span></p>
            </div>

            <div className="space-x-5">
                <a href="/About" className="hover:underline">About</a>
                <a href="/Privecy Policy" className="hover:underline">Privecy Policy</a>
                <a href="/Licensing" className="hover:underline">Licensing</a>
                <a href="/Contact" className="hover:underline">Contact</a>
            </div>
        </div>
        </>
    )
}
export default Footer;