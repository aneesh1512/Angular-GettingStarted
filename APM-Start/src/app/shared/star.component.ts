import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {


    cropWidth = 75;
    @Input() rating: number = 0;
    @Output() stars: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.cropWidth = 3;
    }

    showStar(): void {
        this.stars.emit(`the stars are ${this.rating}`);
    }

}