import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { HttpClient } from '@angular/common/http';

/* The `@Injectable()` decorator with the `providedIn: 'root'` option is used to provide the service at the root level of
the application. This means that the service will be available as a singleton instance throughout the entire
application. It allows the service to be injected into any component or service without the need to manually add it to
the providers array in the module. */
@Injectable({ providedIn: 'root' })

/* The MusicServiceService class manages artists and albums, allowing users to retrieve, create, update, and delete albums. */
export class MusicServiceService {
  private host = "http://localhost:5000"

  /**
   * The constructor function initializes the class by calling the createArtists and createAlbums methods.
   */
  constructor(private http: HttpClient) {

  }

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + "/artists")
      .subscribe((artists: Artist[]) => {
        callback(artists);
    });
  }

  public getAlbums(artistName: string, callback:(albums: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  public deleteAlbum(id: number, callback: () => void ): void {
    this.http.delete(this.host + "/albums/" + id).subscribe((data) => {
      callback();
    });
  }
}
