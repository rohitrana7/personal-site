import { TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';

describe('ShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent, RouterModule.forRoot(
        [{path: '', component: ShellComponent}, {path: 'simple', component: ShellComponent}]
      )],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
