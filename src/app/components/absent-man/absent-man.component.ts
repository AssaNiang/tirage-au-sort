import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-man',
  templateUrl: './absent-man.component.html',
  styleUrls: ['./absent-man.component.css']
})
export class AbsentManComponent {
  // je reçois la valeur du parent absent
@Input() absentMan!:Students;

//je transmets la valeur de l'enfant  au parent absent
@Output() removeElement= new EventEmitter<Students>();

addRemove(){
 this.removeElement.emit();
 console.log("button cliqué");
}

}
