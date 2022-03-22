import { Component, OnInit } from '@angular/core';
import { Replies } from '../types/types.model';
import { RepliesService } from '../services/replies.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
  providers: [RepliesService]
})
export class ReplyComponent implements OnInit {

  replies: Replies[] = [];

  constructor(private repliesService: RepliesService) { }

  async getReplies() {
    this.replies = await this.repliesService.getReplies();
  }

  ngOnInit(): void {
    this.getReplies();
  }
}
