import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstraptableComponent } from './bootstraptable.component';

describe('BootstraptableComponent', () => {
  let component: BootstraptableComponent;
  let fixture: ComponentFixture<BootstraptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstraptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstraptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
