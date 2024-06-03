import axios from "axios";
import BrandsAPI from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

// class = 캡슐화 = API에 필요한 정보들을 모아두는 것
class API {
  #baseURL = BASE_URL; // #붙이면 private
  #client;
  products;
  brands;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.products = new ProductsAPI(this.#client);
    this.brands = new BrandsAPI(this.#client);
  }
}

const api = new API();

export default api;
