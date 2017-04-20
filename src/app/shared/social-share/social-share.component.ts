import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'nw-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css']
})
export class SocialShareComponent implements OnInit {
  values;
  url: string;
  title: string;
  constructor(private dialogRef: MdDialogRef<SocialShareComponent>) { }

  ngOnInit() {
    /*this.url = this.dialogRef.config.data[0];
    this.title = this.dialogRef.config.data[1];*/
    // this.values = this.dialogRef.componentInstance. config.data;
  }
  popupClosed() {
    this.dialogRef.close();
  }
}
