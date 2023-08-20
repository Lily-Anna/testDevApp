import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/'; // Замените на URL вашего json-server

  constructor(private _http: HttpClient) { }

  // Получить все данные
  getPosts(endpoint: string): Observable<any[]> {
    const url = `${this.baseUrl}posts`;
    return this._http.get<any[]>(url);
  }

  // Получить данные по ID
  getPostById( id: number): Observable<any> {
    const url = `${this.baseUrl}posts/${id}`;
    return this._http.get<any>(url);
  }
}
