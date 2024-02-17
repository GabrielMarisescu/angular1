import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class ComentService {
  private apiBaseUrl = 'http://localhost:4200';
  http = inject(HttpClient);

  getComments(parentId: string = '') {
    let url = `${this.apiBaseUrl}/comments`;
    if (parentId) {
      url += `?parentId=${parentId}`;
    }
    return this.http.get<Comment[]>(url);
  }
}
