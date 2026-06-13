export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  tag: string;
  color: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 11,
    brand: "Puma",
    name: "Transport",
    price: 3299,
    tag: "New Drop",
    color: "white",
    image: "/products/puma-transport.png",
  },
  {
    id: 12,
    brand: "Puma",
    name: "RS-X Triple Core",
    price: 4599,
    tag: "Hot",
    color: "black",
    image: "/products/puma-rs-x-triple-core.png",
  },
  {
    id: 7,
    brand: "Puma",
    name: "Softride Volt",
    price: 3499,
    tag: "Hot",
    color: "volt",
    image: "/products/puma-softride-volt.png",
  },
  {
    id: 8,
    brand: "U.S. Polo Assn.",
    name: "Retro Jogger",
    price: 2999,
    tag: "Classic",
    color: "tan",
    image: "/products/us-polo-retro.png",
  },
  {
    id: 9,
    brand: "Puma",
    name: "Mirage Tech",
    price: 4199,
    tag: "New Drop",
    color: "black",
    image: "/products/puma-mirage-tech.png",
  },
  {
    id: 10,
    brand: "Puma",
    name: "Navy Runner",
    price: 3199,
    tag: "Bestseller",
    color: "navy",
    image: "/products/puma-navy.png",
  },
  {
    id: 1,
    brand: "Nike",
    name: "Air Max Pulse",
    price: 2499,
    tag: "Bestseller",
    color: "white",
    image: "/products/air-max-pulse.svg",
  },
  {
    id: 2,
    brand: "Jordan",
    name: "Air Jordan 1 Retro",
    price: 3299,
    tag: "Limited",
    color: "black",
    image: "/products/air-jordan-1.svg",
  },
  {
    id: 3,
    brand: "Adidas",
    name: "Ultraboost 22",
    price: 2799,
    tag: "New Drop",
    color: "navy",
    image: "/products/ultraboost-22.svg",
  },
  {
    id: 4,
    brand: "Nike",
    name: "Dunk Low OG",
    price: 2199,
    tag: "Hot",
    color: "red",
    image: "/products/dunk-low.svg",
  },
  {
    id: 5,
    brand: "Puma",
    name: "RS-X Runner",
    price: 1899,
    tag: "Value",
    color: "green",
    image: "/products/rs-x-runner.svg",
  },
  {
    id: 6,
    brand: "New Balance",
    name: "550 Cream",
    price: 2599,
    tag: "Classic",
    color: "cream",
    image: "/products/nb-550.svg",
  },
];

export function formatPrice(price: number): string {
  return `From ₹${price.toLocaleString("en-IN")}`;
}
