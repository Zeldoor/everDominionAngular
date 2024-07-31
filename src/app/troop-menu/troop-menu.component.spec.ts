import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopMenuComponent } from './troop-menu.component';

describe('TroopMenuComponent', () => {
  let component: TroopMenuComponent;
  let fixture: ComponentFixture<TroopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroopMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
