import { Component } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentFormComponent, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  isExpanded = false;
  isReplying = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
  toggleReplying() {
    this.isReplying = !this.isReplying;

    if (this.isReplying) {
      this.isExpanded = true;
    }
  }
}
