import "dart:html";
import "dart:math";

class RegularPolygon {
  double centerX = 0.0;
  double centerY = 0.0;

  int red = 0;
  int green = 0;
  int blue = 0;

  double radius;
  int sidesCount;

  RegularPolygon(this.sidesCount, this.radius);

  void draw(CanvasRenderingContext2D context) {
    context.setFillColorRgb(red, green, blue);
    context.beginPath();
    context.moveTo(centerX + radius, centerY);

    for (var sideIndex = 0; sideIndex < sidesCount; sideIndex++) {
      var angle = 2.0 * pi * (sideIndex + 1.0) / sidesCount;
      context.lineTo(
          centerX + cos(angle) * radius, centerY + sin(angle) * radius);
    }

    context.fill();
  }
}
