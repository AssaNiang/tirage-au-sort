import { Component, EventEmitter, Output } from '@angular/core';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  
  StudentInClass:Students[]=CLASSROOM;

 
  OneStudent!:Students;
  // PresentArray!:Students[];
  PresentArray!:Students[];
  
  selectOnePerson(){
    
     this.OneStudent=this.person(this.StudentInClass);
  
    //  this.OneStudent=this.person(this.PresentArray);
  }
  
  person(StudentInClass:Students[]){
    console.log("je suis dans person");
    console.log('studentinclass',StudentInClass);
    // je cree un onlyPresent tableau avec simplement les presents j'ai besoin du filter
    let onlyPresent =StudentInClass.filter((student)=>student.isPresent && !student.hasBeenSelected );
    console.log('tableau de present',onlyPresent);
    
if(onlyPresent.length <=0){
  console.log("je suis dans le if");
  // je remets tous les étudients avec hasBeenSelected=false sachant que c'est un tableau je fais un forEach pour qu'a chaque tour de boucle la valeur de hasBeenSelected soit false
  StudentInClass.forEach((student)=>student.hasBeenSelected=false)
  onlyPresent=StudentInClass;
  console.log('StudentInclass',StudentInClass,'onlyPresent',onlyPresent)
}
  const rand = Math.floor(Math.random()*onlyPresent.length);
  const rValue = onlyPresent[rand];
  console.log('rvalue',rValue);
  // je mets la valeur de hasBeenSelected a true pour ne pas que la personne soit tirer une seconde fois
  rValue.hasBeenSelected=true;
  console.log('rvalue avec le changemant hasbeeselected',rValue);

  return rValue;


  // person(PresentArray:Students[]){
  //   console.log(this.StudentInClass);
  //   // console.log(this.StudentInClass[1]["firstname"]=="Morgane");
  //   // console.log(StudentInClass.slice(0,6));
  //   PresentArray=this.StudentInClass.slice(0,6);
  //   console.log(PresentArray);

  // const rand = Math.floor(Math.random()*PresentArray.length);
  // const rValue = PresentArray[rand];
  // console.log(rValue)
  // const idValue=PresentArray.indexOf(rValue);
  // console.log(idValue);
  //   PresentArray.splice(idValue,1);
  // // PresentArray=PresentArray.length-Number(PresentArray.splice(idValue,1));
  // console.log(PresentArray);
  // return rValue;
    
   }

}