async function getUser() {
  const data = await fetch( "https://randomuser.me/api" );
  const user = await data.json();
  console.log( user.results[0] );
  return user.results[0];
}

function newUser() {

  getUser().then( ( user ) => {
    profileName.innerText = `${user.name.first} ${user.name.last}`;
    profileAge.innerText = user.dob.age;
    profileLocation.innerText = user.location.city;
    document.querySelector( "profile-card" ).setAttribute( "imagePath", user.picture.large );
  } );
}