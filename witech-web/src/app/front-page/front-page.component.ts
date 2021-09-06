import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', '../Components/navbar/navbar.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  service(name){
    if(name == "Websites"){ 
      this.router.navigate(["/service/website"]);
      window.scrollTo(0, 0)
    }
    else if(name == "Mobile Apps"){ 
      this.router.navigate(["/service/mobile"]);
      window.scrollTo(0, 0)
    }
    else if(name == "Lojas Online"){ 
      this.router.navigate(["/service/website"]);
      window.scrollTo(0, 0)
    }
    else if(name == "Marketing"){ 
      this.router.navigate(["/service/publicity"]);
      window.scrollTo(0, 0)
    }
    else if(name == "Redes Sociais"){ 
      this.router.navigate(["/service/socialmedia"]);
      window.scrollTo(0, 0)
    }
    else if(name == "Portfolios"){ 
      this.router.navigate(["/service/portfolio"]);
      window.scrollTo(0, 0)
    }
    

  }

  setWork(n){
    var element1 = document.getElementById("meeting");
    var element2 = document.getElementById("development");
    var element3 = document.getElementById("delivery");

    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    btn1.style.background = '#181b2e'
    btn2.style.background = '#181b2e'
    btn3.style.background = '#181b2e'

    if(n==1){
      element1.classList.remove("hidden");
      element2.classList.add("hidden")
      element3.classList.add("hidden")
      btn1.style.background = '#3754d2'

    }

    if(n==2){
      element2.classList.remove("hidden");
      element1.classList.add("hidden")
      element3.classList.add("hidden")
      btn2.style.background = '#3754d2'

    }

    if(n==3){
      element3.classList.remove("hidden");
      element1.classList.add("hidden")
      element2.classList.add("hidden")
      btn3.style.background = '#3754d2'

    }

  }

}
