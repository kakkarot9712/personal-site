const data = [
  {
    title: 'Simple Redis Server (In Progress)',
    subtitle: 'Simple Redis Server Created in Go Using CodeCrafter Platform.',
    image: '/images/projects/redisgo.jpeg',
    link: 'https://github.com/kakkarot9712/simple_redis_go',
    date: '2024-09-01',
    desc:
      'This is a Redis clone with support for key-value data storage, made using Go, '
      + 'Implemented Redis Serialisation Protocol (RESP) to encode and decode messages, ',
  },
  {
    title: 'Simple Git CLI',
    subtitle: 'Simple Git CLI Created in Go Using CodeCrafter Platform.',
    image: '/images/projects/gitgo.jpeg',
    link: 'https://github.com/kakkarot9712/simple-git-go',
    date: '2024-09-01',
    desc:
      'This is a simplified version of Git which I built to understand version control system mechanics, '
      + 'uses Git’s internal data structures like Blob Objects, Tree Objects, Commit Objects, '
      + 'Has support of basic command like init, cat-file, hash-object, ls-tree, write-tree, commit-tree and clone. ',
  },
  {
    title: 'Simple DNS Server',
    subtitle: 'Simple DNS Server Created in Go Using CodeCrafter Platform.',
    image: '/images/projects/dnsgo.jpeg',
    link: 'https://github.com/kakkarot9712/simple-dns-server-go',
    date: '2024-09-01',
    desc:
      'This is a fully functioning baisc DNS server made from scratch as part of CodeCrafters "Build Your Own X" series, '
      + 'Has a core DNS functionalities including request parsing, record handling, and response generation and request forwarding, '
      + 'Used Go`s networking libraries to manage UDP connections',
  },
  {
    title: 'Expense Tracker Bot',
    subtitle: 'Basic Expense tracker bot in telegra,.',
    image: '/images/projects/bot.gif',
    link: 'https://github.com/kakkarot9712/personal_tgbot',
    date: '2024-03-15',
    desc:
      'this bot is made using Teloxide Library written in Rust, '
      + 'Uses Database to store current expenses, ',
  },
  {
    title: 'Portfolio',
    subtitle: 'My alternative portfolio website made using Next.js.',
    image: '/images/projects/portfolio.png',
    link: 'https://portfolio.vikalpg.in',
    date: '2023-01-01',
    desc:
      'Portfolio site made using Next.js, '
      + 'Uses Database to fetch Skills, '
      + 'Mobile Responsive Site '
      + 'No 3rd Party CSS Libraries are used. '
      + 'This website shows my languages, tools and contact details',
  },
  {
    title: 'The Pig Game',
    subtitle: 'Basic Pig game made using React.js',
    link: 'https://the-pig-game-theta.vercel.app',
    image: '/images/projects/the-pig-game.png',
    date: '2022-12-01',
    desc:
      'Pig game lets 2 players play with each other. '
      + 'Fully SPA App made using React.js, '
      + 'This Pig game is played using 1 Dice. '
      + 'player whoever first scores 100 will be declared winner.',
  },
  {
    title: 'Expense Tracker',
    subtitle: 'A Basic Expense tracker with graph made in Angular',
    link: 'https://id11297.web.app/home',
    image: '/images/projects/expense-tracker.png',
    date: '2022-11-01',
    desc:
      'Track your expenses with beautiful UI. '
      + 'Displays Graph so that you can compare expenses with ease. '
      + 'Graph displays monthly breakdown for all expenses user added.',
  },
  {
    title: 'Minimal Banking UI Demo',
    subtitle: 'Simple website made using React.js which displays demo accounts',
    image: '/images/projects/minimal-bank.png',
    link: 'https://minimal-bank-app-demo.vercel.app',
    date: '2022-11-01',
    desc:
      'This is just demo of Banking App, no real interaction is implimented. '
      + 'made using React.js. '
      + 'This website allows users to login into 2 demo accounts and lets user perform some action like transferring money to other account',

  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'Tic tac toe game made using Angular and Bootstrap',
    image: '/images/projects/tic-tac-toe.png',
    link: 'https://webappscollection.web.app/tic-tac-toe',
    date: '2022-10-01',
    desc:
      'Simple tic tac toe game. '
      + 'This website is made using Angular and bootstrap 5. ',
  },
  // {
  //   title: 'Todo App',
  //   link: 'https://todoapp-ee61f.web.app/todo',
  // },
  // {
  //   title: 'Tic Tac Toe',
  //   link: 'https://webappscollection.web.app/tic-tac-toe',
  // }
];

export default data;
