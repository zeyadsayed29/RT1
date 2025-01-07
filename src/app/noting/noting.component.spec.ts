import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotingComponent } from './noting.component';

describe('NotingComponent', () => {
  let component: NotingComponent;
  let fixture: ComponentFixture<NotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
