class DraggableElements {
  dragndropPage = () => $('~Drag');
  dragndropScreen = () => $('~Drag-drop-screen');
  retryButton = () => $('~button-Retry');
  restart = () => $('~renew');
  itemLeft1 = () => $('~drag-l1');
  itemLeft2 = () => $('~drag-l2');
  itemLeft3 = () => $('~drag-l3');
  itemRight1 = () => $('~drag-r1');
  itemRight2 = () => $('~drag-r2');
  itemRight3 = () => $('~drag-r3');
  itemCenter1 = () => $('~drag-c1');
  itemCenter2 = () => $('~drag-c2');
  itemCenter3 = () => $('~drag-c3');
  zoneLeft1 = () => $('~drop-l1');
  zoneLeft2 = () => $('~drop-l2');
  zoneLeft3 = () => $('~drop-l3');
  zoneRight1 = () => $('~drop-r1');
  zoneRight2 = () => $('~drop-r2');
  zoneRight3 = () => $('~drop-r3');
  zoneCenter1 = () => $('~drop-c1');
  zoneCenter2 = () => $('~drop-c2');
  zoneCenter3 = () => $('~drop-c3');
  messageSuccess = () => $('//android.widget.TextView[@text="Congratulations"]')
}

module.exports = DraggableElements;