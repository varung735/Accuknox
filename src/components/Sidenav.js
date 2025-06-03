import React, { useState } from 'react'

function Sidenav({ graphData, setGraphData, cwppgraphData, setcwppGraphData, registryScanData, setRegistryScanData, displaySideNav, setDisplaySideNav }) {
  const [tab, setTab] = useState('cspm');
  const [widgetName, setWidgetName] = useState('');

  function toggleGraphDisplay(index) {
    if (tab === 'cspm') {
      setGraphData(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], display: !updated[index].display };
        return updated;
      });
    } else if (tab === 'cwpp') {
      setcwppGraphData(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], display: !updated[index].display };
        return updated;
      });
    } else if (tab === 'reg') {
      setRegistryScanData(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], display: !updated[index].display };
        return updated;
      });
    }
  }

  function addWidget() {
    let newWidget = { title: widgetName, display: true, data: [] }
    if(widgetName === null) {
      setWidgetName('Widget Name cannot be blank');
    }

    if(tab === 'cspm') {
      setGraphData(prev => [...prev, newWidget]);
    }
    else if(tab === 'cwpp') {
      setcwppGraphData(prev => [...prev, newWidget]);
    }
    else if(tab === 'reg') {
      setRegistryScanData(prev => [...prev, newWidget]);
    }
  }

  function deleteData(index) {
    if (tab === 'cspm') {
      setGraphData(prev => prev.filter((_, i) => i !== index));
    }
    else if (tab === 'cwpp') {
      setcwppGraphData(prev => prev.filter((_, i) => i !== index));
    }
    else if (tab === 'reg') {
      setRegistryScanData(prev => prev.filter((_, i) => i !== index));
    }
  }

  return (
    <div className='z-20 h-full w-full absolute top-0 right-0 flex flex-col items-end bg-[rgba(0,0,0,0.45)] overflow-none'>

      {/* Header */}
      <div className='p-3 w-[45%] h-10 bg-blue-900 flex items-center justify-between'>
        <h1 className='font-nunito text-white'>Add Widget</h1>
        <img src='./assets/cross.svg' alt='cross' className='size-5 invert cursor-pointer' onClick={() => { setDisplaySideNav(!displaySideNav) }} />
      </div>

      {/* Body */}
      <div className='p-3 w-[45%] h-full bg-white'>
        <h1 className='font-nunito'>Personalize your dashboard by adding the following widget</h1>

        {/* Tabs */}
        <div className='flex'>

          <div className={`py-3 px-8 border-b-2 cursor-pointer ${tab === 'cspm' ? 'border-indigo-800' : ''}`}
            onClick={() => { setTab('cspm') }}>
            <h1 className={`font-nunito font-medium text-sm ${tab === 'cspm' ? 'text-indigo-800' : 'text-gray-400'}`}
              onClick={() => { setTab('cspm') }}>CSPM</h1>
          </div>
          <div className={`py-3 px-8 border-b-2 cursor-pointer ${tab === 'cwpp' ? 'border-indigo-800' : ''}`}
            onClick={() => { setTab('cwpp') }}>
            <h1 className={`font-nunito font-medium text-sm ${tab === 'cwpp' ? 'text-indigo-800' : 'text-gray-400'}`}
              onClick={() => { setTab('cwpp') }}>CWPP</h1>
          </div>
          <div className={`py-3 px-8 border-b-2 cursor-pointer ${tab === 'reg' ? 'border-indigo-800' : ''}`}
            onClick={() => { setTab('reg') }}>
            <h1 className={`font-nunito font-medium text-sm ${tab === 'reg' ? 'text-indigo-800' : 'text-gray-400'}`}
              onClick={() => { setTab('reg') }}>Registry Scan</h1>
          </div>

        </div>

        {/* Add Widget */}
        <div className='p-1 mt-5 border rounded-sm'>
          <h1 className='font-nunito font-medium text-sm'>Add Widget</h1>
          <div className='p-3 flex items-center gap-2'>
            <input type='text' placeholder='Enter Widget Name' className='p-2 w-full border rounded-sm'
              value={widgetName} onChange={(e) => {setWidgetName(e.target.value)}} />
            <button className='p-2 bg-indigo-900 font-nunito font-medium text-sm text-white rounded-sm'
              onClick={() => {addWidget()}}>Add</button>
          </div>
        </div>

        {/* Widgets */}
        <div className='p-3 h-[75%] w-full flex flex-col justify-end'>

          <div className='flex flex-col gap-3'>

            {/* CSPM */}
            {tab === 'cspm' &&
              <div>
                {
                  graphData.map((data, index) => {
                    return (
                      <div key={index} className='w-full mb-2 p-3 border rounded-sm flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          <input type='checkbox' name='' id='' className='size-5 cursor-pointer accent-indigo-950' checked={data.display}
                            onChange={() => { toggleGraphDisplay(index) }} />
                          <h1 className='font-nunito text-md text-indigo-900'>{data.title}</h1>
                        </div>
                        <img src='./assets/cross.svg' alt='' className='size-5 cursor-pointer' onClick={() => { deleteData(index) }} />
                      </div>
                    )
                  })
                }
              </div>}

            {/* CWPP */}
            {tab === 'cwpp' &&
              <div>
                {
                  cwppgraphData.map((data, index) => {
                    return (
                      <div key={index} className='w-full mb-2 p-3 border rounded-sm flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          <input type='checkbox' name='' id='' className='size-5 cursor-pointer accent-indigo-950' checked={data.display}
                            onChange={() => { toggleGraphDisplay(index) }} />
                          <h1 className='font-nunito text-md text-indigo-900'>{data.title}</h1>
                        </div>
                        <img src='./assets/cross.svg' alt='' className='size-5 cursor-pointer' onClick={() => { deleteData(index) }} />
                      </div>
                    )
                  })
                }
              </div>}

            {/* Registry */}
            {tab === 'reg' &&
              <div>
                {
                  registryScanData.map((data, index) => {
                    return (
                      <div key={index} className='w-full mb-2 p-3 border rounded-sm flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          <input type='checkbox' name='' id='' className='size-5 cursor-pointer accent-indigo-950' checked={data.display}
                            onChange={() => { toggleGraphDisplay(index) }} />
                          <h1 className='font-nunito text-md text-indigo-900'>{data.title}</h1>
                        </div>
                        <img src='./assets/cross.svg' alt='' className='size-5 cursor-pointer' onClick={() => { deleteData(index) }} />
                      </div>
                    )
                  })
                }
              </div>}

          </div>

          <div className='mt-auto flex items-center justify-end gap-2'>
            <button className='px-6 py-1 border rounded-lg bg-white text-black text-sm'
              onClick={() => { setDisplaySideNav(!displaySideNav) }}>Cancel</button>
            <button className='px-6 py-1 bg-indigo-950 rounded-lg text-white text-sm'
              onClick={() => { setDisplaySideNav(!displaySideNav) }}>Confirm</button>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Sidenav