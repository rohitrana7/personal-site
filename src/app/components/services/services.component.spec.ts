import { TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
