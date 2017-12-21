import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private blogs = new BehaviorSubject<any>(['The initial blog', 'Another silly life blog']);
  blog = this.blogs.asObservable();

  constructor() { }

  changeBlog(blog) {
    this.blogs.next(blog)
  }
}
