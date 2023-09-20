





import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  prompt = '';
   content = '';

  constructor(
    private homeService: HomeService
   ) {}

   ngOnInit(): void {
      
  }
   onSubmit(): void {
    this.content = 'esperando respuesta...';
    this.homeService.getContent(this.prompt).subscribe(
      
       data=> {
        this.content = data.content;
      },
       err => {
         this.content = err.error;
       }
        
     );
  
  }

   resetPrompt(): void {
     this.prompt = '';
   }
   resetContent(): void {
     this.content = '';
  }
}
