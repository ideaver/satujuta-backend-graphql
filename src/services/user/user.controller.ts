const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const xprisma = prisma.$extends({
  query: {
    post: {
      async findMany({ args, query }) {
        const user = getCurrentUser(); // Replace this with your user retrieval logic
        if (!user) {
          // No user, don't show the content field
          args.select = {
            id: true,
            title: true,
          };
        } else if (user.role === 'admin') {
          // Admin user, show all fields
          args.select = {
            ...args.select,
            content: true,
          };
        } else {
          // Regular user, show only the title field
          args.select = {
            id: true,
            title: true,
          };
        }

        return query(args);
      },
    },
  },
});

// Replace this with your actual logic to get the current user based on the authentication system used in your app
function getCurrentUser() {
  // Return a user object with a role property representing the user's role
  // e.g., { id: 1, role: 'admin' } or { id: 2, role: 'user' }
  return { id: 2, role: 'user' };
}

// Usage example
(async () => {
  // Assuming you have a post with id=1 in the database
  const posts = await xprisma.post.findMany();

  console.log(posts);
})();
