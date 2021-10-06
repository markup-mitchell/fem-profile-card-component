

async function getUser()
{
  const users = await fetch("https://randomuser.me/api");
  return users.json();
}

getUser().then((data) => console.table(data));