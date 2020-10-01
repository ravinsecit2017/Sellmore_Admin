import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSetupHeaderComponent } from './organization-setup-header.component';

describe('OrganizationSetupHeaderComponent', () => {
  let component: OrganizationSetupHeaderComponent;
  let fixture: ComponentFixture<OrganizationSetupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationSetupHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSetupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
