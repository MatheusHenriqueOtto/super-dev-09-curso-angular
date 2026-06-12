import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-campos-basico',
  imports: [FormsModule],
  templateUrl: './form-campos-basico.html',
  styleUrl: './form-campos-basico.scss',
})
export class FormCamposBasico {
  //Signal vamos utilizar para relacionar um campo por exemplo com a variavel
  nome = signal<string>("");
  sobrenome = signal<string>("");
  resultadoNomeCompleto: string = "";

  numero01 = signal<number | null>(null);
  numero02 = signal<number | null>(null);
  operacao = signal<string>("");
  

  apresentarNomeCompleto() : void{
    const nomeCompleto: string = `${this.nome()} ${this.sobrenome()}`;
    this.resultadoNomeCompleto = nomeCompleto;
    alert(`Nome completo: ${nomeCompleto}`);
  }

  realizarCalculo(): void {
    if(this.numero01() === null) {
      alert("Preencha o campo do numero 1");
      return;
    }

    if (this.numero02() === null) {
      alert("Preencha o campo do numer 2");
      return;
    }

    if (this.operacao() === "somar"){
      const soma = this.numero01()! + this.numero02()!;
      alert(`Soma: &{soma}`);
    } else if (this.operacao() === "subtrair"){
      const subtracao = this.numero01()! - this.numero02()!;
      alert(`Subtração: &{subtracao}`);
    } else if (this.operacao() === "multiplicar"){
      const multiplicar = this.numero01()! * this.numero02()!;
      alert(`Multiplicar: &{multiplicar}`);
    } else if (this.operacao() === "dividir"){
      const dividir = this.numero01()! / this.numero02()!;
      alert(`Divisão: &{dividir}`);
    } else {
      alert("Escolha a operação")
    }
  }


}
