# SvelteKit Template

## Tools Used

- SvelteKit
- TailwindCSS
- SQLite3

## Routes

By default the template includes routes for `Home`, `About`, `Get Started` and an API route that returns `{message: "Hello World}`.

## Database

There is an example database file setup to be used with `better-sqlite3`, you can see an example of fetching users from the database in `src/lib/server` and that function is utlised on the `routes/+page.svelte`.

Make sure to remove the example `src/lib/data.db` file before starting work on your amazing new project! This will ensure you have a fresh database to work with. You can also remove the `sqlite3` integration entirely if you don't need a database or if you'd prefer to hook it up to a seperate database or api using whichever method you would normally.

## Deploying

If you are utilising the `SQLite3` method then your app must be hosted on a server that has the file system availible, I'd recommend [Render](https://render.com).

If you are utilising a JAMStack method with a serverless database or headless cms, I would recommend [Vercel](https://vercel.com).

## Notes

In terms of efficiency my plan was to use the `SQLite3` database as a super light database addition to the frontend application, however I realised that due to `SQLite3` requiring access to the file system it would be required hosting to be on a container/server.

This might not seem like much of an issue except for with JAMStack and the utilisation of cloud functions, the servers aren't required to be up all the time and can simply host a lightweight static recreation of the site and functions involved. On the opposite hand with `SQLite3` the server is always running and on this would eat compute time in the long term. There may be a way to configure this on certain hosting providers however the risk of cold starts is one to consider. I'll continue experimenting with the `SQLite3` database as an option.
