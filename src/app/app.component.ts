import { Component } from '@angular/core';
import { CongressService } from './services/congress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project';

  constructor(private congressService: CongressService) {
    // this.congressService.getAllMembers();
  }
}
