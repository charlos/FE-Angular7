import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarXbComponent } from './toolbar-xb.component';

describe('ToolbarXbComponent', () => {
  let component: ToolbarXbComponent;
  let fixture: ComponentFixture<ToolbarXbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarXbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarXbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
