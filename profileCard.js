async function getUser()
{
  const data = await fetch("https://randomuser.me/api");
  const user = await data.json();
  return user.results[0];
}

function newUser()
{
  getUser().then((user) =>
  {
    profileName.innerText = `${ user.name.first } ${ user.name.last }`;
    profileAge.innerText = user.dob.age;
    profileLocation.innerText = user.location.city;
    document.querySelector("profile-card").setAttribute("imagePath", user.picture.large);
  });
}

function randomValue(min, max)
{
  return Math.floor((Math.random() * max) + min);
}

const template = document.createElement("template");
template.innerHTML = `
  <style>
  h1 {
    font-size: unset;
    color: var(--color__black);
    text-align: center;
    margin: 0;
    padding: 3.5rem;
  }
  .card {
    font-family: var(--font);
    display: block;
    width: 100%;
    padding-top: 17.5rem;
    background-color: var(--color__white);
    background-image: url('./images/bg-pattern-card.svg');
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: var(--tw-shadow);
  }

  .user__profile {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--text__large);
    background-color: var(--color__white);
    border-bottom: 1px solid var(--color__grey--light);
  }

  .user__image {
    border-radius: 50%;
    outline: solid 0.6rem white;
    outline-offset: -1px;
    margin-top: -6.5rem;
    max-width: 96px;
  }

  .user__name {
    font-size: var(--text__large);
  }

  .user__age {
    color: var(--color__grey--dark);
    font-weight: 500;
    margin-left: 0.6rem;
  }

  .user__location {
    display: block;
    color: var(--color__grey--dark);
    font-size: var(--text__medium);
    font-weight: 500;
    margin-top: 1rem;
  }

  .user__data {
    padding: var(--card-padding);
    display: flex;
    justify-content: center;
    background-color: var(--color__white);
    gap: 5rem;
  }

  .user__data-item {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .data-item__count {
    font-size: var(--text__large);
    color: var(--color__black);
    font-weight: 700;
    margin: 0;
  }

  .data-item__type {
    font-size: var(--text__small);
    color: var(--color__grey--dark);
    letter-spacing: 2px;
    margin-top: 0.75rem
  }
  </style>
  <article class="card">
    <section class="user__profile">
      <img class="user__image" src="./images/image-victor.jpg" alt="" />
        <h1>
          <span class="user__name">
          <slot name="name">name</slot>
          </span>
          <span class="user__age">
          <slot name="age">age</slot>
          </span>
          <span class="user__location">
          <slot name="location">London</slot>
          </span>
        </h1>
    </section>
    <div class="user__data">
      <section class="user__data-item">
      <h2 class="data-item__type">Followers</h2>
        <p class="data-item__count js-followers">80K</p>
      </section>
      <section class="user__data-item">
      <h2 class="data-item__type">Likes</h2>
        <p class="data-item__count js-likes">803K </p>
      </section>
      <section class="user__data-item">
      <h2 class="data-item__type">Photos</h2>
        <p class="data-item__count js-photos">1.4K </p>
      </section>
    </div>
  </article>
`;

class ProfileCard extends HTMLElement
{
  static get observedAttributes() { return ["imagepath"]; };
  constructor()
  {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback()
  {
    setTimeout(() => newUser(), 5000);
    setTimeout(() => newUser(), 10000);
    setTimeout(() => newUser(), 15000);
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    this.shadowRoot.querySelector(".user__image").src = newValue;
    this.shadowRoot.querySelector(".js-followers").innerText = `${ randomValue(0, 102) }K`;
    this.shadowRoot.querySelector(".js-likes").innerText = `${ randomValue(0, 999) }K`;
    this.shadowRoot.querySelector(".js-photos").innerText = `${ (randomValue(1000, 10000) / 1000).toFixed(1) }K`;

  }

}

window.customElements.define("profile-card", ProfileCard);
;
