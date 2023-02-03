import React, { useRef } from 'react';
import { IPhotos } from '@myapp/dtos/CarDTO';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ViewToken } from 'react-native';


import {
    Container,
    CarImageWrapper,
    CarImage,
    ImageIndexes,
    ImageIndex
} from './styles';


interface Props{
    imagesUrl: IPhotos[]
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }

export function ImageSlider({ imagesUrl } : Props){

    const [imageIndex, setImageIndex] = useState(0);

    const indexChange = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
      });

    return(
        <Container>

        <FlatList
            data={imagesUrl}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <CarImageWrapper>
                    <CarImage source={{ uri: item.photo }} resizeMode="contain" />
                </CarImageWrapper>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={indexChange.current}
    
        />
            <ImageIndexes>
            {imagesUrl.map((item, index) => (
                <ImageIndex key={item.id} active={index === Number(imageIndex)}/>
            ))}
            </ImageIndexes>

        </Container>
    );
}