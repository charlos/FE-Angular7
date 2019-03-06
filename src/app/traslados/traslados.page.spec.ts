import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladosPage } from './traslados.page';

describe('TrasladosPage', () => {
  let component: TrasladosPage;
  let fixture: ComponentFixture<TrasladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
