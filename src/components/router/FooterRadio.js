import React from 'react';

export class FooterRadio extends React.Component {
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  };

  handleChange = () => {
    this.context.linkHandler(this.props.to);
  }

  render() {
    const { children } = this.props;
    
    return (
      <label className="filter">
        <input type="radio" name="filter" className="filter__radio"
          onChange={this.handleChange}/>
        <span className={`filter__label--${children.toLowerCase()}`}>{children}</span>
      </label>
    );
  }
}

FooterRadio.propTypes = {
  to: React.PropTypes.string.isRequired
};
