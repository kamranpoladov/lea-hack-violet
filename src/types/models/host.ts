import { LatLngLiteral } from '@googlemaps/google-maps-services-js';

export enum HostTags {
  KID_FRIENDLY = 'Kid friendly',
  SINGLE_ROOM = 'Single room',
  PET_FRIENDLY = 'Pet friendly',
  WIFI = 'WiFi'
}

export enum Gender {
  M,
  F
}

export type Host = {
  name: string;
  description: string;
  tags: HostTags[];
  location: LatLngLiteral;
  gender: Gender;
  Icon: () => JSX.Element;
  profileColor: string;
};
