import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {IncComponent} from './inc.component';

describe('IncComponent', () => {
  let component: IncComponent;
  let fixture: ComponentFixture<IncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncComponent],
      imports: [FormsModule]
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

  it('should be inc 10', () => {
    expect(component.num).toEqual(0);
    component.incStep = 10;
    component.handleAddButtonOnClick();
    expect(component.num).toEqual(10);
  });
});
