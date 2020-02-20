export interface Seating {
  availableSeats: number;
  roomName: string
  rowCount: number;
  colCount: number;
  seats: Seat[][]
}

export interface Seat {
  name: string;
  row: number;
  col: number
  isAvailable: boolean;
}