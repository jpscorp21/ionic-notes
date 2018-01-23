import { Injectable } from '@angular/core';

@Injectable()
export class NotesService{
    notes = [
    {
      id:1, title:"Note 1", description: "Descripcion de nota 1"
    },

    {
      id:2, title:"Note 2", description: "Descripcion de nota 2"
    },

    {
      id:3, title:"Note 3", description: "Descripcion de nota 3"
    }
  ]


  public getNotes() {
      return this.notes;
  }


  public getNotesById(id: number) {
    return this.notes.filter((note, i) => {
      return note.id == id;
    })[0] || {id: null, title:null, description: null};
  }


  public createNote(note) {
    this.notes.push(note);
  }


  public editNote(note) {
    for(let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == note.id) {
        this.notes[i] = note;
      }
    }
  }


  public deleteNote(note) {
    for(let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == note.id) {
        this.notes.splice(i, 1);
      }
    }
  }
}