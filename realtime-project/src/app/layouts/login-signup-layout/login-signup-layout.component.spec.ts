import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupLayoutComponent } from './login-signup-layout.component';

describe('LoginSignupLayoutComponent', () => {
  let component: LoginSignupLayoutComponent;
  let fixture: ComponentFixture<LoginSignupLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSignupLayoutComponent]
    });
    fixture = TestBed.createComponent(LoginSignupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
