import React,{useRef,useEffect} from 'react';
import styles from '../UI Elements/Map.module.css'
import { Feature, Map, View } from 'ol/index';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import { useGeographic } from 'ol/proj';
import 'ol/ol.css';
const Maps = (props) => {
  const mapRef = useRef();
  const {center,zoom} = props;
  useGeographic();
  const place = [center.lat.toFixed(2),center.lng.toFixed(2)]
  const point =  new Point(place)
  const {flatCoordinates} = point;
  console.log(flatCoordinates);

  useEffect(() => {
    new Map({
      target: mapRef.current.id,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            'circle-radius': 10,
            'circle-fill-color': 'brown',
          },
        })
      ],
      view: new View({
        center: place,
        zoom: zoom
      })
    });

 
    
    

    

  }, [center, zoom]);
  
  return (
    <div ref={mapRef} className={` ${props.className}`} id={styles['map']}>

    </div>
  )
}

export default Maps