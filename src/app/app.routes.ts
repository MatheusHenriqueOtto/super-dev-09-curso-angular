import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { CarrosHome } from './carros-home/carros-home';
import { CarrosCivicsi } from './carros-civicsi/carros-civicsi';
import { CarrosRx7 } from './carros-rx7/carros-rx7';
import { CarrosUptsi } from './carros-uptsi/carros-uptsi';

export const routes: Routes = [
    { path: "cidade-blumenau", loadComponent: () => CidadeBlumenau },
    { path: "cidade-indaial", loadComponent: () => CidadeIndaial },
    { path: "boas-vindas", loadComponent: () => BoasVindas },
    { path: "carros-home", loadComponent: () => CarrosHome },
    { path: "carros-civicsi", loadComponent: () => CarrosCivicsi },
    { path: "carros-rx7", loadComponent: () => CarrosRx7 },
    { path: "carros-uptsi", loadComponent: () => CarrosUptsi }
];
