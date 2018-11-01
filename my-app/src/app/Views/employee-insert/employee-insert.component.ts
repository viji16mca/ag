import { Component, OnInit } from '@angular/core';
import { EmployeeApiService} from '../../Service/employee-api.service';
import { Employee } from '../../Model/Employee' ;
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.css']
})
export class EmployeeInsertComponent implements OnInit {
  model = new Employee();

  submitted = false;
  id: number;
  param2: string;
  constructor(private route: ActivatedRoute, private router: Router,
    private _EmployeeApiService: EmployeeApiService) {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
     }

  ngOnInit() {
if (this.id > 0)  {
      this.loademployee();
    }
  }

  loademployee() {
    this.model.departMentID = 1;
    this._EmployeeApiService.getEmployee(this.id).subscribe(
 data => {  this.model = data.json();
},
  err => console.error(err),
  () => console.log('done loading employee')
);
  }
  onSubmit() {
    this.submitted = true;
    if (this.id <= 0)  {
      this.model.departMentID = 1;
         this._EmployeeApiService.addEmployees(this.model).subscribe(
      data => { this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
    },
       err => console.error(err),
       () => console.log('done loading employee')
     );
  } else {
         this.model.departMentID = 1;
         this._EmployeeApiService.updateEmployee(this.model).subscribe(
      data => { this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
    },
       err => console.error(err),
       () => console.log('done loading employee')
     );

   }
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


   newHero() {
    this.model = new Employee();
  }
}
