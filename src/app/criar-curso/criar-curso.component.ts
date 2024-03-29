import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService],
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];
  constructor(private _cursosServce: CursosService) {}

  ngOnInit(): void {
    this.cursos = this._cursosServce.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosServce.addCurso(curso);
  }
}
