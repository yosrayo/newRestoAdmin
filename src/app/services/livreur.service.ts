import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Livreur} from './livreur.model';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  itemsCollection: AngularFirestoreCollection<Livreur>;
  items: Observable<Livreur[]>;
  itemDoc: AngularFirestoreDocument<Livreur>;
  col : 'Livreur-Collection';

  constructor(private angularFirestore :AngularFirestore, ) { }
  getLivreurDoc(data){
    return this.angularFirestore.collection('Livreur-Collection').doc(data.payload.doc.id).valueChanges()}
  

  getLivreurList() {  return this.angularFirestore.collection('Livreur-Collection').snapshotChanges();}


 
 
 
    supprimeLivreur(data) {
      return this.angularFirestore.collection("Livreur-Collection").doc(data.payload.doc.id).delete();
    }
   
    
    LivreurAdd(category) {  
      return this.angularFirestore.collection('Livreur-Collection').add(category);  
    } 



updateUser(recordID, record) {
  this.angularFirestore.doc('Livreur-Collection/' + recordID).update(record);
}
 

    

}