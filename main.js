import axios from "axios";

axios
  .get("/portfolio-cafe-demo-2025-html-css-js/data/menu.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

console.log("Hello!");
console.log("fesfes!");
console.log("Helhtfhtlo!");
console.log("Helhtfhtlo!");
