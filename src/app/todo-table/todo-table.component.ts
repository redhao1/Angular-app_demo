import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TableService } from '../services/table.service';
import { Item } from '../models/Item.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit, AfterViewInit{ 
  displayedColumns: string[] = ['id', 'title'];
  dataSource = new MatTableDataSource<Item>();

  constructor(private tableService: TableService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.tableService.getData().subscribe( {
      next: (data: Item[]) => {
        console.log(data);
      this.dataSource.data = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Getting data completed")
      }
    })
  }
}
