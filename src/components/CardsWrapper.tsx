import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../store';
import { getProducts } from '../actions/fetchActions';
//components
import CardItem from './CardItem';

const CardsWrapper: React.FC = () => {

    //redux
    const dispatch = useDispatch();
    const productsState = useSelector((state: RootStore) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    console.log(productsState)
    return (
        <section className='cards-wrapper'>
            {productsState.products && productsState.products.slice(3, productsState.products.length + 1).map((item) => {
                return (
                    <CardItem item={item} />
                )
            })}
        </section>
    )
}

export default CardsWrapper;
