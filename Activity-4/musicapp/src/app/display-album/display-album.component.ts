import { Component, Input } from '@angular/core';
import { Album } from '../models/Album';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent {
  @Input() album: Album | null = null;

  ngOnInit() {
    console.log("Getting data ....");
    console.log("Tracks", this.album!.tracks);
    this.album!.tracks.forEach(element => console.log(element.Title))
  }
}
