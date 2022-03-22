import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentUserService } from '../services/current-user.service';
import { CurrentUser } from '../types/types.model';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
  providers: [ CurrentUserService ]
})
export class CommentCreateComponent implements OnInit {
  @Input() submitLabel!: string;
  @Input() initialText: string = "";

  @Output() handleSubmit = new EventEmitter<string>();

  curUser!: CurrentUser;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private currentUserService: CurrentUserService) { }

  async getCurrentUser() {
    this.curUser = await this.currentUserService.getCurrentUser();
  }

  ngOnInit(): void {
    this.getCurrentUser();
    console.log(this.curUser);
    
    this.form = this.fb.group({
      content: [this.initialText, Validators.required]
    })
    
  }

  onSubmit(): void {
    this.handleSubmit.emit(this.form.value.content);
  }

}
