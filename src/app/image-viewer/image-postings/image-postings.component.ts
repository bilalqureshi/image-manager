import { Component, OnInit } from '@angular/core';
import { constants } from '../../shared/constants';

@Component({
  selector: 'app-image-postings',
  templateUrl: './image-postings.component.html',
  styleUrls: ['./image-postings.component.scss']
})
export class ImagePostingsComponent implements OnInit {
  image: any;
  imageArr: Array<any> = [];
  zoomedImage: string;
  selectedIndex: number;
  zoomClicked: boolean = false;
  constructor() { }

  ngOnInit() {
    this.loadImages();
  }

  openZoom(index: number): void{
    this.selectedIndex = index;
    this.zoomedImage = this.imageArr[index].base64;
    this.zoomClicked = true
  }

  close(): void {
    this.zoomClicked = false;
  }

  delete(): void {
    this.imageArr.splice(this.selectedIndex, 1);
    localStorage.removeItem(constants.STORAGEARRAY);
    localStorage.setItem(constants.STORAGEARRAY, JSON.stringify(this.imageArr));
  }

  loadImages(): void {
    this.imageArr = JSON.parse(localStorage.getItem(constants.STORAGEARRAY)) === null ?
      [] : JSON.parse(localStorage.getItem(constants.STORAGEARRAY)) ;
  }

  uploadFile($event): void {
    this.convetToBase64($event.target);
  }

  convetToBase64(inputValue: any): void {
    const file:File = inputValue.files[0];
    const date = new Date(file.lastModifiedDate);
    const fileDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      const image = {
        base64: myReader.result,
        createdDate: fileDate
      };
      this.storeInLocalStorage(image);
    };
    myReader.readAsDataURL(file);
  }

  storeInLocalStorage(item):void {
    this.imageArr.push(item);
    localStorage.setItem(constants.STORAGEARRAY, JSON.stringify(this.imageArr));
    this.loadImages();
  }
}
