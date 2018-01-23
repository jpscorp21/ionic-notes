import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from "../../services/notes.services";
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public detailPage = DetailPage;
  public notes = [];

  constructor(public navCtrl: NavController, public notesService: NotesService) {
    this.notes = notesService.getNotes();
  }

  goToDetail(id) {
    this.navCtrl.push(this.detailPage, {id: id});
  }

  createNote(){
    this.navCtrl.push(this.detailPage, {id: 0});
  }

  
}
