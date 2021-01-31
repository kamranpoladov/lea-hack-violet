import faker from 'faker';
import { LoremIpsum } from 'lorem-ipsum';
import { Host, HostTags } from '../../../../types';

export const useMockHosts = () => {
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
  const hosts = Array(10)
    .fill(0)
    .map(() => {
      const host: Host = {
        name: faker.name.findName(),
        description: lorem.generateParagraphs(1),
        tags: [HostTags.KID_FRIENDLY, HostTags.WIFI]
      };
      return host;
    });

  return hosts;
};
