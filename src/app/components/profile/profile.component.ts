import { Component, OnInit } from '@angular/core';
import { hLink, resumeUrlName, userEmail } from '../../constants/constants';
import { SharedModule } from '../../_modules/shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}
  hLink = hLink;
  age: number = 0;
  yoe: number = 0;

  experienceList: any = [];
  educationList: any = [];
  userEmail: string = userEmail;
  resumeUrlName = resumeUrlName;

  ngOnInit(): void {
    this.calculateDynamicAge();
  }

  calculateDynamicAge() {
    let timeDiff = Math.abs(Date.now() - new Date('1996-07-02').getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    let timeDiffExp = Math.abs(Date.now() - new Date('2019-04-04').getTime());
    this.yoe = Math.floor(timeDiffExp / (1000 * 3600 * 24) / 365.25);
    this.experienceList = [
      {
        heading: `Careers ${this.yoe}+ Years `,
        company: 'Arrayscript Private Limited',
        role: 'Founder, CEO',
        year: '2024 - Present',
      },
      {
        company: 'Cyient Limited',
        role: 'Senior Software Engineer',
        year: '2021 - 2025',
      },
      {
        company: 'Zensar Technologies Limited',
        role: 'Software Engineer',
        year: '2019 - 2021',
      },
      {
        company: 'Amdocs',
        role: 'Software Support Engineer',
        year: '2018 - 2019',
      },
    ];

    this.educationList = [
      {
        heading: 'Education',
        degree: 'Bachelor- Computer Science and Engineering',
        institution: 'Pune University',
        year: '2014 - 2018',
      },
      {
        degree: 'High School',
        institution: 'Maharashtra State Board',
        year: '2012 - 2014',
      },
      {
        degree: 'School',
        institution: 'Maharashtra State Board',
        year: '2012',
      },
    ];
  }
}
