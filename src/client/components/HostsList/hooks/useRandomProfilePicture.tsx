import { rand } from '../../../../server/utils';
import { Afro, Bun, Curly, Long, Short } from '../components/profilePictures';

export const useRandomProfilePicture = () => {
  const profilePictures = [Afro, Bun, Curly, Long, Short];

  const random = rand(0, profilePictures.length);

  return profilePictures[random];
};
