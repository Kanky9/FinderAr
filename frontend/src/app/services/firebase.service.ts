import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  collectionData,
  query,
  deleteDoc,
  updateDoc,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
} from 'firebase/storage';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private utilsSvc: UtilsService
  ) {}

  /* ==================== Autenticación ==================== */

  getAuth() {
    return getAuth();
  }

  /* ========== Acceder ========== */
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  /* ========== Crear Usuario ========== */
  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  /* ========== Actualizar Usuario ========== */
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  /* ========== Enviar mail para restablecer contraseña ========== */
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  /* ==================== Base de Datos ==================== */

  /* ========== Obtener un Documento ========== */
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  /* ========== Setear un Documento ========== */
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }
}