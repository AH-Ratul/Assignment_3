type Genre = "FICTION" | "NON-FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";

export interface IBook {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;

  isAvailabe(): boolean;
}
