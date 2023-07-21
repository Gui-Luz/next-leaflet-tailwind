import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import GetPos from '../components/getPos'


export function MapScreen({data}) {

    const [userPos, setUserPos] = useState([51.505, 0.8])

    function changeUserPos(pos){
        setUserPos(pos)
    }

    const Map = React.useMemo(() => dynamic(
        () => import('/src/components/Map'),
        { 
        loading: () =>  <div className='grid w-full h-full bg-slate-400 place-content-center'>
                            <p className='text-2xl text-slate-100'>
                                A map is loading
                            </p>
                        </div>,
        ssr: false
        }
    ), [userPos])
    
    return (
        <div className='w-screen h-screen bg-slate-100'>
            <Map userPos={userPos}>
            </Map>
            <div className="absolute p-4 font-sans text-6xl antialiased font-bold rounded-sm bg-emerald-800/50 top-10 right-10 z-1000 position-0 text-slate-100">
                NEXT LEAFLET
            </div>
            <GetPos changeUserPos={changeUserPos}/>
        </div>
    )
}

export default MapScreen