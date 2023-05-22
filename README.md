This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and developed using [Webflow](https://webflow.com) and [DevLink](https://webflow.com/devlink).

## Getting Started

To get started, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Live site

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## Backend

We created a light weight backend to serve up the content from Airtable. In order for this to work, you'll need to get a copy of the Airtable (ask Ben Parker), generate a [personal access token](https://airtable.com/developers/web/guides/personal-access-tokens) in Airtable (I used the scopes `data.records:read` and `schema.records.read`) and then in the root of your project create a `.env` file locally with the line:

```
JOBS_KEY=YOURPERSONALACCESSTOKENHERE
```

### API Endpoints

To view jobs, visit [http://localhost:3000/api/jobs](http://localhost:3000/api/jobs).

To view featured jobs, visit [http://localhost:3000/api/jobs/featured](http://localhost:3000/api/jobs/featured).

To view a single job, visit [http://localhost:3000/api/jobs/:id](http://localhost:3000/api/jobs/:id) and replace `:id` with the id for the job/Airtable record you want to view.

Caching has been turned off on these endpoints so that you can make changes in Airtable and see them instantly on the page.

You can add caching back by adding the following line to the API files:

```js
// Caches the results for 5 minutes
res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
```
