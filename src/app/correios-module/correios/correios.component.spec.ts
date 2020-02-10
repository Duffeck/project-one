import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreiosComponent } from './correios.component';

describe('CorreiosComponent', () => {
  let component: CorreiosComponent;
  let fixture: ComponentFixture<CorreiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
