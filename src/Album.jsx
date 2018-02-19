import React from 'react';

const Album = ({name, cover}) => (
  <div className="album">
    {name}
    <img src={cover} alt={`Cover art for ${name}`}></img>
  </div>
);

export default Album;
