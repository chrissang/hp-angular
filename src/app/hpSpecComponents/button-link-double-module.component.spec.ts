import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkDoubleModuleComponent } from '../hpComponents/button-link-double-module.component';

describe('ButtonLinkDoubleModuleComponent', () => {
  let component: ButtonLinkDoubleModuleComponent;
  let fixture: ComponentFixture<ButtonLinkDoubleModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLinkDoubleModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLinkDoubleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
