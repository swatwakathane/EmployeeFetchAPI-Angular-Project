import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Employee } from '../model/class/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http:HttpClient) { }

  getAllDept(): Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.apiURL}GetParentDepartment`);
  }
  getChildDeptById(deptid: number): Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.apiURL}GetChildDepartmentByParentId?deptId=${deptid}`);
  }
  saveEmp(obj: Employee): Observable<IApiResponse>{
    debugger;
    return this.http.post<IApiResponse>(this.apiURL + "CreateEmployee", obj);
  }
}
