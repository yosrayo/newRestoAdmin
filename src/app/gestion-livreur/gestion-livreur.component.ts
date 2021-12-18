import { Component, OnInit } from '@angular/core';
import { LivreurService } from '../services/livreur.service';
import { Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livreur } from '../services/livreur.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gestion-livreur',
  templateUrl: './gestion-livreur.component.html',
  styleUrls: ['./gestion-livreur.component.css']
})
export class GestionLivreurComponent implements OnInit {
  public myform:FormGroup;
  myGroup : FormGroup;
  livreur ={} as any;
  Livreur: Livreur = new Livreur();
  list = {}as any ;
  item : any;
 
  

  updateForm :FormGroup;
  submitted = false;
  upid: any;
 
 

  constructor(public LivreurService : LivreurService,  private angularFirestore: AngularFirestore,
   public  act : ActivatedRoute,
    public formBuilder:FormBuilder,public router:Router)
     {
    
   }
  
   supprime (data ​)
   { if (confirm(' Are you sure you want to delete '+ data.payload.doc.data().FirstName +'?')) 
  
   { this.LivreurService.supprimeLivreur(data);
   }
  }
  /* 
  <div *ngIf="yearerror.errors.pattern">
			<span style="background-color: red">Only Numbers allowed </span>
		</div>
    */
     id = this.act.snapshot.paramMap.get('id');
  ngOnInit(): void {
  
    
    this.LivreurService .getLivreurList().subscribe((res) => {
      this.list = res;
      
      console.log("Category",this.list);
    
    });
    

  }
  get f() { return this.myform.controls; }


  Updatarecord(recorddata)
  {
    console.log('id',this.upid);

    let record = {
    FirstName : recorddata.FirstNameE,
    LastName : recorddata.LastNameE,
    adresseMail: recorddata.adresseMailE,
    age : recorddata.ageE,
    phoneNumber: recorddata.phoneNumberE,
    }

    console.log('id',record);

    
    this.LivreurService.updateUser(this.upid, record);
    this.livreur.FirstNameE ="" ;
        this.livreur.LastNameE="";
        this.livreur.ageE="";
        this.livreur.phoneNumberE="";
        this.livreur.adresseMailE="";
   
  }
    
 


  onSubmit() {  
  

   this.LivreurService.LivreurAdd(this.livreur);
     alert("added successfully");
        
        //alert('SUCCESS!!'); 
        this.livreur.FirstName ="" ;
        this.livreur.LastName="";
        this.livreur.age="";
        this.livreur.phoneNumber="";
        this.livreur.adresseMail="";


}
onReset() {
  this.submitted = false;
  this.myform.reset();
}
getId(id:any){
  this.upid=id;
  
}



}

