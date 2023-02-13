import { Component, Input } from '@angular/core';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-display-woman',
  templateUrl: './display-woman.component.html',
  styleUrls: ['./display-woman.component.css']
})
export class DisplayWomanComponent {
  // je recois un etudient du parent
  @Input() Astudent!:Students;

}
