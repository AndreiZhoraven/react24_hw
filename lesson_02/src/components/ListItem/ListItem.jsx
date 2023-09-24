import React, { PureComponent } from "react";

export default class ListItem extends PureComponent {

  render() {
    let { item, borderStyle } = this.props;
    let updatedStyle = calculateStyle();
    return (
      <tr>
        <td style={updatedStyle}>{item.type}</td>
        <td style={updatedStyle}>{item.icon}</td>
      </tr>
    );

    function calculateStyle() {
      return item.color
        ? { ...borderStyle, color: item.color }
        : borderStyle;
    }
  }
}
