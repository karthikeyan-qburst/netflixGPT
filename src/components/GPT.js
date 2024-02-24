import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestion from './GPTSuggestion'
import { BG_IMAGE } from '../utils/constants'

const GPT = () => {
  return (
    <div>
    <div className='absolute h-full w-full -z-10'>
                <img className='h-full w-full overflow-clip' src={BG_IMAGE} alt="background-banner" />
            </div>
      <GPTSearchBar/>
      <GPTSuggestion/>
    </div>
  )
}

export default GPT
