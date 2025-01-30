import images from "./images";

const projects = [
  {
    title: "Rav-Gym app",
    image: images.gymApp,
    link: "https://ravtech-gymapp.netlify.app",
  },
  {
    title: "Gericht Restaurant",
    image: images.gericht,
    link: "https://rav-restaurant.netlify.app/",
  },
  {
    title: "Mellow Crest School",
    image: images.mellowCrest,
    link: "https://mellowcrestschools.co.ke/",
  },
  {
    title: "Prescripto (Still in Development)",
    image: images.prescripto,
    link: "https://prescripto254.netlify.app/",
  },
  {
    title: "Cultures Shop (Still in Development ie responsiveness)",
    image: images.cultureShop,
    link: "https://cultureshop254.netlify.app/",
  },
];

const graphics = [
  {
    image: images.rollUp,
  },
  {
    image: images.pizzaSm,
  },
  {
    image: images.cheffSm,
  },
  {
    image: images.lexyCare,
  },
  {
    image: images.logoMp,
  },
  {
    image: images.poster,
  },
  {
    image: images.forexIg,
  },
  {
    image: images.vplusIg,
  },
  {
    image: images.hoodie,
  },
  {
    image: images.toteBag,
  },
  {
    image: images.magazine,
  },
  {
    image: images.businessCard,
  },
];

const pricing = [
  {
    title: "Basic Package",
    subTitle: "Best for Small Businesses",
    pay: "Ksh. 25,000",
    service: [
      "Upto 10 Web Pages",
      "Online Contact Form",
      "Optimized Graphics",
      "Social Media Integration",
      "Custom Design",
      "Front Page Slideshow",
      "1 Month Support",
      "1 Year Domain",
      "Free 1 Year Hosting",
    ],
  },
  {
    title: "Standard Package",
    subTitle: "Best for Standard Company",
    pay: "Ksh. 38,500",
    service: [
      "Content Management Syst",
      "User Login/Registration",
      "Animations",
      "Dynamic Content",
      "Administration Panel",
      "Basic Package Features",
      "1 Month Support",
      "Free 1 Year Domain",
      "Free 1 Year Hosting",
    ],
  },
  {
    title: "Gold Package",
    subTitle: "Best for Online Store",
    pay: "Ksh. 50,500",
    service: [
      "Shopping Cart",
      "Product Catalogue",
      "Online Payment Integration",
      "User Login Registration",
      "Custom Design",
      "Administration Panel",
      "Standard Features",
      "Free 1 Year Domain",
      " Free 1 Year Hosting",
    ],
  },
  {
    title: "Corporate Package",
    subTitle: "Best for Corporates",
    pay: "Ksh. 90,000",
    service: [
      "Content Management Syst.",
      "Dynamic Content",
      "Online Payment, Bookings",
      "Online Chat System",
      "Administration Panel",
      "Features in other Packages",
      "3 Month Support",
      "Free 1 Year Domain",
      "Free 1 Year Hosting",
    ],
  },
];

export default { pricing, projects, graphics };
