import React, { Component } from 'react';
import {
  Button,
  Card,
  Heading3,
  LargeBody,
} from '../components/shared';

class BioCard extends Component {
  state = {
    isExpanded: false,
  }

  toggleExpand = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded })
  }

  render() {
    const { isExpanded } = this.state;
    const { user } = this.props;

    return (
      <Card>
        <div
          style={{
            maxHeight: !isExpanded && 120,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Heading3>
            {user.title}
          </Heading3>
          {user.paragraphs.map((para, index) => {
            return (
              <LargeBody key={index}>
                {para}
              </LargeBody>
            )
          })}
          <div
            style={{
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
              bottom: 0,
              height: 50,
              position: 'absolute',
              width: '100%',
            }}
          />
        </div>
        <div style={{
          alignSelf: 'center',
          bottom: 5,
          position: 'absolute',
          textAlign: 'center',
        }}>
          <Button
            buttonText={isExpanded ? 'Show less' : 'Show more'}
            onClick={this.toggleExpand}
            unstyled
          />
        </div>
      </Card>
    )
  }
}

export default BioCard;
