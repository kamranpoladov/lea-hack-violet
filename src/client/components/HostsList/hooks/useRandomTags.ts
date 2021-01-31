import { rand } from '../../../../server/utils';
import { HostTags } from '../../../../types';

export const useRandomTags = (hostsAmount: number) => {
  const allTags = [
    HostTags.KID_FRIENDLY,
    HostTags.PET_FRIENDLY,
    HostTags.SINGLE_ROOM,
    HostTags.WIFI
  ];

  const tags: HostTags[][] = [];

  for (let i = 0; i < hostsAmount; i++) {
    const rand0 = Math.floor(rand(0, 4));
    let rand1 = Math.floor(rand(0, 4));
    while (rand1 === rand0) {
      rand1 = Math.floor(rand(0, 4));
    }

    tags.push([allTags[rand0], allTags[rand1]]);
  }

  return tags;
};
