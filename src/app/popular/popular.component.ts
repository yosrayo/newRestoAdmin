import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category } from '../services/category.model';
import { CategoryService } from '../services/category.service';
import { Plat } from '../services/plat.model';
import { PopularService } from '../services/popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  public myform:FormGroup;
  plat ={} as any;
  Plat: Plat = new Plat();
  list = {}as any ;
  listCat ={} as any ;
  item : any;
  cat = Category ;
  id:any;
  upid:any;

  myForm : FormGroup;
  editForm : FormGroup;

  filePath:String;
  downloadURL: Observable<string>;
  fb = '';
 
  constructor(public popularservice : PopularService, private storage: AngularFireStorage,
    
    public formBuilder:FormBuilder,public router:Router, public catS : CategoryService)
     {
      
    
   }
   ngOnInit(): void {
    this.popularservice .getPlasList().subscribe((res) => {
      this.list = res;
      
      console.log("PLAT",this.list);
    
    });
    this.catS.getPlasList().subscribe((res) => {
      this.listCat = res;
    });
console.log("idzzzzzz",this.list.payload.doc.id)
  }




   
supprime (data ​)
{ if (confirm(' Are you sure you want to delete '+ data.payload.doc.data().Name +'?')) 

{ this.popularservice.supprimeProduit(data);
}
}
Updatarecord(recorddata)
{
  console.log('id',this.upid);

  let record = {
  name : recorddata.NameE,
  price: recorddata.priceE,
  image: recorddata.imageE,
  description : recorddata.descriptionE,
  categorie: recorddata.categoryE,
  }

  console.log('id',record);

  
  this.popularservice.updateUser(this.upid, record);
 
}
@ViewChild('myInput')
myInputVariable:ElementRef;

 
  onSubmit() {  
  this.storage.upload('/images'+this.filePath, this.filePath);
  this.plat.image=this.fb;
   this.popularservice.platAdd(this.plat);
   






  
     alert("plat added successfully");
       
        //alert('SUCCESS!!');   
        this.plat.Name="" ;
        this.plat.price="";
        this.myInputVariable.nativeElement.value = "";
        this.plat.description="";
        this.plat.category="";
       // this.plat.id=this.plat.payload.doc.id;
        
}


onFileSelected(event: any) {
   
  var n = Date.now();
  this.filePath = event.target.files[0]
  const file = event.target.files[0];
  const filePath = `ProduitImage/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`ProduitImage/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url) => {
          if (url) {
            this.fb = url;
          }
          console.log(this.fb);
        });
      })
    )
    .subscribe((url) => {
      if (url) {
        console.log(url);
      }
    });
}

getId(id:any){
  this.upid=id;
  
}
}
