import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DataCard from '../components/DataCard'
import HorizontalGraphData from '../components/HorizontalGraphData';
import Sidenav from '../components/Sidenav';

function Dashboard() {
  // eslint-disable-next-line
  const [graphData, setGraphData] = useState([
    {
      title: 'Cloud Data',
      display: true,
      data: [
        {
          'Connected': 2,
          color: '#4f39f6'
        },
        {
          'Not Connected': 2,
          color: '#eef2ff'
        }
      ]
    },
    {
      title: 'Cloud Risk Assessment',
      display: true,
      data: [
        {
          'Failed': 1689,
          color: '#e7000b'
        },
        {
          'Warning': 681,
          color: '#fcc800'
        },
        {
          'Not Available': 36,
          color: '#d1d5dc'
        },
        {
          'Passed': 7253,
          color: '#00c951'
        }
      ]
    }
  ]);
  // eslint-disable-next-line
  const [cwppgraphData, setCwppGraphData] = useState([
    {
      title: 'Top 5 Namespace Specific Alerts',
      display: true,
      data: []
    },
    {
      title: 'Workload Alerts',
      display: true,
      data: []
    }
  ]);
  // eslint-disable-next-line
  const [registryScan, setRegistryScan] = useState([
    {
      title: 'Image Risk Assessment',
      display: true,
      data: [
        {
          'Critical': 19,
          color: '#450a0a'
        },
        {
          'High': 150,
          color: '#b91c1c'
        },
        {
          'Warning': 1201,
          color: '#ea580c'
        },
        {
          'At Risk': 400,
          color: '#fbbf24'
        },
        {
          'Not Available': 50,
          color: '#d1d5dc'
        }
      ]
    },
    {
      title: 'Image Security Issues',
      display: true,
      data: [
        {
          'Critical': 220,
          color: '#450a0a'
        },
        {
          'High': 120,
          color: '#b91c1c'
        },
        {
          'At Risk': 1110,
          color: '#fbbf24'
        },
        {
          'Not Available': 110,
          color: '#d1d5dc'
        }
      ]
    }
  ]);
  const [displaySideNav, setDisplaySideNav] = useState(false);

  useEffect(() => {
    if(displaySideNav) {
      document.body.classList.add('overflow-hidden');
    }
    else{
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [displaySideNav]);
    
  return (
    <>
      <Navbar />
      <div className='p-3 bg-gray-100'>

        {/* Sidenav */}
        {displaySideNav && 
          <Sidenav displaySideNav={displaySideNav}
                   setDisplaySideNav={setDisplaySideNav}
                   graphData={graphData}
                   setGraphData={setGraphData}
                   cwppgraphData={cwppgraphData}
                   setcwppGraphData={setCwppGraphData}
                   registryScanData={registryScan}
                   setRegistryScanData={setRegistryScan} />}

        {/* Header */}
        <div className='pt-5 pb-1 px-5 flex items-center justify-between'>
          <h1 className='font-nunito font-bold text-blue-950'>CNAPP Dashboard</h1>

          <div className='flex items-center gap-4'>

            {/* Add Widget Button */}
            <div className='py-2 px-2 flex items-center gap-1 border border-gray-500 rounded-md bg-gray-200 cursor-pointer'
                onClick={() => {setDisplaySideNav(!displaySideNav)}}>
              <h1 className='font-nunito font-thin text-sm text-gray-600'>Add Widget</h1>
              <h1 className='font-nunito font-medium text-sm text-gray-600'>+</h1>
            </div>

            {/* Refresh Button */}
            <div className='py-2 px-1 flex items-center gap-1 border border-gray-500 rounded-md bg-gray-200 cursor-pointer'>
              <img src='./assets/refresh.svg' alt='refresh' className='size-4' />
            </div>

            {/* Kebab Button */}
            <div className='py-2 px-1 flex items-center gap-1 border border-gray-500 rounded-md bg-gray-200 cursor-pointer'>
              <img src='./assets/kebab.svg' alt='kebab' className='size-4' />
            </div>

            {/* Filter */}
            <div className='flex items-center gap-1 border border-blue-950 rounded-md bg-gray-200 cursor-pointer'>
              <div className='p-2 pr-1 border-r border-blue-950'>
                <img src='./assets/clock.svg' alt='clock' className='size-4' />
              </div>

              <div className='px-2 flex items-center gap-3'>
                <h1 className='font-nunito '>Last 2 days</h1>
                <div className='z-10 size-2 rotate-45 border-b-2 border-r-2 border-blue-950'></div>
              </div>
            </div>

          </div>
        </div>

        {/* Body */}
        <div className='p-8'>

          {/* CSPM Exe */}
          <div className='mb-8'>

            <h1 className='font-nunito font-bold text-md text-blue-950'>CSPM Executive Dashboard</h1>

            <div className='flex gap-3'>
              {graphData
              .filter(data => data.display)
              .map((data, index) => {
                return <DataCard key={index} graphData={data} />
              })}

              {/* Add Widget */}
              <div className='w-1/3 flex flex-col justify-center items-center bg-white rounded-lg'>
                <button className='p-2 border-2 rounded-lg font-nunito font-medium text-md text-gray-400'
                  onClick={() => { setDisplaySideNav(!displaySideNav) }}>+ Add Widget</button>
              </div>
            </div>

          </div>

          {/* CWPP */}
          <div className='mb-8'>

            <h1 className='font-nunito font-bold text-md text-blue-950'>CWPP Dashboard</h1>

            <div className='flex gap-3'>
              {cwppgraphData
              .filter(data => data.display)
              .map((data, index) => {
                return <DataCard key={index} graphData={data} />
              })}

              {/* Add Widget */}
              <div className='w-1/3 flex flex-col justify-center items-center bg-white rounded-lg'>
                <button className='p-2 border-2 rounded-lg font-nunito font-medium text-md text-gray-400'
                  onClick={() => { setDisplaySideNav(!displaySideNav) }}>+ Add Widget</button>
              </div>

            </div>

          </div>

          {/* Registry Scan */}
          <div>

            <h1 className='font-nunito font-bold text-md text-blue-950'>Registry Scan</h1>

            <div className='flex gap-3'>
              {registryScan
              .filter(data => data.display)
              .map((data, index) => {
                return <HorizontalGraphData key={index} graphData={data} />
              })}

              {/* Add Widget */}
              <div className='w-1/3 flex flex-col justify-center items-center bg-white rounded-lg'>
                <button className='p-2 border-2 rounded-lg font-nunito font-medium text-md text-gray-400'
                  onClick={() => { setDisplaySideNav(!displaySideNav) }}>+ Add Widget</button>
              </div>
            </div>


          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard