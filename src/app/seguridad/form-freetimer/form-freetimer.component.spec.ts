import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfreetimerComponent } from './form-freetimer.component';

describe('FormfreetimerComponent', () => {
  let component: FormfreetimerComponent;
  let fixture: ComponentFixture<FormfreetimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfreetimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfreetimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
