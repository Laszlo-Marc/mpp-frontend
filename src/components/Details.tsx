import {ExpandMore} from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Expense from '../model/Expenses';
import useExpenseStore from '../stores/ExpenseStores';

const Detail = () => {
    const params = useParams();
    const [expense, setExpense] = useState<Expense | undefined>(undefined);
    const {expenses} = useExpenseStore();
    React.useEffect(() => {
        if (params.id)
            setExpense(
                expenses.find((expense) => expense.id === parseInt(params.id!)),
            );
    }, []);
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel1-content'
                    id='panel1-header'
                >
                    <Typography>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.category}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                >
                    <Typography>Amount</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.amount}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                >
                    <Typography>Date</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.date?.toString()}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                >
                    <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.description}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                >
                    <Typography>Account</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.account}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                >
                    <Typography>Receiver</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {expense?.receiver}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Detail;
