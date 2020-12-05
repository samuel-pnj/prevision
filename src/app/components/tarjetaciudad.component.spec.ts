import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaciudadComponent } from './tarjetaciudad.component';

describe('TarjetaciudadComponent', () => {
  let component: TarjetaciudadComponent;
  let fixture: ComponentFixture<TarjetaciudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaciudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
