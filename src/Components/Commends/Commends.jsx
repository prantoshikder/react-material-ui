import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Commends = (props) => {
    const classes = useStyles();
    const { name, email, id, body } = props.comment;
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Container maxWidth="sm">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div>
                            <h3>{name}</h3>
                            <h2>{email}</h2>
                        </div>
                    </Paper>
                </Grid>
            </Container>
            </Grid>
        </div>
    );
};

export default Commends;