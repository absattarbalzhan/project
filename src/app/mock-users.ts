import { User } from './user';
import { List } from './list';

export const mockUser: User = {
  id: 0,
  login: 'sayarkh',
  password: '1q2w3e4r',
  name: 'Saya',
  last_name: 'Rakhymgaliyeva',
  email: 'rahymgalievasaya@gmail.com',
  image: '../../assets/download.jpg',
  saved: [List[0], List[1], List[3]],
  user_specialists: [],
};
