import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo(iframe);

const onTimeUpdate = function (e) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds));
};

player.on("timeupdate", throttle(onTimeUpdate, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
