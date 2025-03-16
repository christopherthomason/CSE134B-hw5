class HomeCard extends HTMLElement {
    constructor() {
        super();
        
        this.wrapper = document.createElement("a");
        this.wrapper.href = this.getAttribute("href") || "";
        this.wrapper.className = "home-card-a";

        this.picture = document.createElement("picture");
        this.image = document.createElement("img");

        this.image.src = this.getAttribute("img-src") || "";
        this.image.alt = this.getAttribute("img-alt") || "placeholder"
        this.image.id = this.getAttribute("img-id") || "";

        this.h2 = document.createElement("h2");
        this.p = document.createElement("p");

        this.h2.textContent = this.getAttribute("header-text") || "";

        this.p.textContent = this.getAttribute("description") || "";

        this.picture.appendChild(this.image);
        this.wrapper.appendChild(this.picture);
        this.wrapper.appendChild(this.h2);
        this.wrapper.appendChild(this.p);

        const mainElement = document.querySelector("main");
        if (mainElement) {
            mainElement.appendChild(this.wrapper);
        }
    }

    static get observedAttributes() {
        return ["href", "img-src", "img-alt", "img-id", "header-text", "description"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "href" && this.wrapper) {
            this.wrapper.href = newValue;
        }
        if (name === "img-src" && this.image) {
            this.image.src = newValue;
        }
        if (name === "img-alt" && this.image) {
            this.image.alt = newValue;
        }
        if (name === "img-id" && this.image) {
            this.image.id = newValue;
        }
        if (name === "header-text" && this.h2) {
            this.h2.textContent = newValue;
        }
        if (name === "description" && this.p) {
            this.p.textContent = newValue;
        }
    }
}

customElements.define("home-card", HomeCard);