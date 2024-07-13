import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {}

  register(user: User): Observable<any> {
    this.users.push(user);
    return of(user).pipe(
      delay(1000), // Simula un retraso en la respuesta del servidor
      catchError((error: any) => {
        return of({ error: true, message: 'Error en el registro. Inténtalo de nuevo.' });
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return of({ success: true, message: 'Inicio de sesión exitoso!' }).pipe(delay(1000));
    } else {
      return of({ success: false, message: 'Credenciales incorrectas. Inténtalo de nuevo.' }).pipe(delay(1000));
    }
  }
}
