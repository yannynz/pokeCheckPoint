import { Component } from '@angular/core';
import { PokeService } from "../../services/poke.service";
import { Poke } from '../../interfaces/poke';
@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.css'
})
export class PokeListComponent {
  pokeList: Poke[] = [

  ];
  constructor(private pokeService: PokeService) {

  }

  listar(): void {
    this.pokeService.listar().subscribe(
      (poke) => {
        this.pokeList = poke;
      }
    )
  }





}
