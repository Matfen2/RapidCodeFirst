import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent {
  medias = [
    {
      id: 1,
      wallpaper: '/assets/pict/cyberpunk2077.jpg',
    },
    {
      id: 2,
      wallpaper: '/assets/pict/cyberpunk2077Edgerunner.jpg',
    },
    {
      id: 3,
      wallpaper: '/assets/pict/cyberpunk2077PhantomLiberty.jpg',
    },
  ];
}
