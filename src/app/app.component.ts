import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DataResolverService } from './resolvers/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, DataResolverService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
