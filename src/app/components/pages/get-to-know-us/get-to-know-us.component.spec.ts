import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnowUsComponent } from './get-to-know-us.component';

describe('GetToKnowUsComponent', () => {
  let component: GetToKnowUsComponent;
  let fixture: ComponentFixture<GetToKnowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetToKnowUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetToKnowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
