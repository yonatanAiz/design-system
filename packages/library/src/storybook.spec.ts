import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  // test only story named SnapTest
  suite: 'Image storyshots',
  storyNameRegex: 'Snap Test',
  test: imageSnapshot(),
});
