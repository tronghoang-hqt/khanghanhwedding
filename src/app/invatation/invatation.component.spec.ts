import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvatationComponent } from './invatation.component';

describe('InvatationComponent', () => {
  let component: InvatationComponent;
  let fixture: ComponentFixture<InvatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
