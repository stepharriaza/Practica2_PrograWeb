import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSeguimiento } from './package-seguimiento';

describe('PackageSeguimiento', () => {
  let component: PackageSeguimiento;
  let fixture: ComponentFixture<PackageSeguimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageSeguimiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageSeguimiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
