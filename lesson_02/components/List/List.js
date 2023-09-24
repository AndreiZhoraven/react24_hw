var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from "react";

import ListItem from "./../ListItem/ListItem";

var List = function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      listStyle: "circle",
      list: _this.props.list
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // componentDidMount(){
  //   console.log(`in componentDidMount List`, this.state, this.props);

  //   // setTimeout(() => {
  //   //   this.setState({listStyle: `decimal`})
  //   // }, 3000)

  //   // setTimeout(() => {
  //   //   this.setState(actualState => ({
  //   //     list: []
  //   //   }), () => {
  //   //     console.log(this.state);
  //   //   })
  //   // }, 2000)
  // }

  // componentDidUpdate(){
  //   console.log(`in componentDidUpdate List`, this.state, this.props);
  // }

  // componentWillUnmount(){
  //   console.log(`in componentWillUnmount List`);
  // }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var color = this.props.color;
      var _state = this.state,
          list = _state.list,
          listStyle = _state.listStyle;


      return React.createElement(
        "table",
        null,
        React.createElement(
          "tbody",
          null,
          "list.length ? (",
          list.map(function (item, index) {
            return React.createElement(ListItem, { key: index, item: item });
          }),
          ") : null;"
        )
      );
    }
  }]);

  return List;
}(PureComponent);

export default List;