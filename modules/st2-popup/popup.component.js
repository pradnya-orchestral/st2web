import React from 'react';
import { PropTypes } from 'prop-types';
import cx from 'classnames';

import './style.less';

export class Popup extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  render() {
    const { className, title, onCancel, children, ...props } = this.props;

    return (
      <div {...props} className={cx('st2-popup', className)} onClick={onCancel}>
        <div className="st2-details st2-panel__details st2-popup__details" onClick={(e) => e.stopPropagation()}>
          <div className="st2-panel__scroller">
            { title ? (
              <PopupTitle>{title}</PopupTitle>
            ) : null }
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export class PopupTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { className, children, ...props } = this.props;

    return (
      <div {...props} className={cx('st2-popup__title', className)}>
        { children }
      </div>
    );
  }
}

export default Popup;
