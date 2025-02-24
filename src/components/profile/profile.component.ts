import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  resolvedData: any;

  userId: string | null;

  constructor(private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.resolvedData = data['userData'];
      console.log('Resolved Data:', this.resolvedData);
    });
  }
  
}
