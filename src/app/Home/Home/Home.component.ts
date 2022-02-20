import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("canvassize") canvasSizeInput : ElementRef | undefined;
  @ViewChild("canvas") canvas : ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild("edgecolor") edgecolor : ElementRef | undefined;
  @ViewChild("sidefacecolor") sidefacecolor : ElementRef | undefined;
  @ViewChild("topfacecolor") topfacecolor : ElementRef | undefined;
  @ViewChild("preview") previewImg : ElementRef | undefined;
  @ViewChild("filename") filenameInput : ElementRef | undefined;


  filename : string = "New Isometric Tile"
  canvasSize : number = 100;
  filesource : any = "";
  canDownload : boolean = false;
  pngSrc : any = "";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    this.onClickDraw();
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

    let c = this.canvas.nativeElement as HTMLCanvasElement;
    ctx.imageSmoothingEnabled = false;
    this.drawOutline(ctx);
    var img = c.toDataURL("image/png");
    let p = this.previewImg?.nativeElement as HTMLImageElement;
    p.src = img;
    this.canDownload = true;
    this.pngSrc = p.src;
  }

  onChangeName() : void
  {
    this.filename = this.filenameInput?.nativeElement.value;
  }

  drawOutline(ctx : any)
  {
    this.drawTop(ctx);
    this.drawLeft(ctx);
    this.drawRight(ctx);
  }
  drawLeft(ctx : any)
  {
    let size = this.canvasSize;
    let region = new Path2D();
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;

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
    ctx.fillStyle = this.sidefacecolor?.nativeElement.value;
    ctx.fill(region, 'nonzero');  
    
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    ctx.stroke(region, 'nonzero');
  }

  drawRight(ctx : any)
  {
    let size = this.canvasSize;
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
    ctx.fillStyle = this.sidefacecolor?.nativeElement.value;
    ctx.fill(region, 'nonzero');
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    ctx.stroke(region, 'nonzero');
  }

  drawTop(ctx : any) : void
  {
    let size = this.canvasSize;
    let region = new Path2D();
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    //stroke top-middle to left-upperquarter
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
    ctx.fillStyle = this.topfacecolor?.nativeElement.value;
    ctx.fill(region, 'nonzero');
    ctx.strokeStyle = this.edgecolor?.nativeElement.value;
    ctx.stroke(region, 'nonzero');
  }

}
