import { Component, Input } from '@angular/core';
import { Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-display-man',
  templateUrl: './display-man.component.html',
  styleUrls: ['./display-man.component.css']
})
export class DisplayManComponent {
  @Input() AstudentMan!:Students;
}
