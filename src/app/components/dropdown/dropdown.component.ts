import { Component } from '@angular/core';

import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  // je recupere mon mock
  StudentInClass: Students[] = CLASSROOM;
  
  
  selected = " selectionner une personne";
  update(e: any) {
    // je  modifie la valeur de selected dans mon menu derourant par le nom que j'ai cliqué dans le menu deroulant ensuite je recupere cette valeur qui est mise a jour dans le selected
    
    this.selected = e.target.value;
    
  }
  addName() {
    //je recupere le prenom de la personne à ajouter aux abs lorsque mon buton est actioné
    const OneName = this.selected;
    console.log("la personne selectionée", OneName);
    // on va chercher l'etudient  dans la liste de mon mock CLASSROOM
    const absStudent = this.StudentInClass.find((student) => student.firstname === OneName)
    console.log('abstudent',absStudent);
    if (absStudent) {
      absStudent.isPresent= false;
    }
  }
  
}
