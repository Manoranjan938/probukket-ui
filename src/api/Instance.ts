import axios from "axios";
import { DEMO_API_BASE_URL } from "src/constants/Constants";

const Instance = axios.create({
  baseURL: DEMO_API_BASE_URL,
});

export default Instance;
