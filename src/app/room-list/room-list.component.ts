import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  rooms: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getRooms().subscribe(
      (rooms) => {
        this.rooms = rooms;
        console.log('Rooms:', rooms);
      },
      (error) => {
        console.error('Failed to fetch rooms', error);
      }
    );
  }
}
