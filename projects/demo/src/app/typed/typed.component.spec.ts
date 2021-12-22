import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TypedComponent } from "./typed.component";

describe( 'TypedComponent', () => {
  let component:TypedComponent;
  let fixture:ComponentFixture<TypedComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ TypedComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( TypedComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should be created', () => {
    expect( component ).toBeTruthy();
  } );
} );
