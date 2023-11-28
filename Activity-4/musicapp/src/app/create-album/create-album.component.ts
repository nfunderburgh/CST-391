import { Component, NgModule, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
  album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []);
  tracksRaw: string = '';
  wasSubmitted: boolean = false;

  constructor(private service: MusicServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    const tracks: Track[] = this.parseTracks(this.tracksRaw);
    this.album.Tracks = tracks;
    this.service.createAlbum(this.album, this.test);
    console.log('The return from createAlbum() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }

  private parseTracks(rawTracks: string): Track[] {
    const tracks: Track[] = [];
    const lines = rawTracks.split('\n');

    lines.forEach((line, index) => {
      const [title, lyrics, video] = line.split(':');
      tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || ''));
    });

    return tracks;
  }
}

