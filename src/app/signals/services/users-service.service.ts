import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public http = inject(HttpClient);
  public url: string = 'https://reqres.in/api/users';

  constructor() {}

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.url}/${id}`).pipe(
      map((response) => response.data),
      tap(console.log)
    );
  }
}
