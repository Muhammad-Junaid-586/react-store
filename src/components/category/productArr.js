import lemon from "../../assets/lemon.jpg";
import fruit2 from "../../assets/fruit2.jpg";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";
import snack2 from "../../assets/snack2.jpg";
import snack3 from "../../assets/snack3.jpg";
import bakery from "../../assets/bakery.jpg";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";



let  productsArr = [
  {
    id: 1,
    quantity:1,
    name: "Snack",
    image: snack,
    text: "Best snack with hazelnut pack 200gm",
    newPrice: 145.05,
    oldPrice: 150.05,
    type: "Snacks",
    rate: 4.5,
  },
  {
    id: 2,
    quantity:1,
    name: "Apple",
    image: fruit,
    text: "Best Organic apple of 1kg Simla marming",
    newPrice: 125.5,
    oldPrice: 128.3,
    type: "Fruits",
    rate: 4.0,
  },
  {
    id: 3,
    quantity:1,
    name: "Snack",
    image: snack2,
    text: "Fresh Organic Villa farm Lemon 500gm pack",
    newPrice: 120,
    oldPrice: 123,
    type: "Snacks",
    rate: 4.7,
  },
  {
    id: 4,
    quantity:1,
    name: "Lemon",
    image: lemon,
    text: "Fresh Organic Villa farm Lemon 500gm pack",
    newPrice: 120,
    oldPrice: 123,
    type: "Vegetable",
    rate: 3.0,
  },
  {
    id: 5,
    quantity:1,
    name: "Fruit",
    image: fruit2,
    text: "Fresh Organic Villa farm Lemon 500gm pack",
    newPrice: 120,
    oldPrice: 123,
    type: "Fruits",
    rate: 4.2,
  },
  {
    id: 6,
    quantity:1,
    name: "Bakery",
    image: bakery,
    text: "Delicious White baked and fresh toast",
    newPrice: 20,
    oldPrice: 23,
    type: "Bakery",
    rate: 3.0,
  },

  {
    id: 7,
    quantity:1,
    name: "Snack",
    image: snack3,
    text: "Fresh Organic Villa farm Lemon 500gm pack",
    newPrice: 120,
    oldPrice: 123,
    type: "Snacks",
    rate: 4.7,
  },

  {
    id: 8,
    quantity:1,
    name: "Fruit",
    image: fruit2,
    text: "Fresh Organic Villa farm Lemon 500gm pack",
    newPrice: 120,
    oldPrice: 123,
    type: "Fruits",
    rate: 4.2,
  },
  {
    id: 9,
    quantity:1,
    name: "Bakery",
    image: bakery,
    text: "Delicious White baked and fresh toast",
    newPrice: 20,
    oldPrice: 23,
    type: "Bakery",
    rate: 3.0,
  },
];

export default productsArr;