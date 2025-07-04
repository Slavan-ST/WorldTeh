@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'https://localhost:5001/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(filters?: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl, { params: filters });
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}