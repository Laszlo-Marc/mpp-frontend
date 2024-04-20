/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Button,
    Dialog,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Category} from '../model/Expenses';
import {useExpenseStore} from '../stores/ExpenseStores';
import ReactHookFormSelect from './ReactHookForm';

interface Inputs {
    category: string;
    amount: number;
    date: string;
    description: string;
    account: string;
    receiver: string;
}

const ExpenseDialog = () => {
    const {opened, handleClose, selectedExpense, addExpense, editExpense} =
        useExpenseStore();
    const {register, handleSubmit, control, reset} = useForm<Inputs>({});

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (selectedExpense) {
            editExpense(selectedExpense);
            reset();
            handleClose();
        } else {
            addExpense({
                id: Math.floor(Math.random() * 1000),
                category: data.category as Category,
                amount: data.amount,
                date: new Date(data.date),
                description: data.description,
                account: data.account,
                receiver: data.receiver,
            });
            reset();
            handleClose();
        }
    };

    return (
        <Dialog
            open={opened}
            onClose={handleClose}
            fullWidth
            maxWidth='sm'
            fullScreen={false}
        >
            <form style={{padding: 16}} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>Add a new expense</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ReactHookFormSelect
                            label='Category'
                            control={control}
                            defaultValue={''}
                            name={'category'}
                        >
                            {Object.keys(Category).map((category) => {
                                const value =
                                    Category[category as keyof typeof Category];
                                return (
                                    <MenuItem key={value} value={value}>
                                        {value}
                                    </MenuItem>
                                );
                            })}
                        </ReactHookFormSelect>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Ammount'
                            type='number'
                            fullWidth
                            {...register('amount', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Date'
                            fullWidth
                            {...register('date', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Description'
                            fullWidth
                            {...register('description', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Account'
                            fullWidth
                            {...register('account', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Receiver'
                            fullWidth
                            {...register('receiver', {required: true})}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        justifyContent={'flex-end'}
                    >
                        <Button variant='contained' type='submit' sx={{mr: 2}}>
                            Submit
                        </Button>
                        <Button variant='outlined' onClick={handleClose}>
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Dialog>
    );
};

export default ExpenseDialog;
