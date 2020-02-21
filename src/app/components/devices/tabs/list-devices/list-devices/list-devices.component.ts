import { Component, OnInit } from "@angular/core";
import { DevicesService } from "src/app/services/devices/devices.service";
import { CommonService } from "src/app/services/common/common.service";

import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar
} from "@angular/material";

@Component({
  selector: "app-list-devices",
  templateUrl: "./list-devices.component.html",
  styleUrls: ["./list-devices.component.scss"]
})
export class ListDevicesComponent implements OnInit {
  deviceList = [];
  dialogRef = null;
  selectedDevice: any = [];
  constructor(
    private devicesService: DevicesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getDeviceList();
    this.devicesService.deviceSubjectData.subscribe(data => {
      if (data) {
        this.deviceList = data;
      }
    });
  }

  getDeviceList() {
    if (this.commonService.getDeviceStorageList()) {
              this.deviceList = this.commonService.getDeviceStorageList();

    } else {
      this.devicesService.getAllDeviceList().subscribe(data => {
        console.log(data);
        this.deviceList = data;
        if (!this.commonService.getStorageItem("deviceList")) {
          this.commonService.setStorageItem(
            "deviceList",
            JSON.stringify(this.deviceList)
          );
        }
      });
    }
  }

  allocateDevice(device, alertPopup) {
    this.dialogRef = this.dialog.open(alertPopup);
    this.selectedDevice = device;

    this.dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {
        const a = document.createElement("a");
        a.click();
        a.remove();
      }
    });
  }

  onYesClick() {
    const snackBarRef = this.snackBar.open(
      "Device Allocated Successfully.",
      "Undo",
      {
        duration: 3000
      }
    );

    const allocateDeviceList = this.commonService.getDeviceStorageList();
    const updatedDeviceList = allocateDeviceList.map(
      item =>
        item.id === this.selectedDevice.id
          ? { ...item, StatusCode: "ALLOCATE" }
          : item
    );
    this.commonService.setStorageItem(
      "deviceList",
      JSON.stringify(updatedDeviceList)
    );
    console.log(updatedDeviceList);
    this.deviceList = updatedDeviceList;
    this.dialogRef.close(true);
  }
}
