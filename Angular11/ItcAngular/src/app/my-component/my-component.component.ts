import { Component, OnInit } from '@angular/core';
import { Customer } from './customer'; 
import { CustomerServiceService } from '../service/customer-service.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  /*custArray:Array<Customer> = new Array();
  tmpArray: Array<Customer> = new Array();*/
  getData: any[];

  //Define a customer based model
  /*model = new Customer(0,'',0,'',0);
  model1 = new Customer(0,'',0,'',0);
 */

  count =0;
  message: string = "";
  isUpdate = false;

 customer = {
  "id": 0,
  "name": "",
  "location": "",
  "age": 0,
  "pincode": 0
};

  constructor(private _httpService : CustomerServiceService, private logger: NGXLogger) { 
    
  }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer();
  }

  //Method to create a customer
 /* createCustomer(id:number){
    this.logger.debug(id);
    if(id != 0){
      let index = this.custArray.findIndex(ele =>ele.id === id);     
      this.custArray[index] = this.model;
    } else {
    this.count++;
    this.custArray.push(new Customer(this.count,this.model.name, this.model.age, this.model.location, this.model.pincode));
    
    }

    this.logger.info(JSON.stringify(this.custArray));
    this.reset();
  }

  //Method to reset the form
  reset(){
    this.model = new Customer(0,'',0,'',0);
    
  }

  //Method to delete a Customer
  deleteCustomer(id:number){
    this.logger.debug(id);
    let index:number = this.findIndexOfCustomerId(id);
    this.logger.debug("Index"+ index);
    if(index != -1){
    this.custArray.splice(index,1);
    this.logger.debug("Deleted Customer at index" + index);
    }
  }

  //Method to update a Customer
  updateCustomer(id:number){
    this.logger.debug(id);
    this.tmpArray = JSON.parse(JSON.stringify(this.custArray));
    this.model = this.tmpArray.find(ele =>ele.id === id);
  }

  findIndexOfCustomerId(id:number) : number {
    let count:number =-1;
    var keepGoing:boolean = true;
    this.custArray.forEach(ele =>{
      if(keepGoing){
      count = count+1;
      if(ele.id == id){
        console.log("Count : "+ count);
        keepGoing = false;
        
      }
    }
    });
    return count;
  }*/

  getCustomer(){
    this.logger.info("fetching customer list");
    this._httpService.getCustomerDetails() 
 
        .subscribe((res : any[])=>{
          this.logger.info(res);
        
            this.getData = res;
 
    }, error => {
      this.logger.error("Error while fetching the Customer details");
    });

    
  }

  getUser() {
    this._httpService.getUserDetails()

      .subscribe((res: any[]) => {
        this.logger.debug("Customer Details are: " + res);
        this.getData = res;
      });
  }

  reset() {
    this.customer = {
      "id": 0,
      "name": "",
      "location": "",
      "age": 0,
      "pincode": 0
    };
    this.isUpdate=false;
    this.message = '';
  }

  deleteCustomer(id : number) : void{
    this.logger.info("Id for delete: "+id)
    this._httpService.deleteCustomerDetails(id)
    .subscribe(
        response => {
          this.logger.debug(response);
          this.getCustomer();
        },
        error => {
        this.logger.error(error);
        }
    );

    this.message = 'Customer was deleted';
  }

    

  createCustomer(id: number) : void{
    if(this.isUpdate == true){
      this.isUpdate = false;
      this._httpService.putCustomerDetails(this.customer.id, this.customer)
        .subscribe(
            response => {
              console.log(response);
              this.message = 'The customer was updated!';
              this.getCustomer();
          },
          error => {
            console.log(error);
        });
    } else {
      ++this.count;
      const data = {
        id: id,
        name: this.customer.name,
        age: this.customer.age,
        location:this.customer.location,
        pincode: this.customer.pincode
        };
        this._httpService.postCustomerDetails(data)
        .subscribe(
        response => {
        this.logger.log(response);
        this.message = 'The customer was created!';
        this.getCustomer();
        },
        error => {
          this.message = 'Error while submit';
        this.logger.error(error);
        });
        
    }
    
  
   
    this.reset();
  }

  //Method to update a Customer
  updateCustomer(id:number){
    this.logger.debug(id);
   this.isUpdate = true;
    this._httpService.getCustomerDetailsById(id) 
 
    .subscribe((res : any)=>{
      this.logger.info(res);
    
      this.customer = res;

}, error => {
  this.logger.error("Error while fetching the Customer details");
});
this.message = '';
  }
}
