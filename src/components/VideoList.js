import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { css } from '@emotion/css';
import { Accordion, AccordionDetails, AccordionSummary, Container, Modal } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './VideoList.css';

import {
  Heading5,
  LargeBody,
} from '../components/shared';

const styles = () => ({
  root: {
    marginBottom: 60,
    marginTop: 20,
    width: '100%',
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const detailsWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
})

const videoWrapper = css({
  cursor: 'pointer',
  flexBasis: '150px',
  flexGrow: 1,
  maxWidth: '250px',
  padding: '10px',
});

const videoDescriptionWrapper = css({
  flexBasis: 200,
  flexGrow: 1,
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
        className="video-list-modal"
        open={!!currentVideo}
        onClose={this.clearVideo}
      >
        <Container>
          <div
            ref={el => this.modalWrapper = el}
            style={{
              backgroundColor: 'white',
              padding: '10px',
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
      videos,
    } = this.props;

    const oneVideo = videos.length === 1;

    return (
      <div
        className="video-list-wrapper"
        ref={el => this.vidListContainer = el}
      >
        {videos.map((vid, index) => {
          const expansionProps = {};
          if (oneVideo) {
            expansionProps.expanded = true;
          }
          return (
            <Accordion key={index} {...expansionProps}>
              <AccordionSummary
                expandIcon={!oneVideo && <ExpandMoreIcon />}
              >
                <Heading5>
                  {vid.title}
                </Heading5>
              </AccordionSummary>
              <AccordionDetails>
                <div className={detailsWrapper}>
                  <div
                    className={videoWrapper}
                    onClick={() => this.loadVideo(vid)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${vid.youtubeId}/0.jpg`}
                    />
                  </div>

                  <div className={videoDescriptionWrapper}>
                    <LargeBody>
                      {vid.description}
                    </LargeBody>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
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

export default VideoList;

