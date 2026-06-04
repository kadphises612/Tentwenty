# Weekly Timesheet Application

A Next.js application for managing and tracking weekly employee timesheets.

## Setup Instructions

### Prerequisites

- Node.js 20+
- npm or yarn
- MongoDB

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables

Create a `.env.local` file:

```env
MONGODB_URI=<your-mongodb-connection-string>
AUTH_SECRET=<your-auth-secret>
AUTH_URL=http://localhost:3000
```

4. Run the development server

```bash
npm run dev
```

5. Open the application

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## Frameworks & Libraries Used

### Core

- Next.js 15 (App Router)
- React
- TypeScript

### Authentication

- NextAuth.js v5

### Database

- MongoDB
- Mongoose

### UI

- Tailwind CSS
- Lucide React

### Forms & Date Handling

- react-date-range
- date-fns
- sonner

---

## Assumptions & Notes

- Authentication is required before accessing protected pages.
- API routes are protected using server-side session validation.
- MongoDB is assumed to be accessible through the provided connection string.
- Week data is generated based on start and end date ranges supplied through query parameters.
- The application uses server components where possible for data fetching and performance.

---
