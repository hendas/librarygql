const resolvers = {
  Book: {
    author: (book, args, { db }) => db.getAuthorById(book.authorId),
    cover: (book) => ({ path: book.coverPath }),
  },
  Author: {
    books: (author, args, { db }) => author.bookIds.map(db.getBookById),
    photo: (author) => ({ path: author.photoPath }),
  },

  Avatar: {
    image: (avatar) => ({ path: avatar.imagePath }),
  },

  Image: {
    url: (image, args, context) => `${context.assetsBaseUrl}${image.path}`,
  },

  Query: {
    users: (rootValue, args, { db }) => db.getAllUsers(),
    books: (rootValue, args, { db }) => db.getAllBooks(),
    authors: (rootValue, args, { db }) => db.getAllAuthors(),
    randomAuthor: (rootValue, args, { db }) => db.getRandomAuthor(),
    randomBook: (rootValue, args, { db }) => db.getRandomBook(),
    randomUser: (rootValue, args, { db }) => db.getRandomUser(),
  },
};

module.exports = resolvers;
