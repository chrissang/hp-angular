import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStoryModuleComponent } from '../hpComponents/basic-story-module.component';

describe('BasicStoryModuleComponent', () => {
  let component: BasicStoryModuleComponent;
  let fixture: ComponentFixture<BasicStoryModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStoryModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStoryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
