import faker from 'faker';
import { LoremIpsum } from 'lorem-ipsum';
import { rand } from '../../../utils';
import { Gender, Host } from '../../../types';
import { useGetCurrentLocation } from '..';
import {
  Afro,
  Bun,
  Short
} from '../../components/HostsList/components/profilePictures';
import { useRandomTags } from '../../components/HostsList/hooks/useRandomTags';

export const useMockHosts = (amount: number) => {
  const { data: location } = useGetCurrentLocation();
  const hostTags = useRandomTags(amount);

  if (!location) return null;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      min: 2,
      max: 4
    },
    wordsPerSentence: {
      min: 4,
      max: 10
    }
  });

  const profilePictures = [Bun, Short, Afro];
  const profileColors = ['#BED7AA', '#E0BBE1', '#C0CEFF'];

  const {
    coords: { latitude, longitude }
  } = location;

  const hosts = Array(amount)
    .fill(0)
    .map((_, i) => {
      const random = Math.floor(rand(0, profilePictures.length));
      const host: Host = {
        name: faker.name.findName(),
        description: lorem.generateParagraphs(1),
        location: {
          lat: rand(latitude - 0.01, latitude + 0.01),
          lng: rand(longitude - 0.01, longitude + 0.01)
        },
        tags: hostTags[i],
        gender: Math.random() > 0.5 ? Gender.M : Gender.F,
        Icon: profilePictures[random],
        profileColor: profileColors[random]
      };
      return host;
    });

  return hosts;
};
