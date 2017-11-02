import { CarrinhoPage } from './../carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';


/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})

export class CardapioPage {
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
