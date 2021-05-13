import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistprofileComponent } from './playlistprofile.component';

describe('PlaylistprofileComponent', () => {
  let component: PlaylistprofileComponent;
  let fixture: ComponentFixture<PlaylistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
