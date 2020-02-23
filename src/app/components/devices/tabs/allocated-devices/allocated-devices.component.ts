import { Component, OnInit, OnChanges , Input , SimpleChanges } from "@angular/core";
import { CommonService } from "../../../../services/common/common.service";
import { DevicesService } from "../../../../services/devices/devices.service";

import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar
} from "@angular/material";

@Component({
  selector: "app-allocated-devices",
  templateUrl: "./allocated-devices.component.html",
  styleUrls: ["./allocated-devices.component.scss"]
})
export class AllocatedDevicesComponent implements OnInit, OnChanges {
  allocateDeviceList = [];
  dialogRef = null;
  selectedDevice: any = [];
  @Input() public set allocatedDevices(listData: any) {
    console.log(listData);
  }
  constructor(
    private commonService: CommonService,
    private devicesService: DevicesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
      ) {}

  ngOnInit() {
    this.getAllocatedDeviceList();
    this.devicesService.deviceSubjectData.subscribe(data => {
        if (data) {
          console.log(data);
          this.allocateDeviceList = data.filter(
        index => index.StatusCode === "ALLOCATE"
      );
        }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
  }

  getAllocatedDeviceList() {
      const allocateDeviceList = this.commonService.getDeviceStorageList();
      this.allocateDeviceList = allocateDeviceList.filter(
        index => index.StatusCode === "ALLOCATE"
      );
  }

  deallocateDevice(device, alertPopup) {
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
    console.log("here");
    let snackBarRef = this.snackBar.open('Device Deallocated Successfully.', 'Undo', {
  duration: 3000
});

    const allocateDeviceList = this.commonService.getDeviceStorageList();
    const updatedDeviceList = allocateDeviceList.map(
      item =>
        item.id === this.selectedDevice.id
          ? { ...item, StatusCode: null }
          : item
    );
    this.commonService.setStorageItem(
      "deviceList",
      JSON.stringify(updatedDeviceList)
    );
    this.allocateDeviceList = updatedDeviceList.filter(
      index => index.StatusCode === "ALLOCATE"
    );
    console.log(updatedDeviceList);
    this.dialogRef.close(true);
  }
}
