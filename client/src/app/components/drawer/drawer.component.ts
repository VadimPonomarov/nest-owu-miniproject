import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  _showDrawer: boolean = false;

  constructor(private _store: StorageService) {
  }

  ngOnInit(): void {
    this._store.showDrawer.subscribe(value => {
      this._showDrawer = value;
    });
  }
}
