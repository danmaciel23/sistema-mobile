import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://127.0.0.1:8000/veiculos/api/'; 

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any[]> {
    const token = 'e29d1bc43db2855b012eda9141231cc7774ab233';
    const headers = new HttpHeaders({'Authorization': `Token ${token}`});

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
 
}
