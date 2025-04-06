import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import Logo from "../assets/—Pngtree—ecommerce logo_6709791.png"

export default function NavBar () {
    return (
        <>
        <nav className="bg-[var(--base-color)] w-screen h-[4.5rem] flex justify-evenly items-center">
            <span className="w-[19.5rem]"><img src={Logo} className="w-[5rem]"/></span>
            <div className="flex justify-evenly w-3/10">
                <Link 
                to="/"
                className="font-semibold px-2 py-1.5 rounded-sm"
                >Home</Link>
                <Link 
                to="/"
                className="font-semibold px-2 py-1.5 rounded-sm"
                >placeholder</Link>
                <Link 
                to="/"
                className="font-semibold px-2 py-1.5 rounded-sm"
                >placeholder</Link>
            </div>
            <SearchBar/>
        </nav>
        </>
    )
}