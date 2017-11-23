import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Item } from './../administracao/administracao';
import { CardapioServProvider } from './../../providers/cardapio-serv/cardapio-serv';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  novoItemSubscription: Subscription;
  Item$: FirebaseObjectObservable<Item>;
  novoItem = {} as Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoItemId = this.navParams.get('novoItemId');
    console.log(novoItemId);

    this.Item$ = this.database.object(`Lista de Items/${novoItemId}`);
    this.novoItemSubscription =
      this.Item$.subscribe(novoItem => this.novoItem = novoItem);
  }

  editarNovoItem(novoItem: Item) {
    this.Item$.update(novoItem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoItemSubscription.unsubscribe();
  }

}
