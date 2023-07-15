import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendWeComponent } from './recommend-we.component';

describe('RecommendWeComponent', () => {
  let component: RecommendWeComponent;
  let fixture: ComponentFixture<RecommendWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendWeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
