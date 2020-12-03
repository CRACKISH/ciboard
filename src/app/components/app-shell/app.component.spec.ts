import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppShellComponent } from './app-shell.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppShellComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ciboard'`, () => {
    const fixture = TestBed.createComponent(AppShellComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ciboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppShellComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ciboard app is running!');
  });
});
