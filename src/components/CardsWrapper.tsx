import React from 'react';
//components
import CardItem from './CardItem';
import Message from './utils/Message';
import Loading from './utils/Loading';
//redux
import { Product } from '../actions/types';

interface Props {
    products: undefined | Product[],
    loading: boolean
};

const CardsWrapper: React.FC<Props> = ({ products, loading }) => {
    return (
        <section className='cards-wrapper'>
            {products && products.length > 0 ? products.map((item) => {
                return (
                    <CardItem key={item.id} item={item} />
                )
            }) : (
                loading ? <Loading /> : <Message message="Products not found" />
            )}
        </section>
    );
};

export default CardsWrapper;
