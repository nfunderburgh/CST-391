import { execute } from '../services/mysql.connector';
import { Artist } from './artist.model';
import { artistQueries } from './artist.queries';

export const readArtists = async () => {
    return execute<Artist[]>(artistQueries.readArtists, []);
};