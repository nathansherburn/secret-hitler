// Global
const ROUTES = {
  "/": {
    name: "join",
    template: "/join/join.html",
    style: "/join/join.css",
    controller: "JoinController",
    path: "/"
  },
  "/board": {
    name: "board",
    template: "/board/board.html",
    style: "/board/board.css",
    controller: "BoardController",
    path: "/board"
  },
  "/player": {
    name: "player",
    template: "/player/player.html",
    style: "/player/player.css",
    controller: "PlayerController",
    path: "/player"
  }
};