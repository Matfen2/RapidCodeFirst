import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
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

  cyberpunk: any = '';

  firstImg = [
    {
      id: 1,
      picture: '/assets/pict/cyberpunkFirstImg.jpg',
    },
  ];

  secondImg = [
    {
      id: 2,
      picture: '/assets/pict/cyberpunkSecondImg.jpg',
    },
  ];

  thirdImg = [
    {
      id: 3,
      picture: '/assets/pict/cyberpunkThirdImg.jpg',
    },
  ];

  fourImg = [
    {
      id: 4,
      picture: '/assets/pict/cyberpunkFourImg.jpg',
    },
  ];

  showPicture(game: string) {
    this.cyberpunk = game;
  }

  ngOnInit(): void {}
}
