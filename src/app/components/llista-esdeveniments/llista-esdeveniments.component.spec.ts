import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaEsdevenimentsComponent } from './llista-esdeveniments.component';

describe('LlistaEsdeveniments', () => {
  let component: LlistaEsdevenimentsComponent;
  let fixture: ComponentFixture<LlistaEsdevenimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaEsdevenimentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaEsdevenimentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
