// Global
class App {
  constructor() {
    window.addEventListener("popstate", event => {
      this.setRoute(event.state.path, true);
    });
    this.setRoute(window.location.pathname, true);
  }

  setRoute(route, replaceState) {
    route = route.replace(/\/$/, "");
    this.route = ROUTES[route] || ROUTES["/"];
    fetch(this.route.template)
      .then(response => response.text())
      .then(body => {
        // Template
        document.querySelector("body").innerHTML = body;
        // Style
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = this.route.style;
        document.getElementsByTagName("head")[0].appendChild(link);
        // Controller
        new CONTROLLERS[this.route.controller]();
        // History
        window.history[replaceState ? "replaceState" : "pushState"](
          this.route,
          this.route.name,
          this.route.path
        );
      });
  }

  getRoute() {
    this.route;
  }
}

// https://www.secrethitler.com/
// https://cdn.vapid.site/sites/a67e0c72-4902-4365-a899-3386df73c2c4/assets/Secret_Hitler_Print_and_Play-c6d30b0928e91d6b3c5ce73df4c87441.pdf
// https://cdn.vapid.site/sites/a67e0c72-4902-4365-a899-3386df73c2c4/assets/Secret_Hitler_Rules-023bc755617986cb2276a3b6920e43e0.pdf
