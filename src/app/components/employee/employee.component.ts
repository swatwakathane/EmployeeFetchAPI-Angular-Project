import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse } from '../../model/interface/master';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisible = signal<Boolean>(false); // using signal to show add employee form
  masterSrv = inject(MasterService);

  ngOnInit(): void {

  }
  // API fetching all parent department
  getParentDept(){
    this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
      console.log(res);
    });
  }

}
