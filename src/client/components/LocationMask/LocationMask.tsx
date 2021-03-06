import { LatLngLiteral, TravelMode } from '@googlemaps/google-maps-services-js';
import { DirectionsRenderer } from '@react-google-maps/api';
import React, { memo, useState } from 'react';
import { Map } from '../Map';
import { useDirections } from './hooks';

const LocationMask = () => {
  const [origin] = useState<LatLngLiteral>({
    lat: 40.40560396103984,
    lng: 49.86648147740897
  });
  const [destination] = useState<LatLngLiteral>({
    lat: 40.367947274759885,
    lng: 49.82485359459066
  });
  const [travelMode] = useState<TravelMode>(TravelMode.driving);

  const { data: directions, isFetching } = useDirections(
    origin,
    destination,
    travelMode
  );

  if (!directions || isFetching) return null;

  return (
    <Map>
      <DirectionsRenderer options={{ directions }} />
    </Map>
  );
};

export default memo(LocationMask);
