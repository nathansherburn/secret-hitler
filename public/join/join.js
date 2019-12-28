class JoinController {
  constructor() {}

  static newGame() {
    app.setRoute("/board");
  }

  static joinGame() {
    app.setRoute("/player");
  }
}
