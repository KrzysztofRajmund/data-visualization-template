import React from 'react';
//components
import CardItem from './CardItem';

type Product = {
    id: number,
    title: string,
    price: number,
    brand: string,
    productType: string,
    collection: number,
    url: string,
    verticalCardUrl?: string
}

interface Props {
    products: undefined | Product[]
}

const CardsWrapper: React.FC<Props> = ({ products }) => {
    console.log(products, "wrapper")
    return (
        <section className='cards-wrapper'>
            {products && products.length > 0 ? products.map((item) => {
                return (
                    <CardItem key={item.id} item={item} />
                )
            }) : (
                <div>Products not found</div>
            )}
        </section>
    )
}

export default CardsWrapper;
