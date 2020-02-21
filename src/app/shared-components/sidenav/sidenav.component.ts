import {ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {CommonService} from '../../services/common/common.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnDestroy {

    private _mobileQueryListener: () => void;
    isLoggedIn = false;

    mobileQuery: MediaQueryList;
    hovering = false; // is the navigation menu hovered over
    hasLeft = true; // used for handling hover behavior on nav menu
    open = false; // is the nav menu open
    userMenu = false; // toggles menu mode on mobile
    goingMobile = false; // we use this to prevent the flash of mobile sidenav when making the window smaller

    constructor(
        private commonService: CommonService,
        changeDetectorRef: ChangeDetectorRef,
        private readonly router: Router,
        media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => {
            if (this.mobileQuery.matches) {
                this.goingMobile = true;
            }
        };
        this.mobileQuery.addListener(this._mobileQueryListener);
       

        this.commonService.navToggled$.subscribe(
            value => {
                this.open = !this.open;
                changeDetectorRef.detectChanges();
            }
        );
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    toggleDesktopMenu() {
        this.commonService.toggleMenu();
    }

    leave() {
        this.hovering = false;
        this.hasLeft = true;
    }

    enter() {
        if (this.hasLeft) {
            this.hovering = true;
        }
        this.hasLeft = false;
    }

    closeNav() {
        this.open = false;
        this.hovering = false;
        this.hasLeft = false;
    }

    logout(){
      this.commonService.logout();
      this.commonService.disableSidebar(true);
      this.router.navigateByUrl('login');

    }
}
