import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _localStore: LocalStorageService, private _router: Router) {
  }

  ngOnInit(): void {
    this._localStore.deleteTokenPair();
    this._router.navigate(['auth']);
    alert('You are logged out');
  }

}
