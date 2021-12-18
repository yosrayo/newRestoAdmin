import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Commande} from '../services/commande.model';
import { Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  public myform:FormGroup;
  commande ={} as any;
  Commande: Commande = new Commande();
  list = {}as any ;
  item : any;
  id:any;
  
  myForm : FormGroup;



  constructor(public CommandeService : CommandeService,  private storage: AngularFireStorage,
    
    public formBuilder:FormBuilder,public router:Router)
     {
      
    
   }
   supprime (data ​)
   { if (confirm(' Are you sure you want to delete ?')) 
  
   { this.CommandeService.supprimeCommande(data);
   }
  }
   
  ngOnInit(): void {
    this.CommandeService.getCommandeList().subscribe((res) => {
      this.list = res;
      
      console.log("Commande",this.list);
    
    });
    

  }


  onSubmit() {  
    this.commande.FirstName='';
    this.commande.Quantity='';
    this.commande.LastName='';
    this.commande.product=0;
    this.commande.prixUnit=0;
 
   this.CommandeService.CommandeAdd(this.commande);
     alert("ajouter avec succés");
        
        //alert('SUCCESS!!');    
      



}
}