import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteModel } from '../../../../models/clientes.model';

@Component({
  selector: 'app-clientes-cadastrar',
  imports: [FormsModule],
  templateUrl: './clientes-cadastrar.html',
  styleUrl: './clientes-cadastrar.scss',
})
export class ClientesCadastrar {
  cliente = signal<ClienteModel>({
    id: crypto.randomUUID(),
    nome: "",
    email: "",
    telefone: null,
  })

  cadastrarCliente(): void {
    const clientes = this.carregarClientesDoLocalStorage();

    clientes.push(this.cliente());

    const clientesString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clientesString)

    alert("Cliente cadastrado com sucesso");

  }

  carregarClientesDoLocalStorage(): ClienteModel[] {
    const clientesString = localStorage.getItem("clientes");

    if(clientesString == null){
      return [];
    }

    return JSON.parse(clientesString) as ClienteModel[];
  }

}
