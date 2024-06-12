import axios from "axios";
import AuthApi from "./auth.api";
import BrandsApi from "./brands.api";
import CartApi from "./cart.api";
import ProductsApi from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";
class API {
  #axios;

  auth;
  brands;
  cart;
  product;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL, withCredentials: true });

    this.auth = new AuthApi(this.#axios);
    this.brands = new BrandsApi(this.#axios);
    this.cart = new CartApi(this.#axios);
    this.products = new ProductsApi(this.#axios);
  }

  setAccessToken(accessToken) {
    this.#axios.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}

const api = new API();
export default api;
