import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("canvassize") canvasSizeInput : ElementRef | undefined;
  @ViewChild("canvas") canvas : ElementRef | undefined;
  @ViewChild("edgecolor") edgecolor : ElementRef | undefined;
  @ViewChild("sidefacecolor") sidefacecolor : ElementRef | undefined;

  canvasSize : number = 100;

  constructor() { }

  ngOnInit() {
  }

  onClickIncrement(amount : number)
  {
    this.canvasSize += amount;
    if(this.canvasSizeInput)
    {
      this.canvasSizeInput.nativeElement.value = this.canvasSize;
    }
  }

  onChangeSize() : void {
    console.log(this.canvasSizeInput);
    if(this.canvasSizeInput) {
      this.canvasSize = this.canvasSizeInput.nativeElement.value;
    }
  }

  onClickDraw() : void {
    if(!this.canvas)
    {
      console.log("No Canvas Present");
      console.log(this.canvas);
      return;
    }

    var ctx = this.canvas.nativeElement.getContext("2d");
    if(!ctx)
    {
      console.log("Ctx call failed");
      return;
    }
    this.drawOutline(ctx);
    //var img    = c.toDataURL("image/png");
    //document.getElementById("existing-image-id").src = img;
  }

  drawOutline(ctx : any)
  {
    let region = new Path2D();
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    this.drawTopOutline(ctx);
    var fromX = 0;
    var fromY = this.canvasSize / 4 + 1;
    var toX = 0;
    var toY = this.canvasSize / 4 * 3 - 1; 
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);
    fromX = toX;
    fromY = toY;
    toX = this.canvasSize / 2;
    toY = this.canvasSize - 1
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);
    fromX = toX + 1;
    fromY = toY;
    toX = this.canvasSize;
    toY = this.canvasSize / 4 * 3;
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);
    fromX = toX;
    fromY = toY - 1;
    toX = this.canvasSize;
    toY = this.canvasSize / 4;
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);
  }

  drawTopOutline(ctx : any) : void
  {
    let region = new Path2D();
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    //stroke from topleftmiddle to topquarter
    var fromX = this.canvasSize / 2;
    var fromY = 0;
    var toX = 0;
    var toY = this.canvasSize / 4; 

    region.moveTo(fromX, fromY);
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);

    fromX = toX;
    fromY = toY + 1;
    toX = this.canvasSize / 2;
    toY = this.canvasSize / 2;
    
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);

    fromX = toX + 1;
    fromY = toY;
    toX = this.canvasSize;
    toY = this.canvasSize / 4;
    
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);

    fromX = toX;
    fromY = toY - 1;
    toX = this.canvasSize / 2 + 1;
    toY = 0;
    
    this.drawLine(ctx, fromX, fromY, toX, toY);
    region.lineTo(toX, toY);
    region.closePath();
    ctx.fillStyle = this.sidefacecolor?.nativeElement.value;
    ctx.fill(region, 'nonzero');
  }


  drawLine(ctx : any, fromX : number, fromY : number, toX : number, toY : number) : void
  {
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }

}
