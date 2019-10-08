import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/preview-collection.component';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({ id, ...props }) => (
                        <CollectionPreview key={id} {...props} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;