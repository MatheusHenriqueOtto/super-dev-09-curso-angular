import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio01-dados-pessoais',
  imports: [FormsModule],
  templateUrl: './exercicio01-dados-pessoais.html',
  styleUrl: './exercicio01-dados-pessoais.scss',
})
export class Exercicio01DadosPessoais {
  campoNome = signal<string>("");
  campoSobrenome = signal<string>("");
  campoIdade = signal<number | null>(null);

  apresentarDados(): void {
    const nomeCompleto: string = `${this.campoNome} ${this.campoSobrenome}`;
    if(this.campoIdade == null){
      alert("Digite uma idade valida")
    }  
    const idade: number = this.campoIdade;
    alert(`Nome completo: ${nomeCompleto}
    Idade: ${idade}`);

  }
}
