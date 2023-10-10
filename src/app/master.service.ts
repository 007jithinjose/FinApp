import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { bills } from './Models/bills';
import { receipts } from './Models/receipts';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  bills_Api=" http://localhost:3000/bills";
  receipts_Api=" http://localhost:3000/receipts";

  constructor(private http:HttpClient) { }
  GetBills():Observable<bills>{
    return this.http.get<bills>(this.bills_Api);
  }
  GetReceipts():Observable<receipts>{
    return this.http.get<receipts>(this.receipts_Api);
  }
}
