import profileImg from "./public/profile.jpg";
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

Through my career I have dabbled with several avenues of programming including security, data science, and computer vision, though nothing has satisfied me quite like web development.

I was born in Mexico City and moved to the US when I was was 15. Because of this I am fluent in both Spanish and English.

Shortly after moving to the US, I studied computer science at the Rochester Institiute of Technology where I graduated with a 3.95 GPA

After school, I worked as a fullstack engineer at Target for 3 years where I primarily worked on supply chain API's and UI's. 

I then decided that enterprise life is not for me and jumped into the startup world where I've been enjoying my time working with small teams!`,
    skills: ["TypeScript", "NextJS", "Rust", "Solidity", "Solana", "Polygon"],
  },
  projects: [
    {
      name: "Decentralized Stack Overflow",
      img: stackOverflowImg,
      tools: ["NextJS", "TypeScript", "Solidity", "Polygon"],
      url: "https://pointer.gg",
      description: `In this project, I built a decentralized forum via Polygon that allows users to post and answer programming related questions.

Users can post a question for a small fee at which time they also offer a reward amount to incentivize answers.

Other users can pay a small fee to answer the question and make them eligible for the reward. Those answering must pay a small fee to prevent them from spamming questions with poor quality answers.

For 1 month answers to a question will be hidden, but interested parties can pay a small fee to see the answers and upvote them.

After this month has passed, the user with the most upvoted answer will receive the allocated reward.`,
    },
    {
      name: "Ad Slots Via Solana",
      img: solanaAdsImg,
      tools: ["NextJS", "TypeScript", "Rust", "Solana"],
      url: "https://pointer.gg",
      description: `In this project I built a smart contract and UI to allow users to purchase ad slots on my blog.

My dev/design blog brings in 1k unique hits per day and provides unique exposure to top developers and designers.

This gives users the opportunity to advertise to a highly educated and passionate community.

Ads can be scheduled through a calendar and purchased in the app, though must be approved before they will display, therefore it's advisable not to schedule an ad to run immediately after purchase.`,
    },
  ],
};
