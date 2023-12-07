import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {
  rooms: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getRooms().subscribe(
      (data) => {
        this.rooms = data;
      },
      (error) => {
        console.error('Failed to fetch rooms', error);
        // Handle error
      }
    );
  }
}
