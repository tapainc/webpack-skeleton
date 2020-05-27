import '../scss/index.scss';

class App {
    constructor() {
        this.message = "I am ready to go";
    }

    render(container) {
        console.log(container);

        const h1 = document.createElement('div');
        h1.innerHTML = '<h1>' + this.message + '</h1>';

        container.appendChild(h1);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.render(document.body);
})
