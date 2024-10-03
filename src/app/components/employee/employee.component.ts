import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IChildDept, IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/Employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisible = signal<Boolean>(false); // using signal to show add employee form
  masterSrv = inject(MasterService);
  parentDeptList = signal<IParentDept[]>([]); // using signal to store all parent department
  childDeptList = signal<IChildDept[]>([]); // using signal to store all child department
  parentDeptId : number = 0; 
  employeeObj: Employee = new Employee(); // using Employee class to store employee data

  ngOnInit(): void {
    this.getParentDept();
  }
  // API fetching all parent department
  getParentDept(){
    this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
      this.parentDeptList.set(res.data);
    });
  }
  // API fetching all child department by parent department id
  onParentDeptChange(){
    this.masterSrv.getChildDeptById(this.parentDeptId).subscribe((res:IApiResponse)=>{
      this.childDeptList.set(res.data);
    });
  }
  // API to save employee data
  onSave(){
    debugger;
    this.masterSrv.saveEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
      debugger;
      alert("Employee data saved successfully");
    },error=>{
      alert("Error while saving employee data");
    })
  }

}
