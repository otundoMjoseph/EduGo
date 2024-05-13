const API_URL = 'https://edugo-2.onrender.com';

class ApiService {
  constructor(baseURL = API_URL) {
    this.baseURL = baseURL;
  }

  async getAllStudents() {
    const response = await fetch(`${this.baseURL}/students`);
    return response.json();
  }

  async getStudentById(id) {
    const response = await fetch(`${this.baseURL}/students/${id}`);
    return response.json();
  }

  async createStudent(data) {
    const response = await fetch(`${this.baseURL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async updateStudent(id, data) {
    const response = await fetch(`${this.baseURL}/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteStudent(id) {
    const response = await fetch(`${this.baseURL}/students/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }
}

const apiService = new ApiService();

export default apiService;
