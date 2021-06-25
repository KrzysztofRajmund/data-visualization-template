import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transiton: 'all 0.5s ease-in-out',
            display: 'flex',
            backgroundColor: 'transparent',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
            '& .MuiCircularProgress-root': {
                color: 'lightblue',
            }
        },
    }),
);

const Loading: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress disableShrink />
        </div>
    );
};

export default Loading;