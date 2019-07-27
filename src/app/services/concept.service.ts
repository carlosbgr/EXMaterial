import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Concept } from '../models/concept.model';
@Injectable({
  providedIn: 'root',
})
export class ConceptService {
  constructor(
    private firestore: AngularFirestore,
  ) {}

  public createConcept(concept: Concept) {
    return this.firestore.collection('concepts').add(concept);
  }

  public getConcept(documentId: string) {
    return this.firestore.collection('concepts').snapshotChanges();
  }

  public getConceptById(id: number) {
    return this.firestore.collection('concepts', ref =>
      ref.where('id', '==', id)).snapshotChanges();
  }

  public getConcepts() {
    return this.firestore.collection('concepts').snapshotChanges();
  }

  public updateConcept(documentId: string, data: any) {
    return this.firestore.collection('concepts').doc(documentId).set(data);
  }
}
