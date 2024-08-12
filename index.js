// import axios from "../axios";
// import PogObject from "PogData";
// import { SBS_EXAMPLE_URL } from "./constants";

// register("gameLoad", () => {
//   axios
//     .get(SBS_EXAMPLE_URL)
//     .then((res) => {
//       ChatLib.chat = res.data;
//     })
//     .catch((e) => {});
// });

// let count = new PogObject(0);

let count = 0;

register("step", (player, message, event) => {
  count++;
  ChatLib.chat("step!");
});

register("command", (user, message) => {
  ChatLib.chat("hl got " + user + " and " + message);
})
  .setName("homelander")
  .setAliases("hl");
