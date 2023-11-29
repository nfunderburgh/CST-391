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
    console.log("Getting data...");

    this.service.getAlbums(String(this.artist?.Name), (albums: Album[]) => {
      this.albums = albums;
      console.log('this.albums', this.albums);

    });
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }

}
