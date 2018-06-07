import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPackagescheduleComponent } from './new-packageschedule.component';

describe('NewPackagescheduleComponent', () => {
  let component: NewPackagescheduleComponent;
  let fixture: ComponentFixture<NewPackagescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPackagescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPackagescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
