import { Component, Input } from '@angular/core';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {

   StudentInClass:Students[]=CLASSROOM;

  //  absent!:Students;
  @Input() absentMan!:Students;

 getStudentByGenre(isWoman:boolean){
return this.StudentInClass.filter((student)=>!student.isPresent && student.isWoman===isWoman);
 }


}
