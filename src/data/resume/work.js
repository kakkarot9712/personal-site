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
    name: 'InheritX Solutions Pvt. Ltd.',
    position: 'Software Engineer',
    url: 'https://www.inheritx.com/',
    startDate: '2025-01-01',
  },
  {
    name: 'Clementius LLP',
    position: 'Software Engineer',
    url: 'https://clementius.com',
    startDate: '2023-01-01',
    endDate: '2025-01-01',
  },
];

export default work;
