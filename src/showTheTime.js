import moment from "moment"
export const showTheTime = () => {
  const p = document.createElement("p")
  const now = moment().format("YYYY-MM-DD");
  p.textContent = `今日は　${now}　です。`
  document.body.appendChild(p);
}

export default showTheTime