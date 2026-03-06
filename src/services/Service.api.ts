import axios from "axios"

export const api = axios.create({
  baseURL: "https://crm-generation.onrender.com"
})