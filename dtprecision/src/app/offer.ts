export interface Offer {
  title: string;
  userID: string;
  id: string;
  message: string;
  price: string;
  images: object;
  part_fits: Array<string>;
  condition: string;
  location: string;
}
