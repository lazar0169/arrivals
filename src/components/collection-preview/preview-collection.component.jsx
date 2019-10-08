import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = (props) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {
                props.items
                    .filter((item, index) => index < 4)
                    .map(({id, ...other}) => (
                        <CollectionItem key={id} {...other}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;