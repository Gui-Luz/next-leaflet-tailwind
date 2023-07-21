import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function Map({
    children,
    userPos = [51.505, 0.8]
    }) {

    return (
        <>
            <MapContainer className='w-full' center={userPos} zoom={9} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <Marker draggable='True' position={userPos}>
                    <Popup minWidth='400'>
                        <div className='font-sans text-cyan-900'>
                            <span className='text-2xl'>A boilerplate for mapping</span>
                            <br />
                            <span className='text-lg'>With NexJs, Leaflet and Tailwind.</span>
                        </div>
                    </Popup>
                </Marker>
                {children}
            </MapContainer>
        </>
    )
}