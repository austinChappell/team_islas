import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import {
  Container,
  ResponsiveVideoPlayer,
} from '../components/shared';

import {
  Heading5,
  LargeBody,
} from '../components/shared';

const styles = () => ({
  root: {
    width: '100%',
  },
});

class VideoList extends Component {
  state = {
    currentVideo: null,
  }

  clearVideo = () => {
    this.setState({ currentVideo: null });
  }

  loadVideo = (currentVideo) => {
    console.log('loading video', currentVideo);
    this.setState({ currentVideo });
  }

  renderVideoPlayerModal = () => {
    const { currentVideo } = this.state;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={!!currentVideo}
        onClose={this.clearVideo}
      >
        <div
          style={{
            backgroundColor: 'white',
            margin: '10vh auto',
            width: '80%',
          }}
        >
          {currentVideo && (
            <Container>
              <ResponsiveVideoPlayer
                url={`https://youtu.be/${currentVideo.youtubeId}`}
              />
            </Container>
          )}
        </div>
      </Modal>
    )
  }

  render() {
    const {
      classes,
      videos,
    } = this.props;

    return (
      <div className={classes.root}>
        {videos.map((vid, index) => {
          return (
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Heading5>
                  {vid.title}
                </Heading5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div
                  onClick={() => this.loadVideo(vid)}
                  style={{ marginRight: 10 }}
                >
                  <img
                    height={100}
                    width={140}
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/0.jpg`}
                  />
                </div>

                <LargeBody>
                  {vid.description}
                </LargeBody>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
        {this.renderVideoPlayerModal()}
      </div>
    );
  }
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);

