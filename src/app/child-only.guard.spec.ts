import { TestBed } from '@angular/core/testing';

import { ChildOnlyGuard } from './child-only.guard';

describe('ChildOnlyGuard', () => {
  let guard: ChildOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
