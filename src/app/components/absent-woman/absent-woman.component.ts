import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students_Abs } from 'src/app/mocks/Absents.mock';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-woman',
  templateUrl: './absent-woman.component.html',
  styleUrls: ['./absent-woman.component.css']
})
export class AbsentWomanComponent {
@Input() absentWoman!:Students_Abs;
@Output() removeElement1= new EventEmitter<Students_Abs>();

addRemove1(){
 this.removeElement1.emit();
 console.log("button  des femmes cliquée");
}
}
