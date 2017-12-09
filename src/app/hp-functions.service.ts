import { Injectable } from '@angular/core';

@Injectable()
export class HpFunctionsService {
  displayGroup(arry) {
    const sectionArray = [];
    arry.forEach((el, i) => {
        sectionArray.push(el.displayModuleOn);
    });
    if (sectionArray.indexOf('small') > -1) {
        return 'small';
    } else if (sectionArray.indexOf('medium') > -1) {
        return 'medium';
    } else if (sectionArray.indexOf('large') > -1) {
        return 'large';
    } else {
        return 'xlarge';
    }
  }
  displayOn(displayModuleOn: string, viewPortSize: string) {
    return {
        // tslint:disable-next-line:max-line-length
        'small': viewPortSize === 'small' || viewPortSize === 'medium' || viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
        'medium': viewPortSize === 'medium' || viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
        'large': viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
        'xlarge': viewPortSize === 'xlarge' ? true : false
    }[displayModuleOn];
  }
  productImgPath(itemId) {
    const itemDir = 'https://www.uncommongoods.com/images/items/';
    const itemIdTrim = itemId.toString().slice(0, -2);
    // tslint:disable-next-line:max-line-length
    return itemDir + itemIdTrim + '00/' + itemId + '_1_180px.jpg 180w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_360px.jpg 360w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_640px.jpg 640w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_1200px.jpg 1200w';
  }
  constructor() {}
}
