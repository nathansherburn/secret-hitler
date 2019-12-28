const ROUTES = {
  "/": {
    name: "join",
    template: "/join/join.html",
    controller: "JoinController",
    path: "/"
  },
  "/board": {
    name: "board",
    template: "/board/board.html",
    controller: "BoardController",
    path: "/board"
  },
  "/player": {
    name: "player",
    template: "/player/player.html",
    controller: "PlayerController",
    path: "/player"
  }
};