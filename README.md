# AssessmentCarDealerApp

Front-end JS engineer test assessment - the Car Dealer App

This project is a car search system that allows users to select the vehicle's year and make and view available models based on a public API provided by the NHTSA (National Highway Traffic Safety Administration).

## Features

- **Car Search:** Users can select the car make and year.
- **Dynamic Filtering:** The application dynamically loads available car makes and model years.
- **Results Page Navigation:** After selecting the make and year, users can view available vehicle models.

## Technologies Used

- **Next.js:** Framework for building React applications with server-side rendering.
- **Tailwind CSS:** Used for styling the user interface.
- **Axios:** To make HTTP requests to external APIs.
- **NHTSA API:** To fetch vehicle makes and models.

## Running the Application

### Prerequisites

Make sure you have the following installed:

- **Node.js** (recommended version 14 or above)
- **npm** (package manager)

### Install Dependencies

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/repository-name.git
cd repository-name
npm install
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
