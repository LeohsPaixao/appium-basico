describe('-> dragNDrop', () => {
    beforeEach(async () => {
        await $('~Drag').click();
        await expect($('//android.widget.TextView[@text="Drag and Drop"]')).toBeDisplayed();
    });

    it('Should not be able to drag an item and drop it in the wrong area', async () => {
        const itemLeft2 = await $('~drag-l2');
        const zoneLeft1 = await $('~drop-l1');

        await expect(itemLeft2).toBeDisplayed();
        await expect(zoneLeft1).toBeDisplayed();

        const itemId = itemLeft2.elementId;
        const zoneId = zoneLeft1.elementId;

        await driver.executeScript('gesture: dragAndDrop',
            [{
                sourceId: itemId,
                destinationId: zoneId,
            }]
        )

        await expect(itemLeft2).toBeDisplayed();
        await expect(zoneLeft1).toBeDisplayed();

    })

    it('Should not be able to restard the drag and drop', async () => {
        const itemLeft1 = await $('~drag-l1');
        const zoneLeft1 = await $('~drop-l1');
        const restart = await $('~renew');

        await expect(itemLeft1).toBeDisplayed();
        await expect(zoneLeft1).toBeDisplayed();

        const itemId = itemLeft1.elementId;
        const zoneId = zoneLeft1.elementId;

        await driver.executeScript('gesture: dragAndDrop',
            [{
                sourceId: itemId,
                destinationId: zoneId,
            }]
        )

        await expect(itemLeft1).not.toBeDisplayed();
        await expect(zoneLeft1).not.toBeDisplayed();

        await restart.click();

        await expect(itemLeft1).toBeDisplayed();
        await expect(zoneLeft1).toBeDisplayed();

    });

    it('Should be able to complete the dragged', async () => {

        const retryButton = $('~button-Retry');

        const itemLeft1 = await $('~drag-l1');
        const itemLeft2 = await $('~drag-l2');
        const itemLeft3 = await $('~drag-l3');
        const itemRight1 = await $('~drag-r1');
        const itemRight2 = await $('~drag-r2');
        const itemRight3 = await $('~drag-r3');
        const itemCenter1 = await $('~drag-c1');
        const itemCenter2 = await $('~drag-c2');
        const itemCenter3 = await $('~drag-c3');

        const iteml1Id = itemLeft1.elementId;
        const iteml2Id = itemLeft2.elementId;
        const iteml3Id = itemLeft3.elementId;
        const itemr1Id = itemRight1.elementId;
        const itemr2Id = itemRight2.elementId;
        const itemr3Id = itemRight3.elementId;
        const itemc1Id = itemCenter1.elementId;
        const itemc2Id = itemCenter2.elementId;
        const itemc3Id = itemCenter3.elementId;

        const zoneLeft1 = await $('~drop-l1');
        const zoneLeft2 = await $('~drop-l2');
        const zoneLeft3 = await $('~drop-l3');
        const zoneRight1 = await $('~drop-r1');
        const zoneRight2 = await $('~drop-r2');
        const zoneRight3 = await $('~drop-r3');
        const zoneCenter1 = await $('~drop-c1');
        const zoneCenter2 = await $('~drop-c2');
        const zoneCenter3 = await $('~drop-c3');

        const zonel1Id = zoneLeft1.elementId;
        const zonel2Id = zoneLeft2.elementId;
        const zonel3Id = zoneLeft3.elementId;
        const zoner1Id = zoneRight1.elementId;
        const zoner2Id = zoneRight2.elementId;
        const zoner3Id = zoneRight3.elementId;
        const zonec1Id = zoneCenter1.elementId;
        const zonec2Id = zoneCenter2.elementId;
        const zonec3Id = zoneCenter3.elementId;

        function getSourceItems() {
            const sourceItems = [
                iteml1Id,
                iteml2Id,
                iteml3Id,
                itemr1Id,
                itemr2Id,
                itemr3Id,
                itemc1Id,
                itemc2Id,
                itemc3Id
            ];
            return sourceItems;
        }

        function getTargetItems() {
            const targetItems = [
                zonel1Id,
                zonel2Id,
                zonel3Id,
                zoner1Id,
                zoner2Id,
                zoner3Id,
                zonec1Id,
                zonec2Id,
                zonec3Id
            ];
            return targetItems;
        }


        for (let i = 0; i < getSourceItems().length; i++) {
            await driver.executeScript('gesture: dragAndDrop',
                [{
                    sourceId: getSourceItems()[i],
                    destinationId: getTargetItems()[i]
                }]
            )
        }

        await expect($('//android.widget.TextView[@text="Congratulations"]')).toHaveText('Congratulations')

        // Retry logic
        await expect(retryButton).toBeDisplayed();
        retryButton.click();

        // Data return
        await expect(itemLeft1).toBeDisplayed();
        await expect(zoneLeft1).toBeDisplayed();
    })
})
