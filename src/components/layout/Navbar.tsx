'use client';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar(){
    // const navbarStyle={
    //     background: '(rgba(145, 65, 220, 0.8) a(0.8))',
    // }
    return ( 
        <nav className="fixed top-0 left-0 w-full h-20 z-50" style={{ background: 'rgba(0, 0, 0, 1)' }} >
            <div className="flex items-center justify-between h-full px-8 py-3">
                <div className="text-white text-lg font-bold">
                    <Link href="/" className="flex items-center">
                        <Image src="/Images/logo.png" alt="Logo" width={90} height={72} className="mr-2" />
                    </Link>
                </div>
                <div className="flex space-x-6 justify-between px-2 pl-6 py-2 rounded-lg font-semibold text-lg bg-black/50 backdrop-blur-md">
                    <div className="text-white hover:text-gray-300 flex justify-center items-center"><Link href="/" >Home</Link></div>
                    <div className="text-white hover:text-gray-300 flex justify-center items-center"><Link href="/#about" >About Us</Link></div>
                    <div className="text-white hover:text-gray-300 flex justify-center items-center"><Link href="/artists" >Exclusive Artists</Link></div>
                    <div className="bg-white text-black hover:text-gray-300 px-3 py-2 rounded"><Link href="/connect">Contact</Link></div>
                </div>
            </div>
        </nav>   
    );
}