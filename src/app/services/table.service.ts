import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }
}
