import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { LabelInputComponent } from './component/label-input/label-input.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarClientesComponent } from './pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './pages/contas/contas.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { CadastrarContasComponent } from './pages/contas/cadastrar-contas/cadastrar-contas.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExtratoComponent,
    SaqueComponent,
    DepositoComponent,
    HomeComponent,
    CheckBoxComponent,
    ButtonComponent,
    LabelInputComponent,
    ClientesComponent,
    CadastrarClientesComponent,
    SidebarComponent,
    ContasComponent,
    TransferenciaComponent,
    CadastrarContasComponent,
    FooterComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
