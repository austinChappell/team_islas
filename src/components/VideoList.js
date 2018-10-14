import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { css } from 'react-emotion';
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
    marginBottom: 60,
    width: '100%',
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const MODAL_PADDING = 10;

class VideoList extends Component {
  modalWrapper = React.createRef();
  vidListContainer = React.createRef();

  state = {
    currentVideo: null,
    videoOptions: {
      height: null,
      playerVars: {}, // https://developers.google.com/youtube/player_parameters
      width: null,
      marginBottom: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setVideoDimensions);
    this.setVideoDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setVideoDimensions);
  }

  clearVideo = () => {
    this.setState({ currentVideo: null });
  }

  loadVideo = (currentVideo) => {
    this.setState({ currentVideo });
  }

  setVideoDimensions = () => {
    const videoContainerWidth = this.vidListContainer.clientWidth;
    const { videoOptions } = this.state;
    const aspectRatio = 9 / 16;
    videoOptions.height = `${(videoContainerWidth * aspectRatio) - MODAL_PADDING * 2}px`;
    videoOptions.width = `${videoContainerWidth - MODAL_PADDING * 2}px`;
    this.setState({ videoOptions });
  }

  renderVideoPlayerModal = () => {
    const {
      currentVideo,
      videoOptions,
    } = this.state;

    const videoStyle = css`
      margin-bottom: 0;
      height: ${videoOptions.height};
      width: ${videoOptions.width};
    `;
  
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modal}
        open={!!currentVideo}
        onClose={this.clearVideo}
      >
        <Container>
          <div
            ref={el => this.modalWrapper = el}
            style={{
              backgroundColor: 'white',
              padding: 10,
              margin: '0 auto',
            }}
          >
              {currentVideo && (
                <YouTube
                  className={videoStyle}
                  videoId={currentVideo.youtubeId}
                />
              )}
          </div>
        </Container>
      </Modal>
    )
  }

  render() {
    const { currentVideo } = this.state;
    const {
      classes,
      videos,
    } = this.props;

    return (
      <div
        className={classes.root}
        ref={el => this.vidListContainer = el}
      >
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
        {currentVideo && this.renderVideoPlayerModal()}
      </div>
    );
  }
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);

