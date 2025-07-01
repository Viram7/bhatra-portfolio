import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
   you_can_line:boolean = false;
  rotateplus(){
    // document.getElementById("vr")?.style.rotate = "90deg";
    const element = document.getElementById("vr");

const you_can = document.getElementById("you-can");
if(you_can){

  if(you_can.style.display == "flex"){
    you_can.style.display = "none";
    this.you_can_line = true;
  }
  else{
    you_can.style.display = "flex";
    this.you_can_line = false;
  }
}
if (element) {
  if(this.you_can_line == true){
    element.style.rotate = "-180deg";
  }
  else{
    element.style.rotate = "90deg";
  }
}


  }
}
