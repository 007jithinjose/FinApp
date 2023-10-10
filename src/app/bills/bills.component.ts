import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../master.service';
import { bills } from '../Models/bills';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit{

  billsList :any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns=["bill_Id","bill_Date","bill_Name","bill_Amount"];
  constructor(private service:MasterService){
    
  }
  ngOnInit(): void {
    this.service.GetBills().subscribe(res=>{
      this.billsList= res;
      // console.log(this.billsList);
      this.dataSource= new MatTableDataSource<bills>(this.billsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
