import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarrosHome } from "../carros-home/carros-home";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet, CarrosHome],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
