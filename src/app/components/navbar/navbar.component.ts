import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'show-side-nav', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ]
})
export class NavbarComponent {

  isNavbarCollapsed: boolean = true;

  constructor(readonly toastr: ToastrService) { }

  menu: MenuLink[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Get To Know Us',
      link: '/get-to-know-us'
    },
    {
      title: 'Events',
      link: '/events'
    }
  ]

}

interface MenuLink {
  title: string
  link: string
}