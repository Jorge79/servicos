import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: string[] = ['Agular', 'React', 'Vue'];

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

  constructor() {
    console.log('CursosService');
  }
}
