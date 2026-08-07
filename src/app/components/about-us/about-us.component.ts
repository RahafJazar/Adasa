import { Component } from '@angular/core';
import { TeamMembersComponent } from "./team-members/team-members.component";

@Component({
  selector: 'app-about-us',
  imports: [TeamMembersComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {

}
