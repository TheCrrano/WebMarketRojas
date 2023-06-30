import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfGenComponent } from './conf-gen.component';

describe('ConfGenComponent', () => {
  let component: ConfGenComponent;
  let fixture: ComponentFixture<ConfGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
