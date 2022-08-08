import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {LocalStorageService, StorageService} from '../../services';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, AfterViewChecked {
    _showDrawer: boolean = false;

    constructor(private _store: StorageService, private _localStore: LocalStorageService) {
        const {accessToken} = this._localStore.getTokenPair();
        this._store.isLoggedIn.next(!!accessToken);
    }

    ngOnInit(): void {
        this._store.showDrawer.subscribe(value => {
            this._showDrawer = value;
        });
    }

    ngAfterViewChecked(): void {
        this._store.isLoggedIn.subscribe(() => {
            const menuLoginElem = document.getElementById('m-logout');
            const sideMenuLoginElem = document.getElementById('sm-logout');
            if (this._store.isLoggedIn.getValue()) {
                menuLoginElem?.classList.remove('visible');
                sideMenuLoginElem?.classList.remove('visible');
            } else {
                menuLoginElem?.classList.add('visible');
                sideMenuLoginElem?.classList.add('visible');
            }
        });
    }

}
