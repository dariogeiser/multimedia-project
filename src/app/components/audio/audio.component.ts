import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  playAudio() {
    const audio = new Audio();
    audio.src = 'assets/audio/sound.wav';
    audio.load();
    audio.play();
  }
}
