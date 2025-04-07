
export type Reservation = {
    reservation_id: string; // Assuming guid is a string representation of a UUID
    guest: {
      full_name: string;
      gender: string;
    };
    room: {
      room_id: string;
      name: string;
      room_price: string; // Consider using number for calculations
      room_type: string;
    };
    cleaning_fee: number;
    createdAt: string; // ISO 8601 datetime format
    check_in: string; // ISO 8601 datetime format
    check_out: string; // ISO 8601 datetime format
    booking_status: "pending" | "confirmed" | "cancelled" | "completed" | "awaiting payment" | "rescheduled";
}