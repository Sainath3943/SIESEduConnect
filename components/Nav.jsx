"use client"

import { signIn, useSession, getProviders } from 'next-auth/react';
import { useState, useEffect} from "react";
import { useRouter } from "next/navigation";

import "@styles/nav.css"

const Nav = () => {
    //Scrolling behaviour of nav
    const [position, setposition] = useState(0)
    const [scrolled, setscrolled] = useState(false)
    const [page, setpage] = useState("")

    
    const handleScroll = () => {
        var currPos = parseInt(window.scrollY)
        // console.log("pos",position," curr:",currPos)
        if(position < currPos){
            setposition(currPos)
            setscrolled(true)
        }
        else{
            setposition(window.scrollY)
            setscrolled(false)
        }
    }
    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll);
    }, [position])
    
    useEffect(() => {
        setpage(window.location.pathname)
    }, [() => window.location.pathname])
    
    

    //AUth section
    const {data : session} = useSession();
    const router = useRouter();
    useEffect(() => {
        if(session){
            // console.log(session)
            router.push("/canvas")
        }
        
    }, [session])
    // console.log(":::",session)
    const [providers, setProviders ] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

  return (
    <div className={`nav_wrapper ${scrolled? "nav_scrolled": "nav_unscrolled"}`}>
        <div className="nav_contents">
            <div className="nav_flexbox">
                <div className="nav_linkBox">
                    <a href="/">
                        <img  className="nav_logo" src="/assets/sies_logo.png" alt="" />
                    </a>
                    <a className={`nav_links ${(page) == "/home"? "nav_links_active": ""} `} href="/home">
                        Home
                        <div></div>
                    </a>
                    <a className="nav_links" href="/discover">
                        Discover
                        <div></div>
                    </a>
                    <a className="nav_links" href="/faqs">
                        FAQs
                        <div></div>
                    </a>
                </div>
                <div className="nav_login"  key={providers?.name} onClick={() => signIn(providers)} >
                    Login
                </div>
            </div>
        </div>
    </div>
  );
};

export default Nav;
