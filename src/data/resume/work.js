/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Clementius LLP',
    position: 'Software Engineer',
    url: 'https://clementius.com',
    startDate: '2023-01-01',
    highlights: [
      'Solely Developed a real-time car diagnostics app using React Native that reads and displays speed and RPM in real-time, utilizing a Bluetooth OBD II adapter',
      'Created LangChain-based document chat app for contextua question-answering.',
      'Published client APIs as SaaS on Azure Marketplace using Azure Serverless functions and Subscription Fullfillment APIs.',
      'Actively participated in Hyperledger Besu private blockchain implementation with QBFT consensus.',
      'eveloped POC to impliment Bitcoin Inscription Flow using ReactJS, NodeJS and ord library.',
    ],
  },
];

export default work;
