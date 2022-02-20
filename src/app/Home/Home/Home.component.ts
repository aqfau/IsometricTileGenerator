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
  @ViewChild("filename") filenameInput: ElementRef | undefined;
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
    if (this.canvasSizeInput) {
      this.canvasSizeInput.nativeElement.value = this.canvasSize;
    }
  }

  onChangeSize(): void {
    console.log(this.canvasSizeInput);
    if (this.canvasSizeInput) {
      this.canvasSize = this.canvasSizeInput.nativeElement.value;
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

    let c = this.canvas.nativeElement as HTMLCanvasElement;

    let colorsInitialized = this.edgecolor?.nativeElement && this.sidefacecolor?.nativeElement && this.topfacecolor?.nativeElement;
    if (!colorsInitialized) {
      return;
    }
    this.drawingService.drawOutline(ctx, this.canvasSize,
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
