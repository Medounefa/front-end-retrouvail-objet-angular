import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessObjectLostComponent } from './process-object-lost.component';

describe('ProcessObjectLostComponent', () => {
  let component: ProcessObjectLostComponent;
  let fixture: ComponentFixture<ProcessObjectLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessObjectLostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessObjectLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
