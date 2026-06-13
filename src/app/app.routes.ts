import { Routes } from '@angular/router';
import { CidadeBlumenau } from './aula/cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './aula/cidade-indaial/cidade-indaial';
import { BoasVindas } from './aula/boas-vindas/boas-vindas';
import { CarrosHome } from './exercicios/carros-home/carros-home';
import { CarrosCivicsi } from './exercicios/carros-civicsi/carros-civicsi';
import { CarrosRx7 } from './exercicios/carros-rx7/carros-rx7';
import { CarrosUptsi } from './exercicios/carros-uptsi/carros-uptsi';
import { FormCamposBasico } from './aula/form-campos-basico/form-campos-basico';
import { HomeExercicio } from './exercicios/home-exercicio/home-exercicio';
/* import { Exercicio01DadosPessoais } from './exercicios/exercicio01-dados-pessoais/exercicio01-dados-pessoais';*/
import { ProdutoEditar } from './aula/produtos/produto-editar/produto-editar';
import { ProdutoListar } from './aula/produtos/produto-listar/produto-listar';
import { ProdutoCadastrar } from './aula/produtos/produto-cadastrar/produto-cadastrar';
import { ClientesCadastrar } from './exercicios/clientes/clientes-cadastrar/clientes-cadastrar';


export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau },
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial },
    { path: "boas-vindas", loadComponent: () => BoasVindas },
    { path: "carros/home", loadComponent: () => CarrosHome },
    { path: "carros/civicsi", loadComponent: () => CarrosCivicsi },
    { path: "carros/rx7", loadComponent: () => CarrosRx7 },
    { path: "carros/uptsi", loadComponent: () => CarrosUptsi },
    { path: "formulario/campos-basico", loadComponent: () => FormCamposBasico },
    { path: "exercicios/home", loadComponent: () => HomeExercicio},
/*  { path: "exercicio/01", loadComponent: () => Exercicio01DadosPessoais}, */
    { path: "produtos/cadastrar", loadComponent: () => ProdutoCadastrar },
    { path: "produtos", loadComponent: () => ProdutoListar},
    { path: "produtos/editar/:id", loadComponent: () => ProdutoEditar},
    { path: "clientes/cadastrar", loadComponent: () => ClientesCadastrar},
    { path: "cliente"}
];
