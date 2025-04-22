
export type Reservation = {
  reservation_id: string; // Assuming guid is a string representation of a UUID
  guest: {
    guest_id: string;
    full_name: string;
    gender: string;
  };
  room_id: string;
  cleaning_fee: number;
  createdAt: string; // ISO 8601 datetime format
  check_in: string; // ISO 8601 datetime format
  check_out: string; // ISO 8601 datetime format
  booking_status: "pending" | "confirmed" | "cancelled" | "completed" | "awaiting payment" | "rescheduled";
}

export type guid = string;

export type Estate = {
  id: guid;
  type: string;
  desc: string;
  madeIn: string;
  amenities: string[];
  buildingId: guid;
  reviews: guid[];
  reservations: guid[];
  lastRenovations: string;
  numOfGuest: number;
  numOfRooms: number;
  numOfBaths: number;
  address: string;
  pricePerHour: number;
  pricePerDay: number;
  pricePerMonth: number;
};

export type Review = {
  id: guid;
  createdAt: string;
  username: string;
  message: string;
  rate: {
    agent: number;
    enviroment: number;
    sanitation: number;
    comparism: number;
  };
};

export type Building = {
  id: guid;
  name: string;
  address: string;
  geoAddress: string;
  estates: string[];
  desc: string;
  building_amenities: string[];
  constructedIn: string;
  createdAt: string;
}
