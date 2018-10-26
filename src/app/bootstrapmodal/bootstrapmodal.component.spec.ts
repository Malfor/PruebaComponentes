import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapmodalComponent } from './bootstrapmodal.component';

describe('BootstrapmodalComponent', () => {
  let component: BootstrapmodalComponent;
  let fixture: ComponentFixture<BootstrapmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
