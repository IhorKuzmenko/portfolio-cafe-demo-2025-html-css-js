import axios from "axios";

axios
  .get("/data/menu.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
