/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductDetailsFormComponent } from './product-details-form.component';

describe('ProductDetailsFormComponent', () => {
  let component: ProductDetailsFormComponent;
  let fixture: ComponentFixture<ProductDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
