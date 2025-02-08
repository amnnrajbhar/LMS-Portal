import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  apiUrl: any = 'http://localhost:5000/users';
  apiUrlMember: any = 'http://localhost:5000/members';
  apiUrlPricingplan: any = 'http://localhost:5000/pricingplan';
  constructor(private http: HttpClient) { }


  saveNewMember(formData: any) {
    debugger;
    return this.http.post(this.apiUrlMember, formData);
  }

  getMembersList() {
    return this.http.get(this.apiUrlMember);
  }

  getUserFormList() {
    return this.http.get(this.apiUrl);
  }

  saveNewUser(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
  deleteUser(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  editUser(formData: any,id:any) {
    return this.http.put(this.apiUrl + '/' + id, formData);
  }
//Pricing Plan Form
  getPricingPlanFormList() {
    return this.http.get(this.apiUrlPricingplan);
  }

  saveNewPricingPlan(formData: any) {
    return this.http.post(this.apiUrlPricingplan, formData);
  }
  deletePricingPlan(id: any) {
    return this.http.delete(this.apiUrlPricingplan + '/' + id);
  }
  editPricingPlan(formData: any,id:any) {
    return this.http.put(this.apiUrlPricingplan + '/' + id, formData);
  }
}
