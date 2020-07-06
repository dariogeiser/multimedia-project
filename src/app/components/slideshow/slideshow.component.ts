import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6].map((n) => `assets/img/img${n}.jpg`);

  constructor() {
  }

  ngOnInit() {
  }

  downloadImg(url: string) {
    const link = document.createElement('a');
    link.download = 'image.jpg';
    link.href = url;
    link.click();
  }

  handleFileInput(files: FileList) {
   const fileReader = new FileReader();
   fileReader.readAsDataURL(files.item(0));
   fileReader.addEventListener('load', (event: any) => {
        this.images.push(event.target.result);
    });
  }
}
