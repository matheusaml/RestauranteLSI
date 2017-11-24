import { CarrinhoPage } from './../carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Item } from '../../models/item/Item';
import { EditarItemPage } from '../editar-item/editar-item';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';

@IonicPage()
@Component({
  selector: 'page-cardapiopessoa',
  templateUrl: 'cardapiopessoa.html',
})

export class CardapioPessoaPage {

  Item$: FirebaseListObservable<Item[]>
  param: string = "";
  param2: string = ""; 
  param3: string = ""; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.Item$ = this.database.list('Lista de Items');
  }

  selecionarNovoItem(novoItem: Item) {
    this.navCtrl.push(CarrinhoPage, { 'param' : novoItem.nome, 'param2' : novoItem.preco, 'param3' : novoItem.descricao});
  }

  cadastroPage() {
    this.navCtrl.push(CadastroItemPage);
  }

}
