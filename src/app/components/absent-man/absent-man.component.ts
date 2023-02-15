import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students_Abs } from 'src/app/mocks/Absents.mock';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-man',
  templateUrl: './absent-man.component.html',
  styleUrls: ['./absent-man.component.css']
})
export class AbsentManComponent {
  // je reçois la valeur du parent absent
// @Input() absentMan!:Students;
@Input() absentMan2!:Students_Abs;
@Input() item!:string;

//je transmets la valeur de l'enfant  au parent absent
// @Output() removeElement= new EventEmitter<Students>();
@Output() removeElement2= new EventEmitter<Students_Abs>();


// addRemove(){
//  this.removeElement.emit();
//  console.log("button cliqué");
// }

addRemove2(){
  this.removeElement2.emit();
  console.log("button cliqué 2");
 }

}
