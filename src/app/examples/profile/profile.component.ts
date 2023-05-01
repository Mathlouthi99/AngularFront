import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    displayMap() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
      
            const marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
          }, () => {
            alert('Unable to get your location');
          });
        } else {
          alert('Geolocation is not supported by your browser');
        }
      }
      
      
      
      
      openTrackingMap() {
        // Check if the order status is "shipped"
          // Display the map
          this.displayMap();

          
      }
      
    constructor() { }

    ngOnInit() {}

}
