import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[10%] pl-24 absolute text-white bg-gradient-to-r from-black z-10'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-lg pt-4 w-1/3 '>{overview}</p>
            <div className='mt-2'>
                <button className='bg-white text-black py-4 px-12 hover:bg-opacity-80 rounded-lg'>Play</button>
                <button className='ml-4 bg-gray-500 text-black py-4 px-12 bg-opacity-50 rounded-lg'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
