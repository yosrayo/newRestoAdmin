import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Plat } from '../services/plat.model';



@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  public myform:FormGroup;
  plat ={} as any;
  Plat: Plat = new Plat();
  list = {}as any ;
  
  
  myForm : FormGroup;
 

  constructor(public platservice : PlatService, 
    
    public formBuilder:FormBuilder,public router:Router)
     {
      
    
   }
   
  ngOnInit(): void {
    this.platservice .getPlasList().subscribe((res) => {
      this.list = res;
      
      console.log("PLAT",this.list);
    
    });
    

  }
 
  onSubmit() {  
   this.platservice.platAdd(this.plat);
     alert("ajouter avec succés");
        
        //alert('SUCCESS!!');    

}

}
