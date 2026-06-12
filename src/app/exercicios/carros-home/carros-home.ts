import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-carros-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './carros-home.html',
  styleUrl: './carros-home.scss',
})
export class CarrosHome { }