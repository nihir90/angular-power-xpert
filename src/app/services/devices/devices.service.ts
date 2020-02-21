import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DevicesService {
  constructor() {}
  //  getCountryList(data): Observable<any> {
  deviceSubject: Subject<any> = new Subject();
  deviceSubjectData = this.deviceSubject.asObservable();

 updateDeviceData(data: string) {
    this.deviceSubject.next(data);
  }

  getAllDeviceList(): Observable<any[]> {
    const devices: any = [
      {
        id: "1",
        name: "Galaxy Note 3",
        featured: false,
        width: 360,
        userAgent:
          "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        touch: true,
        os: "",
        pixelRatio: 3,
        height: 640,
        StatusCode: null
      },
      {
        id: "2",
        name: "Galaxy Note 9",
        width: 414,
        height: 846,
        pixelRatio: 3.5,
        userAgent:
          "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "Android",
        StatusCode: null
      },
      {
        id: "3",
        name: "Galaxy S5",
        featured: false,
        width: 360,
        userAgent:
          "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 3,
        height: 640,
        StatusCode: null
      },
      {
        id: "4",
        name: "Galaxy S9/S9+",
        featured: true,
        width: 360,
        userAgent:
          "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "Android",
        pixelRatio: 4,
        height: 740,
        StatusCode: null
      },
      {
        id: "5",
        name: "LG Optimus L70",
        featured: false,
        width: 384,
        userAgent:
          "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 1.25,
        height: 640,
        StatusCode: null
      },
      {
        id: "6",
        name: "Microsoft Lumia 550",
        featured: false,
        width: 360,
        userAgent:
          "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
        touch: true,
        os: "",
        pixelRatio: 2,
        height: 640,
        StatusCode: null
      },
      {
        id: "7",
        name: "Microsoft Lumia 950",
        featured: false,
        width: 360,
        userAgent:
          "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
        touch: true,
        os: "",
        pixelRatio: 4,
        height: 640,
        StatusCode: null
      },
      {
        id: "8",
        name: "Nexus 5X",
        featured: false,
        width: 412,
        userAgent:
          "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 2.625,
        height: 732,
        StatusCode: null
      },
      {
        id: "9",
        name: "Nexus 6P",
        featured: false,
        width: 412,
        userAgent:
          "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 3.5,
        height: 732,
        StatusCode: null
      },
      {
        id: "10",
        name: "Nokia 8110 4G",
        width: 240,
        height: 320,
        pixelRatio: 1,
        userAgent:
          "Mozilla/5.0 (Mobile; Nokia 8110 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
        touch: true,
        os: "KaiOS",
        StatusCode: null
      },
      {
        id: "11",
        name: "Pixel 2",
        featured: false,
        width: 411,
        userAgent:
          "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 2.625,
        height: 731,
        StatusCode: null
      },
      {
        id: "12",
        name: "Pixel 2 XL",
        featured: false,
        width: 411,
        userAgent:
          "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36",
        touch: true,
        os: "",
        pixelRatio: 3.5,
        height: 823,
        StatusCode: null
      },
      {
        id: "13",
        name: "iPhone 5/SE",
        featured: false,
        width: 320,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        touch: true,
        os: "",
        pixelRatio: 2,
        height: 568,
        StatusCode: null
      },
      {
        id: "14",
        name: "iPhone 6/7/8",
        featured: true,
        width: 375,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        touch: true,
        os: "",
        pixelRatio: 2,
        height: 667,
        StatusCode: null
      },
      {
        id: "15",
        name: "iPhone 6/7/8 Plus",
        featured: true,
        width: 414,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        touch: true,
        os: "",
        pixelRatio: 3,
        height: 736,
        StatusCode: null
      },
      {
        id: "16",
        name: "iPhone X/XS",
        featured: true,
        width: 375,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1",
        touch: true,
        os: "",
        pixelRatio: 3,
        height: 812,
        StatusCode: null
      },
      {
        id: "17",
        name: "iPhone XR",
        featured: false,
        width: 414,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1",
        touch: true,
        os: "",
        pixelRatio: 2,
        height: 896,
        StatusCode: null
      },
      {
        id: "18",
        name: "iPhone XS Max",
        featured: false,
        width: 414,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1",
        touch: true,
        os: "",
        pixelRatio: 3,
        height: 896,
        StatusCode: null
      }
    ];

    //  return devices.pipe(tap());
    return of(devices);
  }
}
