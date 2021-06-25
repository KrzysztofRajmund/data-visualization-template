import React, { useState } from 'react';
//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: '10rem 2rem 0rem 10rem',
            minWidth: 120,
            [theme.breakpoints.down('xs')]: {
                margin: '8rem 5rem 0rem 5rem',
            },
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            '& .MuiNativeSelect-root': {
                textTransform: 'uppercase',
                padding: '0.5rem',
            },
        },

        option: {
            textTransform: 'none',
            '&:checked': {
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 'larger',
            },
        },
    }),
);

interface Props {
    sortItems: (x: string) => void
};

const SortButton: React.FC<Props> = ({ sortItems }) => {
    const classes = useStyles();
    const [sort, setSort] = useState('');


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        event.preventDefault();
        setSort(event.target.value as string);
        sortItems(event.target.value as string);
    };




    return (
        <FormControl className={classes.formControl} >
            <NativeSelect
                id="demo-simple-select"
                className={classes.selectEmpty}
                value={sort}
                name="sort"
                onChange={handleChange}
            >
                <option className={classes.option} value="" disabled hidden>Sort By</option>
                <option className={classes.option} value="default">Default order</option>
                <option className={classes.option} value="asc">Price ASC</option>
                <option className={classes.option} value='dsc'>Price DSC</option>
            </NativeSelect>
        </FormControl>
    );
};

export default SortButton;
