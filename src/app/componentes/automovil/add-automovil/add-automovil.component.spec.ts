import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutomovilComponent } from './add-automovil.component';

describe('AddAutomovilComponent', () => {
  let component: AddAutomovilComponent;
  let fixture: ComponentFixture<AddAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAutomovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
