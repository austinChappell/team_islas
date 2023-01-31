import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  LargeBody,
} from '../components/shared';
import {
  Card,
  CardActions, CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  withStyles
} from '@mui/material';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    objectFit: 'cover',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      user,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={user.title}
        />
        <CardMedia
          component="img"
          height={180}
          className={classes.media}
          image={user.image}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={this.state.expanded}
          timeout="auto"
          collapsedHeight="500px"
          unmountOnExit
        >
          <CardContent>
            {user.paragraphs.map((para, index) => {
              return (
                <LargeBody
                  key={index}
                >
                  {para}
                </LargeBody>
              )
            })}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
