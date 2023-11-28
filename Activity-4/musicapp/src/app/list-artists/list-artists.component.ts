import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];
  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  ngOnInit() {
    console.log("Getting data ....");
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists', this.artists);
      for (let i = 0; i < artists.length; i++) {
        this.artists[i].Name = String(Object.values(artists[i]));
      }
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
    console.log('selected artist', artist);
  }
}
