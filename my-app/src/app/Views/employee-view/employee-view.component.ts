import { Component, OnInit } from '@angular/core';
import { EmployeeApiService} from '../../Service/employee-api.service';
import { Employee } from '../../Model/Employee' ;
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  Employeelist: Employee[];
  constructor(private _EmployeserviceService: EmployeeApiService) { }

  ngOnInit() {
    this.loadEmployee();
  }
  loadEmployee()  {
    this._EmployeserviceService.getEmployees().subscribe(
     data => { this.Employeelist = data.json(); },
      err => console.error(err),
      () => console.log('done loading employee')
    );
  }
  delete(event, item: string) {
    this._EmployeserviceService.deleteEmployee(item).subscribe(
      data => {  this.loadEmployee(); },
       err => console.error(err),
       () => console.log('done loading employee')
     );

  }


}
