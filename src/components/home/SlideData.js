// src/data/slideData.js

import bannerOne from "../../assets/banner.jpg";
import bannerTwo from "../../assets/banner-2.jpg";
import news1 from "../../assets/new1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";

export const latestNewsArr = [
  {
    id: 1,
    type: "Snacks",
    title: "Cursus at elit vestibulum urna pretius elis mauris",
    image: news1,
    date: "21 ",
    month: "Aug",
  },
  {
    id: 2,
    type: "Vegetables",
    title: "Condimantum nam enim bestMorbi odio solades",
    image: news2,
    date: "18 ",
    month: "Aug",
  },
  {
    id: 3,
    type: "Fruits",
    title: "Urna pretium elit mauris cursus at elit vestibulum",
    image: news3,
    date: "15 ",
    month: "Aug",
  },
  {
    id: 4, // Changed to ensure unique IDs
    type: "Snacks",
    title: "Cursus at elit vestibulum urna pretius elis mauris",
    image: news1,
    date: "3 ",
    month: "Aug",
  },
  {
    id: 5,
    type: "Vegetables",
    title: "Condimantum nam enim bestMorbi odio solades",
    image: news2,
    date: "28 ",
    month: "July",
  },
  {
    id: 6,
    type: "Fruits",
    title: "Urna pretium elit mauris cursus at elit vestibulum",
    image: news3,
    date: "11",
    month: "June",
  },
];

// Add more images as needed

export const organicSlides = [
  {
    id: 1,
    image: bannerOne,
    text: {
      p: "Organic Vegetables",
      span: "100%",
      h1: "The best Way to stuff your Wallet.",
      para: "A quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog",
    },
  },
  {
    id: 2,
    image: bannerTwo,
    text: {
      p: "Organic Fruits",
      span: "100%",
      h1: "Explore Fresh & Juicy fruits.",
      para: "A quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog",
    },
  },
];

// Example: Add more slide data for different carousels
export const anotherSlideSet = [
  {
    id: 1,
    image: bannerOne,
    text: {
      p: "Summer Collection",
      span: "New",
      h1: "Fresh Summer Outfits for You.",
      para: "Discover the latest summer fashion trends.",
    },
  },
  {
    id: 2,
    image: bannerTwo,
    text: {
      p: "Winter Collection",
      span: "New",
      h1: "Stay Warm with Our Winter Collection.",
      para: "Find cozy and stylish winter clothing.",
    },
  },
];

export default { organicSlides, anotherSlideSet,  latestNewsArr };
