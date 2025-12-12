import axios from "axios";

axios
  .get("/portfolio-cafe-demo-2025-html-css-js/data/menu.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

console.log("Hello!");
