import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosPage } from './centros.page';

describe('CentrosPage', () => {
  let component: CentrosPage;
  let fixture: ComponentFixture<CentrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
