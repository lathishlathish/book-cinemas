import { Theater, Showtime } from '../types';

export const theaters: Theater[] = [
  {
    id: '1',
    name: 'PVR: SKLS Galaxy Mall, Red Hills',
    location: 'Red Hills, Chennai',
    city: 'Chennai'
  },
  {
    id: '2',
    name: 'INOX: Chennai Citi Centre',
    location: 'Dr. Radhakrishnan Salai, Chennai',
    city: 'Chennai'
  },
  {
    id: '3',
    name: 'Sathyam Cinemas: Royapettah',
    location: 'Royapettah, Chennai',
    city: 'Chennai'
  },
  {
    id: '4',
    name: 'SPI Palazzo: Nexus Vijaya Mall',
    location: 'Vadapalani, Chennai',
    city: 'Chennai'
  },
  {
    id: '5',
    name: 'AGS Cinemas: T. Nagar',
    location: 'T. Nagar, Chennai',
    city: 'Chennai'
  }
];

export const showtimes: Showtime[] = [
  // Theater 1 showtimes
  {
    id: 'st1-1',
    theaterId: '1',
    movieId: '1',
    time: '10:00 AM',
    date: '2024-07-28',
    price: 190
  },
  {
    id: 'st1-2',
    theaterId: '1',
    movieId: '1',
    time: '1:15 PM',
    date: '2024-07-28',
    price: 210
  },
  {
    id: 'st1-3',
    theaterId: '1',
    movieId: '1',
    time: '4:30 PM',
    date: '2024-07-28',
    price: 230
  },
  {
    id: 'st1-4',
    theaterId: '1',
    movieId: '1',
    time: '7:45 PM',
    date: '2024-07-28',
    price: 250
  },
  {
    id: 'st1-5',
    theaterId: '1',
    movieId: '2',
    time: '10:30 AM',
    date: '2024-07-28',
    price: 190
  },
  {
    id: 'st1-6',
    theaterId: '1',
    movieId: '2',
    time: '1:45 PM',
    date: '2024-07-28',
    price: 210
  },
  {
    id: 'st1-7',
    theaterId: '1',
    movieId: '3',
    time: '11:15 AM',
    date: '2024-07-28',
    price: 180
  },
  {
    id: 'st1-8',
    theaterId: '1',
    movieId: '3',
    time: '5:30 PM',
    date: '2024-07-28',
    price: 220
  },
  
  // Theater 2 showtimes
  {
    id: 'st2-1',
    theaterId: '2',
    movieId: '1',
    time: '9:30 AM',
    date: '2024-07-28',
    price: 200
  },
  {
    id: 'st2-2',
    theaterId: '2',
    movieId: '1',
    time: '12:45 PM',
    date: '2024-07-28',
    price: 230
  },
  {
    id: 'st2-3',
    theaterId: '2',
    movieId: '1',
    time: '4:00 PM',
    date: '2024-07-28',
    price: 250
  },
  {
    id: 'st2-4',
    theaterId: '2',
    movieId: '1',
    time: '7:15 PM',
    date: '2024-07-28',
    price: 280
  },
  {
    id: 'st2-5',
    theaterId: '2',
    movieId: '4',
    time: '10:15 AM',
    date: '2024-07-28',
    price: 200
  },
  {
    id: 'st2-6',
    theaterId: '2',
    movieId: '7',
    time: '2:30 PM',
    date: '2024-07-28',
    price: 180
  },
  
  // Theater 3 showtimes
  {
    id: 'st3-1',
    theaterId: '3',
    movieId: '2',
    time: '10:15 AM',
    date: '2024-07-28',
    price: 210
  },
  {
    id: 'st3-2',
    theaterId: '3',
    movieId: '2',
    time: '1:30 PM',
    date: '2024-07-28',
    price: 240
  },
  {
    id: 'st3-3',
    theaterId: '3',
    movieId: '2',
    time: '4:45 PM',
    date: '2024-07-28',
    price: 270
  },
  {
    id: 'st3-4',
    theaterId: '3',
    movieId: '2',
    time: '8:00 PM',
    date: '2024-07-28',
    price: 300
  },
  {
    id: 'st3-5',
    theaterId: '3',
    movieId: '3',
    time: '11:45 AM',
    date: '2024-07-28',
    price: 200
  },
  {
    id: 'st3-6',
    theaterId: '3',
    movieId: '5',
    time: '3:15 PM',
    date: '2024-07-28',
    price: 220
  },
  
  // Theater 4 showtimes
  {
    id: 'st4-1',
    theaterId: '4',
    movieId: '3',
    time: '9:15 AM',
    date: '2024-07-28',
    price: 190
  },
  {
    id: 'st4-2',
    theaterId: '4',
    movieId: '3',
    time: '12:30 PM',
    date: '2024-07-28',
    price: 220
  },
  {
    id: 'st4-3',
    theaterId: '4',
    movieId: '6',
    time: '3:45 PM',
    date: '2024-07-28',
    price: 250
  },
  {
    id: 'st4-4',
    theaterId: '4',
    movieId: '6',
    time: '7:00 PM',
    date: '2024-07-28',
    price: 280
  },
  {
    id: 'st4-5',
    theaterId: '4',
    movieId: '7',
    time: '10:30 AM',
    date: '2024-07-28',
    price: 180
  },
  {
    id: 'st4-6',
    theaterId: '4',
    movieId: '8',
    time: '2:00 PM',
    date: '2024-07-28',
    price: 200
  },
  
  // Theater 5 showtimes
  {
    id: 'st5-1',
    theaterId: '5',
    movieId: '4',
    time: '11:00 AM',
    date: '2024-07-28',
    price: 180
  },
  {
    id: 'st5-2',
    theaterId: '5',
    movieId: '4',
    time: '2:15 PM',
    date: '2024-07-28',
    price: 210
  },
  {
    id: 'st5-3',
    theaterId: '5',
    movieId: '5',
    time: '5:30 PM',
    date: '2024-07-28',
    price: 240
  },
  {
    id: 'st5-4',
    theaterId: '5',
    movieId: '5',
    time: '8:45 PM',
    date: '2024-07-28',
    price: 260
  },
  {
    id: 'st5-5',
    theaterId: '5',
    movieId: '8',
    time: '10:00 AM',
    date: '2024-07-28',
    price: 170
  },
  {
    id: 'st5-6',
    theaterId: '5',
    movieId: '8',
    time: '4:00 PM',
    date: '2024-07-28',
    price: 230
  }
];