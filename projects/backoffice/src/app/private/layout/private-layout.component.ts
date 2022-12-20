import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '@cad-core/services';
import { OverlayPanel } from 'primeng/overlaypanel';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IMenu } from '@cad-private/shared/models/IMenu.interface';
import Menus from 'projects/backoffice/src/assets/data/navigation-titles.data.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cad-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls:['./private-layout.component.scss']
})
export class PrivateLayoutComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild('headerProfileDropdown') profileDropdown: OverlayPanel;
  username: string;
  buttonActive: boolean;
  childComponenetName: string;
  menuList: Observable<IMenu[]>;
  constructor(
    private observer: BreakpointObserver,
    private router: Router, private httpService:HttpClient
  ) {
    this.buttonActive = false;
  }

  ngOnInit(): void {
    this.childComponenetName = "vehicles";
    this.menuList=this.httpService.get<IMenu[]>('assets/data/navigation-titles.data.json');
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:1300px)']).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'side';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  changeTitle() {
    this.childComponenetName = this.router.url.split('/')[2];
  }

  logout(): void {
    this.profileDropdown.hide();
    //this._store.dispatch(new Logout());
  }


}
