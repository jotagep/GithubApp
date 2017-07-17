import { User } from '../modals/user.interface';

const userList: User[] = [
    {
        name: 'jotagep',
        company: 'JOTA',
        location: 'Barcelona, ESP',
        bio: 'I love potatoes',
        avatar_url: 'http://www.lorempixel.com/400/200',
        email: 'jotagep@gmail.com'
    },
    {
        name: 'Andrew',
        company: 'HP',
        location: 'Madrid, ESP',
        bio: 'I love banana',
        avatar_url: 'http://www.lorempixel.com/400/200',
        email: 'andrewj@gmail.com'
    }
]

export const USER_LIST = userList;