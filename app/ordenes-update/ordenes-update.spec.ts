import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesUpdate } from './ordenes-update';

describe('OrdenesUpdate', () => {
  let component: OrdenesUpdate;
  let fixture: ComponentFixture<OrdenesUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
