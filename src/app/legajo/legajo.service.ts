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
    let legajoCompleto = {
      Nombre: "Carlos",
      Apellido: "Flores",
      Codigo: "CARLOSF",
      Descripcion: "Algooo",
      Activo: 1,
      Legajo: "Legajo 1",
      Cuil: "36548787",
      Direccion: "Av. Cabildo 2779",
      Paisid: 1,
      Provinciaid: 1,
      Localidadid: 1,
      Zonaid: 1,
      Telefono: "212131321312",
      Email: "cflores@finnegans.com.ar",
      Modalidadcontratacionid: 1,
      Categoria: "Categoria 1",
      Tarea: "Tarea 1",
      Situacionid: 1,
      Condicionid: 1,
      Condicionsiniestradoid: 1,
      Obrasocialid: 1,
      Conveniocolectivoid: 1,
      Valorfijolrt: 20,
      Conyuge: {
        Nombre: "Juana",
        Apellido: "Pereza",
        Codigo: "JUANA",
        Descripcion: "",
        Activo: 1,
        Cuil: "21121321321",
        Obrasocialid: 1
      },
      Hijos: [
        {
          Nombre: "Fausto",
          Apellido: "Flores",
          Codigo: "FAUSTO",
          Descripcion: "descripcion",
          Activo: 1,
          Cuil: "231321321321",
          Obrasocialid: 1
        }
      ],
      Remuneracion: 1200,
      HorasMensualesNormales: "15",
      Fechaalta: "0000-12-31T20:06:12-03:53",
      Fechabaja: "0000-12-31T20:06:12-03:53",
      Centrodecostoid: 1,
      Cbu: "12333333333333333333333"
    };
    legajoCompleto.Legajo = legajo.Legajo;
    legajoCompleto.Nombre = legajo.Nombre;
    legajoCompleto.Apellido = legajo.Apellido;
    legajoCompleto.Cbu = legajo.Cbu;


    legajosItem = await this.http.post<LegajosItem>(requestUrl, legajoCompleto, { headers }).toPromise();

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

  public async deleteLegajo(legajo: LegajosItem) {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}/${legajo.ID}`;

    let res = await this.http.delete(requestUrl, { headers }).toPromise();
    return res;
  }
}
