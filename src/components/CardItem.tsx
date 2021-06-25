import React, { useState } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { favAddProducts, favDeleteProducts } from '../actions/addProducts';
import { Product } from '../actions/types';
//material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 250,
            maxWidth: '30%',
            flex: '30%',
            margin: '1rem',
            borderRadius: '0rem',
            boxShadow: 'none',
            '& .MuiSvgIcon-root': {
                zIndex: 100,
            },
            '& .MuiCardHeader-title': {
                fontSize: '1.2rem',
                color: 'rgb(0, 0, 0)',
            }
        },
        media: {
            zIndex: 5,
            transition: 'transform 0.3s ease-in-out',
            paddingTop: '100%',
            cursor: 'pointer',

            '&:hover': {
                opacity: 0.4,
                transform: 'scale(1.6)',
            }
        },
        expand: {
            zIndex: 100,
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            borderRadius: '0rem',
            textTransform: 'uppercase',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(360deg)',
            backgroundColor: 'rgb(0, 0, 0, 0.1)',
        },
        avatar: {
            backgroundColor: 'rgb(0, 0, 0, 0.2)',
            color: 'white',
        },
        cardPrice: {
            marginRight: '0.8rem',
            fontSize: '1.4rem',
            color: 'rgb(0, 0, 0, 0.5)',
        },
    }),
);

interface Props {
    item: Product
};

const CardItem: React.FC<Props> = ({ item }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [heart, setHeart] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddHeartItem = (item: Product) => {
        dispatch(favAddProducts(item));
        setHeart(!heart);
    };

    const handleDeleteHeartItem = (item: Product) => {
        dispatch(favDeleteProducts(item));
        setHeart(!heart);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label='brand' className={classes.avatar}>
                        {item.brand.slice(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton onClick={heart ? () => handleAddHeartItem(item) : () => handleDeleteHeartItem(item)} aria-label='add to favorites'>
                        {heart ? <FavoriteBorderIcon fontSize='large' /> : (
                            <FavoriteIcon fontSize='large' />
                        )}
                    </IconButton>
                }
                title={item.title}
                subheader={item.collection}
            />
            <CardMedia
                className={classes.media}
                image={item.verticalCardUrl}
                title={item.brand}
            />
            <CardActions disableSpacing>
                <h4 className={classes.cardPrice}>{item.price} PLN</h4>
                <s>{(item.price + 25.99).toFixed(2)} PLN</s>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <Typography>size</Typography>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography variant="h5">In stock:</Typography>
                    <Typography paragraph>
                        All sizes available
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default CardItem;
