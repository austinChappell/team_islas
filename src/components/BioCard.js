import React, { Component } from 'react';
import {
  Button,
  Card,
  Heading3,
  LargeBody,
} from '../components/shared';

const MAX_HEIGHT = 200;

class BioCard extends Component {
  innerContent = React.createRef();

  state = {
    exceedsContainer: true,
    isExpanded: false,
    innerContentHeight: MAX_HEIGHT,
  }

  componentDidMount() {
    this.setInnerContentHeight();
  }

  setInnerContentHeight = () => {
    const innerContentHeight = this.innerContent.clientHeight;
    const exceedsContainer = innerContentHeight > MAX_HEIGHT;
    this.setState({
      exceedsContainer,
      innerContentHeight,
    });
  }

  toggleExpand = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded })
  }

  render() {
    const {
      exceedsContainer,
      innerContentHeight,
      isExpanded,
    } = this.state;
    const { user } = this.props;

    return (
      <Card>
        <div
          style={{
            height: isExpanded || !exceedsContainer ? innerContentHeight : MAX_HEIGHT,
            overflow: 'hidden',
            position: 'relative',
            transition: '250ms',
          }}
        >
          <div
            ref={el => this.innerContent = el}
          >
            <div
              style={{
                marginBottom: 10,
              }}
            >
              <Heading3>
                {user.title}
              </Heading3>
            </div>
            {user.paragraphs.map((para, index) => {
              return (
                <LargeBody key={index}>
                  {para}
                </LargeBody>
              )
            })}
            {!isExpanded && exceedsContainer && <div
              style={{
                background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
                bottom: 0,
                height: 100,
                position: 'absolute',
                width: '100%',
              }}
            />}
          </div>
          </div>
        {exceedsContainer && <div style={{
          alignSelf: 'center',
          bottom: 5,
          position: 'absolute',
          textAlign: 'center',
        }}>
          <Button
            onClick={this.toggleExpand}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        </div>}
      </Card>
    )
  }
}

export default BioCard;
