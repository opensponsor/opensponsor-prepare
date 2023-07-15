import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendDialogComponent } from './recommend-dialog.component';

describe('RecommendDialogComponent', () => {
  let component: RecommendDialogComponent;
  let fixture: ComponentFixture<RecommendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
