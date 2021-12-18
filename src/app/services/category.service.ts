import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  itemsCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  pDoc: AngularFirestoreDocument<Category>;

  constructor(private angularFirestore :AngularFirestore) { }
  getPlatDoc(data){
    return this.angularFirestore.collection('categorie').doc(data.payload.doc.id).valueChanges()}
  

  getPlasList() {  return this.angularFirestore.collection('categorie').snapshotChanges();}


  updateUser(recordID, record) {
    this.angularFirestore.doc('categorie/' + recordID).update(record);
  }
 
 
    supprimeProduit(data) {
      return this.angularFirestore.collection("categorie").doc(data.payload.doc.id).delete();
    }
   
    
    CategoryAdd(category) {  
      return this.angularFirestore.collection('categorie').add(category);  
    } 
   
  
  

    

  }


