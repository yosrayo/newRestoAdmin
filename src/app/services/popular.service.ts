import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class PopularService {

  constructor(private angularFirestore :AngularFirestore) { }
  getPlatDoc(data){
    return this.angularFirestore.collection('popular').doc(data.payload.doc.id).valueChanges()}
  

  getPlasList() {  return this.angularFirestore.collection('popular').snapshotChanges();}


 
 
 
    supprimeProduit(data) {
      return this.angularFirestore.collection("popular").doc(data.payload.doc.id).delete();
    }

   
   
    
    platAdd(plat) {  
      return this.angularFirestore.collection('popular').add(plat);  
    } 
    updateUser(recordID, record) {
      this.angularFirestore.doc('popular/' + recordID).update(record);
    }
  
  

}
