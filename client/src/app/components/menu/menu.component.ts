import {Component} from '@angular/core';
import {IMenuItem} from './interfaces/menu-item';
import {MenuConstants} from '../../constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: IMenuItem[] = MenuConstants;

}
