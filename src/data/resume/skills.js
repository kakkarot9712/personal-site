const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Render',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Vercel',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Golang',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Rust',
    competency: 2,
    category: ['Languages', 'Blockchain'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Languages', 'Blockchain'],
  },
  {
    title: 'Docker/Docker Compose',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Azure Serverless Functions',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'LangChain',
    competency: 3,
    category: ['Tools', 'Web Development', 'ML Engineering'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Android App Development', 'Javascript'],
  },
  {
    title: 'Digital Ocean Cloud Compute',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Vultr Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Linode Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  // {
  //   title: 'Numpy',
  //   competency: 3,
  //   category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Tensorflow + Keras',
  //   competency: 3,
  //   category: ['ML Engineering', 'Python'],
  // },
  // {
  //   title: 'PyTorch',
  //   competency: 3,
  //   category: ['ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Jupyter',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  // {
  //   title: 'Ruby',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Ruby on Rails',
  //   competency: 3,
  //   category: ['Web Development', 'Languages'],
  // },
  {
    title: 'C/C++',
    competency: 1,
    category: ['Languages'],
  },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  // {
  //   title: 'Pandas',
  //   competency: 5,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Matplotlib',
  //   competency: 3,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Scikit-Learn',
  //   competency: 4,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'ML Engineering'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#64cb7b',
  '#37b1f5',
  '#3896e2',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#40494e',
  '#6968b3',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
