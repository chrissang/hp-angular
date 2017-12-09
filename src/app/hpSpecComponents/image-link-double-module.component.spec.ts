import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLinkDoubleModuleComponent } from '../hpComponents/image-link-double-module.component';

describe('ImageLinkDoubleModuleComponent', () => {
  let component: ImageLinkDoubleModuleComponent;
  let fixture: ComponentFixture<ImageLinkDoubleModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLinkDoubleModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLinkDoubleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
