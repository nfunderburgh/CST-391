import { Component, Input } from '@angular/core';
import { Album } from '../models/Album';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent {
  @Input() album: Album | null = null;
}
