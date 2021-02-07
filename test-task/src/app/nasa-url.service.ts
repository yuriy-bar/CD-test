import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nasa } from './nasa';

@Injectable({
  providedIn: 'root',
})
export class NasaUrlService {
  constructor(private http: HttpClient) {}

  private nasaUrlApi =
    'https://api.nasa.gov/planetary/apod?api_key=8YDVgVuKzVl3dx2IYvRmBjidFPtF3bANvzwHZs2s';

  getNasa(): Observable<Nasa[]> {
    return this.http.get<Nasa[]>(this.nasaUrlApi);
  }
}
