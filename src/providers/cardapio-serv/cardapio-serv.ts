import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/*
  Generated class for the CardapioServProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardapioServProvider {

  items: FirebaseListObservable<any[]>;


  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
    
  }

  public getAll(){
    return this.items;
  }

  private save (item: any){
    if(item.$nome){
      return this.items.update(item.$nome, { nome: item.nome});
    } else {
      return this.items.push({nome: item.nome, foto: item.foto, preco: item.preco});
    }
  }

  public uploadSalvar(item: any){
    let itemcarrinho = { nome: item.nome, foto: item.foto, preco: item.preco};
    this.save(itemcarrinho);
    }
  }
