import openFOI from './openFOI';

const allPortfolioPosts = [openFOI];

const sortedPortfolioPosts = [...allPortfolioPosts].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const getRecentPortfolioPosts = (count = 3) => {
  return sortedPortfolioPosts.slice(0, count);
};

export const getPortfolioPostById = (id) => {
  return sortedPortfolioPosts.find(post => post.id === id);
};

export default sortedPortfolioPosts;
