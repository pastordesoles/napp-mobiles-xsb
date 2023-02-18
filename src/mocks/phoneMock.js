export const phoneMocks = [
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  },
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  },
];

export const phoneDetailMock = {
  id: "pMZMhe_ZaAPZoaCCtlDrg",
  brand: "Acer",
  model: "Liquid Jade 2",
  price: "123",
  imgUrl:
    "https://itx-frontend-test.onrender.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg",
  networkTechnology: "GSM / HSPA / LTE",
  networkSpeed: "HSPA 42.2/5.76 Mbps  LTE Cat4 150/50 Mbps",
  gprs: "Yes",
  edge: "Yes",
  announced: "2016  February",
  status: "Available",
  dimentions: "-",
  weight: "",
  sim: ["Dual SIM (Nano-SIM", "dual stand-by)"],
  displayType: "Super AMOLED capacitive touchscreen  16M colors",
  displayResolution: "5.5 inches",
  displaySize: "1080 x 1920 pixels (~401 ppi pixel density)",
  os: "Android 6.0 (Marshmallow)",
  cpu: "Hexa-core (4x1.4 GHz Cortex-A53 & 2x1.8 GHz Cortex-A57)",
  chipset: "Qualcomm MSM8992 Snapdragon 808",
  gpu: "",
  externalMemory: "microSD  up to 256 GB",
  internalMemory: ["32 GB"],
  ram: "3 GB RAM",
  primaryCamera: ["21 MP", "autofocus", "dual-LED flash"],
  secondaryCmera: "8 MP",
  speaker: "Yes",
  audioJack: "Yes",
  wlan: ["Wi-Fi 802.11 a/b/g/n/ac", "dual-band", "Wi-Fi Direct", "hotspot"],
  bluetooth: ["4.0", "A2DP", "LE"],
  gps: "Yes with A-GPS",
  nfc: "",
  radio: "FM radio",
  usb: "microUSB 2.0",
  sensors: ["Accelerometer", "gyro", "proximity", "compass"],
  battery: "",
  colors: ["Black"],
  options: {
    colors: [
      {
        code: 1000,
        name: "Black",
      },
    ],
    storages: [
      {
        code: 2000,
        name: "32 GB",
      },
    ],
  },
};

export const phoneDetailMockMissingElements = {
  id: "pMZMhe_ZaAPZoaCCtlDrg",
  brand: "Acer",
  model: "Liquid Jade 2",

  imgUrl:
    "https://itx-frontend-test.onrender.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg",

  weight: "100",
  ram: "3 GB RAM",
  primaryCamera: ["21 MP", "autofocus", "dual-LED flash"],
  secondaryCmera: "8 MP",

  displayType: "Super AMOLED capacitive touchscreen  16M colors",
  displayResolution: "5.5 inches",
  displaySize: "1080 x 1920 pixels (~401 ppi pixel density)",
  os: "Android 6.0 (Marshmallow)",
  cpu: "Hexa-core (4x1.4 GHz Cortex-A53 & 2x1.8 GHz Cortex-A57)",
  chipset: "Qualcomm MSM8992 Snapdragon 808",

  battery: "Big one",
};
