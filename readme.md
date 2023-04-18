# SvelteKit Template

## Tools Used

- TailwindCSS
- ESLint
- Prettier
- SQLite3

## Routes

By default the template includes routes for `Home`, `About`, `Get Started` and an API route that returns `{message: "Hello World}`.

## Database

There is an example database file setup to be used with `better-sqlite3`, you can see an example of fetching users from the database in `src/lib/server` and that function is utlised on the `routes/+page.svelte`.

Make sure to remove the example `src/lib/data.db` file before starting work on your amazing new project! This will ensure you have a fresh database to work with. You can also remove the `sqlite3` integration entirely if you don't need a database or if you'd prefer to hook it up to a seperate database or api using whichever method you would normally.
