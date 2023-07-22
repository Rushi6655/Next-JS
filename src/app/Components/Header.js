import React from 'react'
import '@/app/Css/Header.css';
import logo from '@/app/Images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
    return (
        <div className="Header-Wrap">
            <div className='logo'>
                <Image className='logo-img' src={logo} width={40} height={40}/>
                <h3>My Logo</h3>
            </div>
            <div className='nav-list'>
                <ul>
                    <li><Link className='links' href="/">Home</Link></li>
                    <li><Link className='links' href="/about">About</Link></li>
                    <li><Link className='links' href="#">Contact</Link></li>
                    <li><Link className='links' href="#">Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}
