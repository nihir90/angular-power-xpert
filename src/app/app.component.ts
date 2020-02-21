import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonService } from "src/app/services/common/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  showNotice = true;
  isLoggedIn = false;

  currentTheme: Theme;
  themes = [
    new Theme("pxb-blue", "Blue Theme"),
    new Theme("pxb-blue-dark", "Blue Dark Theme")
  ];

  constructor(
    private renderer: Renderer2,
    private commonService: CommonService,
    private readonly router: Router
  ) {
    if (!this.commonService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigateByUrl("login");
      this.commonService.logout();
    } else {
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
    this.applyTheme(this.themes[0]);
    this.commonService.sidebarData.subscribe(data => {
      if (data && this.commonService.isLoggedIn()) {
        this.isLoggedIn = true;
      }
    });
    this.commonService.sidebarDataLogout.subscribe(data => {
      if (data && !this.commonService.isLoggedIn()) {
        this.isLoggedIn = false;
      }
    });
  }

  toggleTheme() {
    let themeIndex = 0;
    for (let theme of this.themes) {
      themeIndex++;
      if (theme === this.currentTheme) {
        break;
      }
    }

    if (themeIndex === this.themes.length) {
      themeIndex = 0;
    }

    this.removeTheme(this.currentTheme);
    this.applyTheme(this.themes[themeIndex]);
  }

  private applyTheme(theme: Theme): void {
    this.renderer.addClass(document.body, theme.className);
    this.currentTheme = theme;
  }

  private removeTheme(theme: Theme): void {
    this.renderer.removeClass(document.body, theme.className);
    this.currentTheme = undefined;
  }
}

class Theme {
  constructor(public className: string, public themeName: string) {}
}
