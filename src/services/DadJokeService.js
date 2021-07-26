import axios from "axios";

const client = axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  headers: {
    'Accept': 'application/json'
  }
})

export async function getDatJoke() {
  return await client.get('');
}