import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectDndHandleComponent } from './indirect-dnd-handle.component';

describe('IndirectDndHandleComponent', () => {
  let component: IndirectDndHandleComponent;
  let fixture: ComponentFixture<IndirectDndHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndirectDndHandleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectDndHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
