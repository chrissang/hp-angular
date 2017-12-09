import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFeatureModuleComponent } from '../hpComponents/small-feature-module.component';

describe('SmallFeatureModuleComponent', () => {
  let component: SmallFeatureModuleComponent;
  let fixture: ComponentFixture<SmallFeatureModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallFeatureModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFeatureModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
