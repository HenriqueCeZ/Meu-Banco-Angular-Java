import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { CadastrarClientesComponent } from './pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ContasComponent } from './pages/contas/contas.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: "full"},
  {path: 'extrato', component:ExtratoComponent, pathMatch: "full"},
  {path: 'deposito', component:DepositoComponent, pathMatch: "full"},
  {path: 'saque', component:SaqueComponent, pathMatch: "full"},
  {path: 'clientes', component:ClientesComponent, pathMatch: "full"},
  {path: 'contas', component:ContasComponent, pathMatch: "full"},
  {path: 'clientes/cadastrar', component:CadastrarClientesComponent, pathMatch: "full"},
  {path: 'clientes/editar/:id', component:CadastrarClientesComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
