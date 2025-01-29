import React from 'react';
import { LuCopyright } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

//footer components
function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li><LuCopyright size={60}/>EventFlow Manager</li>
                <li><FaPhoneVolume size={60}/></li>
                <li><TfiEmail size={60}/></li>
            </ul>
        </footer>
    )
}
export default Footer;