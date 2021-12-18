import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../services/category.service';
import { Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../services/category.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {  Observable } from 'rxjs';
import {finalize }from 'rxjs/operators';
import { ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-gestion-category',
  templateUrl: './gestion-category.component.html',
  styleUrls: ['./gestion-category.component.css']
})
export class GestionCategoryComponent implements OnInit {
  public myform:FormGroup;
  category ={} as any;
  Category: Category = new Category();
  list = {}as any ;
  item : any;
  upid : any;
  
  myForm : FormGroup;

  filePath:String;
  downloadURL: Observable<string>;
  fb = '';

  constructor(public CategoryService : CategoryService,  private storage: AngularFireStorage,
    
    public formBuilder:FormBuilder,public router:Router)
     {
      
    
   }
   supprime (data ​)
   { if (confirm(' Are you sure you want to delete '+ data.payload.doc.data().Name +'?')) 
  
   { this.CategoryService.supprimeProduit(data);
   }
  }
  Updatarecord(recorddata)
{
  console.log('id',this.upid);

  let record = {
  name : recorddata.name,
  
  image: recorddata.image,
  
  }

  console.log('id',record);

  
  this.CategoryService.updateUser(this.upid, record);
  this.category.name="";
  this.myInputVariable.nativeElement.value = "";
 
}
  getId(id:any){
    this.upid=id;
    
  }
   
  ngOnInit(): void {
    this.CategoryService .getPlasList().subscribe((res) => {
      this.list = res;
      
      console.log("Category",this.list);
    
    });
    

  }


  
  @ViewChild('myInput')
  myInputVariable:ElementRef;

  onSubmit() {  
    this.storage.upload('/images'+this.filePath, this.filePath);
    this.category.image=this.fb;
   this.CategoryService.CategoryAdd(this.category);
   
     alert("ajouter avec succés");
        
        //alert('SUCCESS!!');   

        this.category.name="";
        this.myInputVariable.nativeElement.value = "";



}
onFileSelected(event: any) {
   
  var n = Date.now();
  this.filePath = event.target.files[0]
  const file = event.target.files[0];
  const filePath = `CategoryImage/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`CategoryImage/${n}`, file);
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



}
