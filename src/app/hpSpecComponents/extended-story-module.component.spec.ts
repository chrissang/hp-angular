import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedStoryModuleComponent } from '../hpComponents/extended-story-module.component';

describe('ExtendedStoryModuleComponent', () => {
  let component: ExtendedStoryModuleComponent;
  let fixture: ComponentFixture<ExtendedStoryModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedStoryModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedStoryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
