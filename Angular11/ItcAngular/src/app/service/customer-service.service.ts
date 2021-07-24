import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http : HttpClient) {

   }

   getUserDetails() {
    return this.http.get('http://localhost:8082/customers');         
  } 

   //Get implementation
   getCustomerDetails() {
    return this.http.get('http://localhost:8082/customers');         
  }

  //Get customer by Id
  getCustomerDetailsById(id) {
    return this.http.get('http://localhost:3000/customers/get/'+ `${id}`);         
  }

  //Update customer
  putCustomerDetails(id, data) {
    return this.http.put('http://localhost:3000/customers/update/' + `${id}`, data);         
  }

  //Create new customer
  postCustomerDetails(data) {
    return this.http.post('http://localhost:3000/customers/create', data);         
  }

  //delete customer
  deleteCustomerDetails(id) {
    return this.http.delete('http://localhost:3000/customers/delete/' + `${id}`);         
  }
}
