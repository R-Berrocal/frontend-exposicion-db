import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoUrl=environment.productoUrl;
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.productoUrl}`);
  }

  public detail(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.productoUrl}${id}`);
  }


  public save(producto:Producto):Observable<any>{
    return this.httpClient.post<any>(`${this.productoUrl}`,producto);
  }

  public update(id:number,producto:Producto):Observable<any>{
    return this.httpClient.put<any>(`${this.productoUrl}${id}`,producto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.productoUrl}${id}`);
  }
  
}
