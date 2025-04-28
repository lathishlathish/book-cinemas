import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Deadpool & Wolverine',
    posterUrl: 'https://images.pexels.com/photos/1978693/pexels-photo-1978693.jpeg',
    rating: 4.5,
    genre: ['Action', 'Adventure', 'Comedy'],
    language: ['English', 'Tamil', 'Hindi'],
    duration: '2h 7m',
    releaseDate: '2024-07-26',
    certificate: 'A',
    description: 'Wade Wilson, aka Deadpool, seeks out a former X-Men teammate to help him avert catastrophe.',
    featured: true
  },
  {
    id: '2',
    title: 'Vettaiyan',
    posterUrl: 'https://images.pexels.com/photos/2549025/pexels-photo-2549025.jpeg',
    rating: 4.2,
    genre: ['Action', 'Drama', 'Thriller'],
    language: ['Tamil'],
    duration: '2h 32m',
    releaseDate: '2024-08-15',
    certificate: 'UA',
    description: 'An honest police officer fights against corruption in the system.',
    featured: true
  },
  {
    id: '3',
    title: 'Inside Out 2',
    posterUrl: 'https://images.pexels.com/photos/269319/pexels-photo-269319.jpeg',
    rating: 4.7,
    genre: ['Animation', 'Comedy', 'Family'],
    language: ['English', 'Tamil', 'Hindi', 'Telugu'],
    duration: '1h 37m',
    releaseDate: '2024-06-14',
    certificate: 'U',
    description: 'Follow Riley as a teenager as new emotions join headquarters.',
    featured: true
  },
  {
    id: '4',
    title: 'A Quiet Place: Day One',
    posterUrl: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg',
    rating: 4.0,
    genre: ['Horror', 'Sci-Fi', 'Thriller'],
    language: ['English', 'Hindi'],
    duration: '1h 37m',
    releaseDate: '2024-06-28',
    certificate: 'UA',
    description: 'Experience the day the earth went quiet.',
    featured: false
  },
  {
    id: '5',
    title: 'Bad Boys: Ride or Die',
    posterUrl: 'https://images.pexels.com/photos/3697742/pexels-photo-3697742.jpeg',
    rating: 3.8,
    genre: ['Action', 'Comedy', 'Crime'],
    language: ['English', 'Hindi'],
    duration: '1h 55m',
    releaseDate: '2024-06-07',
    certificate: 'A',
    description: 'The Bad Boys must clear their late captain\'s name and face a dangerous new enemy.',
    featured: false
  },
  {
    id: '6',
    title: 'Kalki 2898 AD',
    posterUrl: 'https://images.pexels.com/photos/12226702/pexels-photo-12226702.jpeg',
    rating: 4.3,
    genre: ['Sci-Fi', 'Action', 'Fantasy'],
    language: ['Telugu', 'Tamil', 'Hindi', 'Malayalam', 'Kannada'],
    duration: '2h 47m',
    releaseDate: '2024-06-27',
    certificate: 'UA',
    description: 'Set in a post-apocalyptic world, the film explores a mythological tale set in the future.',
    featured: false
  },
  {
    id: '7',
    title: 'Despicable Me 4',
    posterUrl: 'https://images.pexels.com/photos/751159/pexels-photo-751159.jpeg',
    rating: 4.1,
    genre: ['Animation', 'Comedy', 'Family'],
    language: ['English', 'Tamil', 'Hindi', 'Telugu'],
    duration: '1h 34m',
    releaseDate: '2024-07-05',
    certificate: 'U',
    description: 'Gru and Lucy welcome a new member to their family, but they must also face a new villain.',
    featured: true
  },
  {
    id: '8',
    title: 'Raayan',
    posterUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    rating: 3.9,
    genre: ['Action', 'Crime', 'Drama'],
    language: ['Tamil'],
    duration: '2h 25m',
    releaseDate: '2024-07-12',
    certificate: 'UA',
    description: 'A gangster finds himself caught up in a complex web of crime and betrayal.',
    featured: false
  }
];