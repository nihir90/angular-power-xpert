import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/services/common/common.service";
import { DevicesService } from "src/app/services/devices/devices.service";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"]
})
export class DevicesComponent implements OnInit {
  deviceList: any = [];
  constructor(
    private commonService: CommonService,
    private devicesService: DevicesService
  ) {}

  ngOnInit() {
    console.log("g");
  }

  getAllocatedDevice(event) {
    if (event.index === 0) {
      const allocateDeviceList = this.commonService.getDeviceStorageList();
      this.deviceList = allocateDeviceList;
      this.devicesService.updateDeviceData(this.deviceList);
    }
    if (event.index === 1) {
      const allocateDeviceList = this.commonService.getDeviceStorageList();
      this.deviceList = allocateDeviceList.filter(
        index => index.StatusCode === "ALLOCATE"
      );
      this.deviceList = allocateDeviceList;
      this.devicesService.updateDeviceData(this.deviceList);
    }
    if (event.index === 2) {
      const deAllocateDeviceList = this.commonService.getDeviceStorageList();
      this.deviceList = deAllocateDeviceList.filter(
        index => index.StatusCode !== "ALLOCATE"
      );
      this.deviceList = deAllocateDeviceList;
      this.devicesService.updateDeviceData(this.deviceList);
    }
  }
}
