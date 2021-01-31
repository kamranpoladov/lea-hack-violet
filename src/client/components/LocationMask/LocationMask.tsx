import {
  DirectionsResponse,
  LatLngLiteral,
  TravelMode
} from '@googlemaps/google-maps-services-js';
import { DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import React, { useState } from 'react';
import { Map } from '../Map';

export const LocationMask = () => {
  const [origin, setOrigin] = useState<LatLngLiteral>({
    lat: 40.40560396103984,
    lng: 49.86648147740897
  });
  const [destination, setDestination] = useState<LatLngLiteral>({
    lat: 40.367947274759885,
    lng: 49.82485359459066
  });
  const [travelMode, setTravelMode] = useState(
    TravelMode.driving.toUpperCase()
  );
  const [directions, setDirections] = useState<DirectionsResponse>();

  return (
    <Map>
      {
        /*destination && origin && travelMode && */ <DirectionsService
          // required
          options={{
            destination,
            origin,
            travelMode
          }}
          callback={result => result.status === 'OK' && setDirections(result)}
        />
      }

      {directions && <DirectionsRenderer options={{ directions }} />}
    </Map>
  );
};
