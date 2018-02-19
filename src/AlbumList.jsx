import React from 'react';
import _ from 'lodash';
import Album from './Album';

const AlbumList = ({albums}) => (
  <div className="albumList">
    {_.map(albums, (cover, name) => <Album name={name} cover={cover} key={name} />)}
  </div>
);

export default AlbumList;
