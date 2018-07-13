import "dart:html";

import "canvas_tools.dart";
import "regular_polygon.dart";

void main() {
  var canvas = CanvasTools.configureSquareCanvas();
  var context = canvas.getContext("2d") as CanvasRenderingContext2D;

  var canvasSize = canvas.width;
  var radius = canvasSize * 0.15;
  var gridSize = canvasSize / 3;

  var sidesCount = 3;
  for (var yIndex = 0; yIndex < 3; yIndex++) {
    for (var xIndex = 0; xIndex < 3; xIndex++) {
      new RegularPolygon(sidesCount, radius)
        ..centerX = (xIndex + 0.5) * gridSize
        ..centerY = (yIndex + 0.5) * gridSize
        ..red = (xIndex / 2.0 * 255).round()
        ..blue = (yIndex / 2.0 * 255).round()
        ..draw(context);

      sidesCount++;
    }
  }
}
