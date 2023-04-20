import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMoficarComponent } from './tabla-moficar.component';

describe('TablaMoficarComponent', () => {
  let component: TablaMoficarComponent;
  let fixture: ComponentFixture<TablaMoficarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMoficarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMoficarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
