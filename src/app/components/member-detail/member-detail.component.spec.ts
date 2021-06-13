import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MemberDetailComponent } from './member-detail.component';
import { CongressService } from '../../services/congress.service';
import { mockedResponseDetails } from '../../services/mockedResponse';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { MemberDetails } from '../../shared/models/MemberDetails';

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


describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  const serviceMock = {
    getMemberDetail: (id: string) => of(mockedResponseDetails)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MemberDetailComponent,
        MockPartyName,
        MockGenderPipe
      ],
      providers: [
        CongressService,
        { provide: CongressService, useValue: serviceMock }
      ],
      imports: [
        MaterialSharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get members detail', fakeAsync(() => {
    spyOn(serviceMock, 'getMemberDetail').and.returnValue(of(mockedResponseDetails));
    fixture.detectChanges();
    component.member$.subscribe((res: MemberDetails) => {
      expect(res.first_name).toBe('Lamar')
    });
    tick();
  }));
});
