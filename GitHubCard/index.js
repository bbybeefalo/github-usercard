
import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const thing = document.querySelector(".cards");

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'bbybeefalo'];

for (let i = 0; i < followersArray.length; i++) {
  moreCards(followersArray[i]);
}

function moreCards(username) {
axios.get(`https://api.github.com/users/${username}`)
.then(res => {
  const card = cardPooperOuter(res.data);
  thing.appendChild(card);
})
.catch(err => {
  console.error(err);
})
.finally(() => console.log("yeehaw"));
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardPooperOuter (obj) {
  const cardHolder = document.createElement("div");
  const cardImg = document.createElement("img");
  const userInfo = document.createElement("div");
  const realName = document.createElement("h3");
  const gitName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const pageLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  cardHolder.className = "card";
  userInfo.className = "card-info";
  realName.className = "name";
  gitName.className = "username";

  cardHolder.appendChild(cardImg);
  cardHolder.appendChild(userInfo);
  userInfo.appendChild(realName);
  userInfo.appendChild(gitName);
  userInfo.appendChild(location);
  userInfo.appendChild(profile);
  profile.appendChild(pageLink);
  userInfo.appendChild(followers);
  userInfo.appendChild(following);
  userInfo.appendChild(bio);

  cardImg.src = obj.avatar_url;
  realName.textContent = obj.name;
  gitName.textContent = obj.login;
  location.textContent = obj.location;
  profile.textContent = "Profile:"
  pageLink.href = obj.html_url;
  followers.textContent = obj.followers;
  following.textContent= obj.following;
  bio.textContent = obj.bio;

  return cardHolder

}

console.log(cardPooperOuter());



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
