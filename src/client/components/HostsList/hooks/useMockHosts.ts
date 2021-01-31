import faker from 'faker';
import { LoremIpsum } from 'lorem-ipsum';
import { rand } from '../../../../server/utils';
import { Host } from '../../../../types';
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

  const hosts = Array(amount)
    .fill(0)
    .map((_, i) => {
      const host: Host = {
        name: faker.name.findName(),
        description: lorem.generateParagraphs(1),
        location: {
          lat: rand(50.869, 50.8699),
          lng: rand(4.7, 4.79)
        },
        tags: hostTags[i]
      };
      return host;
    });

  return hosts;
};
