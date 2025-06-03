import React from 'react';
import NoGraphData from './NoGraphData';

function HorizontalGraphData({ graphData }) {

    let total = graphData.data.reduce((acc, item) => {
        let key = Object.keys(item).find(key => key !== 'color');
        return acc + item[key];
    }, 0);

    return (
        <div className='w-1/3 min-h-64 p-5 bg-white rounded-lg'>
            <h1 className='font-nunito font-bold text-md text-blue-950'>{graphData.title}</h1>

            <div className='h-full p-3 flex items-start gap-5'>

                {graphData.data.length <= 0 ?
                    <div className='h-full flex justify-center items-center'><NoGraphData /></div> :
                    <div className='w-full flex flex-col gap-3'>

                        <div className='flex items-center gap-2'>
                            <h1 className='font-nunito font-bold text-lg'>{total}</h1>
                            <h1 className='font-nunito font-normal text-xs'>
                                Total { graphData.title === 'Image Risk Assessment' ? 'Vulnerablities' : 'Images' }
                            </h1>
                        </div>

                        {/* Graph */}
                        <div className='w-full h-3 flex rounded-full' >
                            {graphData.data.map((data, index) => {
                                let key = Object.keys(data).find(item => item !== 'color');
                                let percentage = (data[key] / total) * 100;
                                return <div key={index} 
                                            className={`h-full ${ index === 0 ? 'rounded-l-full' : '' } ${ index === (graphData.data.length - 1) ? 'rounded-r-full' : '' }`}
                                            style={{ backgroundColor: data.color, width: `${Math.ceil(percentage)}%` }}></div>
                            })}
                        </div>

                        <div className='p-3 h-full w-full flex flex-wrap items-center gap-4'>
                            {graphData.data.map((data, index) => {
                                let heading = Object.keys(data).find(key => key !== 'color');
                                let value = data[heading];
                                let color = data['color'];
                                return (
                                    <div key={index} className='w-1/3 flex items-center gap-2'>
                                        <div className='size-4 rounded-md' style={{ backgroundColor: color }}></div>
                                        <h1 className='font-nunito text-xs font-medium'>{`${heading} (${value})`}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}


            </div>
        </div>
    )
}

export default HorizontalGraphData