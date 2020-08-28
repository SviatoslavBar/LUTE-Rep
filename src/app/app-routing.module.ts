import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewStudentsComponent } from './pages/new-students/new-students.component';

import { FacultyMevComponent } from './pages/faculty/faculty-mev/faculty-mev.component';
import { FacultyIFComponent } from './pages/faculty/faculty-if/faculty-if.component';
import { FacultyUFComponent } from './pages/faculty/faculty-uf/faculty-uf.component';
import { FacultyTUSOComponent } from './pages/faculty/faculty-tuso/faculty-tuso.component';
import { FacultyAfterInfoComponent } from './pages/faculty/faculty-after-info/faculty-after-info.component';
import { FacultyAfterScienceComponent } from './pages/faculty/faculty-after-science/faculty-after-science.component';

import { HistoryComponent } from './pages/history/history.component';

/* import { StudyprocessComponent } from './pages/university/studyprocess/studyprocess.component';
import { SpetsComponent } from './pages/university/spets/spets.component';
import { RektoratComponent } from './pages/university/rektorat/rektorat.component';
import { KutsikComponent } from './pages/university/rektorat/kutsik/kutsik.component'; */
import { ContactsComponent } from './pages/contacts/contacts.component';
import { VstupComponent } from './pages/vstup/vstup.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'abit' },

  /* 
  { path: 'studyProcess',component:StudyprocessComponent },
  { path: 'spets',component:SpetsComponent },
  { path: 'rektorat',component:RektoratComponent },
  { path: 'rektor',component:KutsikComponent }, */

  { path: 'abit',component:NewStudentsComponent },
  { path: 'faculty-mev',component:FacultyMevComponent },
  { path: 'faculty-ief',component:FacultyIFComponent },
  { path: 'faculty-uf',component:FacultyUFComponent },
  { path: 'faculty-tuso',component:FacultyTUSOComponent },
  { path: 'faculty-inf',component:FacultyAfterInfoComponent },
  { path: 'faculty-after',component:FacultyAfterScienceComponent },
  { path: 'history',component:HistoryComponent },
  { path: 'contacts',component:ContactsComponent },
  { path: 'vstupInfo',component:VstupComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
