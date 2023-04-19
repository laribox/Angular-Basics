import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  Inject,
} from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { localStorageToken } from './localStorage.token';
import { NavigationStart, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  role = 'admin';

  // this.header
  @ViewChild('header', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  //@ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChildren(HeaderComponent) headers!: QueryList<HeaderComponent>;
  constructor(
    @Inject(localStorageToken) private localStorageToken: Storage,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        console.log('navigation started');
      });
    this.localStorageToken.setItem('name', 'hotel hilton');
    // this.name.nativeElement.innerHTML = '<h2><center>yes man</center></h2>';
  }
  ngAfterViewInit(): void {
    //console.log(this.headers);
    // this.headers.last.title = 'abd';
    //this.headers.forEach((component) => (component.title = 'Hilton Hotel'));
    // const header = this.vcr.createComponent(HeaderComponent);
    // header.instance.title = 'hilton hotel';
  }
}
