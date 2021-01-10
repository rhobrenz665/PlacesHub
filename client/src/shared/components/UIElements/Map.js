import React, { useRef, useEffect, useMemo } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();

  const {
    coordinates: { lat, lng },
    zoom,
  } = props;

  const center = useMemo(() => {
    return {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };
  }, [lat, lng]);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
