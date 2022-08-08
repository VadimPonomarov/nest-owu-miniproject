import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    showDrawer = new BehaviorSubject<boolean>(false);
    showWelcome = new BehaviorSubject<boolean>(false);
    showLoader = new BehaviorSubject<boolean>(false);
    isLoggedIn = new BehaviorSubject<boolean>(false);
}
