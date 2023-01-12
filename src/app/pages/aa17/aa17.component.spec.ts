import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa17Component } from './aa17.component';

describe('Aa17Component', () => {
  let component: Aa17Component;
  let fixture: ComponentFixture<Aa17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
