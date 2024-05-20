import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutomovilComponent } from './edit-automovil.component';

describe('EditAutomovilComponent', () => {
  let component: EditAutomovilComponent;
  let fixture: ComponentFixture<EditAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAutomovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
