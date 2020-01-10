import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    
    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['students']);
  }

}
