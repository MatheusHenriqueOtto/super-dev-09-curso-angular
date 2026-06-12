import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio01-dados-pessoais',
  imports: [FormsModule],
  templateUrl: './exercicio01-dados-pessoais.html',
  styleUrl: './exercicio01-dados-pessoais.scss',
})
export class Exercicio01DadosPessoais {
  nome = signal<string>("");
  sobrenome = signal<string>("");
  idade = signal<number | null>(null);

  apresentarDados(): void {

  }
}
