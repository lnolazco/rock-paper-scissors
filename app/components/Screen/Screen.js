import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col } from 'antd';

import {
  ROCK,
  PAPER,
  SCISSORS,
} from '../../config/constants';

class Screen extends PureComponent {
  static getImageUrl(value) {
    if (value === ROCK) return 'http://pngimg.com/uploads/stone/stone_PNG13556.png';
    if (value === PAPER) return 'http://www.dick-blick.com/items/102/40/10240-1009-1-2ww-m.jpg';
    if (value === SCISSORS) return 'http://cdn3.volusion.com/4jdsg.2wu4y/v/vspfiles/photos/600323-2.jpg';
    return '';
  }

  render() {
    const { on, counter, result, userSelection, cpuSelection } = this.props;
    let status = 'active';
    if (result === 'user') status = 'success';
    if (result === 'cpu') status = 'exception';

    return (
      <div className="screen">
        <Row>
          <Col span="8">
            { userSelection ?
              <div className="screen__user">
                <h4>USER</h4>
                <img
                  src={Screen.getImageUrl(userSelection)}
                  alt=""
                  width="50"
                />
              </div>
              : null
            }
          </Col>
          <Col span="8">
            <Progress
              className="screen__counter"
              type="circle"
              percent={counter * 33}
              format={() => {
                if (result === 'user') return 'You win';
                if (result === 'cpu') return 'You lose';
                if (result === 'draw') return 'It is a Draw';
                if (!on) return 'Are you ready?';
                return counter;
              }}
              status={status}
              width={100}
            />
          </Col>
          <Col span="8">
            { cpuSelection ?
              <div className="screen__cpu">
                <h4>CPU</h4>
                <img
                  src={Screen.getImageUrl(cpuSelection)}
                  alt=""
                  width="50"
                />
              </div>
              : null }
          </Col>
        </Row>
      </div>
    );
  }
}

Screen.propTypes = {
  on: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  result: PropTypes.string,
  userSelection: PropTypes.string,
  cpuSelection: PropTypes.string,
};

Screen.defaultProps = {
  on: false,
  result: '',
  userSelection: '',
  cpuSelection: '',
};

export default Screen;
