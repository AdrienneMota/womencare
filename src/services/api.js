import axios from "axios";

const URL = ""

const api = axios.create({ baseURL: URL})

export default api