import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { BlogEntry } from '../BlogEntry';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('blogEntries', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]

})
export class BlogComponent implements OnInit {

  selectedBlogEntry: BlogEntry;

  onSelect(blogEntry: BlogEntry): void {
    this.selectedBlogEntry = blogEntry;
  }

  itemCount: number = 4;
  // btnText: string = 'Blogeintrag hinzufügen';
  // blogText: string = 'My first life goal';
  blogEntries = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.blogEntry.subscribe(res => this.blogEntries = res);
    this.itemCount = this.blogEntries.length;
    this._data.changeBlog(this.blogEntries);
  }
}
