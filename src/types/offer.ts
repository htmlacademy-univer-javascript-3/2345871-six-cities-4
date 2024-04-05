export type User = {
  avatar: string;
  name: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  images: string;
  title: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  price: number;
  owner: User;
  isFavorite: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
