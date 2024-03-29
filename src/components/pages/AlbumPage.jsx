import React from 'react';
import AlbumCard from '../ui/AlbumCard';

export default function AlbumPage({ accessibleAlbums }) {
  console.log(accessibleAlbums);
  return (
    <div>
      <div>
        {accessibleAlbums.map((album) => (
          <AlbumCard uniqueAlbum={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}
