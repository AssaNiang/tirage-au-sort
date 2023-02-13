import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-woman',
  templateUrl: './absent-woman.component.html',
  styleUrls: ['./absent-woman.component.css']
})
export class AbsentWomanComponent {
@Input() absentWoman!:Students;
@Output() removeElement1= new EventEmitter<Students>();

addRemove1(){
 this.removeElement1.emit();
 console.log("button  des femmes cliquée");
}
}
