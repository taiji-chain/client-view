import React, { Fragment } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import moment from "moment";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

function CurrencyTransaction(props) {
	console.log("props = ", props);
	console.log("data = ", props.location.state.data);
    const { classes } = props;
    const data = props.location.state.data;
    const model = props.location.state.model;
    let result;
    if(data) {
        result = (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>TxId</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>ToAddress</TableCell>
                            <TableCell numeric>Amount in SHELL</TableCell>
                            <TableCell>Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{moment.utc(row.time).format()}</TableCell>
                                    <TableCell>{row.toAddress}</TableCell>
                                    <TableCell numeric>{model.address === row.toAddress? '+' + row.value : '-' + row.value}</TableCell>
                                    <TableCell>{row.data}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    } 
    return (
        <Fragment>
            {result}
        </Fragment>
    )
}

export default withStyles(styles)(CurrencyTransaction);
