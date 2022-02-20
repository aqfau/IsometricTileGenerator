import { Injectable } from '@angular/core';
import { Vector2 } from '../ViewModel/Vector2';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  margin : number = 20;

  constructor() { }

  drawPath(ctx: any, edgecolor: string, facecolor: string, path: Vector2[], blendBorder: boolean) {
    if (path.length < 1) {
      return;
    }
    let region = new Path2D();
    region.moveTo(path[0].x, path[0].y);

    for (let i = 1; i < path.length; i++) {
      region.lineTo(path[i].x, path[i].y);
    }
    region.closePath();
    ctx.fillStyle = facecolor;
    ctx.fill(region, 'nonzero');

    if (blendBorder) {
      edgecolor = facecolor;
    }
    ctx.strokeStyle = edgecolor;
    ctx.stroke(region, 'nonzero');
  }

  drawBackLeftWall(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder : boolean): void {
    let startX = this.margin;
    let startY = (size + this.margin) * 3;
    let ratio = .5;
    let xSubtractor = (1 - ratio) * (size / 2)
    let ySubtractor = (1 - ratio) * (size / 4)

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, .5);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, .5);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX - xSubtractor, startY - ySubtractor, 1, 1);
  }

  drawWalls(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder : boolean)
  {
    this.drawBackLeftWall(ctx, size,edgecolor, sidecolor, topcolor, blendBorder);
    this.drawBackRightWall(ctx, size,edgecolor, sidecolor, topcolor, blendBorder);
    this.drawFrontRightWall(ctx, size,edgecolor, sidecolor, topcolor, blendBorder);
    this.drawFrontLeftWall(ctx, size,edgecolor, sidecolor, topcolor, blendBorder);
  }

  drawFrontRightWall(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder : boolean): void { 
    let startX = this.margin + size / 4 + (size + this.margin); //margin + shift + space
    let startY = (size + this.margin) * 3; + size / 8;
    let ratio = .5;
    let xSubtractor = (1 - ratio) * (size / 2)
    let ySubtractor = (1 - ratio) * (size / 4)

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, .5);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, .5);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX - xSubtractor, startY - ySubtractor, 1, 1);
  }

  drawFrontLeftWall(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder : boolean): void
  {
    let startX = this.margin - size / 4 + (this.margin + size) * 3; //margin + shift + space
    let startY = (size + this.margin) * 3 + size / 8;
    let ratio = .5;
    let xSubtractor = (1 - ratio) * (size / 2)
    let ySubtractor = (1 - ratio) * (size / 4)

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, .5, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX + xSubtractor, startY - ySubtractor, 1, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, .5);
  }

  drawBackRightWall(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder : boolean): void 
  { 
    let startX = this.margin + (this.margin + size) * 2; //margin + shift + space
    let startY = (this.margin + size) * 3;
    let ratio = .5;
    let xSubtractor = (1 - ratio) * (size / 2)
    let ySubtractor = (1 - ratio) * (size / 4)

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, .5, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX + xSubtractor, startY - ySubtractor, 1, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, .5);
  }

  drawLowerSlab(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void 
  { 
    let startX = this.margin + (this.margin + size) * 2;
    let startY = this.margin;
    let ratio = .5;
    startY += ((size / 2) * ratio);

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);
  }

  drawUpperSlab(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void 
  {
    let startX = this.margin + (this.margin + size);
    let startY = this.margin;

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, .5, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, .5, 1);
  }

  drawQuarterSlabs(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean)
  {
    let startX = this.margin;
    let startY = this.margin + (this.margin + size) * 2;
    let ratio = .25;
    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    startX += (this.margin + size);
    startY += ((size / 4) * ratio);
    

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    startX += (this.margin + size);
    startY += ((size / 4) * ratio) * 2;

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    startX += (this.margin + size);
    startY += ((size / 4) * ratio) * 3;

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, ratio, 1);
  }

  //back right to front left
  drawSlopeBackRight(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void {
    let startX = this.margin;
    let startY = this.margin + (this.margin + size);
    //topface
    let path : Vector2[] = [];
    path.push(new Vector2(size / 2 - 1 + startX, startY));
    path.push(new Vector2(startX, size / 4 * 3 - 1 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 + startY));
    path.push(new Vector2(size / 2 + startX, startY));
    path.push(new Vector2(size / 2 - 1 + startX, startY));
    this.drawPath(ctx, edgecolor, topcolor, path, blendBorder);

    // SideFace
    path = [];
    path.push(new Vector2(size - 1 + startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);
  }

  drawSlopeBackLeft(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void {
    let startX = this.margin + (this.margin + size);
    let startY = this.margin + (this.margin + size);
    //topface
    let path : Vector2[] = [];
    path.push(new Vector2(size / 2 - 1 + startX, startY));
    path.push(new Vector2(size - 1 + startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(startX, size / 4 + startY));
    path.push(new Vector2(size / 2 + startX, startY));
    this.drawPath(ctx, edgecolor, topcolor, path, blendBorder);

    // SideFace
    path = [];
    path.push(new Vector2(startX, size / 4 + startY));
    path.push(new Vector2(startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(startX, size / 4 + startY));    
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);

  }

  drawSlopeFrontRight(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void {
    //DrawRightSide
    let startX = this.margin + (this.margin + size) * 2;
    let startY = this.margin + (this.margin + size);
    
    let path : Vector2[] = [];
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    path.push(new Vector2(startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);


    //RightSide
    path = [];
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);
  }

  drawSlopeFrontLeft(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean): void {
    //DrawRightSidelet 
    let startX = this.margin + (this.margin + size) * 3;
    let startY = this.margin + (this.margin + size);

    let path : Vector2[] = [];
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 - 1 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);


    //RightSide
    path = [];
    path.push(new Vector2(size / 2 + startX, size / 2 + startY));
    path.push(new Vector2(startX, size / 4 + startY));
    path.push(new Vector2(startX, size / 4 * 3 + startY));
    path.push(new Vector2(size / 2 + startX, size - 1 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);
  }

  drawFullTile(ctx: any, size: number, edgecolor: string, sidecolor: string, topcolor: string, blendBorder: boolean) {
    let startX = this.margin;
    let startY = this.margin;

    // Top Side
    this.drawTopFullTile(ctx, size, edgecolor, topcolor, blendBorder, startX, startY, 1, 1);
    // Left Side
    
    this.drawLeftFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, 1);

    // Right Side
    this.drawRightFullTile(ctx, size, edgecolor, sidecolor, blendBorder, startX, startY, 1, 1);

  }

  drawLeftFullTile(ctx: any, size: number, edgecolor: string, sidecolor: string, blendBorder: boolean, startX : number, startY : number, ratio : number, wallRatio : number)
  { 
    // top-left corner => counter clockwise
    let path = [];
    path.push(new Vector2(startX, size / 4 - 1 + startY));
    path.push(new Vector2(startX, (size / 4 * 3 - 1) - (size / 2) * (1 - ratio) + startY));
    path.push(new Vector2((size / 2 - 1) - (1 - wallRatio) * (size / 2) + startX, 
      (size - 1) - (1 - ratio) * (size / 2) - (1 - wallRatio) * (size / 4) + startY));
    path.push(new Vector2((size / 2 - 1) - (1 - wallRatio) * (size / 2) + startX, 
      (size / 2) - (1 - wallRatio) * (size / 4) + startY));
    path.push(new Vector2(startX, size / 4 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);
  }

  drawTopFullTile(ctx: any, size: number, edgecolor: string, topcolor: string, blendBorder: boolean, startX : number, startY : number, widthRatio : number, heightRatio : number)
  {
    // Top Side
    let xSubtractor = (1 - widthRatio) * (size / 2)
    let ySubtractor = (1 - widthRatio) * (size / 4)
    let path : Vector2[] = [];
    path.push(new Vector2(size / 2 - 1 + startX, startY));
    path.push(new Vector2(xSubtractor + startX, 
      size / 4 - 1 - ySubtractor + startY));
    path.push(new Vector2(xSubtractor + startX, size / 4 - ySubtractor + startY));
    path.push(new Vector2((size / 2 - 1) - (1 - heightRatio) * (size / 2) + xSubtractor + startX,
     (size / 2 - 1) - (1 - heightRatio) * (size / 4) - ySubtractor + startY));
    path.push(new Vector2((size - 1) - (size / 2) * (1 - heightRatio) + startX, 
      (size / 4) - (1 - heightRatio) * (size / 4) + startY));
    path.push(new Vector2((size - 1) - (size / 2) * (1 - heightRatio) + startX, 
      (size / 4 - 1) - (1 - heightRatio) * (size / 4) + startY));
    path.push(new Vector2(size / 2 + startX, startY));
    path.push(new Vector2(size / 2 - 1 + startX, startY));
    this.drawPath(ctx, edgecolor, topcolor, path, blendBorder);
  }

  drawRightFullTile(ctx: any, size: number, edgecolor: string, sidecolor: string, blendBorder: boolean, startX : number, startY : number, ratio : number, wallRatio : number) 
  {
    
    let xSubtractor = (1 - wallRatio) * (size / 2)
    let ySubtractor = (1 - wallRatio) * (size / 4)
    let path : Vector2[] = [];
    path.push(new Vector2(size - 1 + startX, size / 4 + startY));
    path.push(new Vector2(size - 1 + startX, (size / 4 * 3 - 1) - (size / 2) * (1 - ratio) + startY));
    path.push(new Vector2(size / 2 + xSubtractor + startX, (size - 1) - ((1 - ratio) * (size / 2)) - ySubtractor + startY));
    path.push(new Vector2(size / 2 + xSubtractor + startX, size / 2 - ySubtractor + startY));
    path.push(new Vector2(size - 1 + startX, size / 4 + startY));
    this.drawPath(ctx, edgecolor, sidecolor, path, blendBorder);
  }

}
