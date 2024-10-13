import { DatePipe, LowerCasePipe, NgClass,NgFor,NgIf, UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { EmployeeComponent } from './componenets/employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgClass,NgIf,NgFor,DatePipe,LowerCasePipe,UpperCasePipe,AppendPipe,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  today:number =  Date.now()
  title:string = 'angular-tutorial';
  source:string = "https://tse1.mm.bing.net/th?id=OIP.fI6jkw5kEXmh3bIrBno7rwHaHa&pid=Api&P=0&h=180"
  headStyle:string = "center"
  count:number = 0
  userStatus:boolean = true
  username:string = ""
  desgnation:string = "User desgnation please"
  styleClassess:string = "pStyle textColor"
  nameArray:string[] = ["Amir","Aman","Aahil","Anil"]
  posts:any = []
  constructor(private api:DataService){}

  ngOnInit(){
    this.api.getPost().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.posts = res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  incrementByValue(){
    this.count++
  }
  getName(event:any){
    this.username = event.target.value
  }
}
