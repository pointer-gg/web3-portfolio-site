import profileImg from "./public/profile.png";
import stackOverflowImg from "./public/decentralized-stackoverflow.webp";
import solanaAdsImg from "./public/solana-ads.jpg";

export const portfolio = {
  about: {
    firstName: "Kamila",
    lastName: "Mendoza",
    img: profileImg,
    bio: `Hi, I'm Kamila! 

I began my web development journey 8 years ago and for the last 2 have committed myself to learning web3 technologies.

I have considerable experience with solidity and rust and have developed dozens of smart contracts for ethereum/solana.

I also have considerable experience with nextjs, typescript, and postgres, which has become my stack of choice for most dapps.

I was born in Mexico City and moved to the US when I was was 15. Because of this I am fluent in both Spanish and English.

Shortly after moving to the US, I studied computer science at the Rochester Institiute of Technology where I graduated with a 3.95 GPA

After school, I worked as a fullstack engineer at Target for 3 years where I primarily worked on supply chain API's and UI's. 

I then decided that enterprise life is not for me and hopped into the world of startups where I've been enjoying my time working with small teams!`,
    skills: ["TypeScript", "NextJS", "Rust", "Solidity", "Solana", "Polygon"],
  },
  projects: [
    {
      name: "Decentralized Stack Overflow",
      img: stackOverflowImg,
      tools: ["NextJS", "TypeScript", "Solidity", "Ethereum"],
      link: "",
      description: ``,
    },
    {
      name: "Ad Slots Via Solana",
      img: solanaAdsImg,
      tools: ["NextJS", "TypeScript", "Rust", "Solana"],
      link: "",
      description: `In this project I built a smart contract and UI to allow users to purchase ad slots on my blog.

My dev/design blog brings in 1k unique hits per day and provides unique exposure to top developers and designers.

This gives users the opportunity to advertise to a highly educated and passionate community.

Ads can be scheduled through a calendar and purchased in the app, though must be approved before they will display, therefore it's advisable not to schedule an ad to run immediately.
      `,
    },
  ],
};
