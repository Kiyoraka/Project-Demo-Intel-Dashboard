/* Maraliner Intel Dashboard — Hardcoded Seed Data */

export const COMPANY = {
  name: 'Maraliner',
  legalName: 'Maraliner Sdn Bhd',
  tagline: 'Bus Operations Intel Platform',
  hqState: 'Selangor',
  fleetSize: 30,
  driversTotal: 30,
  routesTotal: 12,
  yearsInService: 18,
  contact: {
    phone: '+603-7720 4400',
    email: 'ops@maraliner.com',
    address: 'No. 88, Jalan Pudu, 55100 Kuala Lumpur',
  },
};

/* ========== FLEET (30 buses) ========== */
/* status: healthy | watch | due | breakdown */
/* model + capacity + sensor readings give the click-modal substance */

export const FLEET = [
  { id: 'B-01', plate: 'WSA 4421', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Penang', odometer: 412380, lastService: '2026-04-02', nextServiceKm: 1620, sensors: { brake: 22, tire: 76, oil: 'OK', battery: 12.6, engineTemp: 87 } },
  { id: 'B-02', plate: 'JQE 4421', model: 'Scania K410', capacity: 40, status: 'due', route: 'KL-JB', odometer: 528144, lastService: '2025-11-20', nextServiceKm: -240, sensors: { brake: 78, tire: 41, oil: 'Low', battery: 12.1, engineTemp: 96 } },
  { id: 'B-03', plate: 'BKL 9012', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Ipoh', odometer: 298201, lastService: '2026-04-10', nextServiceKm: 4500, sensors: { brake: 18, tire: 82, oil: 'OK', battery: 12.7, engineTemp: 84 } },
  { id: 'B-04', plate: 'PNE 3301', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-Penang', odometer: 188422, lastService: '2026-03-28', nextServiceKm: 2820, sensors: { brake: 14, tire: 88, oil: 'OK', battery: 12.8, engineTemp: 82 } },
  { id: 'B-05', plate: 'MNG 5522', model: 'Volvo B8R', capacity: 36, status: 'healthy', route: 'Melaka-KL', odometer: 142811, lastService: '2026-04-15', nextServiceKm: 4870, sensors: { brake: 11, tire: 90, oil: 'OK', battery: 12.7, engineTemp: 83 } },
  { id: 'B-06', plate: 'SGR 8841', model: 'Scania K410', capacity: 40, status: 'watch', route: 'KL-Penang', odometer: 401922, lastService: '2026-02-14', nextServiceKm: 940, sensors: { brake: 38, tire: 62, oil: 'OK', battery: 12.2, engineTemp: 91 } },
  { id: 'B-07', plate: 'KTN 1199', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-KB', odometer: 289412, lastService: '2026-04-08', nextServiceKm: 3110, sensors: { brake: 24, tire: 79, oil: 'OK', battery: 12.6, engineTemp: 86 } },
  { id: 'B-08', plate: 'PRK 7733', model: 'Scania K360', capacity: 36, status: 'due', route: 'Ipoh-Penang', odometer: 488120, lastService: '2025-12-08', nextServiceKm: -110, sensors: { brake: 41, tire: 28, oil: 'OK', battery: 12.4, engineTemp: 89 } },
  { id: 'B-09', plate: 'WSB 2018', model: 'Volvo B8R', capacity: 36, status: 'healthy', route: 'KL-Kuantan', odometer: 211004, lastService: '2026-04-12', nextServiceKm: 4200, sensors: { brake: 16, tire: 84, oil: 'OK', battery: 12.7, engineTemp: 84 } },
  { id: 'B-10', plate: 'JKK 5566', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-JB', odometer: 332889, lastService: '2026-04-04', nextServiceKm: 2700, sensors: { brake: 19, tire: 81, oil: 'OK', battery: 12.6, engineTemp: 85 } },
  { id: 'B-11', plate: 'WPA 8842', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Penang', odometer: 144210, lastService: '2026-04-18', nextServiceKm: 4830, sensors: { brake: 12, tire: 89, oil: 'OK', battery: 12.8, engineTemp: 82 } },
  { id: 'B-12', plate: 'BHE 4488', model: 'Volvo B8R', capacity: 36, status: 'watch', route: 'KL-Ipoh', odometer: 378122, lastService: '2026-02-22', nextServiceKm: 1340, sensors: { brake: 32, tire: 68, oil: 'OK', battery: 12.3, engineTemp: 90 } },
  { id: 'B-13', plate: 'WLM 1023', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-JB', odometer: 256011, lastService: '2026-04-09', nextServiceKm: 3550, sensors: { brake: 17, tire: 83, oil: 'OK', battery: 12.7, engineTemp: 84 } },
  { id: 'B-14', plate: 'MLK 4466', model: 'Volvo B8R', capacity: 36, status: 'due', route: 'Melaka-KL', odometer: 466780, lastService: '2025-12-30', nextServiceKm: -85, sensors: { brake: 36, tire: 51, oil: 'Low', battery: 12.2, engineTemp: 95 } },
  { id: 'B-15', plate: 'WTC 7755', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Penang', odometer: 198344, lastService: '2026-04-14', nextServiceKm: 4080, sensors: { brake: 13, tire: 87, oil: 'OK', battery: 12.7, engineTemp: 83 } },
  { id: 'B-16', plate: 'NDS 6612', model: 'Scania K360', capacity: 36, status: 'healthy', route: 'Seremban-KL', odometer: 165090, lastService: '2026-04-16', nextServiceKm: 4710, sensors: { brake: 14, tire: 86, oil: 'OK', battery: 12.7, engineTemp: 83 } },
  { id: 'B-17', plate: 'WTM 9001', model: 'Volvo B8R', capacity: 36, status: 'healthy', route: 'KL-Kuantan', odometer: 224118, lastService: '2026-04-11', nextServiceKm: 3850, sensors: { brake: 18, tire: 82, oil: 'OK', battery: 12.6, engineTemp: 85 } },
  { id: 'B-18', plate: 'TBP 3344', model: 'Scania K410', capacity: 40, status: 'breakdown', route: 'KL-KB', odometer: 502119, lastService: '2025-10-12', nextServiceKm: -890, sensors: { brake: 64, tire: 22, oil: 'Critical', battery: 11.4, engineTemp: 104 } },
  { id: 'B-19', plate: 'WHB 5512', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Penang', odometer: 178244, lastService: '2026-04-13', nextServiceKm: 4350, sensors: { brake: 15, tire: 85, oil: 'OK', battery: 12.7, engineTemp: 83 } },
  { id: 'B-20', plate: 'CFG 2244', model: 'Volvo B8R', capacity: 36, status: 'healthy', route: 'KL-Kuantan', odometer: 209450, lastService: '2026-04-07', nextServiceKm: 3680, sensors: { brake: 17, tire: 83, oil: 'OK', battery: 12.6, engineTemp: 85 } },
  { id: 'B-21', plate: 'WJN 8800', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-JB', odometer: 311009, lastService: '2026-04-05', nextServiceKm: 3120, sensors: { brake: 21, tire: 80, oil: 'OK', battery: 12.6, engineTemp: 86 } },
  { id: 'B-22', plate: 'SGR 2241', model: 'Volvo B8R', capacity: 36, status: 'watch', route: 'Shah-KL', odometer: 388022, lastService: '2026-02-28', nextServiceKm: 1080, sensors: { brake: 34, tire: 65, oil: 'OK', battery: 12.0, engineTemp: 92 } },
  { id: 'B-23', plate: 'WCD 4408', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Ipoh', odometer: 153128, lastService: '2026-04-19', nextServiceKm: 4910, sensors: { brake: 11, tire: 90, oil: 'OK', battery: 12.8, engineTemp: 82 } },
  { id: 'B-24', plate: 'PGN 7711', model: 'Scania K360', capacity: 36, status: 'healthy', route: 'Ipoh-Penang', odometer: 192800, lastService: '2026-04-06', nextServiceKm: 4220, sensors: { brake: 16, tire: 84, oil: 'OK', battery: 12.6, engineTemp: 84 } },
  { id: 'B-25', plate: 'WAG 6622', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'KL-Penang', odometer: 233899, lastService: '2026-04-03', nextServiceKm: 3470, sensors: { brake: 20, tire: 81, oil: 'OK', battery: 12.6, engineTemp: 85 } },
  { id: 'B-26', plate: 'BKE 3389', model: 'Volvo B8R', capacity: 36, status: 'watch', route: 'KL-JB', odometer: 374512, lastService: '2026-02-19', nextServiceKm: 1190, sensors: { brake: 35, tire: 64, oil: 'OK', battery: 12.1, engineTemp: 91 } },
  { id: 'B-27', plate: 'WPK 1188', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-KB', odometer: 188224, lastService: '2026-04-17', nextServiceKm: 4450, sensors: { brake: 13, tire: 87, oil: 'OK', battery: 12.7, engineTemp: 83 } },
  { id: 'B-28', plate: 'KDH 5520', model: 'Volvo B8R', capacity: 36, status: 'healthy', route: 'Alor-Setar-KL', odometer: 218900, lastService: '2026-04-09', nextServiceKm: 3920, sensors: { brake: 17, tire: 83, oil: 'OK', battery: 12.7, engineTemp: 84 } },
  { id: 'B-29', plate: 'WMS 4422', model: 'Scania K410', capacity: 40, status: 'healthy', route: 'KL-Penang', odometer: 251208, lastService: '2026-04-01', nextServiceKm: 3200, sensors: { brake: 19, tire: 81, oil: 'OK', battery: 12.6, engineTemp: 85 } },
  { id: 'B-30', plate: 'TGT 8809', model: 'Volvo B11R', capacity: 44, status: 'healthy', route: 'Kuala Terengganu-KL', odometer: 174012, lastService: '2026-04-15', nextServiceKm: 4640, sensors: { brake: 14, tire: 86, oil: 'OK', battery: 12.7, engineTemp: 83 } },
];
