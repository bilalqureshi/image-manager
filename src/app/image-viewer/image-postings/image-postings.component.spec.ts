import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostingsComponent } from './image-postings.component';

describe('ImagePostingsComponent', () => {
  let component: ImagePostingsComponent;
  let fixture: ComponentFixture<ImagePostingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePostingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
