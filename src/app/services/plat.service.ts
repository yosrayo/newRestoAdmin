import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Plat } from './plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  
 
  platcollection="products";

  constructor(private angularFirestore :AngularFirestore) { }
  getPlatDoc(data){
    return this.angularFirestore.collection('products').doc(data.payload.doc.id).valueChanges()}
  

  getPlasList() {  return this.angularFirestore.collection('products').snapshotChanges();}


 
 
 
    supprimeProduit(data) {
      return this.angularFirestore.collection("products").doc(data.payload.doc.id).delete();
    }

   
   
    
    platAdd(plat) {  
      return this.angularFirestore.collection('plats-Collection').add(plat);  
    } 
    updateProduct(recordID, record) {
      this.angularFirestore.doc('plats-Collection/' + recordID).update(record);
    }
  
  

    

  }


