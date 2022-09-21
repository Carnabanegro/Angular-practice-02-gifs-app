import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSearcherComponent } from './gifs-searcher.component';

describe('GifsSearcherComponent', () => {
  let component: GifsSearcherComponent;
  let fixture: ComponentFixture<GifsSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
