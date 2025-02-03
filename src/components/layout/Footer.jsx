import React from 'react';
import { LuCopyright } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineFacebook } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { ImTwitch } from "react-icons/im";
import { TfiTumblr } from "react-icons/tfi";

//footer components
function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li><LuCopyright size={40}/>EventFlow Manager</li>
                <li><FaPhoneVolume size={40}/></li>
                <li><TfiEmail size={40}/></li>
                <li><MdOutlineFacebook size={40}/></li>
                <li><TiSocialInstagram size={40}/></li>
                <li><RiTwitterXLine size={40}/></li>
                <li><TfiYoutube size={40}/></li>
                <li><ImTwitch size={40}/></li>
                <li><TfiTumblr size={40}/></li>
            </ul>
        </footer>
    )
}
export default Footer;