import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  animations: [
    
    trigger('openClose', [
      state('open', style({
        width: '250px',
       
      })),
      state('closed', style({
        width: '0px',
     
      })),
      transition('open => closed', [
        animate('0.4s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),

    trigger('toggleX', [
     
      state('open', style({
        transform: 'rotate(90deg)'
      })),
      state('closed', style({
        transform: 'rotate (135deg)'
      })),
      transition(':enter', [
        animate('0.4s')
      ]),
      transition(':leave', [
        animate('0.3s')
      ]),
    ]),

    trigger('openClosePhone', [
     
      state('open', style({
        width: '100%',
       
      })),
      state('close', style({
        width: '0',
     
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.2s')
      ]),
    ]),
    
  ]
})
export class SideNavigationComponent implements OnInit {

    universityLinks = [ 
        /*   {names:'Інформація про університет', link:'http://www.lute.lviv.ua/universitet/informacija-pro-universitet/?L=416'}, */
          {names:'Контакти', link:'http://www.lute.lviv.ua/universitet/informacija-pro-universitet/?L=416'}

      ]
    formatPhone = false;


/* 


Інформація про університет
Інші підрозділи */



  constructor() { 
    window.innerWidth <= 768 ? this.formatPhone = false : this.formatPhone = true;
    console.log(this.formatPhone);
    
  }

  ngOnInit(): void {
  }
  classOpen;
  isOpenBurger = false;

  isOpen = false;

  isOpenStudent = false;
  isOpenAbout = false;
  isOpenScience = false;

  isOpenAboutMore = false;

  ScedFac = false;

  ScedSpecMev= false;
  ScedSpecTuso= false;
  ScedSpecIef= false;
  ScedSpecUf= false;

  ScedYear = false;
  toggleClass(){
    if(this.isOpen == false){
      this.classOpen = 'animate';
      this.isOpen = true;
    }
    else{
      this.classOpen = '';
      this.isOpen = false;
    }
  }
  toggleBurger(){
    this.isOpenBurger = !this.isOpenBurger;
  }
  clicked = false;
  toggleAbout(){
    this.isOpenStudent = false;
    this.isOpenAboutMore = false;
    this.ScedSpecMev = false;
    this.isOpenScience = false;

    this.clicked = !this.clicked;
   
    this.isOpenBurger = false;

    this.isOpenAbout = !this.isOpenAbout;
  }


  toggleAboutElse(){
    this.isOpenAboutMore = !this.isOpenAboutMore;
  }

  toggleScedFac(){
    this.ScedFac = !this.ScedFac;

 
  }

  ////////// 
  toggleScedSpecMev(){
    this.ScedSpecMev = !this.ScedSpecMev;
    this.ScedSpecTuso = false;
    this.ScedSpecIef = false;
    this.ScedSpecUf = false;

    this.specKN = false;
    this.specJrn = false;
    this.specMar = false;
    this.specMev = false;


  }

  toggleScedSpecTuso(){
    this.ScedSpecTuso = !this.ScedSpecTuso;
    this.ScedSpecMev = false;
    this.ScedSpecIef = false;
    this.ScedSpecUf = false;

    this.specHrs = false;
    this.specMen = false; 
    this.specPt = false;
    this.specTrz = false; 
    this.specTzns = false; 
    this.specHti = false;

  }

  toggleScedSpecIef(){
    this.ScedSpecIef = !this.ScedSpecIef;
    this.ScedSpecMev = false;
    this.ScedSpecTuso = false;
    this.ScedSpecUf = false;

    this.specEkon = false; 
    this.specFBSS = false; 
    this.specOO = false; 
  }

  toggleScedSpecUF(){
    this.ScedSpecIef = false;
    this.ScedSpecMev = false;
    this.ScedSpecTuso = false;
    this.ScedSpecUf = !this.ScedSpecUf;

    this.specPrav = false;
  }






 ////////// MEV
    specKN = false;
    specJrn = false;
    specMev = false;
    specMar = false;

  togMev(){
    this.specKN = false;
    this.specJrn = false;
    this.specMar = false;
    this.specMev = !this.specMev;
  }

  togKN(){
    this.specJrn = false;
    this.specMar = false;
    this.specMev = false;
    this.specKN = !this.specKN;
  }
  togMar(){
    this.specKN = false;
    this.specJrn = false;
    this.specMev = false;
    this.specMar = !this.specMar;
  }
  togJrn(){
    this.specKN = false;
    this.specMar = false;
    this.specMev = false;
    this.specJrn = !this.specJrn;
  }



///////////// TUSO

specHrs = false; //Готельно-ресторанна справа
specMen = false; //Менеджмент
specPt = false; //Підприємництво, торгівля та біржова діяльність
specTrz = false; //Туризм
specTzns = false; //Технології захисту навколишнього середовища
specHti = false; //Харчові технології та інженерія

togHrs(){
  this.specHrs = !this.specHrs;
}
togMen(){
  this.specMen = !this.specMen;
}
togPt(){
  this.specPt = !this.specPt;
}
togTrz(){
  this.specTrz = !this.specTrz;
}
togTzns(){
  this.specTzns = !this.specTzns;
}
togHti(){
  this.specHti = !this.specHti;
}


//////////////////// IEF

specEkon = false; //Економіка
specFBSS = false; //Фінанси, банківська справа та страхування
specOO = false; //Облік і оподаткування


togEkon(){
  this.specEkon = !this.specEkon;
}
togFBSS(){
  this.specFBSS = !this.specFBSS;
}
togOO(){
  this.specOO = !this.specOO;
}

//////////////// UF

specPrav = false;

togPrav(){
  this.specPrav = !this.specPrav;
}



////////


  closeNavigation(){
    this.isOpenAboutMore = false;
    this.isOpenStudent = false;
    this.ScedFac = false;
    this.isOpenAbout = false;
    this.isOpenBurger = false;
  }

   bip(){
      let checkbox = document.getElementById('zClick') as HTMLInputElement;
      checkbox.checked = false;
      this.closeNavigation();
  }
  bip2(){
    let checkbox = document.getElementById('zClick2') as HTMLInputElement;
    checkbox.checked = false;
    this.closeNavigation();
}


  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  /* PHONE FUNCTIONS */

  
  togClicked(){
    this.closeNavigation();
    this.clicked = !this.clicked;
  }


  toggleScedFacPhone(){
    this.ScedFac = !this.ScedFac;
    this.isOpenStudent = false;
  }
  toggleScedSpecMevPhone(){
    this.ScedFac = false;
    this.toggleScedSpecMev();
  }
  toggleScedSpecTusoPhone(){
    this.ScedFac = false;
    this.toggleScedSpecTuso();
  }
  toggleScedSpecIefPhone(){
    this.ScedFac = false;
    this.toggleScedSpecIef();
  }
  toggleScedSpecUFPhone(){
    this.ScedFac = false;
    this.toggleScedSpecUF();
  }
  togMarPhone(){
    this.togMar();
    this.ScedSpecMev = false;
  }
  togJrnPhone(){
    this.togJrn();
    this.ScedSpecMev = false;
  }
  togMevPhone(){
    this.togMev();
    this.ScedSpecMev = false;
  }
  togKnPhone(){
    this.togKN();
    this.ScedSpecMev = false;
  }


  toggleStudentsPhone() {
    this.isOpenAboutMore = false;
    this.isOpenAbout = false;
    this.ScedFac = false;
    this.isOpenScience = false;
    this.isOpenBurger = false;

    this.clicked = !this.clicked;
    this.isOpenStudent = !this.isOpenStudent;
  }





}
