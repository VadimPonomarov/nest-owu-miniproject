import {Component} from '@angular/core';
import {IMenuItem} from '../menu/interfaces/menu-item';
import {MenuConstants} from '../../constants';
import {StorageService} from '../../services';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  menuItems: IMenuItem[] = MenuConstants;

  constructor(private _store: StorageService) {
  }

  handleClick() {
    this._store.showDrawer.next(false);
  }
}
