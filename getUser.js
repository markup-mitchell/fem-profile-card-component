document.onload = function init()
{


  let profileCard = document.querySelector("profile-card");

  async function getUser()
  {
    const data = await fetch("https://randomuser.me/api");
    const user = await data.json();
    profileCard.setAttribute("name", "Fat Fuck");
    await console.log(user);
  }

  getUser().then((data) => profileCard.setAttribute("name", "Fat Fuck"));
};


