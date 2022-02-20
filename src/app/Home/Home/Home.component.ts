import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColorService } from 'src/app/Utilities/Color.service';
import { DrawingService } from 'src/app/Utilities/Drawing.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("canvassize") canvasSizeInput: ElementRef | undefined;
  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild("edgecolor") edgecolor: ElementRef | undefined;
  @ViewChild("sidefacecolor") sidefacecolor: ElementRef | undefined;
  @ViewChild("topfacecolor") topfacecolor: ElementRef | undefined;
  @ViewChild("preview") previewImg: ElementRef | undefined;
  @ViewChild("nameinput") filenameInput: ElementRef | undefined;
  @ViewChild("edgeblendCheck") edgeblendCheck: ElementRef | undefined;


  filename: string = "New Isometric Tile"
  shouldBlendEdges: boolean = false;
  canvasSize: number = 100;
  filesource: any = "";
  canDownload: boolean = false;
  pngSrc: any = "";

  constructor(private colorService: ColorService, private drawingService: DrawingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onClickIncrement(amount: number) {
    this.canvasSize += amount;
    console.log(this.canvasSize);
    if (this.canvasSizeInput) {
      this.canvasSizeInput.nativeElement.value = this.canvasSize;
    }
  }

  onChangeSize(): void {
    if (this.canvasSizeInput) {
      this.canvasSize = Number(this.canvasSizeInput.nativeElement.value);
    }
  }

  onClickDraw(): void {
    if (!this.canvas) {
      console.log("No Canvas Present");
      console.log(this.canvas);
      return;
    }

    var ctx = this.canvas.nativeElement.getContext("2d");
    if (!ctx) {
      console.log("Ctx call failed");
      return;
    }

    ctx.clearRect(0, 0, this.canvasSize * 4 + 80, this.canvasSize * 4 + 80);

    let c = this.canvas.nativeElement as HTMLCanvasElement;

    let colorsInitialized = this.edgecolor?.nativeElement && this.sidefacecolor?.nativeElement && this.topfacecolor?.nativeElement;
    if (!colorsInitialized) {
      return;
    }
    this.drawingService.drawFullTile(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawWalls(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawUpperSlab(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawLowerSlab(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawQuarterSlabs(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawSlopeBackRight(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawSlopeBackLeft(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawSlopeFrontLeft(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    this.drawingService.drawSlopeFrontRight(ctx, this.canvasSize,
      this.edgecolor?.nativeElement.value, this.sidefacecolor?.nativeElement.value,
      this.topfacecolor?.nativeElement.value, this.edgeblendCheck?.nativeElement.checked);
    var img = c.toDataURL("image/png");
    let p = this.previewImg?.nativeElement as HTMLImageElement;
    p.src = img;
    this.canDownload = true;
    this.pngSrc = p.src;
  }

  onChangeName(): void {
    this.filename = this.filenameInput?.nativeElement.value;
    console.log(this.filename)
  }

  onClickRandom(): void {
    if (!this.topfacecolor || !this.sidefacecolor) {
      return;
    }
    let a = this.colorService.generateRandomColor();
    let b = this.colorService.generateRandomColor();
    this.topfacecolor.nativeElement.value = a;
    this.sidefacecolor.nativeElement.value = b;
    this.onClickDraw();
  }

}
