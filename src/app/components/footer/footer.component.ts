import { Component, Input } from '@angular/core';
import { hLink } from '../../constants/constants';
import { SharedModule } from '../../_modules/shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  hLink = hLink;

  @Input() isCopyrightContent: boolean = true;

}
