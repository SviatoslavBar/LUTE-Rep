import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent implements OnInit {

  facultyList:boolean = true;
  facultyNameSearch:boolean = false;
  facultySearch:boolean = false;

  predmet = ['Виберіть предмет', 'Математика', 'Іноземна мова', 'Географія', 'Історія України', 'Фізика', 'Хімія', 'Біологія']
  searchP;
  specsList = [
    {
      specName: 'Міжнародна економіка',
      spCode: '051',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],

    },
    {
      specName: 'Економіка та бізнес аналітика підприємства',
      spCode: '051',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Бізнес економіка',
      spCode: '051',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Реклама у бізнесі',
      spCode: '061',
      predmetAll: ['Історія України', 'Математика', 'Іноземна мова'],
    },
    {
      specName: 'Облік та оподаткування',
      spCode: '071',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Управлінський облік і податковий консалтинг',
      spCode: '071',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Обліково-правове забезпечення управління бізнесом',
      spCode: '071',
      predmetAll: ['Історія України', 'Математика', 'Іноземна мова'],
    },
    {
      specName: 'Фінанси, банківська справа та страхування',
      spCode: '072',
      predmetAll: ['Математика', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Фіскальне та митне адміністрування',
      spCode: '072',
      predmetAll: ['Історія України', 'Іноземна мова', 'Географія'],
    },
    {
      specName: 'Фінансово-економічна безпека суб`єктів підприємництва',
      spCode: '072',
      predmetAll: ['Історія України', 'Математика', 'Географія'],
    },
    {
      specName: 'Менеджмент',
      spCode: '073',
      predmetAll: ['Історія України', 'Математика', 'Географія'],
    },
    {
      specName: 'Маркетинг',
      spCode: '075',
      predmetAll: ['Історія України', 'Іноземна мова', 'Математика'],
    },
    {
      specName: 'Підприємництво, торгівня та біржева діяльність',
      spCode: '076',
      predmetAll: ['Математика', 'Історія України', 'Географія'],
    },
    {
      specName: 'Товарознавство та торговельне підприємництво',
      spCode: '076',
      predmetAll: ['Історія України', 'Математика', 'Іноземна мова'],
    },
    {
      specName: 'Товарознавство та експертиза в митній справі',
      spCode: '076',
      predmetAll: ['Історія України', 'Математика', 'Географія'],
    },
    {
      specName: 'Право',
      spCode: '081',
      predmetAll: ['Історія України', 'Математика', 'Іноземна мова'],
    },
    {
      specName: 'Комп`ютерні науки',
      spCode: '122',
      predmetAll: ['Математика', 'Фізика', 'Іноземна мова'],
    },
    {
      specName: 'Харчові технології',
      spCode: '181',
      predmetAll: ['Математика', 'Хімія', 'Біологія'],
    },
    {
      specName: 'Технології харчування та пивоваріння у закладах ресторанного господарства',
      spCode: '181',
      predmetAll: ['Історія України', 'Математика', 'Іноземна мова'],
    },
    {
      specName: 'Готельно-ресторанна справа',
      spCode: '241',
      predmetAll: ['Історія України', 'Географія', 'Іноземна мова'],
    },
    {
      specName: 'Туризм',
      spCode: '242',
      predmetAll: ['Історія України', 'Географія', 'Іноземна мова'],
    },
    {
      specName: 'Медичний та оздоровчий туризм',
      spCode: '242',
      predmetAll: ['Історія України', 'Географія', 'Іноземна мова'],
    },
    {
      specName: 'Міжнародні економічні відносини',
      spCode: '292',
      predmetAll: ['Іноземна мова', 'Географія', 'Математика'],
    },
    {
      specName: 'Міжнародні економічні відносини (англійська мова навчання)',
      spCode: '292',
      predmetAll: ['Іноземна мова', 'Географія', 'Математика'],
    },
    {
      specName: 'Міжнародний бізнес',
      spCode: '292',
      predmetAll: ['Іноземна мова', 'Географія', 'Математика'],
    }
  ]

  formFac;
  formSpec;
  formKurs;
  pr1;
  pr2;
  pr3;
  pr4;
  predmetForm: FormGroup;


  outputPR = [];

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.predmetForm = this.fb.group({
      pr1Control: ['Українська мова та література'],
      pr2Control: ['Виберіть предмет'],
      pr3Control: ['Виберіть предмет'],
      pr4Control: ['Виберіть предмет']
    });
  }

  setFaculty(){
    this.facultyList = true;
    this.facultyNameSearch = false;
    this.facultySearch = false;
  }
  setNameSearch(){
    this.facultyList = false;
    this.facultyNameSearch = true;
    this.facultySearch = false;
  }
  setSearch(){
    this.facultyList = false;
    this.facultyNameSearch = false;
    this.facultySearch = true;
  }

  //////////////////////
  setFac(item) {
    this.formFac = item;
  }
  setSpec(item) {
    this.formSpec = item;
  }
  setKurs(item) {
    this.formKurs = item;
  }

  setPr1(item) {
    this.pr1 = item;
  }
  setPr2(item) {
    this.pr2 = item;
  }
  setPr3(item) {
    this.pr3 = item;
  }
  setPr4(item) {
    this.pr4 = item;
  }

  searchPredm() {
    let test1;
    let test2;
    let test3;
    let test4;
    this.outputPR = [];

    this.specsList.some(elem => {
      for (let i = 0; i < elem.predmetAll.length; i++) {
        if (elem.predmetAll[i] == this.pr2){ 
            if(elem.predmetAll[i] == elem.predmetAll[0]){
               test2 = 'x1' }
            else if(elem.predmetAll[i] != elem.predmetAll[0]){
              test2 = 'x2';
            }
            else{
              test2 = 'x3';
            }   
        }
    }
    for (let i = 0; i < elem.predmetAll.length; i++) {
      if (elem.predmetAll[i] == this.pr3){ 
          if(elem.predmetAll[i] == elem.predmetAll[0]){
             test3 = 'x1' }
          else if(elem.predmetAll[i] != elem.predmetAll[0]){
            test3 = 'x2';
          }
          else{
            test3 = 'x3';
          }   
      }
  }
  for (let i = 0; i < elem.predmetAll.length; i++) {
    if (elem.predmetAll[i] == this.pr4){ 
        if(elem.predmetAll[i] == elem.predmetAll[0]){
           test4 = 'x1' }
        else if(elem.predmetAll[i] != elem.predmetAll[0]){
          test4 = 'x2';
        }
        else{
          test4 = 'x3';
        }   
    }
}

    if (test2 == 'x1' && test3 == 'x2' || test2 == 'x2' && test3 == 'x1' || test2 == 'x1' && test4 == 'x2' || test2 == 'x2' && test4 == 'x1'){
      this.outputPR.push(elem);
    }
    
    test1 = 'x3';
    test2 = 'x3';
    test3 = 'x3';
    test4 = 'x3';
  })



}



}
