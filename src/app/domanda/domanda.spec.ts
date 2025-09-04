import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domanda } from './domanda';

describe('Domanda', () => {
  let component: Domanda;
  let fixture: ComponentFixture<Domanda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Domanda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domanda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
