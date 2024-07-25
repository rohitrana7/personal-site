import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { profileName } from '../../constants/constants'
import { SharedModule } from '../../_modules/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {

  profileTitle: string = profileName;

  @Input() currentUrl: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    let url:string = changes['currentUrl'].currentValue;
    this.currentUrl = url.substring(1);
  }
}
