import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    showWelcome: boolean = false;

    constructor(private _store: StorageService) {
    }

    ngOnInit(): void {
        this._store.showWelcome
            .subscribe(() => {
                this.showWelcome = this._store.showWelcome.getValue();
                setTimeout(() => {
                    this._store.showWelcome.next(false);
                    this.showWelcome = this._store.showWelcome.getValue();
                }, 50000);
            });
    }


}
