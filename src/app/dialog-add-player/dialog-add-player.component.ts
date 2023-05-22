import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})

export class DialogAddPlayerComponent implements OnInit{

  onNoClick(): void {
    return;
  }
  
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {
      this.dialogRef.close();
  }
  

  ngOnInit(): void {
    
  }
}
