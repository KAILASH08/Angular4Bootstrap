import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreatePackageComponent } from './app-create-package.component';

describe('AppCreatePackageComponent', () => {
  let component: AppCreatePackageComponent;
  let fixture: ComponentFixture<AppCreatePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCreatePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
