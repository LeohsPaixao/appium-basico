import { dragAndDrop } from '../../../support/helpers/gestures';

export default class DraggableElements {
  elements = {
    dragndropPage: () => $('~Drag'),
    dragndropScreen: () => $('~Drag-drop-screen'),
    retryButton: () => $('~button-Retry'),
    restart: () => $('~renew'),

    itemLeft1: () => $('~drag-l1'),
    itemLeft2: () => $('~drag-l2'),
    itemLeft3: () => $('~drag-l3'),

    itemRight1: () => $('~drag-r1'),
    itemRight2: () => $('~drag-r2'),
    itemRight3: () => $('~drag-r3'),

    itemCenter1: () => $('~drag-c1'),
    itemCenter2: () => $('~drag-c2'),
    itemCenter3: () => $('~drag-c3'),

    zoneLeft1: () => $('~drop-l1'),
    zoneLeft2: () => $('~drop-l2'),
    zoneLeft3: () => $('~drop-l3'),

    zoneRight1: () => $('~drop-r1'),
    zoneRight2: () => $('~drop-r2'),
    zoneRight3: () => $('~drop-r3'),

    zoneCenter1: () => $('~drop-c1'),
    zoneCenter2: () => $('~drop-c2'),
    zoneCenter3: () => $('~drop-c3'),

    messageSuccess: () => $('//android.widget.TextView[@text="Congratulations"]')
  }

  async visit() {
    await this.elements.dragndropPage().click();
    await this.elements.dragndropScreen().waitForDisplayed();
  }

  async validateItemsLeft() {
    await expect(this.elements.itemLeft2()).toBeDisplayed();
    await expect(this.elements.zoneLeft1()).toBeDisplayed();
  }

  async dragNDrogItem() {
    const itemId = await this.elements.itemLeft2().elementId;
    const zoneId = await this.elements.zoneLeft1().elementId;

    await dragAndDrop(browser, itemId, zoneId);
  }

  async validateItemAndZoneLeft1Displayed() {
    await expect(this.elements.itemLeft1()).toBeDisplayed();
    await expect(this.elements.zoneLeft1()).toBeDisplayed();
  }

  async validateItemAndZoneLeft1NotDisplayed() {
    await expect(this.elements.itemLeft1()).not.toBeDisplayed();
    await expect(this.elements.zoneLeft1()).not.toBeDisplayed();
  }

  async dragItemLeft1ToZoneLeft1() {
    const itemId = await this.elements.itemLeft1().elementId;
    const zoneId = await this.elements.zoneLeft1().elementId;

    await dragAndDrop(browser, itemId, zoneId);
  }

  async clickRestart() {
    await this.elements.restart().click();
  }

  async completeDragAndDrop() {
    const items = [
      this.elements.itemLeft1(),
      this.elements.itemLeft2(),
      this.elements.itemLeft3(),
      this.elements.itemRight1(),
      this.elements.itemRight2(),
      this.elements.itemRight3(),
      this.elements.itemCenter1(),
      this.elements.itemCenter2(),
      this.elements.itemCenter3()
    ];

    const zones = [
      this.elements.zoneLeft1(),
      this.elements.zoneLeft2(),
      this.elements.zoneLeft3(),
      this.elements.zoneRight1(),
      this.elements.zoneRight2(),
      this.elements.zoneRight3(),
      this.elements.zoneCenter1(),
      this.elements.zoneCenter2(),
      this.elements.zoneCenter3()
    ];

    for (let i = 0; i < items.length; i++) {
      const itemId = await items[i].elementId;
      const zoneId = await zones[i].elementId;
      await dragAndDrop(browser, itemId, zoneId);
    }
  }

  async validateSuccessMessage() {
    await expect(this.elements.messageSuccess()).toHaveText('Congratulations');
  }

  async validateRetryButtonDisplayed() {
    await expect(this.elements.retryButton()).toBeDisplayed();
  }

  async clickRetryButton() {
    await this.elements.retryButton().click();
  }

  async validateItemAndZoneLeft1AfterRetry() {
    await expect(await this.elements.itemLeft1()).toBeDisplayed();
    await expect(await this.elements.zoneLeft1()).toBeDisplayed();
  }
}
