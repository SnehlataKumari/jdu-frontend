import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

const loggedInRoutes = [
  { routePath: '/private-room', title: 'Private Room' },
  { routePath: '/documents', title: 'Download Documents' },
];
const routes = [
  { routePath: '/', title: 'Home' },
  { routePath: '/suggestions', title: 'Suggestion' },
  // { routePath: '/yatrayen', title: 'Yatrayen'},
  { routePath: '/impacts', title: 'Impacts' },
  { routePath: '/brand-bihar', title: 'Bihar Brand' },
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
    this.navigationMenus = this.authService.isLoggedIn() ? loggedInRoutes : routes;
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
