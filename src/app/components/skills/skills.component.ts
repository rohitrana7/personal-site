import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../_modules/shared/shared.module';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @ViewChild('skillWidth') skillWidth!: ElementRef;

  skills = {
    concepts: [
      { name: 'OOPS', percentValue: '80%', value: 80 },
      { name: 'Data Structure', percentValue: '60%', value: 60 },
      { name: 'Algorithm', percentValue: '60%', value: 60 },
      { name: 'DBMS', percentValue: '70%', value: 70 },
      { name: 'Design Patterns', percentValue: '60%' },
      { name: 'Microservices', percentValue: '80%', value: 80 },
      { name: 'Agile Scrum', percentValue: '70%', value: 70 },
    ],
    serverSide: [
      { name: 'Spring Boot', percentValue: '75%', value: 75 },
      { name: 'Django', percentValue: '70%', value: 70 },
      { name: 'Hibernate/JPA', percentValue: '75%', value: 75 },
      { name: 'Apache Kafka', percentValue: '70%', value: 70 },
    ],
    buildTools: [
      { name: 'Maven', percentValue: '70%', value: 70 },
      { name: 'Gradle', percentValue: '45%', value: 45 },
    ],
    unitTesting: [
      { name: 'JUnit/Mockito', percentValue: '80%', value: 80 },
      { name: 'Karma/Jasmine', percentValue: '75%', value: 75 },
    ],
    cloud: [
      { name: 'AWS', percentValue: '80%', value: 80 },
      { name: 'Terraform', percentValue: '60%', value: 60 },
    ],
    programmingLanguages: [
      { name: 'Java', percentValue: '80%', value: 80 },
      { name: 'Python', percentValue: '75%', value: 75 },
      { name: 'Javascript', percentValue: '80%', value: 80 },
    ],
    web: [
      { name: 'HTML5, CSS3', percentValue: '75%', value: 75 },
      { name: 'Typescript', percentValue: '70%', value: 70 },
      { name: 'Angular 2+', percentValue: '75%', value: 75 },
      { name: 'React JS', percentValue: '70%', value: 70 },
    ],
    rdbms: [
      { name: 'MySQL', percentValue: '75%', value: 75 },
      { name: 'SQL/ PLSQL', percentValue: '60%', value: 60 },
    ],
    nosql: [{ name: 'MongoDB', percentValue: '50%', value: 50 }],
    // searchEngines: [{ name: 'Elasticsearch', percentValue: '50%', value: 50 }],
    containers: [
      { name: 'Docker', percentValue: '70%', value: 70 },
      { name: 'Kubernetes (K8s)', percentValue: '70%', value: 70 },
    ],
    versionControlSystem: [{ name: 'Git/GitHub', percentValue: '85%', value: 85 }],
    ide: [
      { name: 'Visual Studio Code', percentValue: '85%', value: 85 },
      { name: 'IntelliJ', percentValue: '80%', value: 80 },
    ],
  };

  constructor() {}
}
