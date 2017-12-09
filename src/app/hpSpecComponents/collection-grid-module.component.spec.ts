import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridModuleComponent } from '../hpComponents/collection-grid-module.component';

describe('CollectionGridModuleComponent', () => {
  let component: CollectionGridModuleComponent;
  let fixture: ComponentFixture<CollectionGridModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionGridModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
