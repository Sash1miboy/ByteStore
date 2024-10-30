export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
  images: string[];
  category: string;
  socketType?: string;
  memoryType?: "DDR4" | "DDR5";
  estPower?: number;
}
