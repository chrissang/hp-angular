import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLinkModuleComponent } from '..hpComponents/text-link-module.component';

describe('TextLinkModuleComponent', () => {
  let component: TextLinkModuleComponent;
  let fixture: ComponentFixture<TextLinkModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLinkModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLinkModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
