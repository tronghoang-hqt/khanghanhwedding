import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvatationGroomComponent } from './invatation-groom.component';

describe('InvatationGroomComponent', () => {
  let component: InvatationGroomComponent;
  let fixture: ComponentFixture<InvatationGroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvatationGroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvatationGroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
