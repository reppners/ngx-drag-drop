import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HorizontalListComponent } from "./horizontal-list.component";

describe( 'HorizontalListComponent', () => {
  let component:HorizontalListComponent;
  let fixture:ComponentFixture<HorizontalListComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ HorizontalListComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( HorizontalListComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should be created', () => {
    expect( component ).toBeTruthy();
  } );
} );
