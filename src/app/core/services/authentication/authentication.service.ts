import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

export interface IUser {
  fullname: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  public signInWithEmailAndPassword({
    fullname,
    email,
    password,
  }: IUser): Promise<{}> {
    const database = getDatabase();

    return new Promise((resolve, reject) => {
      firebase
        .createUserWithEmailAndPassword(firebase.getAuth(), email, password)
        .then(() => {
          set(ref(database, 'users/' + email), {
            email,
            fullname,
          }).then(() => resolve(true));
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }
}
