import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncComponent } from './inc.component';

describe('IncComponent', () => {
  let component: IncComponent;
  let fixture: ComponentFixture<IncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be inc one', () => {
    expect(component.num).toEqual(0);
    component.handleAddButtonOnClick();
    expect(component.num).toEqual(1);
  });
});
