import { Component, Input } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;
  constructor(private service: MusicServiceService) { }

  ngOnInit() {
    if (this.artist) {
      this.albums = this.service.getAlbums(this.artist.Name);
    }
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
