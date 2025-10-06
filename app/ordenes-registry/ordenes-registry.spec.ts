import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesRegistry } from './ordenes-registry';

describe('OrdenesRegistry', () => {
  let component: OrdenesRegistry;
  let fixture: ComponentFixture<OrdenesRegistry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesRegistry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesRegistry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
