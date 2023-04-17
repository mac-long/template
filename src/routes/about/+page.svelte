<script>
  export let data;

  const {users} = data;
</script>

<div class="container">
  <h1>About</h1>
  <p>
    This template uses a <b>SQLite3 Database</b>, this allows for super lean websites with minimal
    server space taken up, no need for a frontend and backend server it all works seamlessly in a
    nice sleek package.
  </p>
  <p>
    I'd recommend <b>backing up</b> your SQLite3 Database every once in a while though just to ensure
    you never lose your data 😁
  </p>
</div>

<div class="container">
  <h2>Users</h2>
  <p>
    Here you can see a collection of users pulled from the aforementioned database. Make sure to
    remove and recreate the <code>src/lib/data.db</code>
    file before starting work on the new application so that you can begin with a fresh database.
  </p>
  <ul>
    {#each users as user}
      <li class="flex items-center space-x-2">
        <h3 class="m-0">{user.name}</h3>
        <span>{user.bio}</span>
      </li>
    {/each}
  </ul>
</div>
