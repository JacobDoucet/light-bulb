import { TestBed } from '@angular/core/testing';

import { PopupGuard } from './popup.guard';

describe('ChildOnlyGuard', () => {
  let guard: PopupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PopupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
