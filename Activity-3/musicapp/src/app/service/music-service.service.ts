import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private readonly artists: Artist[] = [];
  private readonly albums: Album[] = [];

  constructor() {
    this.createArtists();
    this.createAlbums();
  }

  private createArtists(): void {
    this.artists.push(new Artist(0, 'The Beatles'));
  }

  private createAlbums(): void {
    exampledata.forEach((data: any) => {
      if (data.artist === 'The Beatles') {
        const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
        const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
        this.albums.push(album);
      }
    });
  }

  public getArtists(): Artist[] {
    return this.artists;
  }

  public getAlbums(artist: string): Album[] {
    return this.albums;
  }

  public getAlbum(artist: string, id: number): Album | undefined {
    const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

    if (album) {
      const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
      return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
    }

    return undefined;
  }

  public createAlbum(album: Album): void {
    this.albums.push(album);
  }

  public updateAlbum(album: Album): void {
    const index = this.albums.findIndex((a) => a.Id === album.Id);

    if (index !== -1) {
      this.albums.splice(index, 1, album);
    }
  }

  public deleteAlbum(id: number, artist: string): void {
    const index = this.albums.findIndex((a) => a.Id === id);

    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }

}
