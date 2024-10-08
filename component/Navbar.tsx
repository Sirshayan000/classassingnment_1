import Link from "next/link"
import CSS_Style from ".//style.module.css"

console.log(CSS_Style)
export default function Navbar(){
    return(
        <div>
            
            <ul id="navbar">
                <li className="links"><Link href="/">Home</Link></li>
                <li className="links"><Link href="/about">About</Link></li>
                <li className="links"><Link href="/contactus">ContactUs</Link></li>
                <li className="links"><Link href="/services">Services</Link></li>
            </ul>

        </div>
    )
}