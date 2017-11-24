import { RelatoriosPage } from './../pages/relatorios/relatorios';
import { CardapioPessoaPage } from './../pages/cardapiopessoa/cardapiopessoa';
import { ListaItemPage } from './../pages/lista-item/lista-item';
import { EditarItemPage } from './../pages/editar-item/editar-item';
import { CadastroItemPage } from './../pages/cadastro-item/cadastro-item';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { CarrinhoPage } from './../pages/carrinho/carrinho';
import { CardapioPage } from './../pages/cardapio/cardapio';
import { SobrePage } from './../pages/sobre/sobre';
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
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { auth } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CardapioServProvider } from '../providers/cardapio-serv/cardapio-serv';
import { CarrodecomprasPage } from '../pages/carrodecompras/carrodecompras';

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
    SobrePage,
    CardapioPage,
    CarrinhoPage,
    CadastroItemPage,
    EditarItemPage,
    ListaItemPage,
    CardapioPessoaPage,
    RelatoriosPage,
    CarrodecomprasPage
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
    SobrePage,
    CardapioPage,
    CarrinhoPage,
    CadastroItemPage,
    EditarItemPage,
    ListaItemPage,
    CardapioPessoaPage,
    RelatoriosPage,
    CarrodecomprasPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    auth,
    FirebaseProvider,
    CardapioServProvider,
    AngularFireDatabase,
    Geolocation

  ]
})
export class AppModule {}
