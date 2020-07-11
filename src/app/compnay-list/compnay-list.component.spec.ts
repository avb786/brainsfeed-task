import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayListComponent } from './compnay-list.component';

describe('CompnayListComponent', () => {
  let component: CompnayListComponent;
  let fixture: ComponentFixture<CompnayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
