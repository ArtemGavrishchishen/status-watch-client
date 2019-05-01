const siteURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8080'
    : 'https://fierce-shelf-21173.herokuapp.com';

export default siteURL;
