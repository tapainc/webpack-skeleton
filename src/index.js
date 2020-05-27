import '../scss/index.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class App {
    constructor() {
        this.message = "Boostrap Is Working!";
    }

    render(container) {
        const alert = document.createElement('div');
        alert.innerHTML = this.message;
        alert.setAttribute("class", "alert alert-success m-5");

        container.appendChild(alert);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.render(document.body);
})
