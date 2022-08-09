class LocalStorageService {
  async get(key) {
    return localStorage.getItem(key);
  }

  async set(key, data) {
    localStorage.setItem(key, data);
    const result = await this.get(key);
    return result;
  }

  async delete(key) {
    localStorage.removeItem(key);
    const result = await this.get(key);
    return result;
  }
}

export default LocalStorageService;