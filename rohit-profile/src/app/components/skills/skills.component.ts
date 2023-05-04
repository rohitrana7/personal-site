import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @ViewChild('skillWidth') skillWidth!: ElementRef;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  skills = {
    concepts: [
      { name: 'OOPS', percentValue: '80%', value: 80 },
      { name: 'Data Structure', percentValue: '60%', value: 60 },
      { name: 'Algorithm', percentValue: '60%', value: 60 },
      { name: 'DBMS', percentValue: '70%', value: 70 },
      { name: 'Design Patterns', percentValue: '60%' },
      { name: 'OOAD', percentValue: '55%', value: 55 },
      { name: 'Microservices', percentValue: '70%', value: 70 },
      { name: 'Agile Development', percentValue: '70%', value: 70 },
    ],
    serverSide: [
      { name: 'Spring Boot', percentValue: '65%', value: 65 },
      { name: 'Hibernate/JPA', percentValue: '65%', value: 65 },
      { name: 'Apache Kafka', percentValue: '40%', value: 40 },
    ],
    buildTools: [
      { name: 'Maven', percentValue: '55%', value: 55 },
      { name: 'Gradle', percentValue: '45%', value: 45 },
    ],
    unitTesting: [
      { name: 'JUnit/Mockito', percentValue: '65%', value: 65 },
      { name: 'Karma/Jasmine', percentValue: '75%', value: 75 },
    ],
    cloud: [
      { name: 'AWS', percentValue: '45%', value: 45 },
      { name: 'Heroku', percentValue: '35%', value: 35 },
    ],
    programmingLanguages: [{ name: 'Java', percentValue: '70%', value: 70 }],
    web: [
      { name: 'HTML5', percentValue: '75%', value: 75 },
      { name: 'CSS3', percentValue: '65%', value: 65 },
      { name: 'Javascript', percentValue: '75%', value: 75 },
      { name: 'Typescript', percentValue: '65%', value: 65 },
      { name: 'Angular 9/11/13', percentValue: '75%', value: 75 },
    ],
    rdbms: [
      { name: 'MySQL', percentValue: '75%', value: 75 },
      { name: 'SQL/ PLSQL', percentValue: '60%', value: 60 },
    ],
    nosql: [{ name: 'MangoDB', percentValue: '50%', value: 50 }],
    searchEngines: [{ name: 'Elasticsearch', percentValue: '50%', value: 50 }],
    versionControlSystem: [
      { name: 'Git/GitHub', percentValue: '75%', value: 75 },
      { name: 'TFS', percentValue: '70%', value: 70 },
    ],
    ide: [
      { name: 'Eclipse/STS', percentValue: '70%', value: 70 },
      { name: 'Visual Studio Code', percentValue: '85%', value: 85 },
      { name: 'IntelliJ', percentValue: '65%', value: 65 },
    ],
  };
}
