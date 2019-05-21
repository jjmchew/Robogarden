import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DisplayDataExercise';
  name = '';
  emptyInput = true;


  exportConsole(){
    console.log('Hey There!');
  }

  checkName(event){
    if(event.target.value != ''){
      this.emptyInput = false;
      
    } else {
      this.emptyInput = true;
      
    }
  }

}
