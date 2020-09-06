import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const UserPost = (props) => {
    const classes = useStyles();
    const { title, body, id } = props.userPosts;
    const postStyle = {
        border: '1px solid blue',
        borderRadius:'15px',
        margin: '20px',
        padding: '20px',
        }
    return ( 
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Container maxWidth="sm">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div style={postStyle}>
                                <h1>{title}</h1>
                                <p>{body}</p>
                                <Link style={{ cursor: 'pointer', textDecoration: 'none'}} to={`/UserPost/${id}`}>
                                    <Button variant="contained" color="primary">Read More</Button>
                                </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
};

export default UserPost;