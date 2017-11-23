import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AdministracaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 export class Item {
   nome: string;
   tipo: string;
   descricao: string;
   preco: string; 
 }

@IonicPage()
@Component({
  selector: 'page-administracao',
  templateUrl: 'administracao.html',
})
export class AdministracaoPage {

  public lista: AngularFireList<any>;
  item: Item;
  public listaItems: Observable<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.lista = db.list('/items');
    this.item = new Item();
    this.listaItems = this.lista.valueChanges();
  }

  cadastrarItem(){
      this.lista.push(this.item).then(() => {
        this.item = new Item();
        console.log('cadastrando');
        this.navCtrl.push(HomePage);
      });
      }
  
    

}
