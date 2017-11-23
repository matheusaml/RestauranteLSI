import { NgModule } from '@angular/core';
import { ListaItemPage } from './lista-item';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ListaItemPage],
  imports: [IonicPageModule.forChild(ListaItemPage)],
  entryComponents: [ListaItemPage]
})
export class ListaItemPageModule { }