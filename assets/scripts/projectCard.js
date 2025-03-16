class ProjectCard extends HTMLElement {
    constructor() {
        super();
        
        this.wrapper = document.createElement("div");
        this.wrapper.className = "portfolio-project-card";

        this.picture = document.createElement("picture");
        this.image = document.createElement("img");

        this.image.src = this.getAttribute("img-src") || "";
        this.image.alt = this.getAttribute("img-alt") || "placeholder"
        this.image.id = this.getAttribute("img-id") || "";

        this.h2 = document.createElement("h2");
        this.p = document.createElement("p");
        this.a = document.createElement("a");

        this.h2.textContent = this.getAttribute("header-text") || "";
        this.p.textContent = this.getAttribute("description") || "";
        this.a.textContent = this.getAttribute("link-text") || "";
        this.a.href = this.getAttribute("href") || "";
        this.a.target = "_blank";
        this.a.rel = "noopener noreferrer";

        this.picture.appendChild(this.image);
        this.wrapper.appendChild(this.picture);
        this.wrapper.appendChild(this.h2);
        this.wrapper.appendChild(this.p);
        this.wrapper.appendChild(this.a);

        if (this.h2.textContent === "" && this.p.textContent === "") {
            this.wrapper.style.display = "none";
        }

        const parentElement = document.querySelector("#projects");
        if (parentElement) {
            parentElement.appendChild(this.wrapper);
        }
    }

    static get observedAttributes() {
        return ["href", "img-src", "img-alt", "img-id", "header-text", "description", "link-text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "href" && this.a) {
            this.a.href = newValue;
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
        if (name === "link-text" && this.a) {
            this.a.textContent = newValue;
        }
        this.wrapper.style.display = "grid";
    }
}

customElements.define("project-card", ProjectCard);