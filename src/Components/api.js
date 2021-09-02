import axios from "axios";
console.log(process.env);
const serverUrl =
  process.env.NODE_ENV === "production"
    ? `http://localhost:5000/api`
    : `http://localhost:5000`;
console.log(serverUrl);

const actions = {};

export default actions;
