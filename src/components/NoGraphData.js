import React from 'react'

function NoGraphData() {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-2'>
        <img src='./assets/chart.svg' alt='graph' className='size-10'/>
        <h1 className='font-nunito font-light text-gray-400 text-sm'>No Graph Data Available!</h1>
    </div>
  )
}

export default NoGraphData