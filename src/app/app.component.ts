import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './_modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, SharedModule, HeaderComponent, FooterComponent, ]
})
export class AppComponent {
  title = 'rohit-profile';
}
