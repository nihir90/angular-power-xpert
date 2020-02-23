import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/services/common/common.service";
import { DevicesService } from "src/app/services/devices/devices.service";

@Component({
  selector: "app-available-devices",
  templateUrl: "./available-devices.component.html",
  styleUrls: ["./available-devices.component.scss"]
})
export class AvailableDevicesComponent implements OnInit {
  availableDeviceList = [];
  constructor(
    private commonService: CommonService,
    private devicesService: DevicesService
  ) {}

  ngOnInit() {
    this.getAvailableDeviceList();
    this.devicesService.deviceSubjectData.subscribe(data => {
      if (data) {
        this.availableDeviceList = data.filter(
          index => index.StatusCode  !== "ALLOCATE"
        );
      }
    });
  }

  getAvailableDeviceList() {
    const availableDeviceList = this.commonService.getDeviceStorageList();
    this.availableDeviceList = availableDeviceList.filter(
      index => index.StatusCode !== "ALLOCATE"
    );
  }
}
