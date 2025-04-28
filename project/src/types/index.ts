export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  genre: string[];
  language: string[];
  duration: string;
  releaseDate: string;
  certificate: string;
  description?: string;
  featured?: boolean;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  city: string;
}

export interface Showtime {
  id: string;
  theaterId: string;
  movieId: string;
  time: string;
  date: string;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface City {
  id: string;
  name: string;
}