import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SefberlesComponent } from './sefberles.component';

describe('SefberlesComponent', () => {
  let component: SefberlesComponent;
  let fixture: ComponentFixture<SefberlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SefberlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SefberlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
