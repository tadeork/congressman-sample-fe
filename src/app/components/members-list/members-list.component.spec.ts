import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListComponent } from './members-list.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Pipe({name: 'partyName'})
class MockPartyName implements PipeTransform {
  transform(value: any): any {
    return;
  }
}

@Pipe({name: 'gender'})
class MockGenderPipe implements PipeTransform {
  transform(value: any): any {
    return;
  }
}

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembersListComponent,
        MockPartyName,
        MockGenderPipe,
      ],
      imports: [
        MaterialSharedModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        {provide: ToastrService, useClass: ToastrService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
