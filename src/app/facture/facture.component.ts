import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommandeService } from '../services/commande.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Commande} from '../services/commande.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  providers: [DatePipe]
  
})

export class FactureComponent implements OnInit {

  maDate = Date();
  d=Date();
  commande ={} as any;
  Commande: Commande = new Commande();
  list = {}as any ;
  listProductComm= {}as any ;
 amount :number;
  to :any;
  x:number;

constructor(private datePipe: DatePipe, public CommandeService : CommandeService,){
    this.maDate = this.datePipe.transform(this.maDate, 'dd/MM/yyyy');
    this.d=this.datePipe.transform(this.d,"shortTime");
}

  ngOnInit(): void {
    this.getTotal();
    this.CommandeService.getCommandeList().subscribe((res) => {
      this.list = res;
      
      console.log("Commande",res);
     //this.listProductComm= this.list[i].payload.doc.data().products
 
    //this.amount = parseInt(this.list.prixUnit) *  parseInt(this.list.Quantity) ;
    });
    //console.log("ggggggjjjjjjj",this.listProductComm[1]);
   
    for (var i = 0; i < this.listProductComm.length; i++) {
     console.log("kkkkkk", this.listProductComm[1].payload.doc.data().image)
     
          
          
        
    }


  }
 
  print(): void {
     let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
       popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto'); 
       popupWin.document.open();
        popupWin.document.write(` <html> 
        <head>
         <title>Print tab</title> 
        
          </head>
           <body onload="window.print();window.close()">
           ${printContents}</body> </html>` );
            popupWin.document.close();
            
           }
          

           getTotalN() {
            let totalN = 0;
            for (var i = 0; i < this.list.length; i++) {
                 
                    totalN +=1;
                    
                
            }
            return totalN;
            
        }
        


        getTotal() {
          let total = 0;
          for (var i = 0; i < this.list.length; i++) {
           // console.log("gggggggggg", this.list[i].payload.doc.data().products[i])
           this.listProductComm= this.list[i].payload.doc.data().products;
                  total +=Number(this.list[i].payload.doc.data().totolprice);
                  
                
              
          }
          console.log("gggggjjjjjjjjjjjjjjjggggg", this.listProductComm)
          this.x= total;
          
          return total;
          
        }
        
      

  

}
