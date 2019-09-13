import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalContentComponent } from './normal-content.component';

describe('NormalContentComponent', () => {
  let component: NormalContentComponent;
  let fixture: ComponentFixture<NormalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
