import axios from 'axios';

const API_URL = 'http://localhost:3000'

class ApiService {
  constructor(baseURL = API_URL) {
    this.api = axios.create({ baseURL });
    
  }
  

  async getStudents() {
    const response = await this.api.get('/students');
    return response.data;
    
  }
  
  async getStudentByName(name) {
    const response = await this.api.get(`/students?name=${name}`);
    return response.data;
  }


  async getStudentById(id) {
    const response = await this.api.get(`/students/${id}`);

    return response.data;
  }

  async createStudent(data) {
    const response = await this.api.post('/students', data);
    return response.data;
  }

  async updateStudent(id, data) {
    const response = await this.api.put(`/students/${id}`, data);
    return response.data;
  }

  async deleteStudent(id) {
    const response = await this.api.delete(`/students/${id}`);
    return response.data;
  }
}


const apiService = new ApiService();

export default apiService;