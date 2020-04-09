import { Specialist } from './specialist';

export const SPECIALISTS: Specialist[] = [
  {
    id: 21,
    title: 'Katya Pavlova',
    age: 18,
    gender: 'Female',
    city: 'Almaty',
    likes: 0,
    comments: [],
    front_image: 'kotletki.png',
    images: ['kotletka1.png', 'kotletka2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 22,
    title: 'Rakhat Alanov',
    age: 18,
    gender: 'Male',
    city: 'Almaty',
    likes: 0,
    comments: [],
    front_image: 'uchpuchmak.png',
    images: ['uchpuchmak1.png', 'Uchpuchmak2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 23,
    title: 'Ospan Yerlanov',
    age:29,
    gender: 'Male',
    city: 'Almaty',
    likes: 0,
    comments: [],
    front_image: 'beshbarmak.png',
    images: ['beshbarmak1.png', 'beshbarmak2.png'],
    category: {id: 4, name: 'Dinner'}
  }
]
