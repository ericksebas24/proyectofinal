import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // eslint-disable-next-line max-len
  async register( nickname: string, email: string, password: string){
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  const user: firebase.User=firebase.auth().currentUser;

  user.updateProfile({
    displayName:nickname
  });
  return user;
  }

  async login(email: string, password: string): Promise<firebase.User> {
    const credentials: firebase.auth.UserCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
    return credentials.user;
  }

  stateUser = () =>

new Promise((resolve, reject)=>{
  firebase.auth().onAuthStateChanged((user)=> {
    if(user) {
      resolve(user);
    }else{
      reject(null);
    }
  });
});
}

