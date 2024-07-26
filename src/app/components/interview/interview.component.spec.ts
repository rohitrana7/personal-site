import { TestBed } from '@angular/core/testing';
import { InterviewComponent } from './interview.component';

describe('InterviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InterviewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
