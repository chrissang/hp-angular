import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFeatureModuleComponent } from '../hpComponents/large-feature-module.component';

describe('LargeFeatureModuleComponent', () => {
  let component: LargeFeatureModuleComponent;
  let fixture: ComponentFixture<LargeFeatureModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeFeatureModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFeatureModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
