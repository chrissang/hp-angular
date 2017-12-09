import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoLinkModuleComponent } from '../hpComponents/seo-link-module.component';

describe('SeoLinkModuleComponent', () => {
  let component: SeoLinkModuleComponent;
  let fixture: ComponentFixture<SeoLinkModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoLinkModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoLinkModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
