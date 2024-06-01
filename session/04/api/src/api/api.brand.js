import axios from "axios";
import { BASE_URL } from "./api";

const client = axios.create({ baseURL: BASE_URL });

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);
  return response.data;
}

export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);
  return response.data;
}
