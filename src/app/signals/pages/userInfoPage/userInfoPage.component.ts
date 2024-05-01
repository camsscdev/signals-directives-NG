import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { UsersService } from '../../services/users-service.service';

@Component({
  selector: 'app-userInfoPage',
  templateUrl: './userInfoPage.component.html',
  styleUrls: ['./userInfoPage.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UsersService);

  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed<string>(() => {
    debugger;
    if (!this.currentUser()) return 'Usuario no encontrado';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  constructor() {}

  ngOnInit() {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);

    this.userService.getUserById(id).subscribe((user) => {
      this.currentUser.set(user);
    });
  }
}
