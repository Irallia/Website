import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BlogEntry } from './BlogEntry';

@Injectable()
export class DataService {

  // private blogEntries = new BehaviorSubject<any>([
  private blogEntries = new BehaviorSubject<BlogEntry[]>([
    { id: 1, name: 'Erster Eintrag: Abschied...',
      text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ', 
      author: 'Lydia', imagePath:'/images/MonkeyBotton.jpg'},
    { id: 2, name: 'Kurz vor dem Abflug', text: 'blubb', author: 'Lydia', imagePath:''},
    { id: 3, name: '48 Stunden oder doch nur 38 Stunden?', text: 'blubb', author: 'Stefan', imagePath:''}
  ]);
  blogEntry = this.blogEntries.asObservable();

  constructor() { }

  changeBlog(blogEntry) {
    this.blogEntries.next(blogEntry)
  }
}
