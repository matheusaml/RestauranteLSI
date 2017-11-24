import { CarrodecomprasPage } from './../carrodecompras/carrodecompras';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { CardapioServProvider } from './../../providers/cardapio-serv/cardapio-serv';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Item } from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Subscription } from 'rxjs/Subscription';


/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  param: string;
  param2: string; 
  param3: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public toastCtrl: ToastController) {
    this.param = navParams.get('param');
    this.param2 = navParams.get('param2');
    this.param3 = navParams.get('param3');
  }
  showToastWithCloseButton(novoItem: Item) {
    const toast = this.toastCtrl.create({
      message: 'O produto foi adicionado ao carrinho com sucesso',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
