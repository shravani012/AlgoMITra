import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AuthModal from '@/components/Modals/AuthModal';
// import Image from "next/image";

type AuthpageProps = {
    
};

const Authpage:React.FC<AuthpageProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					{/* <Image src='/hero.png' alt='Hero img' width={700} height={700} /> */}
				</div>
                <AuthModal />
        </div>
    </div>
}
export default Authpage;