const template = document.createElement("template");
template.innerHTML = `
  <style>
  h1 {
    font-size: unset;
    color: var(--color__black);
    text-align: center;
    margin: 0;
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

  .user__profile figcaption {
    padding: 3.5rem;
  }

  .user__image {
    border-radius: 50%;
    outline: solid 0.6rem white;
    outline-offset: -1px;
    margin-top: -6.5rem;
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
    flex-direction: column;
    align-items: center;
  }

  .data-item__count {
    font-size: var(--text__large);
    font-weight: 700;
  }

  .data-item__type {
    font-size: var(--text__small);
    color: var(--color__grey--dark);
    letter-spacing: 2px;
    margin-top: 0.75rem
  }
  </style>
  <article class="card">
    <figure class="user__profile">
      <img class="user__image" src="./images/image-victor.jpg" alt="" />
      <figcaption>
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
      </figcaption>
    </figure>
    <div class="user__data">
      <p class="user__data-item">
        <span class="data-item__count">80K</span>
        <span class="data-item__type">Followers</span>
      </p>
      <p class="user__data-item">
        <span class="data-item__count">803K </span>
        <span class="data-item__type">Likes</span>
      </p>
      <p class="user__data-item">
        <span class="data-item__count">1.4K </span>
        <span class="data-item__type">Photos</span>
      </p>
    </div>
  </article>
`;

class ProfileCard extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.querySelector(".user__name").innerText = this.getAttribute("name");
    // this.shadowRoot.querySelector(".user__age").innerText = this.getAttribute("age");
    // this.shadowRoot.querySelector(".user__location").innerText = this.getAttribute("location");
  }

  data() { return { name: "Fat Fuck" }; };
  setName()
  {
    this.shadowRoot.querySelector(".user__name").innerText = this.getAttribute(data().name);
  }

}

window.customElements.define("profile-card", ProfileCard);
ProfileCard.setName();
