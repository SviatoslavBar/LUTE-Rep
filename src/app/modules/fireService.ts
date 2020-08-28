import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
    providedIn:'root'
})
export class fireService {
    
    constructor(private firestore: AngularFirestore){}

    Login(email,password){
      return this.firestore.collection('users').ref.where('userEmail','==',email).where('userPassword','==',password)
    }
   
    getFireItems() {
      return this.firestore.collection('dataNews').ref.orderBy('counter', 'desc')
    }
    getSubmitedNews(){
      return this.firestore.collection('newsSubmit').ref
    }

    getFireAllNews() {
      return this.firestore.collection('dataNews').ref.orderBy('counter', 'desc').limit(10)
    }
    getFireNewsType(type) {
      return this.firestore.collection('dataNews').ref.orderBy('counter', 'desc').where(type, '==', true)
    }
    
    getFireItemsLimit(lim) {
      return this.firestore.collection('dataNews', q => q.orderBy('counter', 'desc').limit(lim)).snapshotChanges()
    }

    getFireSchedule(){
      return this.firestore.collection('schedule').snapshotChanges()
    }

    getSchedule(faculty, spec, kurs){
      return this.firestore.collection(`schedule`).ref.where('faculty', '==', faculty).where('spec', '==', spec).where('kurs', '==', kurs)
    }
   
    getObjectById(id) { 
      return this.firestore.collection('dataNews').doc(id).valueChanges()
    }
    getAlbumById(id) { 
      return this.firestore.collection('gallery').doc(id).valueChanges()
    }
    getCounter() { 
      return this.firestore.collection('countPost').doc('countPost').valueChanges()
    }

    getOrderLimit(bool, lim){
      return this.firestore.collection('dataNews', ord => ord.orderBy('counter', 'desc')).ref.where('main', '==', bool).limit(lim)
    }
    /* getOrderLimit(lim){
      return this.firestore.collection('dataNews', q => q.orderBy('counter', 'desc').limit(lim)).snapshotChanges()
    } */
    
    deleteFire(id){
      return this.firestore.doc('dataNews/' + id).delete();
    }
    deleteSubmit(id){
      return this.firestore.doc('newsSubmit/' + id).delete();
    }

    getGalleryWhere(name){
      return this.firestore.collection(`gallery`).ref.where('albumName', '==', name)
    }


    getGallery() {
      return this.firestore.collection('gallery').ref.orderBy('counter', 'desc')
    }
    getGalleryById(id) { 
      return this.firestore.collection('gallery').doc(id).valueChanges()
    }


    //////////// DOESNT WORK (yet) --------v

    createPolicy(newPost){
      return this.firestore.collection('lutedb').add(newPost);
    }
    updatePolicy(newPost){
      delete newPost.id;
      this.firestore.doc('lutedb/' + newPost.id).update(newPost);
    }

    getSpecs(faculty, spec, kurs){
      return this.firestore.collection(`schedule`).ref.where('faculty', '==', faculty).where('spec', '==', spec).where('kurs', '==', kurs);
    }
    

}
