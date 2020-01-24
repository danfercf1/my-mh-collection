import L from '../../common/logger';

let id = 0;
interface Album {
  id: number;
  name: string;
}

const albums: Album[] = [
  { id: id++, name: 'album 0' },
  { id: id++, name: 'album 1' },
];

export class AlbumsService {
  all(): Promise<Album[]> {
    L.info(albums, 'fetch all albums');
    return Promise.resolve(albums);
  }

  byId(id: number): Promise<Album> {
    L.info(`fetch album with id ${id}`);
    return this.all().then(r => r[id]);
  }

  create(name: string): Promise<Album> {
    L.info(`create album with name ${name}`);
    const album: Album = {
      id: id++,
      name,
    };
    albums.push(album);
    return Promise.resolve(album);
  }
}

export default new AlbumsService();
