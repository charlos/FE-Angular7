import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface LegajosApi {
  items: LegajosItem[];
  total_count: number;
}

export interface HijoItem {
  ID: number;
  nombre: string;
  apellido: string;
  codigo: string;
  descripcion: string;
  cuil: string;
  obrasocialid?: number;
  DeletedAt?: Date;
}

export interface LegajosItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null,
  nombre: string;
  apellido: string;
  codigo: string;
  descripcion: string;
  activo: number;
  legajo: string;
  cuil: string;
  cbu: string;
  direccion: string;
  hijos: [HijoItem]
};

@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  constructor(private http: HttpClient) { }

  public async getLegajos(sort: string, order: string, page: number): Promise<LegajosApi> {
    const token = JSON.parse(localStorage.getItem('currentUser')).token
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
    const token = JSON.parse(localStorage.getItem('currentUser')).token
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
    const token = JSON.parse(localStorage.getItem('currentUser')).token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}`;

    let legajosItem: LegajosItem;
    let legajoCompleto = {
      nombre: "Carlos",
      apellido: "Flores",
      codigo: "CARLOSF",
      descripcion: "Algooo",
      activo: 1,
      legajo: "Legajo 1",
      cuil: "36548787",
      direccion: "Av. Cabildo 2779",
      paisid: 1,
      provinciaid: 1,
      localidadid: 1,
      zonaid: 1,
      telefono: "212131321312",
      email: "cflores@finnegans.com.ar",
      modalidadcontratacionid: 1,
      categoria: "Categoria 1",
      tarea: "Tarea 1",
      situacionid: 1,
      condicionid: 1,
      condicionsiniestradoid: 1,
      obrasocialid: 1,
      conveniocolectivoid: 1,
      valorfijolrt: 20,
      conyuge: [{
        nombre: "Juana",
        apellido: "Pereza",
        codigo: "JUANA",
        descripcion: "",
        activo: 1,
        cuil: "21121321321",
        obrasocialid: 1
      }],
      hijos: [
      ],
      remuneracion: 1200,
      horasMensualesNormales: "15",
      fechaalta: "0000-12-31T20:06:12-03:53",
      fechabaja: "0000-12-31T20:06:12-03:53",
      centrodecostoid: 1,
      cbu: "12333333333333333333333"
    };
    legajoCompleto.legajo = legajo.legajo;
    legajoCompleto.nombre = legajo.nombre;
    legajoCompleto.apellido = legajo.apellido;
    legajoCompleto.cbu = legajo.cbu;
    legajoCompleto.hijos = legajo.hijos;


    legajosItem = await this.http.post<LegajosItem>(requestUrl, legajoCompleto, { headers }).toPromise();

    return legajosItem;
  }

  public async putLegajo(legajo: LegajosItem): Promise<LegajosItem> {
    const token = JSON.parse(localStorage.getItem('currentUser')).token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajo.ID}`;

    let legajosItem: LegajosItem;
    legajosItem = await this.http.put<LegajosItem>(requestUrl, legajo, { headers }).toPromise();

    return legajosItem;
  }

  public async deleteLegajo(legajo: LegajosItem) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajo.ID}`;

    let res = await this.http.delete(requestUrl, { headers }).toPromise();
    return res;
  }
}
