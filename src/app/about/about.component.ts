import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  template: `
    <p>
      This is what I'm all about. <a href="" (click)="sendMeHome()"><strong>Take me back</strong></a>.
    </p>
    <ul>
      <li *ngFor="let blog of blogEntries">
        {{ blog }}
      </li>
    </ul>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  blogEntries: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id))
  }

  ngOnInit() {
    this._data.blogEntry.subscribe(res => this.blogEntries = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
