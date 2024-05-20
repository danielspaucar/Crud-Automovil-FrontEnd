import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutomovilComponent } from './listar-automovil.component';

describe('ListarAutomovilComponent', () => {
  let component: ListarAutomovilComponent;
  let fixture: ComponentFixture<ListarAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAutomovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
