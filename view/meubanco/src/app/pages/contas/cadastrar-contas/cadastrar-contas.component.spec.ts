import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContasComponent } from './cadastrar-contas.component';

describe('CadastrarContasComponent', () => {
  let component: CadastrarContasComponent;
  let fixture: ComponentFixture<CadastrarContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
