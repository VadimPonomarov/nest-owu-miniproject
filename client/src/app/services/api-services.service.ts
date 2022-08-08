import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IService} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {IClinicService} from '../interfaces/clinic-service.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<IService[]> {
    return this._httpClient
      .get<IService[]>([environment.base_api_url, 'services']
        .join('/'));
  }

  getClinicByServiceId(serviceId: string): Observable<IClinicService[]> {
    return this._httpClient
      .get<IClinicService[]>([environment.base_api_url, 'clinics/service', serviceId]
        .join('/'));
  }

}
