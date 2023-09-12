import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectDragImageComponent } from './indirect-drag-image.component';

describe('IndirectDragImageComponent', () => {
  let component: IndirectDragImageComponent;
  let fixture: ComponentFixture<IndirectDragImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndirectDragImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectDragImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
