require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

// 获取图片url
let getImageURL = (imageDatasArr)=> {
  for (var i = imageDatasArr.length - 1; i >= 0; i--) {
    let singleImageData = imageDatasArr[i];

    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
}

imageDatas = getImageURL(imageDatas)
console.log(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
