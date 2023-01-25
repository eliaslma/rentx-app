import React from 'react';

import {
    Container,
    CarImageWapper,
    CarImage,
    ImageIndexes,
    ImageIndex
} from './styles';

interface Props{
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl } : Props){
    return(
        <Container>
            <CarImageWapper>
                <CarImage
                    source={{uri: imagesUrl[0]}}
                    resizeMode="contain"
                />
                <ImageIndexes>
                <ImageIndex active={true}/>
                <ImageIndex active={false}/>
                <ImageIndex active={false}/>
                <ImageIndex active={false}/>
            </ImageIndexes>
            </CarImageWapper>

        </Container>
    );
}