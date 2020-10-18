import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  search(search: string) {
    return this.http.get(`${environment.gitHubUrl}/search/users?q=${search}`);
  }

  getFollowers(username: string) {
    return this.http.get(`${environment.gitHubUrl}/users/${username}/followers`);
  }

  getFollowing(username: string) {
    return this.http.get(`${environment.gitHubUrl}/users/${username}/following`);
  }

  getRepository(username: string) {
    return this.http.get(`${environment.gitHubUrl}/users/${username}/repos`);
  }

}
