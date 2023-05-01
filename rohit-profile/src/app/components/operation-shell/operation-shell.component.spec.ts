import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationShellComponent } from './operation-shell.component';

describe('OperationShellComponent', () => {
  let component: OperationShellComponent;
  let fixture: ComponentFixture<OperationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
