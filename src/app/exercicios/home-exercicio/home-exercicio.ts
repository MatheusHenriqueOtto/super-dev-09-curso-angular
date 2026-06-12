import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-exercicio',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home-exercicio.html',
  styleUrl: './home-exercicio.scss',
})
export class HomeExercicio {}
