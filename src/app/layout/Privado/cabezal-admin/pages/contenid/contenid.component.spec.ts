import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidComponent } from './contenid.component';

describe('ContenidComponent', () => {
  let component: ContenidComponent;
  let fixture: ComponentFixture<ContenidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
