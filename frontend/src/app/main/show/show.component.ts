import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  games = [
    {
      id: 1,
      wallpaper: '/assets/pict/finalFantasyVIIRebirth.jpg',
    },
    {
      id: 2,
      wallpaper: '/assets/pict/cyberpunk2077UltimateEdition.jpg',
    },
    {
      id: 3,
      wallpaper: '/assets/pict/godOfWarRagnarok.jpg',
    }
  ];

  ngOnInit(): void {}
}
