import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

 
 
 

  constructor(private angularFirestore :AngularFirestore) { }
  getCommandeDoc(data){
    return this.angularFirestore.collection('order').doc(data.payload.doc.id).valueChanges()
  }
  

  getCommandeList() {  return this.angularFirestore.collection('order').snapshotChanges();}


 
 
 
    supprimeCommande(data) {
      return this.angularFirestore.collection("order").doc(data.payload.doc.id).delete();
    }

 
   
    
    CommandeAdd(plat) {  
      return this.angularFirestore.collection('order').add(plat);  
    } 
  
  
  

    

  }
