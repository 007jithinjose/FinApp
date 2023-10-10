import { Component, OnInit, ViewChild } from '@angular/core';
import { receipts } from '../Models/receipts';
import { MasterService } from '../master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  receiptsList:any;
  dataSource:any;
  displayedColumns=["receipt_Id","receipt_Date","receipt_Name","receipt_Amount"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:MasterService){
    
  }
  ngOnInit(): void {
    this.service.GetReceipts().subscribe(res=>{
      this.receiptsList=res;
      console.log(this.receiptsList);
      this.dataSource= new MatTableDataSource<receipts>(this.receiptsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
