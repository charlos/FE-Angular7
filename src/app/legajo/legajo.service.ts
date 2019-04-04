import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface LegajosApi {
  items: LegajosItem[];
  total_count: number;
}

export interface LegajosItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null,
  Nombre: string;
  Apellido: string;
  Codigo: string;
  Descripcion: string;
  Activo: number;
  Legajo: string;
  Cuil: string;
  Cbu: string;
  Direccion: string;
};

@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  constructor(private http: HttpClient) { }

  public async getLegajos(sort: string, order: string, page: number): Promise<LegajosApi> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}`;

    let legajosApi: LegajosApi = { items: null, total_count: null };
    legajosApi.items = await this.http.get<LegajosItem[]>(requestUrl, { headers }).toPromise();
    legajosApi.total_count = legajosApi.items.length;

    return legajosApi;
  }

  public async getLegajo(legajoId: number): Promise<LegajosItem> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajoId}`;

    let legajosItem: LegajosItem;
    legajosItem  = await this.http.get<LegajosItem>(requestUrl, { headers }).toPromise();

    return legajosItem;
  }
  
  public async postLegajo(legajo: LegajosItem): Promise<LegajosItem> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}`;

    let legajosItem: LegajosItem;
    legajosItem = await this.http.post<LegajosItem>(requestUrl, legajo, { headers }).toPromise();

    return legajosItem;
  }

  public async putLegajo(legajo: LegajosItem): Promise<LegajosItem> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajo.ID}`;

    let legajosItem: LegajosItem;
    legajosItem = await this.http.put<LegajosItem>(requestUrl, legajo, { headers }).toPromise();

    return legajosItem;
  }

  public async deleteLegajo(legajo: LegajosItem): Promise<LegajosItem> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajo.ID}`;

    let legajosItem: LegajosItem;
    //legajosItem = await this.http.delete<LegajosItem>(requestUrl, legajo, { headers }).toPromise();

    return legajosItem;
  }
}
