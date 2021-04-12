import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable() // provide service in module
export class GlobalService {

  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDih1jQ-qkoQYo9ah0tzHGAstAYPSYI_K0DgwpcOsWzYrH6F8p7FGr5qqS9lzu80PzgKwX22hI83tZB0Q0'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
