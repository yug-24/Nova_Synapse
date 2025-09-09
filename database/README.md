# Database

This folder is a placeholder for your database layer.

- For a quick prototype, you can use JSON files or an in-memory store in the backend.
- For production, choose a database (MongoDB, PostgreSQL, MySQL, etc.).

Environment variables expected (examples):

- `DATABASE_URL` for Prisma/ORM
- `MONGO_URI` for MongoDB

Integration points:

- Backend endpoints in `backend/src/server.ts` can import a data service from `database/` when you implement it.


