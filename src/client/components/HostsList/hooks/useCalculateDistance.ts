import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { useGetCurrentLocation } from '../../../services';

const calculateDistance = (
  location1: LatLngLiteral,
  location2: LatLngLiteral
) => {
  const { lng: lng1, lat: lat1 } = location1;
  const { lng: lng2, lat: lat2 } = location2;
  const R = 6371e3;
  const alpha1 = (lat1 * Math.PI) / 180;
  const alpha2 = (lat2 * Math.PI) / 180;
  const deltaAlpha = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(deltaAlpha / 2) * Math.sin(deltaAlpha / 2) +
    Math.cos(alpha1) *
      Math.cos(alpha2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const metersToWords = (meters: number) => {
  if (meters < 1000) {
    return `${meters} m`;
  } else {
    return `${meters / 1000} km`;
  }
};

export const useCalculateDistance = (hostLocation: LatLngLiteral) => {
  const { data: geolocation } = useGetCurrentLocation();

  if (!geolocation) return null;

  const {
    coords: { latitude: lat, longitude: lng }
  } = geolocation;

  const distance = calculateDistance(hostLocation, { lat, lng });

  const distanceInHundreds = Math.ceil(distance / 100) * 100;

  return metersToWords(distanceInHundreds);
};
