import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="flex justify-between gap-10 items-center bg-[#fbbd04b0] py-4 px-3 text-white">
            <Link to="/">
            <h4 className="font-mono font-bold text-3xl">
               <img src="/gubra_logo_white_banner.svg" alt="Gubra Logo" className="h-10" />
            </h4>
            </Link>
        </div>
    )
}
