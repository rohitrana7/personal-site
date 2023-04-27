import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  concepts = [
    {name: 'OOPS', value: 80, style: 'width: 80%'}
  ]

  ngOnInit(): void {
  }

}
