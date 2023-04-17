import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Homepage = () => {
    return (
        <div className=' h-screen bg-[#1c1e29] text-white flex items-center justify-center relative' >
            <div className='  bg-[#282a36] p-3 rounded-lg w-96'>
                <Image className='mt-1' src='/logo.png' width={100} height={100} alt='code-sync-logo' />
                <h4 className='pl-3 py-3 font-sans font-semibold'>Paste invitation ROOM ID</h4>
                <div className='pl-3 flex flex-col space-y-3'>
                    <input className='p-2 rounded-md  ' type='text' placeholder='ROOM ID' />
                    <input className='p-2 rounded-md ' type='text' placeholder='USERNAME' />
                    <button className=' font-sans  font-semibold  bg-green-500 rounded-md w-20' >JOIN </button>
                    <div className='text-center'>
                        <span className='text-sm'> if you don't have an invite then create &nbsp;
                        <Link className='text-green-400' href='/'>new room </Link></span>
                    </div>
                </div>


            </div>
            <footer className='absolute bottom-0'>
                <h4> Buit with 💙&nbsp; by{' '}
                    <Link className='text-green-400' href='/' >Coder's Gyan</Link>

                </h4>
            </footer>



        </div>
    );
}

export default Homepage;
