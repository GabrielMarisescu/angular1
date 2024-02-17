import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import { ComentService } from '../services/coment.service';
import { Comment } from '../interfaces/comment.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  comments = signal<Comment[]>([]);
  constructor(private CommentService: ComentService) {}

  ngOnInit(): void {}

  getComments() {
    this.CommentService.getComments().subscribe((comments) => {
      this.comments.set(comments);
    });
  }
}
