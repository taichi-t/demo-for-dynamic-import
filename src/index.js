// import { showTheTime } from "./showTheTime";
import "./style.css"
const button = document.createElement("button")
button.textContent = 'click';

button.addEventListener("click", async () => {
  const { showTheTime } = await import(/* webpackPrefetch: true */　"./showTheTime");
  showTheTime()
})

document.body.appendChild(button);