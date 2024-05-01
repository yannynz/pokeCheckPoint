import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeListComponent } from './components/pokelist/pokelist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkMicro2';

}
