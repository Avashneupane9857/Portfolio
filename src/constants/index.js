export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const projects = [
  {
    name: "Rental Mania",
    description:
      "A web-based Airbnb-like platform connects hosts and guests for short-term rentals, featuring property listings, secure bookings, real-time availability, user dashboards, reviews, and integrated payments for seamless accommodation management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/rentalmania.png",
    source_code_link: "https://github.com/Avashneupane9857/Rental-Mania",
  },
  {
    name: "SajiloDev",
    description:
      "A web platform built with React TypeScript and Firebase for ordering technical services such as website creation, domain checks, hosting, and maintenance. It provides a user-friendly interface for managing these services efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/sajilodev.png",
    source_code_link: "https://github.com/Avashneupane9857/Sajilodev",
    website_link: "https://sajilodev.com",
    figma_link:
      "https://www.figma.com/design/4BHHJyE26ckdxfE9AKmeiE/sajiloDev?node-id=0-1&t=bhNXBxYVfsbA7XHU-1",
  },
  {
    name: "CryptoNest",
    description:
      "A web platform built with React TypeScript and Firebase for ordering technical services such as website creation, domain checks, hosting, and maintenance. It provides a user-friendly interface for managing these services efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },

      {
        name: "@solana/web3.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/crp.png",
    source_code_link: "https://github.com/Avashneupane9857/CryptoNest",
    website_link: "https://crypto-nest-eight.vercel.app/",
  },
  {
    name: "dApp",
    description:
      "A decentralized application built with React.js for managing SPL tokens on Solana. The dapp connects to Solana wallets, allowing users to view their token balances and execute secure token transfers with message signing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "@solana/web3.js",
        color: "blue-text-gradient",
      },
      {
        name: "@solana/wallet-adapter",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/dApp.png",
    source_code_link: "https://github.com/Avashneupane9857/dApp",
    website_link: "https://d-app-opal.vercel.app/",
  },
];
