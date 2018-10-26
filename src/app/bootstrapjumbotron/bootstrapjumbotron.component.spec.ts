import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapjumbotronComponent } from './bootstrapjumbotron.component';

describe('BootstrapjumbotronComponent', () => {
  let component: BootstrapjumbotronComponent;
  let fixture: ComponentFixture<BootstrapjumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapjumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapjumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
