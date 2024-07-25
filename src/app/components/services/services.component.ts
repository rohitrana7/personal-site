import { Component } from '@angular/core';
import { SharedModule } from '../../_modules/shared/shared.module';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {}
