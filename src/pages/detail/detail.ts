import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { NotesService } from '../../services/notes.services';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public notes = {id: null, title: null, description: null};
  public id = null;
  public title: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public noteService: NotesService, 
              public viewCtrl: ViewController, 
              public toastCtrl: ToastController) {
    
    this.id = this.navParams.get("id");
    if(this.id != 0) {
      this.notes = noteService.getNotesById(this.id);
      this.title = "Editar Nota";
    } else {
      this.title = "Guardar Nota";
    }
    
    
  }


  addNote() {
    let mensaje;
    if (this.id != 0) {
      this.noteService.editNote(this.notes);
      mensaje = "Nota editada exitosamente";

    } else {
      this.notes.id = Date.now();
      this.noteService.createNote(this.notes);
      mensaje = "Nota creada exitosamente";
    }
    
    this.showToast(mensaje);
    this.viewCtrl.dismiss();    
  }


  deleteNote() {
    this.noteService.deleteNote(this.notes);
    this.showToast("Eliminado exitosamente");
    this.viewCtrl.dismiss();
  }


  showToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: "bottom"
    })

    toast.present();
  }
}
