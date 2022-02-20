import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

constructor() { }

drawBackLeftWall() : void
{
  
}

drawBackRightHalfWall() : void
{}

drawFrontRightHalfWall() : void
{}

drawFrontLeftHalfWall() : void
{}

drawLowerHalfSlab() : void
{}

drawUpperHalfSlab(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean) : void
{
}

//back right to front left
drawSlopeBackRight(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean) : void
{
  let startX = 0;
  let startY = 120;
  //topface
  let region = new Path2D();

  var fromX = size / 2 - 1 + startX;
  var fromY = startY;
  var toX = startX;
  var toY = (size / 4 * 3 - 1) + startY; 

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = 0;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = topcolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');

  // SideFace
  region = new Path2D();
  fromX = size - 1 + startX;
  fromY = size / 4 + startY;
  toX = size - 1 + startX;
  toY = size / 4 * 3 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}


drawSlopeBackLeft(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean) : void
{
  let startX = 120;
  let startY = 120;
  //topface
  let region = new Path2D();

  var fromX = size / 2 - 1 + startX;
  var fromY = startY;
  var toX = size - 1 + startX;
  var toY = size / 4 * 3 + startY; 

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = 0;
  toY = size / 4;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = 0;
  toX += startX;
  toY += startY;
  
  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = topcolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');

  // SideFace
  region = new Path2D();
  fromX = startX;
  fromY = size / 4 + startY;
  toX = startX;
  toY = size / 4 * 3 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = 0;
  toY = size / 4;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}

drawSlopeFrontRight(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean) : void
{
  //DrawRightSide
  let startX = 360;
  let startY = 120;
  let region = new Path2D();

  var fromX = size / 2 + startX;
  var fromY = size / 2 + startY;
  var toX = startX;
  var toY = size / 4 * 3 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size / 2;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');

  //RightSide
  region = new Path2D();

  fromX = size / 2 + startX;
  fromY = size / 2 + startY;
  toX = size - 1 + startX;
  toY = size / 4 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4 * 3;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}

drawSlopeFrontLeft(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean) : void
{
  //DrawRightSide
  let startX = 240;
  let startY = 120;
  let region = new Path2D();

  var fromX = size / 2 + startX;
  var fromY = size / 2 + startY;
  var toX = size - 1 + startX;
  var toY = size / 4 * 3 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size / 2;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');

  //RightSide
  region = new Path2D();

  fromX = size / 2 + startX;
  fromY = size / 2 + startY;
  toX = startX;
  toY = size / 4 + startY;

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = 0;
  toY = size / 4 * 3;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  toX += startX;
  toY += startY;

  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}


drawOutline(ctx : any, size : number, edgecolor : string, sidecolor : string, topcolor: string, blendBorder : boolean)
{
  if(blendBorder)
  {
    edgecolor = topcolor;
    this.drawTop(ctx, size, edgecolor, topcolor);
    edgecolor = sidecolor;
    this.drawLeft(ctx, size, edgecolor, sidecolor);
    this.drawRight(ctx, size, edgecolor, sidecolor);
  } else {
    this.drawTop(ctx, size, edgecolor, topcolor);
    this.drawLeft(ctx, size, edgecolor, sidecolor);
    this.drawRight(ctx, size, edgecolor, sidecolor);
  }
}

drawLeft(ctx : any, size : number, edgecolor : string, sidecolor : string)
{
  let region = new Path2D();

  var fromX = 0;
  var fromY = size / 4 - 1;
  var toX = 0;
  var toY = size / 4 * 3 - 1; 

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size - 1;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size / 2;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = 0;
  toY = size / 4;
  
  region.lineTo(toX, toY);
  
  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');  
  
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}

drawRight(ctx : any, size : number, edgecolor : string, sidecolor : string)
{
  let region = new Path2D();

  var fromX = size - 1;
  var fromY = size / 4;
  var toX = size - 1;
  var toY = size / 4 * 3 - 1; 

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size - 1;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size / 2;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4;
  
  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = sidecolor;
  ctx.fill(region, 'nonzero');
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}

drawTop(ctx : any, size : number, edgecolor : string, topcolor : string) : void
{
  let region = new Path2D();

  var fromX = size / 2 - 1;
  var fromY = 0;
  var toX = 0;
  var toY = size / 4 - 1; 

  region.moveTo(fromX, fromY);
  region.lineTo(toX, toY);

  var fromX = toX;
  var fromY = toY;
  var toX = 0;
  var toY = size / 4; 

  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = size / 2 - 1;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = size / 2 - 1;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size - 1;
  toY = size / 4 - 1;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2;
  toY = 0;
  
  region.lineTo(toX, toY);

  fromX = toX;
  fromY = toY;
  toX = size / 2 - 1;
  toY = 0;
  
  region.lineTo(toX, toY);

  region.closePath();
  ctx.fillStyle = topcolor;
  ctx.fill(region, 'nonzero');
  ctx.strokeStyle = edgecolor;
  ctx.stroke(region, 'nonzero');
}

}
