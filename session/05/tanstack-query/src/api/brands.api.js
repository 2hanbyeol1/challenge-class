class BrandsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getBrands() {
    const response = await this.#client.get("/brands");
    const data = response.data;
    const result = data.result;
    console.log("brands", result);
    return result;
  }
}

export default BrandsAPI;
