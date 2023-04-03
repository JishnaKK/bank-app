import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteacntComponent } from './deleteacnt.component';

describe('DeleteacntComponent', () => {
  let component: DeleteacntComponent;
  let fixture: ComponentFixture<DeleteacntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteacntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteacntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
