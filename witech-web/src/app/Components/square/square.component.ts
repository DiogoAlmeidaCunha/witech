import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() name = "";
  @Input()  text = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  service(){
    if(this.name == "Websites"){ 
      this.router.navigate(["/service/website"]);
      window.scrollTo(0, 0)
    }
    else if(this.name == "Mobile Apps"){ 
      this.router.navigate(["/service/mobile"]);
      window.scrollTo(0, 0)
    }
    else if(this.name == "Lojas Online"){ 
      this.router.navigate(["/service/website"]);
      window.scrollTo(0, 0)
    }
    else if(this.name == "Publicidade e Marketing"){ 
      this.router.navigate(["/service/publicity"]);
      window.scrollTo(0, 0)
    }
    else if(this.name == "Redes Sociais"){ 
      this.router.navigate(["/service/socialmedia"]);
      window.scrollTo(0, 0)
    }
    else if(this.name == "Logos e Portfolios"){ 
      this.router.navigate(["/service/portfolio"]);
      window.scrollTo(0, 0)
    }
    

  }

}
