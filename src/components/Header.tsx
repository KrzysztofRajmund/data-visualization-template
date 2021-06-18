import React, { useEffect, useState } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../store';
import { getProducts } from '../actions/fetchActions'

const Header: React.FC = () => {

    //redux
    const dispatch = useDispatch();
    const productsState = useSelector((state: RootStore) => state.products);

    const [data, setData] = useState();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    console.log(productsState)
    return (
        <div className='header'>
            Header
        </div>
    )
}

export default Header;
