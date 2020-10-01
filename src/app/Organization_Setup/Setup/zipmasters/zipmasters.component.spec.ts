import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipmastersComponent } from './zipmasters.component';

describe('ZipmastersComponent', () => {
  let component: ZipmastersComponent;
  let fixture: ComponentFixture<ZipmastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipmastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
