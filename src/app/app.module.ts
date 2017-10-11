import { SobrePage } from './../pages/sobre/sobre';
import { AdministracaoPage } from './../pages/administracao/administracao';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginPage } from './../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { auth } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';


var config = {
  apiKey: "AIzaSyBITZurRDoUk6fnA9NftDytegR5c32yVMk",
  authDomain: "restaurante-f6140.firebaseapp.com",
  databaseURL: "https://restaurante-f6140.firebaseio.com",
  projectId: "restaurante-f6140",
  storageBucket: "restaurante-f6140.appspot.com",
  messagingSenderId: "355554439013"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0673d468'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    AdministracaoPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    AdministracaoPage,
    SobrePage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    auth,
    FirebaseProvider,

  ]
})
export class AppModule {}
