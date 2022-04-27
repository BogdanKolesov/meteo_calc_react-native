import React from 'react';
import { ItemPreviewContainer, ItemPreviewText } from './ItemPreview.styles';

const ItemPreview = ({ title }) => {
    return (
        <ItemPreviewContainer activeOpacity={0.6}>
            <ItemPreviewText>
                {title}
            </ItemPreviewText>
        </ItemPreviewContainer>
    );
}



export default ItemPreview;
