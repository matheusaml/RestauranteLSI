import { LoginPage } from './../login/login';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { auth } from '../../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: auth, public geolocation: Geolocation) {
  }
    teste(){
    this.navCtrl.setRoot(HomePage);
  }

  public signOut() {
    this.auth.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadMap(){
    
       this.geolocation.getCurrentPosition().then((position) => {
    
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
         let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.ROADMAP
         }
    
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
       }, (err) => {
         console.log(err);
       });
    
     }
  }
