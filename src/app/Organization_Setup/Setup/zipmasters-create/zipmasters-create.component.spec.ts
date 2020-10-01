import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipmastersCreateComponent } from './zipmasters-create.component';

describe('ZipmastersCreateComponent', () => {
  let component: ZipmastersCreateComponent;
  let fixture: ComponentFixture<ZipmastersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipmastersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipmastersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
