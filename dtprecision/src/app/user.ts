interface UserAddress {
  country: string;
  state: string;
  city: string;
  streetName: string;
  apartmentNumber: number;
  postalCode: number;
  buildingNumber: number;
}
interface Image {
  url: string;
}
export interface User {
  id: string;
  name: string;
  username: string;
  image: Image;
  email: string;
  password: string;
  address: UserAddress;
}
