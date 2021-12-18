import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLivreurComponent } from './gestion-livreur.component';

describe('GestionLivreurComponent', () => {
  let component: GestionLivreurComponent;
  let fixture: ComponentFixture<GestionLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
