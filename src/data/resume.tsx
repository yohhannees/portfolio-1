import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yohannes Getachew",
  initials: "YG",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineer| Project Manager | Blockchain Developer",
  summary:
    "A results-driven Software Engineer with a strong background in full-stack development, system architecture, blockchain solutions, and project management. Committed to building scalable, high-performance applications that enhance efficiency, security, and user experience. Skilled in solving complex technical challenges and delivering innovative, tailored software solutions that drive business success.",
  avatarUrl: "/jjj.png",
  skills: [
    // Programming Languages
    "C++",
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Java",
    // Frameworks and Libraries
    "Next.js",
    "Node.js",
    "React",
    "Nest.js",
    "GraphQL",
    "TailwindCSS",
    "redux",
    // Databases
    "Postgres",
    "sql",
    "Redis",
    "MongoDB",
    // Cloud Services
    "AWS",
    "Firebase",
    "AWS Lambda",
    // Other Tools
    "RabbitMQ",
    "Docker",
    // Other Tools
    "Solana",
    "Cardano",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yohannesgetachewerieso@gmail.com",
    tel: "+251938321124",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yohhannees",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yohannes-getachew-667a1b241/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yohhannees",
        icon: Icons.x,

        navbar: true,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wa.me/251938321124",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      npm: {
        name: "Send Email",
        url: "https://www.npmjs.com/~yohhannees",
        icon: Icons.npm,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Endubis Blockchain Solutions",
      href: "https://x.com/EndubisWallet",
      badges: [],
      location: "Ethiopia",
      title: "Project Manager - Backend Engineer",
      logoUrl: "/endubis.jpg",
      start: "May 2024",
      end: "Present",
      description:
        "As a Project Manager, I led the development of a wallet App and cryptocurrency System on the Cardano blockchain, managing a team of developers ",
    },
    {
      company: "SoundRig-United Kingdom(Remote)",
      badges: [],
      href: "https://soundrig.io",
      location: "United Kingdom-Remote",
      title: "Project Manager - Backend and Blockchain Developer ",
      logoUrl: "/soundrig.jpg",
      start: "June 2023",
      end: "Present",
      description:
        "Led a team of developers in creating a decentralized music app and an NFT minting system on the Cardano blockchain.",
    },
    {
      company: "Perago Information Systems ",
      href: "https://www.peragosystems.com/",
      badges: [],
      location: "Ethiopia",
      title: "Front End Developer",
      logoUrl: "/perago.webp",
      start: "June 2023",
      end: "July 2024",
      description:
        "Collaborated on E-Service Projects and Developed an Employee Management System",
    },
    {
      company: "Muyalogy",
      href: "https://www.muyalogy.com/",
      badges: [],
      location: "Ethiopia",
      title: "Software Engineer",
      logoUrl: "/muyalogy.jpg",
      start: "September 2023",
      end: " July 2024",
      description:
        "Designed, researched, and created case studies for apps, websites, and various systems, including mockups, wireframes, and prototypes.",
    },
    {
      company: "Dynamic Technologies",
      href: "https://dynamictechnologieset.com/",
      badges: [],
      location: "Ethiopia",
      title: "Backend Developer",
      logoUrl: "/dynamic.jpeg",
      start: "January 2023",
      end: "June 2024",
      description:
        "Developed shop management websites and betting platforms, including custom odds APIs and betting systems.",
    },
    {
      company: "Lela Tech",
      href: "https://www.lelatech.io/",
      badges: [],
      location: "Ethiopia",
      title: "Software Engineer",
      logoUrl: "/lela.jpeg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and Developed shop management websites and integrating APIs, including custom odds APIs and integrating systems.",
    },
    {
      company: "Creative Codes-Saudi Arabia(Remote)",
      href: "https://c-code.net/",
      badges: [],
      location: "Saudi Arabia - Remote",
      title: "System Design - Ux Ui Designer",
      logoUrl: "/cc.png",
      start: "February 2023",
      end: "Present",
      description:
        "Designed, researched, and created case studies for apps, websites, and various systems, including mockups, wireframes, and prototypes.",
    },
    {
      company: "Software Engineers Association",
      href: "https://aastu.software/",
      badges: [],
      location: "Saudi Arabia - Remote",
      title: "Project Manager",
      logoUrl: "/sea.jpg",
      start: "June 2023",
      end: "Present",
      description:
        "Led A development Team in creating a website for the Software Engineers Association and build apps for the association. and managed multiple projects for the association.",
    },
    {
      company: "GDG",
      href: "https://gdg.community.dev/",
      badges: [],
      location: "Ethiopia",
      title: "Project Manager-Mentor-Education Operator",
      logoUrl: "/gdgl.png",
      start: "June 2022",
      end: "Present",
      description:
        "Working as an Education Operator, Project Manager and Mentor at Google Developer Student Clubs, helping students by organizing hackathons and leading projects",
    },
  ],
  education: [
    {
      school: "Safari Academy",
      href: "https://safari-academy.com/",
      degree: "High School Diplom",
      logoUrl: "/safari.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "Addis Ababa Science and Technology University",
      href: "http://www.aastu.edu.et/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/aastu.jpg",
      start: "2020",
      end: "2025",
    },
    {
      school: "Georgia Institute of Technology",
      href: "https://www.gatech.edu/",
      degree: "Introduction to User Experience Design",
      logoUrl: "/gt.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Self Taught",
      href: "",
      degree: "Programming, Ux-Ui Design , Iot Design",
      logoUrl: "",
      start: "Birth",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Muyalogy",
      href: "https://www.muyalogy.com/",
      dates: "Sep 2023 - Dec 2024",
      active: true,
      description:
        "This project is a course-selling CMS platform specifically designed for Ethiopian customers and Amharic speakers. It offers localized solutions, including language support, region-specific payment integrations, and a user experience optimized for the target audience’s unique needs",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleOrm",
        "Node Js",
        "TailwindCSS",
        "Stripe",
        "Chapa",
        "Mux",
        "Mantine UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.muyalogy.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/muyalogy.png",
      video: "",
    },
    {
      title: "Endubis Wallet",
      href: "https://x.com/EndubisWallet",
      dates: "May 2024 - Present",
      active: true,
      description:
        "A crypto wallet app operating as a mini app within Telegram, integrating both the Cardano and TON blockchains. It utilizes the Blockfrost API and smart contracts on a Cardano node, alongside TON’s blockchain infrastructure, to facilitate secure and efficient cryptocurrency transactions. The development focuses on blockchain backend integration and project management, ensuring seamless functionality and an optimized user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Chapa",
        "Ton Sdk",
        "Blockfrost",
        "Cardano Sdk",
        "Mantine UI",
        "Aws",
      ],
      links: [
        {
          type: "Website",
          href: "https://x.com/EndubisWallet",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://t.me/EndubisWalletBot",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "/end.png",
      video: "",
    },
    {
      title: "Soundrig",
      href: "https://soundrig.io/",
      dates: "April 2023 - Present",
      active: true,
      description:
        "A music-selling platform that converts tracks into NFTs, enabling artists to easily mint and sell their music as digital assets. The platform is designed to provide a seamless user experience, integrating blockchain technology for secure ownership and transactions. Development involves full-stack implementation and project management to ensure a robust and scalable solution for musicians.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Node jS",
        "Mantine UI",
        "Magic UI",
        "Cardano Sdk",
        "Ton sdk",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://soundrig.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/soundrig.png",
      video: "",
    },
    {
      title: "Jiret",
      href: "https://www.jiret.com/",
      dates: "September 2023  - December 2024",
      active: true,
      description:
        "A SaaS platform similar to Thinkific and Teachable, enabling companies to sell courses and manage students efficiently. It offers features such as customizable landing pages and virtual classrooms, designed to create a personalized and interactive learning experience. The platform is built to provide seamless course management, student engagement, and scalability for businesses in the education sector.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleOrm",
        "TailwindCSS",
        "Mantine UI",
        "Chapa",
        "Cloudflare Workers",
        "Aws",
        "Mux Player",
        "Puck",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.jiret.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/jiret.png",
      video: "",
    },
    {
      title: "Unichain",
      href: "https://unichain-nu.vercel.app/",
      dates: "September 2023  - December 2024",
      active: true,
      description:
        "Unichain is a Web3 platform built on Solana that brings blockchain innovation to universities. Students can mint NFT-based ID credentials, earn tokens for campus engagement, and connect through a fast, secure network. Unichain redefines student identity, rewards, and community participation in the digital age.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleOrm",
        "TailwindCSS",
        "Mantine UI",
        "Cloudflare Workers",
        "Aws",
        "Web3js",
        "solana",
      ],
      links: [
        {
          type: "Website",
          href: "https://unichain-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/unichain.png",
      video: "",
    },
    {
      title: "StockSavy",
      href: "https://shop-management-five.vercel.app/",
      dates: "September 2024  - january 2024",
      active: true,
      description:
        "StockSavvy is a smart inventory management platform built for modern retailers, combining stock tracking, sales, and lending with powerful analytics. Currently tested and running in over 10 real shops across Addis Ababa, it’s proven to streamline operations and boost business growth. Make smarter, data-driven decisions with confidence.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleOrm",
        "TailwindCSS",
        "Mantine UI",
        "Cloudflare Workers",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://unichain-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stock.png",
      video: "",
    },
  ],
  hackathons: [],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
