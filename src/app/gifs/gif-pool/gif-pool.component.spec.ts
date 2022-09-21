import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPoolComponent } from './gif-pool.component';

describe('GifPoolComponent', () => {
  let component: GifPoolComponent;
  let fixture: ComponentFixture<GifPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
