import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';

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

  ngOnInit(): void {
    this.getParentDept();
  }
  // API fetching all parent department
  getParentDept(){
    this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
      this.parentDeptList.set(res.data);
    });
  }
  //API fetching all child department
  getChildDept(){
    this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
      this.parentDeptList.set(res.data);
    });
  }

}
