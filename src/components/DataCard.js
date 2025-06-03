import React from 'react';
import NoGraphData from './NoGraphData';

function DataCard({ graphData }) {
    let total = graphData.data.reduce((acc, item) => {
        let key = Object.keys(item).find(key => key !== 'color');
        return acc + item[key];
    }, 0);

    let currentPercent = 0;

    const colorGradient = graphData.data
        .map(item => {
            const key = Object.keys(item).find(k => k !== 'color');
            const value = item[key];
            const percent = (value / total) * 100;
            return { color: item.color, percent };
        })
        .filter(slice => slice.percent > 0)
        .map((slice, index, array) => {
            const start = Number(currentPercent.toFixed(2));
            const isLast = index === array.length - 1;
            const end = isLast ? 100 : Number((currentPercent + slice.percent).toFixed(2));
            currentPercent = end;
            return `${slice.color} ${start}% ${end}%`;
        })
        .join(', ');

    return (
        <div className='w-1/3 min-h-64 p-5 bg-white rounded-lg'>
            <h1 className='font-nunito font-bold text-md text-blue-950'>{graphData.title}</h1>

            {/* Graph */}
            <div className='h-full p-3 flex gap-5 items-center justify-around'>

                {graphData.data.length <= 0 ? <div className='h-full flex justify-center items-center'><NoGraphData /></div> : <div className='w-full flex items-center justify-around'>
                    <div
                        className='size-40 rounded-full flex justify-center items-center'
                        style={{ backgroundImage: `conic-gradient(${colorGradient})` }}
                    >
                        <div className='size-[95px] rounded-full bg-white flex flex-col justify-center items-center'>
                            <h1 className='h-5 m-0 p-0 font-nunito font-semibold text-lg'>{total}</h1>
                            <h1 className='m-0 p-0 font-nunito text-sm'>Total</h1>
                        </div>
                    </div>

                    <div className='h-full flex flex-col items-start gap-2'>
                        {graphData.data.map((data, index) => {
                            let heading = Object.keys(data).find(key => key !== 'color');
                            let value = data[heading];
                            let color = data['color'];
                            return (
                                <div key={index} className='flex items-center gap-2'>
                                    <div className='size-4 rounded-md' style={{ backgroundColor: color }}></div>
                                    <h1 className='font-nunito text-xs font-medium'>{`${heading} (${value})`}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>}


            </div>
        </div>
    );
}

export default DataCard;
