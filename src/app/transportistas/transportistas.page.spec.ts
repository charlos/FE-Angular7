import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistasPage } from './transportistas.page';

describe('TransportistasPage', () => {
  let component: TransportistasPage;
  let fixture: ComponentFixture<TransportistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportistasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
