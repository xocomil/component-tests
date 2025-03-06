import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HostComponentNg } from './host-component.ng';

describe('HostComponentNg', () => {
  let component: HostComponentNg;
  let fixture: ComponentFixture<HostComponentNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponentNg],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponentNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
