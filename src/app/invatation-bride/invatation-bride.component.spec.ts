import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvatationBrideComponent } from './invatation-bride.component';

describe('InvatationBrideComponent', () => {
  let component: InvatationBrideComponent;
  let fixture: ComponentFixture<InvatationBrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvatationBrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvatationBrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
