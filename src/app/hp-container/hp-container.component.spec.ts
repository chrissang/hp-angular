import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpContainerComponent } from './hp-container.component';

describe('HpContainerComponent', () => {
  let component: HpContainerComponent;
  let fixture: ComponentFixture<HpContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
