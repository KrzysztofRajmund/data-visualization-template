import React, { useEffect, useState } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../store';
import { getProducts, sortProducts } from '../actions/fetchActions';
//components
import CardsWrapper from './CardsWrapper';
import SortButton from './SortButton';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& .MuiAppBar-root': {
                backgroundColor: 'black',
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            letterSpacing: '0.5rem',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        badge: {
            marginLeft: '1.5rem',
            color: '#fff',
        },
        badgeHeart: {
            color: 'lightblue',
        },
    }),
);



const HeaderComponent: React.FC = () => {
    const classes = useStyles();
    //redux
    const dispatch = useDispatch();
    const dispatchSort = useDispatch();
    const favState = useSelector((state: RootStore) => state.favProducts);
    const productsState = useSelector((state: RootStore) => state.products);
    const productsStateSorted = useSelector((state: RootStore) => state.sortedProducts);
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            dispatch(getProducts());
        }, 1000)
    }, [dispatch]);


    useEffect(() => {
        setProducts(productsState.products);
    }, [productsState]);

    useEffect(() => {
        setProducts(productsStateSorted.products);
    }, [productsStateSorted]);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (search.length > 2 && productsState.products) {
            const filter = productsState.products.filter((x: { brand: string; }) => x.brand.toLowerCase().startsWith(search.toLowerCase()));
            setProducts(filter);
        }
        if (search.length <= 2 && productsState.products) {
            setProducts(productsState.products)
        }
        return () => setProducts([]);
    }, [search, productsState])

    const sortItems = (x: string) => {
        if (x === "default") {
            dispatch(getProducts());
            setProducts(productsState.products);
        }
        dispatchSort(sortProducts(x));
        setProducts(productsStateSorted.products);
    }
    return (
        <section className="header-container">
            <div className={classes.root}>
                <AppBar >
                    <Toolbar>
                        <IconButton
                            edge='start'
                            className={classes.menuButton}
                            color='inherit'
                            aria-label='open drawer'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant='h6' noWrap>
                            LIXIR
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder='Search…'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => handleSearch(e)}
                                value={search}
                            />
                        </div>
                        <Badge className={classes.badge} badgeContent={favState.favProducts && favState.favProducts.length}>
                            <FavoriteIcon className={classes.badgeHeart} fontSize='large' />
                        </Badge>
                    </Toolbar>
                </AppBar>
            </div>
            <SortButton sortItems={sortItems} />
            <CardsWrapper products={products} loading={productsState.loading} />
        </section>
    )
}

export default HeaderComponent;
