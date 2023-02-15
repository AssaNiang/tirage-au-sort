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
  // StudentAbsent:Students[]=CLASSROOM;
//@Output() newItemEvent=new EventEmitter
  
  selectOnePerson(){
    
     this.OneStudent=this.person(this.StudentInClass);
  
    //  this.OneStudent=this.person(this.PresentArray);
     
// this.StudentAbsent=this.studentAbsent(this.StudentInClass)
    
  }
  
  person(StudentInClass:Students[]){
    console.log('studentinclass',StudentInClass);
    // je cree un onlyPresent tableau avec simplement les presents 
   let onlyPresent =StudentInClass.filter((student)=>student.isPresent && !student.hasBeenSelected );
    console.log('tableau de present',onlyPresent);
    
if(onlyPresent.length<=0){
  console.log("je suis dans le if");
  StudentInClass.forEach((student)=>student.hasBeenSelected=false)
  onlyPresent=StudentInClass;
  console.log('StudentInclass',StudentInClass,onlyPresent)
}
  const rand = Math.floor(Math.random()*onlyPresent.length);
  const rValue = onlyPresent[rand];
  console.log('rvalue',rValue);
  rValue.hasBeenSelected=true;
  console.log('rvalue avec le changemant hasbeeselected',rValue);

  // const idValue=onlyPresent.indexOf(rValue);
  // console.log(idValue);
  //  StudentInClass.splice(idValue,1);
  console.log('rvalue av le return',rValue);
  return rValue;

  // const rand = Math.floor(Math.random()*StudentInClass.length);
  // const rValue = StudentInClass[rand];
  // console.log(rValue)
  // const idValue=StudentInClass.indexOf(rValue);
  // console.log(idValue);
  //  StudentInClass.splice(idValue,1);
  // return rValue;

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