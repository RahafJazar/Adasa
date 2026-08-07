import { Post } from '../../../interfaces/post.interface';
import { POSTS } from './../../../data/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-members',
  imports: [],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.css',
})
export class TeamMembersComponent {
  posts: Post[] = POSTS;

}
