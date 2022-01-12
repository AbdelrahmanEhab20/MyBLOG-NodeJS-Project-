import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepostsComponent } from './updateposts.component';

describe('UpdatepostsComponent', () => {
  let component: UpdatepostsComponent;
  let fixture: ComponentFixture<UpdatepostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
