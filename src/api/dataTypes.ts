
export type guid = string;

export type ReservationType = {
  id: guid; // Assuming guid is a string representation of a UUID
  guestId: string;
  fullName: string;
  gender: string;
  roomId: string;
  cleaning_fee: number;
  createdAt: string; // ISO 8601 datetime format
  checkIn: string; // ISO 8601 datetime format
  checkOut: string; // ISO 8601 datetime format
  bookingStatus: "pending" | "confirmed" | "cancelled" | "completed" | "awaiting payment" | "rescheduled";
}

export type EstateType = {
  id: guid;
  name: string;
  type: string;
  desc: string;
  madeIn: string;
  amenities: string[];
  buildingId: guid;
  reviews: guid;
  reservations: guid[];
  lastRenovations: string;
  numOfGuest: number;
  numOfRooms: number;
  numOfBaths: number;
  address: string;
  pricePerHour: number;
  pricePerDay: number;
  pricePerMonth: number;
  size: string;
  estateReviews?:EstateReviewType[];
  hostId: string;
};

export type EstateReviewType = {
  id: guid;
  generalRate : number;
  lastReview: string;
  reviews: guid[];
  estateId: string;
} 

export type ReviewType = {
  id: guid;
  createdAt: string;
  userId: string;
  username: string;
  message: string;
  estateReviewId: string;
  rate: {
    agent: number;
    enviroment: number;
    sanitation: number;
    comparism: number;
  };
};

export type BuildingType = {
  id: guid;
  name: string;
  address: string;
  geoAddress: string;
  estates: string[];
  desc: string;
  building_amenities: string[];
  constructedIn: string;
  createdAt: string;
  hostId: string;
}

export type UserType = {
  name:string;
  username: string;
  gender: "M"|"F";
  hashed: string;
  phoneNumber : string;
  role: "host"|"guest";
  email: string;
  lid:string | null ;
  cni:string|null;
  lidPic: string|null;
  cniPic:string|null;
  aboutMe:string|null;
  address: string;
  profilPic: string ;
  reasons: string;
  plan: string;
  criminalRecord : boolean;
  scammer: boolean;
  acceptedTerms: true;
  truth: boolean;
  verifiedEmail: boolean;
  verifiedLid : boolean;
  verifiedNid: boolean;
  hostProperties: string[];
}

export type Transactions = {

}