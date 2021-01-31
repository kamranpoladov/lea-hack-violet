import faker from 'faker';
import { LoremIpsum } from 'lorem-ipsum';
import { rand } from '../../../../server/utils';
import { Gender, Host } from '../../../../types';
import { Afro, Bun, Short } from '../components/profilePictures';
import { useRandomTags } from './useRandomTags';

export const useMockHosts = (amount: number) => {
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

  const hostTags = useRandomTags(amount);
  const profilePictures = [Bun, Short, Afro];
  const profileColors = ['#BED7AA', '#E0BBE1', '#C0CEFF'];

  const hosts = Array(amount)
    .fill(0)
    .map((_, i) => {
      const random = Math.floor(rand(0, profilePictures.length));
      const host: Host = {
        name: faker.name.findName(),
        description: lorem.generateParagraphs(1),
        location: {
          lat: rand(50.869, 50.8699),
          lng: rand(4.7, 4.79)
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
