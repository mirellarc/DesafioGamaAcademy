import axios from 'axios';
const baseUrl = 'http://localhost:5000';

class UserService {
  request = axios.create({
    baseURL: baseUrl,
  });

  async registerUser(formUser) {
    try {
      const user = await axios.post('/register', formUser);
      if (user.status === 200) {
        alert('Usuário criado com sucesso');
      }
    } catch (error) {
      alert(error);
    }
  }
}

export const userService = new UserService();
