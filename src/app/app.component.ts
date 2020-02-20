import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cine2';

  constructor(
    private sidebarService: NbSidebarService,
    private router: Router
  ) {}

  toggle(): void {
    this.sidebarService.toggle();
  }

  navigation(path: string[]): void {
    this.router.navigate(path);
  }
}
