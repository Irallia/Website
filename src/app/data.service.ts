import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BlogEntry } from './BlogEntry';

@Injectable()
export class DataService {

  // private blogEntries = new BehaviorSubject<any>([
  private blogEntries = new BehaviorSubject<BlogEntry[]>([
    { id: 1, name: 'Erster Eintrag: Abschied...',
      text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ', 
      author: 'Lydia', imagePaths: ['assets/images/photo_2015-12-12.jpg', 'assets/images/photo_2015-12-12.jpg']},
    { id: 2, name: 'Kurz vor dem Abflug', text: 'blubb', author: 'Lydia', imagePaths:[]},
    { id: 3, name: '48 Stunden oder doch nur 38 Stunden?', text: 'blubb', author: 'Stefan', imagePaths:[]}
  ]);
  blogEntry = this.blogEntries.asObservable();

  constructor() { }

  changeBlog(blogEntry) {
    this.blogEntries.next(blogEntry)
  }
}
