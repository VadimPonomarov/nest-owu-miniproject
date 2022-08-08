import {Component} from '@angular/core';

import {IService} from '../../../interfaces';
import {IClinicService} from '../../../interfaces/clinic-service.interface';
import {ApiServicesService, StorageService} from '../../../services';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

    my_services: IService[];
    clinic_service: IClinicService[];
    items: any[] = [];
    panelOpenState = false;

    constructor(private _apiServices: ApiServicesService, private _store: StorageService) {
        _store.showLoader.next(true);
        this._apiServices.getAll()
            .subscribe(resp => {
                this.my_services = resp;
                _store.showLoader.next(false);
            });
    }

    handleClick(event: any, item: IService) {
        this._apiServices.getClinicByServiceId(item.id.toString())
            .subscribe(clinic_service => {
                this.clinic_service = clinic_service;
                const arr = new Set();
                clinic_service.forEach(item => {
                    arr.add(JSON.stringify({name: item.clinic, arr: []}));
                });
                const newArr = new Set();
                arr.forEach(item => newArr.add(JSON.parse(item as string)));
                newArr.forEach((item: any) => {
                    const value = clinic_service.filter(val => val.clinic === item.name);
                    this.items.push([item.name, value]);
                });
            });
        document.querySelectorAll('mat-chip.active')
            .forEach(el => {
                el.classList.remove('active');
            });

        document.getElementById(event.target.id)
            ?.classList.add('active');
    }


}
