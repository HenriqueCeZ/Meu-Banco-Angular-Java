import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarClientesComponent } from './cadastrar-clientes.component';

describe('CadastrarClientesComponent', () => {
  let component: CadastrarClientesComponent;
  let fixture: ComponentFixture<CadastrarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
