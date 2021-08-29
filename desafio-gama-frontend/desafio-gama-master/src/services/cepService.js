import axios from 'axios';
const baseUrl = 'https://viacep.com.br/ws';

class CepService {
  request = axios.create({
    baseURL: baseUrl,
  });

  async getAddress(cep) {
    const data = await this.request.get(`/${cep}/json/`);
    return data;
  }
}

export const cepService = new CepService();
