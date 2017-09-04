import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NativeComponent } from "./native.component";

describe( 'NativeComponent', () => {
  let component:NativeComponent;
  let fixture:ComponentFixture<NativeComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ NativeComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( NativeComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should be created', () => {
    expect( component ).toBeTruthy();
  } );
} );
