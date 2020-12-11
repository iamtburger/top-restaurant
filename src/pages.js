const homeContent = () => {
    document.querySelector('#content').innerHTML = `
    <section class="hero is-dark is-large has-background">
    <img alt="Fill Murray" class="hero-background is-transparent" src="./static/images/fire-1042926_1920.jpg" />
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          BBQ as we love it!
        </h1>
        <h2 class="subtitle">
          It's like visiting Grandma. You won't leave hungry!
        </h2>
      </div>
    </div>
    </section>
    <section>
        <div class="container mt-6">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h3 class="title is-3">
                        We are proud of our food. You should be grateful you can eat here!
                    </h3>
                </div>
            </div>
            <div class="columns">
                <div class="column is-three-fifths is-offset-one-fifth">
                    <p>
                        We have started as a small bbq place in the heart of the suburbs of Budapest and we are still a small bbq place since then. We could go global, but what for?
                        Instead we enjoy making our food in a quality we can guarantee. We would rather stay that way.
                        If you want something which is available all over the world in the same quality, you know where to go. We are still here after you regret your decision.
                    </p>
                </div>
            </div>
        </div>
    </section>`;

    document.querySelector('#image-ref').innerHTML = `
    Image by <a href="https://pixabay.com/hu/photos/t%C5%B1z-barbecue-kemping-1042926">Dictionary123</a>
    `
};



const menuContent = () => {
    document.querySelector('#content').innerHTML = `
    <section class="hero is-dark is-medium has-background">
    <img alt="Fill Murray" class="hero-background is-transparent" src="./static/images/charcoal-2396754_1920.jpg" />
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          This week on the menu
        </h1>
        <h2 class="subtitle">
          Choose wisely!
        </h2>
      </div>
    </div>
    </section>
    <section>
        <div class="container mt-6">
            <div class="columns is-centered m-4">

                <div class="column is-one-third">
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p><strong>Mains</strong></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Brisket: <em>7 EUR / 100g</em></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Pulled pork: <em>5 EUR / 100g</em></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Ribs: <em>5 EUR / 100g</em></p>
                        </div>
                    </div>
                </div>

                <div class="column is-one-third">
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p><strong>Sides</strong></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Bean salad: <em>2 EUR / serving</em></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Bread: <em>1 EUR / 2 slices</em></p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-half">
                            <p>Coleslaw: <em>2 EUR / serving</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    document.querySelector('#image-ref').innerHTML = `
    Image by <a href="https://pixabay.com/hu/photos/fasz%C3%A9n-par%C3%A1zs-grill-sz%C3%A9n-forr%C3%B3-2396754/">pixel2013</a>
    `
};

const contactContent = () => {
    document.querySelector('#content').innerHTML = `
        <section class="hero is-dark is-medium has-background">
        <img alt="Fill Murray" class="hero-background is-transparent" src="./static/images/ribs.jpg" />
        <div class="hero-body">
        <div class="container">
            <h1 class="title">
            Where to find us?
            </h1>
            <h2 class="subtitle">
            Just follow the queue of people in front of you!
            </h2>
        </div>
        </div>
        </section>
        <section>
        <div class="container mt-6">
            <div class="columns is-centered m-4">

                <div class="column is-one-quarter">
                    <h1 class="title is-1 has-text-centered">
                        Budapest
                    </h1>
                    <h3 class="title is-3 has-text-centered">
                        Food Road 3
                    </h3>
                </div>
                <div class="column is-one-quarter">
                    <img src="./static/images/map.png" />
                </div>

            </div>

        </div>
    </section>
    `;

    document.querySelector('#image-ref').innerHTML = `
        Image by <a href="https://unsplash.com/photos/s-Z-h0fEiBM">José Ignacio Pompé</a>
    `
};



export { homeContent, menuContent, contactContent }