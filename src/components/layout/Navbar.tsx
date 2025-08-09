'use client';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar(){
    // const navbarStyle={
    //     background: '(rgba(145, 65, 220, 0.8) a(0.8))',
    // }
    return ( 
        <nav className="fixed top-0 left-0 w-full h-20 z-50" style={{ background: 'rgba(145, 65, 220, 0.8)' }}>
            <div>
                <div className="flex items-center justify-between h-full px-4">
                    <div className="text-white text-lg font-bold">
                        <Link href="/" className="flex items-center">
                            <Image src="/Images/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    </div>
                </div>
            </div>
            
        </nav>
        

    );
}