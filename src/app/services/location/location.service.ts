import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PositionOptions, Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentLocation() {
    if(!Capacitor.isPluginAvailable('Geolocation')) {
      return;
    }
    let options: PositionOptions = {
      maximumAge: 3000,
      timeout: 10000,
      enableHighAccuracy: false
    };
    return await Geolocation.getCurrentPosition(options);
  }
}
