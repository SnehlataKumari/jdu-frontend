import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

const loggedInRoutes = [
  { routePath: '/private-room', title: 'Private Room' },
  { routePath: '/documents', title: 'Download Documents' },
  { routePath: '/messages', title: 'View Private messages' },
];
const routes = [
  { routePath: '/', title: 'HOME_MENU_TITLE' },
  { routePath: '/suggestions', title: 'SUGGESTION_MENU_TITLE' },
  //TODO: Change as per locale conversion
  { routePath: '/yatrayen', title: 'Yatrayen'},
  // { routePath: '/impacts', title: 'IMPACTS_MENU_TITLE' },
  { routePath: '/brand-bihar', title: 'BIHAR_BRAND' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationMenus = [];
  lastScroll = 0
  sticky = false
  headerAppear = false
  menuOpen = false
  constructor(public authService: AuthService, private router: Router) { 
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.menuOpen =false;
      }
    })
  }

  ngOnInit(): void {
    this.navigationMenus = this.authService.isLoggedIn() ? this.loggedInRoutes : routes;
    window.addEventListener('scroll', this.scroll, true); //third parameter
    var specifiedElement = document.getElementById('navbar-toggle1');

    //I'm using "click" but it works with any event
    document.addEventListener('click', (event:any) => {
      var isClickInside = specifiedElement.contains(event.target);

      if (!isClickInside) {
        this.menuOpen =false;
      }
    });

  }

  get loggedInRoutes() {
    return this.authService.getLogginedUserRole() === 'BLOCK_LEVEL_USER'
      ? loggedInRoutes
      : [{ routePath: '/users-dashboard', title: 'Dashboard' }, ...loggedInRoutes,];
  }

  outerHeight(el) {
    var height = el.offsetHeight;
    var style = window.getComputedStyle(el);
  
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }
  toggle=() => {
    setTimeout(()=> this.menuOpen = !this.menuOpen )
  }
  scroll=() =>{

    /* ===================================
     sticky nav Start
     ====================================== */
    let headerHeight = this.outerHeight(document.querySelectorAll('nav')[0]);
      if (document.scrollingElement.scrollTop >= headerHeight) {
         this.sticky=true;
      } else if (document.scrollingElement.scrollTop <= headerHeight) {
        this.sticky=false;
      }


    /* ===================================
     header appear on scroll up
     ====================================== */
    var st =document.scrollingElement.scrollTop;
    if (st > this.lastScroll) {
     this.headerAppear =false
    } else
    this.headerAppear = true
    this.lastScroll = st;
    if (this.lastScroll <= headerHeight)
    this.headerAppear =false
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
