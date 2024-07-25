import { SelectionModel } from "@angular/cdk/collections";
import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { InterviewModel } from "../../models/interview.model";
import { SharedModule } from "../../_modules/shared/shared.module";

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [SharedModule],
  styleUrls: ['./interview.component.scss'],
  templateUrl: './interview.component.html',
})

export class InterviewComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'question', 'frequency', 'category'];
  dataSource!: MatTableDataSource<InterviewModel>;
  selection = new SelectionModel<InterviewModel>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  totalExp: number;
  currentDate: string;

  constructor() {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.totalExp = new Date().getFullYear() - 2019;
    this.currentDate = month[new Date().getMonth()] + ' ' + new Date().getFullYear();
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(INTERVIEW_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: InterviewModel): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }

}

export const INTERVIEW_DATA: InterviewModel[] = [
  {id: 1, question: 'final class in java', frequency: 3, difficulty: 2, category: 'Java'},
  {id: 2, question: 'volatile, transient, native, default keywords', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 3, question: 'HashMap vs Concurrent HashMap', frequency: 3, difficulty: 5, category: 'Java'},
  {id: 4, question: 'Optional class', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 5, question: 'method reference', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 6, question: 'bean scope in Spring', frequency: 4, difficulty: 3, category: 'spring'},
  {id: 7, question: 'what is autowiring', frequency: 5, difficulty: 3, category: 'spring'},
  {id: 8, question: 'tell me about Hibernate session factory', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 9, question: 'Java 8 feature - Stream API', frequency: 3, difficulty: 7, category: 'Java'},
  {id: 10, question: 'Functional Interface & Predicate', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 11, question: 'map vs flatMap', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 12, question: 'which CI/CD pipeline are you using ?', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 13, question: 'global error handling in Spring', frequency: 2, difficulty: 3, category: 'spring'},
  {id: 14, question: 'Mapping types w.r.t. JPA and Hibernate', frequency: 2, difficulty: 3, category: 'Spring'},
  {id: 15, question: 'what is generic and enums in Java', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 16, question: 'what is Actuator, API Gateway and circuit breaker in Microservices', frequency: 5, difficulty: 3, category: 'spring'},
  {id: 17, question: 'write test cases in JUnit and Mockito. (Mockito is optional) ', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 18, question: 'explain JWT flow and it\'s implementation', frequency: 6, difficulty: 2, category: 'Java'},
  {id: 19, question: 'difference between JVM, JDK and JRE', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 20, question: 'what is swagger?', frequency: 1, difficulty: 3, category: 'Java'},
  {id: 21, question: 'what is Single and Prototype design pattern', frequency: 6, difficulty: 3, category: 'Java'},
  {id: 22, question: 'Collections - HashMap, HashSet & LinkedList', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 23, question: 'difference between interface & abstract class w.r.t. Java 8', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 24, question: 'Java 8 based lambdas stream & functional programming', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 25, question: 'enum vs const', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 26, question: 'Iterator vs forEach loop', frequency: 1, difficulty: 3, category: 'Java'},
  {id: 27, question: 'Immutable classes and why String is immutable?', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 28, question: 'How many ways to create objects?', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 29, question: 'what is cors and csrf attacks?', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 30, question: 'why do we use POJO classes', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 31, question: 'types of classes in Java', frequency: 1, difficulty: 3, category: 'Java'},
  {id: 32, question: 'Define Exception?', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 33, question: 'types of Exception and difference', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 34, question: 'how do you write custom Exception', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 35, question: 'Errors vs Exception', frequency: 1, difficulty: 3, category: 'Java'},
  {id: 36, question: 'ways to create bean objects in Spring', frequency: 4, difficulty: 3, category: 'spring'},
  {id: 37, question: 'tell 10 non stereotypes annotations', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 38, question: 'Spring vs Spring Boot?', frequency: 4, difficulty: 3, category: 'spring'},
  {id: 39, question: 'what is @Configuration and @Enable AutoConfiguration?', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 40, question: 'if there\'s 2 implementations of a dependency, how do you resolve it', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 41, question: 'what is access modifiers and list them?', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 42, question: 'explain internal working of HashMap', frequency: 7, difficulty: 3, category: 'Java'},
  {id: 43, question: 'what is hashcode and equals contract?', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 44, question: 'what if I override hashcode method and return same value during HashMap', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 45, question: 'what is Object class and list its methods?', frequency: 5, difficulty: 3, category: 'Java'},
  {id: 46, question: 'how do you create threads and start?', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 47, question: 'Facade design pattern', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 48, question: 'how do you implement caching in Java, Spring Boot and dB', frequency: 2, difficulty: 3, category: 'spring'},
  {id: 49, question: 'create custom Immutable class', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 50, question: 'what is Functional Interface?', frequency: 6, difficulty: 3, category: 'Java'},
  {id: 51, question: 'in how many ways you inject dependencies in Spring', frequency: 4, difficulty: 3, category: 'spring'},
  {id: 52, question: 'what is DI and how it works?', frequency: 7, difficulty: 3, category: 'Java'},
  {id: 53, question: 'do you know what is design patterns, list them', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 54, question: 'what is service discovery?', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 55, question: 'what is Spring security?', frequency: 2, difficulty: 3, category: 'spring'},
  {id: 56, question: 'what is Spring IOC?', frequency: 6, difficulty: 3, category: 'spring'},
  {id: 57, question: 'what is Wrapper class. Can you write custom Wrapper class?', frequency: 4, difficulty: 3, category: 'Java'},
  {id: 58, question: 'how do you make 3rd party API calls from Spring?', frequency: 4, difficulty: 3, category: 'spring'},
  {id: 59, question: 'what is logging and why we use it?', frequency: 2, difficulty: 3, category: 'Java'},
  {id: 60, question: 'what is OOPs feature?', frequency: 3, difficulty: 3, category: 'Java'},
  {id: 61, question: 'what is overloading vs overriding', frequency: 4, difficulty: 3, category: 'Java'},


  {id: 62, question: 'what is temporal dead zone?', frequency: 4, difficulty: 3, category: 'angular'},
  {id: 63, question: 'difference between let const and var', frequency: 6, difficulty: 3, category: 'angular'},
  {id: 64, question: 'how do you enhance performance in angular app', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 65, question: 'what is ElementRef and @ViewChild?', frequency: 4, difficulty: 3, category: 'angular'},
  {id: 66, question: 'what is slice and splice used for', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 67, question: 'what is output for typeof(null), typeof(undefined)', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 68, question: 'what is map, filter, reduce methods', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 69, question: 'what is closures and currying?', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 70, question: 'what is event bubbling and event capturing OR event propagation', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 71, question: 'promises vs Observables', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 72, question: 'Observables vs Subjects', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 73, question: 'Subject vs BehaviourSubject', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 74, question: 'pure vs impure pipe', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 75, question: 'what is hostBinding and HostListener', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 76, question: 'what is custom directive and implement one', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 77, question: 'what are disadvantages of DI', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 78, question: 'what is ng -content, ng-template and ng-container', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 79, question: 'what are bundles in angular. how it is created?', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 80, question: 'bundler - webpack vs gulp', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 81, question: 'what is @ViewChildren', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 82, question: 'explain event loop in JavaScript', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 83, question: 'what is forkJoin used for?', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 84, question: 'what is lazy loading and pre-loading strategies', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 85, question: 'how do you attach eventListener to window object', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 86, question: 'what is painting time in UI?', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 87, question: 'nth level component interaction', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 88, question: 'what are HTML symentic tags? and css specificity', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 89, question: 'write unit test in Jasmine - Karma', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 90, question: 'what is destructuring and in how many ways you can achieve this', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 91, question: 'tell me some Response code series', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 92, question: 'what is object prototype', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 93, question: 'localStorage vs sessionStorage', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 94, question: 'what are standards based in AJAX', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 95, question: 'what is output of document.write (new Boolean(true))', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 96, question: 'collection of Hashmaps in JavaScript', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 97, question: 'commonly used RXJS operators', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 98, question: 'deep copy vs shallow copy', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 99, question: 'SCSS vs CSS', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 100, question: 'what is pseudo class and examples', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 101, question: 'what is web worker and service worker', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 102, question: 'what is progressive web application', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 103, question: 'what is single page application', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 104, question: 'what is spread operator and rest operator', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 105, question: 'what is Monorepos', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 106, question: 'what is Micro frontends', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 107, question: 'how do you protect angular from cross site request forgery', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 108, question: '@Inpupt and @Output decorators', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 109, question: 'what is SimpleChanges ', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 110, question: 'list Angular\'s life cycle hook methods', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 111, question: 'what is test coverage', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 112, question: 'what is Angular Guards and types', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 113, question: 'what are Router Events', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 114, question: 'what is @ViewChild decorator', frequency: 3, difficulty: 3, category: 'angular'},
  {id: 115, question: 'what is history state in Angular route', frequency: 3, difficulty: 3, category: 'angular'},


  {id: 116, question: 'program for dictionary (find repeated words)', frequency: 3, difficulty: 3, category: 'code'},
  {id: 117, question: 'program for first non repeating char in stream', frequency: 3, difficulty: 3, category: 'code'},
  {id: 118, question: 'program for balance bracket ( [ { matching', frequency: 3, difficulty: 3, category: 'code'},
  {id: 119, question: 'query for 2nd or 3rd highest salary SQL', frequency: 3, difficulty: 3, category: 'code'},
 // {id: 120, question: '', frequency: 3, difficulty: 3, category: 'angular'},
  
  
  

]

