import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualquerCoisaComponent } from './qualquer-coisa.component';

describe('QualquerCoisaComponent', () => {
  let component: QualquerCoisaComponent;
  let fixture: ComponentFixture<QualquerCoisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualquerCoisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualquerCoisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
