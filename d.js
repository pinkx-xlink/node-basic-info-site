const authors = [
  { id: 1, name: "Chamomile" },
  { id: 2, name: "Donut" },
  { id: 3, name: "Shaiyan" },
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };