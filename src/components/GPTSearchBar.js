import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%]'>
      <form className='p-3 w-1/2 mx-auto bg-black grid grid-cols-12'>
        <input type="input" className='col-span-9 p-2' placeholder='What would you like to watch today'/>
        <button className='col-span-3 mx-4 p-2 bg-red-500 rounded-lg text-white'>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
