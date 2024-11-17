import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoontadorComponent } from './coontador.component';

describe('CoontadorComponent', () => {
  let component: CoontadorComponent;
  let fixture: ComponentFixture<CoontadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoontadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoontadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
