import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLinkComponent } from './demo-link.component';

describe( 'DemoLinkComponent', () => {
  let component:DemoLinkComponent;
  let fixture:ComponentFixture<DemoLinkComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ DemoLinkComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( DemoLinkComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should be created', () => {
    expect( component ).toBeTruthy();
  } );
} );
