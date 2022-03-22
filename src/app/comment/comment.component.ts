import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { Comments } from '../types/types.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [CommentsService],
})
export class CommentComponent implements OnInit {
  @Input() currentUser: string | undefined;

  // repliesBool = false;

  comments: Comments[] = [];

  constructor(private commentsService: CommentsService) { }

  async getComments() {
    this.comments = await this.commentsService.getComments();
  }

  ngOnInit(): void {
    this.getComments();
  }

}
