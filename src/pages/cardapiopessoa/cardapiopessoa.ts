import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Item } from '../../models/item/Item';
import { EditarItemPage } from '../editar-item/editar-item';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';
import { CarrinhoPage } from '../carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-cardapiopessoa',
  templateUrl: 'cardapiopessoa.html',
})

export class CardapioPessoaPage {

  Item$: FirebaseListObservable<Item[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.Item$ = this.database.list('Lista de Items');
  }

  selecionarNovoItem(novoItem: Item) {
    this.actionSheetCtrl.create({
      title: `${novoItem.nome}`,
      buttons: [
        {
          text: 'Adicionar',
          handler: () => {
            this.navCtrl.push(CarrinhoPage,
              { novoItemId: novoItem.$key });

          }
        }
      ]
    }).present();
  }

  cadastroPage() {
    this.navCtrl.push(CadastroItemPage);
  }

}
