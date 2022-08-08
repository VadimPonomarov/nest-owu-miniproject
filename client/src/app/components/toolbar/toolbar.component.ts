import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
})


export class ToolbarComponent implements OnInit {
  _showDrawer: boolean = false;
  _showLoader: boolean = false;

  constructor(private _store: StorageService) {
  }

  ngOnInit(): void {
    this._store.showDrawer
      .subscribe(() => this._showDrawer = this._store.showDrawer.getValue());
    this._store.showLoader
      .subscribe(() => this._showLoader = this._store.showLoader.getValue());
  }

  toggleShowDrawer() {
    this._store.showDrawer.next(!this._store.showDrawer.getValue());
  }
}
