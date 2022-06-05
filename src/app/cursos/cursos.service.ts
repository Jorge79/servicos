import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  emitirCursoCriado = new EventEmitter();
  static criouNovoCurso = new EventEmitter();

  private cursos: string[] = ['Agular', 'React', 'Vue'];

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

  constructor() {
    console.log('CursosService');
  }
}
