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

/* ========== ROUTES (12 inter-state corridors) ========== */

export const ROUTES = [
  { id: 'R-01', code: 'KL-PEN', name: 'KL - Penang',           origin: 'Kuala Lumpur',     destination: 'Penang',            km: 358, baseFare: 45.00, dailyTrips: 14, profitability: 'high'    },
  { id: 'R-02', code: 'KL-JB',  name: 'KL - Johor Bahru',      origin: 'Kuala Lumpur',     destination: 'Johor Bahru',       km: 332, baseFare: 42.00, dailyTrips: 12, profitability: 'high'    },
  { id: 'R-03', code: 'KL-KB',  name: 'KL - Kota Bharu',       origin: 'Kuala Lumpur',     destination: 'Kota Bharu',        km: 442, baseFare: 58.00, dailyTrips: 8,  profitability: 'medium'  },
  { id: 'R-04', code: 'KL-IPH', name: 'KL - Ipoh',             origin: 'Kuala Lumpur',     destination: 'Ipoh',              km: 205, baseFare: 32.00, dailyTrips: 10, profitability: 'high'    },
  { id: 'R-05', code: 'KL-KTN', name: 'KL - Kuantan',          origin: 'Kuala Lumpur',     destination: 'Kuantan',           km: 248, baseFare: 35.00, dailyTrips: 8,  profitability: 'medium'  },
  { id: 'R-06', code: 'MLK-KL', name: 'Melaka - KL',           origin: 'Melaka',           destination: 'Kuala Lumpur',      km: 144, baseFare: 22.00, dailyTrips: 14, profitability: 'high'    },
  { id: 'R-07', code: 'IPH-PEN',name: 'Ipoh - Penang',         origin: 'Ipoh',             destination: 'Penang',            km: 165, baseFare: 28.00, dailyTrips: 6,  profitability: 'medium'  },
  { id: 'R-08', code: 'SBN-KL', name: 'Seremban - KL',         origin: 'Seremban',         destination: 'Kuala Lumpur',      km: 71,  baseFare: 14.00, dailyTrips: 18, profitability: 'high'    },
  { id: 'R-09', code: 'SHA-KL', name: 'Shah Alam - KL',        origin: 'Shah Alam',        destination: 'Kuala Lumpur',      km: 28,  baseFare: 8.00,  dailyTrips: 24, profitability: 'medium'  },
  { id: 'R-10', code: 'KB-SGR', name: 'Kota Bharu - Sungai Petani', origin: 'Kota Bharu', destination: 'Sungai Petani',     km: 188, baseFare: 30.00, dailyTrips: 4,  profitability: 'loss'    },
  { id: 'R-11', code: 'AS-KL',  name: 'Alor Setar - KL',       origin: 'Alor Setar',       destination: 'Kuala Lumpur',      km: 442, baseFare: 56.00, dailyTrips: 6,  profitability: 'medium'  },
  { id: 'R-12', code: 'KT-KL',  name: 'Kuala Terengganu - KL', origin: 'Kuala Terengganu', destination: 'Kuala Lumpur',      km: 478, baseFare: 60.00, dailyTrips: 5,  profitability: 'medium'  },
];

/* ========== MAINTENANCE EVENTS (50 events spanning ~90 days) ========== */

export const MAINTENANCE_EVENTS = [
  { id: 'M-001', busId: 'B-18', date: '2026-04-21', type: 'breakdown',   description: 'Engine overheat, towed to depot',           costRm: 12500, status: 'in-progress' },
  { id: 'M-002', busId: 'B-02', date: '2026-04-20', type: 'predicted',   description: 'Brake pad wear 78 percent, replace',        costRm: 8400,  status: 'flagged'     },
  { id: 'M-003', busId: 'B-08', date: '2026-04-19', type: 'predicted',   description: 'Tire depth low, replace 2 tires',           costRm: 3200,  status: 'flagged'     },
  { id: 'M-004', busId: 'B-14', date: '2026-04-18', type: 'predicted',   description: 'Oil pressure dropping, full service due',   costRm: 5600,  status: 'flagged'     },
  { id: 'M-005', busId: 'B-22', date: '2026-04-17', type: 'predicted',   description: 'Battery voltage 12.0V, replace soon',       costRm: 900,   status: 'flagged'     },
  { id: 'M-006', busId: 'B-07', date: '2026-04-15', type: 'predicted',   description: 'Engine temp trending high',                 costRm: 1800,  status: 'flagged'     },
  { id: 'M-007', busId: 'B-23', date: '2026-04-14', type: 'scheduled',   description: 'Routine 100K service',                      costRm: 2200,  status: 'completed'   },
  { id: 'M-008', busId: 'B-11', date: '2026-04-13', type: 'scheduled',   description: 'Brake fluid + filter change',               costRm: 1100,  status: 'completed'   },
  { id: 'M-009', busId: 'B-30', date: '2026-04-12', type: 'scheduled',   description: 'Tire rotation + alignment',                 costRm: 850,   status: 'completed'   },
  { id: 'M-010', busId: 'B-15', date: '2026-04-11', type: 'scheduled',   description: 'Air-con regas',                             costRm: 480,   status: 'completed'   },
  { id: 'M-011', busId: 'B-04', date: '2026-04-10', type: 'scheduled',   description: 'Wheel bearing inspection',                  costRm: 320,   status: 'completed'   },
  { id: 'M-012', busId: 'B-20', date: '2026-04-09', type: 'scheduled',   description: 'Routine 75K service',                       costRm: 1900,  status: 'completed'   },
  { id: 'M-013', busId: 'B-13', date: '2026-04-08', type: 'scheduled',   description: 'Coolant flush',                             costRm: 380,   status: 'completed'   },
  { id: 'M-014', busId: 'B-25', date: '2026-04-07', type: 'scheduled',   description: 'Front brake pad change',                    costRm: 1200,  status: 'completed'   },
  { id: 'M-015', busId: 'B-19', date: '2026-04-05', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
  { id: 'M-016', busId: 'B-27', date: '2026-04-04', type: 'unscheduled', description: 'Headlight replacement',                     costRm: 220,   status: 'completed'   },
  { id: 'M-017', busId: 'B-09', date: '2026-04-03', type: 'scheduled',   description: 'Suspension check',                          costRm: 680,   status: 'completed'   },
  { id: 'M-018', busId: 'B-29', date: '2026-04-02', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
  { id: 'M-019', busId: 'B-01', date: '2026-04-02', type: 'scheduled',   description: 'Brake pad change rear',                     costRm: 980,   status: 'completed'   },
  { id: 'M-020', busId: 'B-21', date: '2026-04-01', type: 'scheduled',   description: 'Oil + filter change',                       costRm: 420,   status: 'completed'   },
  { id: 'M-021', busId: 'B-17', date: '2026-03-30', type: 'unscheduled', description: 'Door actuator failure',                     costRm: 1450,  status: 'completed'   },
  { id: 'M-022', busId: 'B-06', date: '2026-03-28', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1600,  status: 'completed'   },
  { id: 'M-023', busId: 'B-12', date: '2026-03-25', type: 'scheduled',   description: 'Air filter + cabin filter',                 costRm: 280,   status: 'completed'   },
  { id: 'M-024', busId: 'B-26', date: '2026-03-22', type: 'scheduled',   description: 'Tire change x4',                            costRm: 4200,  status: 'completed'   },
  { id: 'M-025', busId: 'B-03', date: '2026-03-20', type: 'unscheduled', description: 'Windshield crack repair',                   costRm: 850,   status: 'completed'   },
  { id: 'M-026', busId: 'B-16', date: '2026-03-18', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1600,  status: 'completed'   },
  { id: 'M-027', busId: 'B-24', date: '2026-03-15', type: 'scheduled',   description: 'Brake pad change front',                    costRm: 1100,  status: 'completed'   },
  { id: 'M-028', busId: 'B-10', date: '2026-03-12', type: 'scheduled',   description: 'Coolant + radiator flush',                  costRm: 720,   status: 'completed'   },
  { id: 'M-029', busId: 'B-28', date: '2026-03-10', type: 'unscheduled', description: 'Steering pump replacement',                 costRm: 2800,  status: 'completed'   },
  { id: 'M-030', busId: 'B-05', date: '2026-03-08', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
  { id: 'M-031', busId: 'B-07', date: '2026-03-05', type: 'scheduled',   description: 'Air-con compressor service',                costRm: 1900,  status: 'completed'   },
  { id: 'M-032', busId: 'B-18', date: '2026-03-01', type: 'unscheduled', description: 'Alternator failure',                        costRm: 2400,  status: 'completed'   },
  { id: 'M-033', busId: 'B-14', date: '2026-02-26', type: 'scheduled',   description: 'Brake fluid change',                        costRm: 380,   status: 'completed'   },
  { id: 'M-034', busId: 'B-02', date: '2026-02-24', type: 'unscheduled', description: 'Clutch replacement',                        costRm: 6800,  status: 'completed'   },
  { id: 'M-035', busId: 'B-08', date: '2026-02-22', type: 'scheduled',   description: 'Routine 100K service',                      costRm: 2200,  status: 'completed'   },
  { id: 'M-036', busId: 'B-22', date: '2026-02-20', type: 'unscheduled', description: 'Brake caliper seizure',                     costRm: 1800,  status: 'completed'   },
  { id: 'M-037', busId: 'B-12', date: '2026-02-18', type: 'unscheduled', description: 'Engine sensor fault',                       costRm: 950,   status: 'completed'   },
  { id: 'M-038', busId: 'B-06', date: '2026-02-15', type: 'scheduled',   description: 'Brake pad change rear',                     costRm: 980,   status: 'completed'   },
  { id: 'M-039', busId: 'B-26', date: '2026-02-12', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
  { id: 'M-040', busId: 'B-13', date: '2026-02-08', type: 'scheduled',   description: 'Tire change x4',                            costRm: 4200,  status: 'completed'   },
  { id: 'M-041', busId: 'B-18', date: '2026-02-05', type: 'unscheduled', description: 'Cooling fan replacement',                   costRm: 1100,  status: 'completed'   },
  { id: 'M-042', busId: 'B-29', date: '2026-02-02', type: 'scheduled',   description: 'Brake fluid + filter',                      costRm: 380,   status: 'completed'   },
  { id: 'M-043', busId: 'B-01', date: '2026-01-30', type: 'scheduled',   description: 'Routine 100K service',                      costRm: 2200,  status: 'completed'   },
  { id: 'M-044', busId: 'B-17', date: '2026-01-28', type: 'scheduled',   description: 'Tire rotation',                             costRm: 280,   status: 'completed'   },
  { id: 'M-045', busId: 'B-21', date: '2026-01-25', type: 'scheduled',   description: 'Engine oil change',                         costRm: 420,   status: 'completed'   },
  { id: 'M-046', busId: 'B-08', date: '2026-01-22', type: 'unscheduled', description: 'Battery replacement',                       costRm: 850,   status: 'completed'   },
  { id: 'M-047', busId: 'B-25', date: '2026-01-18', type: 'scheduled',   description: 'Brake pad change front',                    costRm: 1100,  status: 'completed'   },
  { id: 'M-048', busId: 'B-04', date: '2026-01-15', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
  { id: 'M-049', busId: 'B-19', date: '2026-01-12', type: 'unscheduled', description: 'Door seal replacement',                     costRm: 320,   status: 'completed'   },
  { id: 'M-050', busId: 'B-30', date: '2026-01-08', type: 'scheduled',   description: 'Routine 50K service',                       costRm: 1550,  status: 'completed'   },
];

/* ========== DEMAND MATRIX (12 routes x 10 two-hour slots) ========== */
/* Load % by route and time-of-day bucket. Buckets: 06-08, 08-10, 10-12, 12-14, 14-16, 16-18, 18-20, 20-22, 22-00, 00-02 */

export const DEMAND_HOUR_LABELS = ['06-08', '08-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-00', '00-02'];

export const DEMAND_MATRIX = [
  { routeCode: 'KL-PEN', routeName: 'KL - Penang',   load: [22, 78, 88, 65, 72, 91, 95, 74, 40, 8] },
  { routeCode: 'KL-JB',  routeName: 'KL - JB',       load: [18, 62, 82, 79, 85, 92, 88, 71, 38, 12] },
  { routeCode: 'KL-KB',  routeName: 'KL - Kota Bharu', load: [16, 44, 68, 78, 82, 81, 73, 52, 28, 6] },
  { routeCode: 'KL-IPH', routeName: 'KL - Ipoh',     load: [35, 72, 84, 66, 72, 88, 82, 60, 32, 10] },
  { routeCode: 'KL-KTN', routeName: 'KL - Kuantan',  load: [24, 58, 70, 64, 68, 74, 76, 54, 26, 4] },
  { routeCode: 'MLK-KL', routeName: 'Melaka - KL',   load: [42, 88, 66, 55, 62, 85, 89, 68, 32, 8] },
  { routeCode: 'IPH-PEN',routeName: 'Ipoh - Penang', load: [12, 48, 72, 68, 65, 78, 62, 44, 18, 2] },
  { routeCode: 'SBN-KL', routeName: 'Seremban - KL', load: [58, 92, 78, 62, 68, 90, 94, 72, 38, 10] },
  { routeCode: 'SHA-KL', routeName: 'Shah Alam - KL',load: [68, 94, 82, 68, 72, 94, 96, 80, 42, 14] },
  { routeCode: 'KB-SGR', routeName: 'KB - Sg Petani',load: [8, 22, 34, 40, 42, 38, 28, 18, 10, 0] },
  { routeCode: 'AS-KL',  routeName: 'Alor Setar - KL', load: [14, 38, 58, 56, 54, 62, 66, 48, 22, 4] },
  { routeCode: 'KT-KL',  routeName: 'KT - KL',       load: [12, 32, 52, 58, 56, 64, 68, 50, 22, 3] },
];

export const NETWORK_METRICS = {
  loadFactor: 71,
  peakLoad: 89,
  offPeakLoad: 34,
  peakOffPeakGap: 55,
  unservedSignals: 12,
  routesBelowThreshold: 3,
  scheduleSuggestions: [
    { routeCode: 'KL-PEN', change: 'Add 2 trips Fri PM', projectedGainRm: 4200, cadence: 'per week' },
    { routeCode: 'KL-JB',  change: 'Shift 14:00 trip to 13:30', projectedGainRm: 1800, cadence: 'per week' },
    { routeCode: 'KB-SGR', change: 'Cut Mon/Tue off-peak trips', projectedGainRm: 900,  cadence: 'cost savings per week' },
    { routeCode: 'IPH-PEN',change: 'Add Sun return trip', projectedGainRm: 2100, cadence: 'per week' },
    { routeCode: 'KL-KB',  change: 'Reduce Wed frequency', projectedGainRm: 1200, cadence: 'cost savings per week' },
  ],
};

/* ========== DRIVERS (30) ========== */
/* Ethnic mix reflects real Malaysian bus-operator workforce */

export const DRIVERS = [
  { id: 'D-01', name: 'Ahmad Zulkifli',  licenceClass: 'E',  yearsService: 12, phone: '012-334-8821', status: 'active'  },
  { id: 'D-02', name: 'Sarah Tan',        licenceClass: 'E',  yearsService: 8,  phone: '017-225-1142', status: 'active'  },
  { id: 'D-03', name: 'Raj Kumaran',      licenceClass: 'E1', yearsService: 15, phone: '019-886-4401', status: 'active'  },
  { id: 'D-04', name: 'Wei Ming Lee',     licenceClass: 'E',  yearsService: 6,  phone: '013-441-5598', status: 'active'  },
  { id: 'D-05', name: 'Fatimah Hassan',   licenceClass: 'E',  yearsService: 10, phone: '016-772-3388', status: 'active'  },
  { id: 'D-06', name: 'Hassan Omar',      licenceClass: 'E1', yearsService: 18, phone: '012-118-7742', status: 'active'  },
  { id: 'D-07', name: 'Lim Kok Wai',      licenceClass: 'E',  yearsService: 9,  phone: '017-990-2240', status: 'active'  },
  { id: 'D-08', name: 'Ng Siew Li',       licenceClass: 'E',  yearsService: 7,  phone: '019-334-1156', status: 'active'  },
  { id: 'D-09', name: 'Karthik Raman',    licenceClass: 'E1', yearsService: 14, phone: '013-667-8823', status: 'active'  },
  { id: 'D-10', name: 'Siti Nurhaliza',   licenceClass: 'E',  yearsService: 5,  phone: '016-228-4410', status: 'active'  },
  { id: 'D-11', name: 'Chong Mun Fai',    licenceClass: 'E',  yearsService: 11, phone: '012-884-5521', status: 'active'  },
  { id: 'D-12', name: 'Azmi Rahim',       licenceClass: 'E',  yearsService: 8,  phone: '017-338-9902', status: 'active'  },
  { id: 'D-13', name: 'Priya Devi',       licenceClass: 'E',  yearsService: 6,  phone: '019-224-4478', status: 'active'  },
  { id: 'D-14', name: 'Tan Boon Hock',    licenceClass: 'E1', yearsService: 16, phone: '013-772-2248', status: 'active'  },
  { id: 'D-15', name: 'Ibrahim Yusof',    licenceClass: 'E',  yearsService: 9,  phone: '016-445-7721', status: 'active'  },
  { id: 'D-16', name: 'Suresh Pillai',    licenceClass: 'E',  yearsService: 7,  phone: '012-990-3324', status: 'active'  },
  { id: 'D-17', name: 'Goh Teck Seng',    licenceClass: 'E',  yearsService: 13, phone: '017-882-1108', status: 'risk'    },
  { id: 'D-18', name: 'Ramli Osman',      licenceClass: 'E1', yearsService: 20, phone: '019-334-8856', status: 'active'  },
  { id: 'D-19', name: 'Lim Chee Keong',   licenceClass: 'E',  yearsService: 8,  phone: '013-228-7740', status: 'active'  },
  { id: 'D-20', name: 'Nurul Ain',        licenceClass: 'E',  yearsService: 4,  phone: '016-667-2290', status: 'active'  },
  { id: 'D-21', name: 'Chandran Arumugam',licenceClass: 'E1', yearsService: 17, phone: '012-554-1108', status: 'active'  },
  { id: 'D-22', name: 'Yap Wei Lun',      licenceClass: 'E',  yearsService: 6,  phone: '017-334-5587', status: 'active'  },
  { id: 'D-23', name: 'Zulkifli Anwar',   licenceClass: 'E',  yearsService: 11, phone: '019-778-2240', status: 'active'  },
  { id: 'D-24', name: 'Maniam Subramaniam', licenceClass: 'E', yearsService: 13, phone: '013-445-8821', status: 'active'  },
  { id: 'D-25', name: 'Aminah Othman',    licenceClass: 'E',  yearsService: 5,  phone: '016-228-9925', status: 'active'  },
  { id: 'D-26', name: 'Wong Kah Hong',    licenceClass: 'E1', yearsService: 14, phone: '012-667-3340', status: 'active'  },
  { id: 'D-27', name: 'Ismail Rahman',    licenceClass: 'E',  yearsService: 10, phone: '017-882-4401', status: 'active'  },
  { id: 'D-28', name: 'Tan Swee Leong',   licenceClass: 'E',  yearsService: 8,  phone: '019-336-7720', status: 'underused' },
  { id: 'D-29', name: 'Balan Krishnan',   licenceClass: 'E',  yearsService: 9,  phone: '013-224-5588', status: 'active'  },
  { id: 'D-30', name: 'Kamarul Hafiz',    licenceClass: 'E',  yearsService: 6,  phone: '016-771-3302', status: 'underused' },
];

/* ========== ROSTER (7 days x 30 drivers) ========== */
/* Shift codes: shift | overtime | rest | gap | risk */

const R_MON = 0, R_TUE = 1, R_WED = 2, R_THU = 3, R_FRI = 4, R_SAT = 5, R_SUN = 6;

export const ROSTER_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const ROSTER = [
  { driverId: 'D-01', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-02', days: ['shift','overtime','shift','shift','shift','shift','rest']   },
  { driverId: 'D-03', days: ['shift','shift','rest','shift','shift','overtime','shift']   },
  { driverId: 'D-04', days: ['rest','shift','shift','shift','overtime','shift','rest']    },
  { driverId: 'D-05', days: ['shift','shift','shift','rest','shift','shift','shift']      },
  { driverId: 'D-06', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-07', days: ['rest','shift','shift','shift','shift','shift','rest']       },
  { driverId: 'D-08', days: ['shift','rest','shift','shift','shift','shift','shift']      },
  { driverId: 'D-09', days: ['shift','shift','shift','shift','rest','shift','rest']       },
  { driverId: 'D-10', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-11', days: ['shift','shift','rest','shift','shift','shift','shift']      },
  { driverId: 'D-12', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-13', days: ['rest','shift','shift','shift','shift','shift','shift']      },
  { driverId: 'D-14', days: ['shift','shift','shift','rest','shift','shift','rest']       },
  { driverId: 'D-15', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-16', days: ['gap','shift','shift','shift','shift','shift','rest']        },
  { driverId: 'D-17', days: ['shift','shift','shift','shift','risk','risk','shift']       },
  { driverId: 'D-18', days: ['shift','shift','rest','shift','shift','shift','shift']      },
  { driverId: 'D-19', days: ['shift','overtime','shift','shift','shift','rest','rest']    },
  { driverId: 'D-20', days: ['gap','shift','shift','rest','shift','shift','shift']        },
  { driverId: 'D-21', days: ['shift','shift','shift','shift','shift','overtime','rest']   },
  { driverId: 'D-22', days: ['shift','rest','shift','shift','shift','shift','shift']      },
  { driverId: 'D-23', days: ['shift','shift','shift','shift','overtime','shift','rest']   },
  { driverId: 'D-24', days: ['shift','shift','rest','shift','shift','shift','rest']       },
  { driverId: 'D-25', days: ['rest','shift','shift','shift','shift','shift','shift']      },
  { driverId: 'D-26', days: ['shift','shift','shift','rest','shift','overtime','rest']    },
  { driverId: 'D-27', days: ['gap','shift','shift','shift','shift','shift','rest']        },
  { driverId: 'D-28', days: ['rest','rest','shift','shift','rest','rest','shift']         },
  { driverId: 'D-29', days: ['shift','shift','shift','shift','shift','rest','rest']       },
  { driverId: 'D-30', days: ['rest','rest','shift','rest','shift','shift','rest']         },
];

export const WORKFORCE_METRICS = {
  onDutyToday: 28,
  totalDrivers: 30,
  weeklyOvertimeHours: 42,
  complianceRate: 92,
  openShiftGaps: 3,
  gapDay: 'Mon AM',
  suggestions: [
    { issue: 'Mon 6am gap (3 drivers)',       action: 'Call Hassan/Lim/Ismail on standby', impact: 'Fill 100%'    },
    { issue: 'Sarah Tan overtime 58 hrs/wk',  action: 'Swap Wed shift with Ng Siew Li',    impact: '-8 hrs OT'    },
    { issue: 'Raj Thu/Fri back-to-back',       action: 'Insert mandatory rest Saturday',    impact: 'Compliance'  },
    { issue: 'Compliance risk: Goh Teck Seng', action: 'Force 48hr rest immediately',       impact: 'Mandatory'   },
    { issue: 'Underused: Tan/Kamarul < 20 hrs', action: 'Reassign to KL-Penang weekend trips', impact: '+coverage' },
  ],
};

/* ========== CUSTOMERS (~40 records with segments) ========== */

export const CUSTOMERS = [
  { id: 'C-001', name: 'Azlan Bin Hussein',     segment: 'repeat',  visits: 28, lifetimeRm: 1680, lastTravel: '2026-04-20' },
  { id: 'C-002', name: 'Mei Lin Chong',          segment: 'repeat',  visits: 44, lifetimeRm: 2640, lastTravel: '2026-04-21' },
  { id: 'C-003', name: 'Sundram Pillai',         segment: 'casual',  visits: 12, lifetimeRm: 540,  lastTravel: '2026-04-18' },
  { id: 'C-004', name: 'Aisyah Rahman',          segment: 'walkin',  visits: 2,  lifetimeRm: 84,   lastTravel: '2026-04-22' },
  { id: 'C-005', name: 'Tan Wei Jian',           segment: 'repeat',  visits: 36, lifetimeRm: 2160, lastTravel: '2026-04-21' },
  { id: 'C-006', name: 'Rashid Anwar',           segment: 'casual',  visits: 8,  lifetimeRm: 420,  lastTravel: '2026-04-17' },
  { id: 'C-007', name: 'Vimala Devi',            segment: 'repeat',  visits: 52, lifetimeRm: 3120, lastTravel: '2026-04-22' },
  { id: 'C-008', name: 'Lim Eng Hock',           segment: 'casual',  visits: 14, lifetimeRm: 720,  lastTravel: '2026-04-15' },
  { id: 'C-009', name: 'Siti Khadijah',          segment: 'repeat',  visits: 32, lifetimeRm: 1920, lastTravel: '2026-04-21' },
  { id: 'C-010', name: 'Wong Chee Meng',         segment: 'casual',  visits: 6,  lifetimeRm: 280,  lastTravel: '2026-04-12' },
  { id: 'C-011', name: 'Kumar Selvam',           segment: 'repeat',  visits: 40, lifetimeRm: 2400, lastTravel: '2026-04-20' },
  { id: 'C-012', name: 'Nurhafiza Zainal',       segment: 'walkin',  visits: 1,  lifetimeRm: 45,   lastTravel: '2026-04-22' },
  { id: 'C-013', name: 'Goh Wei Keong',          segment: 'repeat',  visits: 24, lifetimeRm: 1420, lastTravel: '2026-04-19' },
  { id: 'C-014', name: 'Ibrahim Abdullah',       segment: 'casual',  visits: 10, lifetimeRm: 540,  lastTravel: '2026-04-16' },
  { id: 'C-015', name: 'Yap Siew Ming',          segment: 'repeat',  visits: 30, lifetimeRm: 1800, lastTravel: '2026-04-21' },
  { id: 'C-016', name: 'Rajinder Singh',         segment: 'casual',  visits: 9,  lifetimeRm: 480,  lastTravel: '2026-04-14' },
  { id: 'C-017', name: 'Nor Azlina',             segment: 'walkin',  visits: 3,  lifetimeRm: 126,  lastTravel: '2026-04-22' },
  { id: 'C-018', name: 'Chan Ming Fai',          segment: 'repeat',  visits: 22, lifetimeRm: 1320, lastTravel: '2026-04-18' },
  { id: 'C-019', name: 'Rahim Osman',            segment: 'casual',  visits: 11, lifetimeRm: 600,  lastTravel: '2026-04-17' },
  { id: 'C-020', name: 'Lakshmi Narayanan',      segment: 'repeat',  visits: 48, lifetimeRm: 2880, lastTravel: '2026-04-22' },
  { id: 'C-021', name: 'Tan Boon Ling',          segment: 'walkin',  visits: 2,  lifetimeRm: 90,   lastTravel: '2026-04-22' },
  { id: 'C-022', name: 'Samsul Bahari',          segment: 'casual',  visits: 7,  lifetimeRm: 340,  lastTravel: '2026-04-13' },
  { id: 'C-023', name: 'Jessie Teh',             segment: 'repeat',  visits: 34, lifetimeRm: 2040, lastTravel: '2026-04-20' },
  { id: 'C-024', name: 'Mohan Raj',              segment: 'casual',  visits: 13, lifetimeRm: 680,  lastTravel: '2026-04-15' },
  { id: 'C-025', name: 'Rohana Ismail',          segment: 'repeat',  visits: 26, lifetimeRm: 1560, lastTravel: '2026-04-21' },
  { id: 'C-026', name: 'Chua Kim Teck',          segment: 'walkin',  visits: 4,  lifetimeRm: 168,  lastTravel: '2026-04-22' },
  { id: 'C-027', name: 'Azman Yusof',            segment: 'casual',  visits: 10, lifetimeRm: 520,  lastTravel: '2026-04-16' },
  { id: 'C-028', name: 'Indira Murthy',          segment: 'repeat',  visits: 38, lifetimeRm: 2280, lastTravel: '2026-04-22' },
  { id: 'C-029', name: 'Ho Weng Keong',          segment: 'casual',  visits: 15, lifetimeRm: 780,  lastTravel: '2026-04-18' },
  { id: 'C-030', name: 'Puteri Amirah',          segment: 'walkin',  visits: 2,  lifetimeRm: 96,   lastTravel: '2026-04-22' },
  { id: 'C-031', name: 'Kannan Muthu',           segment: 'repeat',  visits: 44, lifetimeRm: 2640, lastTravel: '2026-04-21' },
  { id: 'C-032', name: 'Lee Jun Ming',           segment: 'casual',  visits: 8,  lifetimeRm: 420,  lastTravel: '2026-04-14' },
  { id: 'C-033', name: 'Zainab Hamid',           segment: 'repeat',  visits: 29, lifetimeRm: 1740, lastTravel: '2026-04-20' },
  { id: 'C-034', name: 'Ong Siew Peng',          segment: 'casual',  visits: 12, lifetimeRm: 640,  lastTravel: '2026-04-17' },
  { id: 'C-035', name: 'Thanaseelan Rao',        segment: 'repeat',  visits: 33, lifetimeRm: 1980, lastTravel: '2026-04-21' },
  { id: 'C-036', name: 'Farhanah Nabilah',       segment: 'walkin',  visits: 1,  lifetimeRm: 42,   lastTravel: '2026-04-22' },
  { id: 'C-037', name: 'Saravanan K.',           segment: 'casual',  visits: 9,  lifetimeRm: 480,  lastTravel: '2026-04-15' },
  { id: 'C-038', name: 'Lim Pei Shan',           segment: 'repeat',  visits: 27, lifetimeRm: 1620, lastTravel: '2026-04-20' },
  { id: 'C-039', name: 'Rosnah Binti Omar',      segment: 'casual',  visits: 11, lifetimeRm: 580,  lastTravel: '2026-04-16' },
  { id: 'C-040', name: 'Wong Kah Loong',         segment: 'repeat',  visits: 31, lifetimeRm: 1860, lastTravel: '2026-04-21' },
];

export const CUSTOMER_SEGMENTS = {
  repeat:  { count: 18, percent: 40, label: 'Repeat (40%)',  color: '#C8234A' },
  casual:  { count: 16, percent: 38, label: 'Casual (38%)',  color: '#C9A227' },
  walkin:  { count: 9,  percent: 22, label: 'Walk-in (22%)', color: '#64748B' },
};

/* ========== TICKETS (rich live-feed seed ~60 entries across 4 channels) ========== */
/* channels: counter | online | agent | app */

export const TICKETS = [
  { id: 'T-1247', time: '12:47', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-007', seatNo: '14A' },
  { id: 'T-1246', time: '12:45', channel: 'counter', routeCode: 'KL-JB',  fare: 42, customerId: 'C-002', seatNo: '18B' },
  { id: 'T-1245', time: '12:42', channel: 'agent',   routeCode: 'KL-KB',  fare: 58, customerId: 'C-020', seatNo: '06A' },
  { id: 'T-1244', time: '12:40', channel: 'online',  routeCode: 'IPH-PEN',fare: 28, customerId: 'C-005', seatNo: '22C' },
  { id: 'T-1243', time: '12:38', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-028', seatNo: '12D' },
  { id: 'T-1242', time: '12:35', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-012', seatNo: '04A' },
  { id: 'T-1241', time: '12:33', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-031', seatNo: '08B' },
  { id: 'T-1240', time: '12:30', channel: 'online',  routeCode: 'MLK-KL', fare: 22, customerId: 'C-018', seatNo: '15A' },
  { id: 'T-1239', time: '12:28', channel: 'agent',   routeCode: 'KL-KTN', fare: 35, customerId: 'C-009', seatNo: '20C' },
  { id: 'T-1238', time: '12:25', channel: 'counter', routeCode: 'SBN-KL', fare: 14, customerId: 'C-021', seatNo: '02A' },
  { id: 'T-1237', time: '12:22', channel: 'app',     routeCode: 'KL-IPH', fare: 32, customerId: 'C-015', seatNo: '11B' },
  { id: 'T-1236', time: '12:20', channel: 'online',  routeCode: 'KL-PEN', fare: 45, customerId: 'C-001', seatNo: '17D' },
  { id: 'T-1235', time: '12:18', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-025', seatNo: '09A' },
  { id: 'T-1234', time: '12:15', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-026', seatNo: '06B' },
  { id: 'T-1233', time: '12:12', channel: 'agent',   routeCode: 'KT-KL',  fare: 60, customerId: 'C-011', seatNo: '24A' },
  { id: 'T-1232', time: '12:10', channel: 'app',     routeCode: 'MLK-KL', fare: 22, customerId: 'C-033', seatNo: '13C' },
  { id: 'T-1231', time: '12:08', channel: 'online',  routeCode: 'KL-PEN', fare: 45, customerId: 'C-038', seatNo: '19B' },
  { id: 'T-1230', time: '12:05', channel: 'counter', routeCode: 'SBN-KL', fare: 14, customerId: 'C-004', seatNo: '03A' },
  { id: 'T-1229', time: '12:03', channel: 'app',     routeCode: 'KL-IPH', fare: 32, customerId: 'C-023', seatNo: '10B' },
  { id: 'T-1228', time: '12:00', channel: 'agent',   routeCode: 'AS-KL',  fare: 56, customerId: 'C-019', seatNo: '21A' },
  { id: 'T-1227', time: '11:57', channel: 'app',     routeCode: 'KL-KB',  fare: 58, customerId: 'C-035', seatNo: '05C' },
  { id: 'T-1226', time: '11:55', channel: 'online',  routeCode: 'KL-JB',  fare: 42, customerId: 'C-013', seatNo: '16A' },
  { id: 'T-1225', time: '11:52', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-017', seatNo: '07B' },
  { id: 'T-1224', time: '11:50', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-040', seatNo: '23D' },
  { id: 'T-1223', time: '11:47', channel: 'agent',   routeCode: 'IPH-PEN',fare: 28, customerId: 'C-029', seatNo: '14A' },
  { id: 'T-1222', time: '11:45', channel: 'online',  routeCode: 'KL-IPH', fare: 32, customerId: 'C-002', seatNo: '12C' },
  { id: 'T-1221', time: '11:42', channel: 'app',     routeCode: 'MLK-KL', fare: 22, customerId: 'C-008', seatNo: '08A' },
  { id: 'T-1220', time: '11:40', channel: 'counter', routeCode: 'KL-KTN', fare: 35, customerId: 'C-036', seatNo: '18B' },
  { id: 'T-1219', time: '11:38', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-007', seatNo: '15A' },
  { id: 'T-1218', time: '11:35', channel: 'online',  routeCode: 'SBN-KL', fare: 14, customerId: 'C-014', seatNo: '04D' },
  { id: 'T-1217', time: '11:32', channel: 'agent',   routeCode: 'KL-KB',  fare: 58, customerId: 'C-020', seatNo: '02C' },
  { id: 'T-1216', time: '11:30', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-031', seatNo: '22A' },
  { id: 'T-1215', time: '11:28', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-030', seatNo: '01B' },
  { id: 'T-1214', time: '11:25', channel: 'app',     routeCode: 'KL-IPH', fare: 32, customerId: 'C-005', seatNo: '17C' },
  { id: 'T-1213', time: '11:22', channel: 'online',  routeCode: 'KL-PEN', fare: 45, customerId: 'C-018', seatNo: '11A' },
  { id: 'T-1212', time: '11:20', channel: 'agent',   routeCode: 'KT-KL',  fare: 60, customerId: 'C-024', seatNo: '20D' },
  { id: 'T-1211', time: '11:18', channel: 'app',     routeCode: 'MLK-KL', fare: 22, customerId: 'C-028', seatNo: '09B' },
  { id: 'T-1210', time: '11:15', channel: 'counter', routeCode: 'SBN-KL', fare: 14, customerId: 'C-006', seatNo: '05A' },
  { id: 'T-1209', time: '11:12', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-015', seatNo: '13C' },
  { id: 'T-1208', time: '11:10', channel: 'online',  routeCode: 'IPH-PEN',fare: 28, customerId: 'C-032', seatNo: '16B' },
  { id: 'T-1207', time: '11:07', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-011', seatNo: '21A' },
  { id: 'T-1206', time: '11:05', channel: 'agent',   routeCode: 'KL-KTN', fare: 35, customerId: 'C-022', seatNo: '10C' },
  { id: 'T-1205', time: '11:02', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-016', seatNo: '03D' },
  { id: 'T-1204', time: '11:00', channel: 'app',     routeCode: 'KL-IPH', fare: 32, customerId: 'C-037', seatNo: '14B' },
  { id: 'T-1203', time: '10:58', channel: 'online',  routeCode: 'AS-KL',  fare: 56, customerId: 'C-025', seatNo: '19A' },
  { id: 'T-1202', time: '10:55', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-001', seatNo: '12D' },
  { id: 'T-1201', time: '10:52', channel: 'agent',   routeCode: 'KL-KB',  fare: 58, customerId: 'C-009', seatNo: '06A' },
  { id: 'T-1200', time: '10:50', channel: 'counter', routeCode: 'MLK-KL', fare: 22, customerId: 'C-034', seatNo: '07C' },
  { id: 'T-1199', time: '10:48', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-003', seatNo: '18B' },
  { id: 'T-1198', time: '10:45', channel: 'online',  routeCode: 'SBN-KL', fare: 14, customerId: 'C-039', seatNo: '04A' },
  { id: 'T-1197', time: '10:42', channel: 'app',     routeCode: 'KL-IPH', fare: 32, customerId: 'C-033', seatNo: '15D' },
  { id: 'T-1196', time: '10:40', channel: 'agent',   routeCode: 'KT-KL',  fare: 60, customerId: 'C-040', seatNo: '24B' },
  { id: 'T-1195', time: '10:38', channel: 'counter', routeCode: 'SHA-KL', fare: 8,  customerId: 'C-027', seatNo: '02A' },
  { id: 'T-1194', time: '10:35', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-013', seatNo: '20C' },
  { id: 'T-1193', time: '10:32', channel: 'online',  routeCode: 'KL-JB',  fare: 42, customerId: 'C-038', seatNo: '08D' },
  { id: 'T-1192', time: '10:30', channel: 'app',     routeCode: 'MLK-KL', fare: 22, customerId: 'C-010', seatNo: '11A' },
  { id: 'T-1191', time: '10:28', channel: 'agent',   routeCode: 'IPH-PEN',fare: 28, customerId: 'C-024', seatNo: '17B' },
  { id: 'T-1190', time: '10:25', channel: 'counter', routeCode: 'SBN-KL', fare: 14, customerId: 'C-012', seatNo: '03C' },
  { id: 'T-1189', time: '10:22', channel: 'app',     routeCode: 'KL-PEN', fare: 45, customerId: 'C-035', seatNo: '22A' },
  { id: 'T-1188', time: '10:20', channel: 'online',  routeCode: 'KL-IPH', fare: 32, customerId: 'C-023', seatNo: '13B' },
  { id: 'T-1187', time: '10:18', channel: 'app',     routeCode: 'KL-JB',  fare: 42, customerId: 'C-019', seatNo: '09C' },
];

export const TICKET_METRICS = {
  ticketsToday: 1247,
  ticketsYesterday: 1156,
  repeatCustomerPercent: 38,
  leakageFlaggedRm: 2440,
  channelMix: {
    counter: { count: 412, percent: 33, label: 'Counter', color: '#64748B' },
    online:  { count: 287, percent: 23, label: 'Online',  color: '#0EA5E9' },
    agent:   { count: 265, percent: 21, label: 'Agent',   color: '#C9A227' },
    app:     { count: 283, percent: 23, label: 'App',     color: '#C8234A' },
  },
  leakageAlerts: [
    { id: 'L-01', routeCode: 'KB-SGR',  issue: '12 tix voided post-journey', flag: 'driver', amountRm: 840,  evidence: 'Driver ID D-17 conducted voids after trip completion on 3 consecutive days' },
    { id: 'L-02', routeCode: 'KL-PEN',  issue: 'Agent refund pattern',        flag: 'agent',  amountRm: 420,  evidence: 'Agent code AG-012 issued 8 refunds >RM45 in 4 days, unusual concentration' },
    { id: 'L-03', routeCode: 'IPH-PEN', issue: 'Cash reconcile short',        flag: 'route',  amountRm: 1120, evidence: 'Cash counter tallies RM 1,120 below POS totals over 6-day rolling window' },
    { id: 'L-04', routeCode: 'KL-JB',   issue: 'Overbook uncompensated',      flag: 'system', amountRm: 60,   evidence: '3 passengers denied boarding, system did not trigger auto-refund rule' },
    { id: 'L-05', routeCode: 'KL-KB',   issue: 'Duplicate ticket IDs',        flag: 'system', amountRm: 0,    evidence: '2 distinct POS sessions issued overlapping ticket IDs, no revenue impact yet' },
  ],
};

/* ========== FINANCE (30-day cashFlow, receivables, cost/km, route profit) ========== */

export const FINANCE_METRICS = {
  cashOnHand: 412380,
  cashOnHandDelta: 22140,
  receivablesOver30d: 87140,
  receivablesTrend: 'warn',
  revenueToday: 128440,
  revenueTodayDeltaPct: -5,
  costPerKm: 2.14,
  costPerKmDelta: -0.08,
};

export const CASH_FLOW = [
  { day: 'Mar 24', revenue: 122800, cost: 92400 },
  { day: 'Mar 25', revenue: 131200, cost: 93100 },
  { day: 'Mar 26', revenue: 118600, cost: 91800 },
  { day: 'Mar 27', revenue: 142500, cost: 94200 },
  { day: 'Mar 28', revenue: 156800, cost: 95800 },
  { day: 'Mar 29', revenue: 168400, cost: 97200 },
  { day: 'Mar 30', revenue: 124100, cost: 92800 },
  { day: 'Mar 31', revenue: 115200, cost: 90600 },
  { day: 'Apr 01', revenue: 128900, cost: 93400 },
  { day: 'Apr 02', revenue: 134600, cost: 94100 },
  { day: 'Apr 03', revenue: 139200, cost: 94800 },
  { day: 'Apr 04', revenue: 148700, cost: 95600 },
  { day: 'Apr 05', revenue: 162300, cost: 96400 },
  { day: 'Apr 06', revenue: 155800, cost: 95900 },
  { day: 'Apr 07', revenue: 119400, cost: 91200 },
  { day: 'Apr 08', revenue: 127800, cost: 92600 },
  { day: 'Apr 09', revenue: 132100, cost: 93200 },
  { day: 'Apr 10', revenue: 138400, cost: 94300 },
  { day: 'Apr 11', revenue: 145900, cost: 95200 },
  { day: 'Apr 12', revenue: 158200, cost: 96100 },
  { day: 'Apr 13', revenue: 165400, cost: 96800 },
  { day: 'Apr 14', revenue: 122400, cost: 91800 },
  { day: 'Apr 15', revenue: 129600, cost: 92900 },
  { day: 'Apr 16', revenue: 134200, cost: 93600 },
  { day: 'Apr 17', revenue: 140800, cost: 94500 },
  { day: 'Apr 18', revenue: 151600, cost: 95700 },
  { day: 'Apr 19', revenue: 164200, cost: 96900 },
  { day: 'Apr 20', revenue: 143800, cost: 95100 },
  { day: 'Apr 21', revenue: 135500, cost: 94200 },
  { day: 'Apr 22', revenue: 128440, cost: 93400 },
];

export const ROUTE_PROFIT = [
  { routeCode: 'KL-PEN', profitRm:  48200, marginPercent: 34 },
  { routeCode: 'KL-JB',  profitRm:  38600, marginPercent: 31 },
  { routeCode: 'KL-IPH', profitRm:  28900, marginPercent: 36 },
  { routeCode: 'MLK-KL', profitRm:  26400, marginPercent: 40 },
  { routeCode: 'SBN-KL', profitRm:  24800, marginPercent: 42 },
  { routeCode: 'SHA-KL', profitRm:  22100, marginPercent: 38 },
  { routeCode: 'KL-KB',  profitRm:  18200, marginPercent: 22 },
  { routeCode: 'KL-KTN', profitRm:  14600, marginPercent: 24 },
  { routeCode: 'IPH-PEN',profitRm:  12400, marginPercent: 28 },
  { routeCode: 'AS-KL',  profitRm:   8800, marginPercent: 18 },
  { routeCode: 'KT-KL',  profitRm:   6200, marginPercent: 14 },
  { routeCode: 'KB-SGR', profitRm:  -3800, marginPercent: -9 },
];

export const RECEIVABLES = [
  { id: 'AR-01', client: 'SME Tours Sdn Bhd',     outstandingRm: 42800, daysOverdue: 67, bucket: '60-90', action: 'escalate' },
  { id: 'AR-02', client: 'KL Gov Transit Office', outstandingRm: 18500, daysOverdue: 48, bucket: '30-60', action: 'chase'    },
  { id: 'AR-03', client: 'Corporate Alpha Ltd',   outstandingRm: 12200, daysOverdue: 91, bucket: '90+',   action: 'legal'    },
  { id: 'AR-04', client: 'Universiti Kelantan',   outstandingRm:  8400, daysOverdue: 35, bucket: '30-60', action: 'reminder' },
  { id: 'AR-05', client: 'Sabah Link Travel',     outstandingRm:  6100, daysOverdue: 42, bucket: '30-60', action: 'chase'    },
  { id: 'AR-06', client: 'Heritage Tours Sdn Bhd',outstandingRm:  5200, daysOverdue: 38, bucket: '30-60', action: 'chase'    },
  { id: 'AR-07', client: 'Penang Excursions',     outstandingRm:  3900, daysOverdue: 72, bucket: '60-90', action: 'escalate' },
  { id: 'AR-08', client: 'EastCoast Ventures',    outstandingRm:  3400, daysOverdue: 29, bucket: '30-60', action: 'reminder' },
  { id: 'AR-09', client: 'Johor Coach Network',   outstandingRm:  2800, daysOverdue: 33, bucket: '30-60', action: 'reminder' },
  { id: 'AR-10', client: 'Melaka School Group',   outstandingRm:  2640, daysOverdue: 45, bucket: '30-60', action: 'chase'    },
];

/* ========== FLEET AGGREGATE METRICS ========== */

export const FLEET_METRICS = {
  uptimePercent: 94,
  uptimeDeltaPct: 2,
  inServiceToday: 28,
  inServiceTotal: 30,
  predictiveAlerts: 7,
  predictiveAlertsNew: 3,
  meanTimeBetweenFailures: 142,
  meanTimeDeltaHours: 12,
  top5PreventiveService: [
    { plate: 'JQE 4421', route: 'KL-JB',       alert: 'Brake wear 78%',     costToAvoidRm: 8400 },
    { plate: 'PRK 7733', route: 'Ipoh-Penang', alert: 'Tire depth low',     costToAvoidRm: 3200 },
    { plate: 'MLK 4466', route: 'Melaka-KL',   alert: 'Engine temp high',   costToAvoidRm: 5600 },
    { plate: 'KTN 1199', route: 'KB-KL',       alert: 'Oil pressure',       costToAvoidRm: 1800 },
    { plate: 'SGR 2241', route: 'Shah-KL',     alert: 'Battery voltage',    costToAvoidRm:  900 },
  ],
};

/* ========== EXECUTIVE OVERVIEW TILES + ACTION FEED ========== */

export const EXEC_KPIS = [
  { domain: 'fleet',     label: 'Fleet Uptime',   value: '94%',       deltaText: '+2%',  delta: 'up',   accent: 'good'    },
  { domain: 'finance',   label: 'Cash Today',     value: 'RM 128K',   deltaText: '-5%',  delta: 'down', accent: 'gold'    },
  { domain: 'demand',    label: 'Network Load',   value: '71%',       deltaText: '+3%',  delta: 'up',   accent: 'info'    },
  { domain: 'workforce', label: 'Crew On Duty',   value: '28 / 30',   deltaText: 'OK',   delta: 'flat', accent: 'warn'    },
  { domain: 'revenue',   label: 'Tickets Today',  value: '1,247',     deltaText: '+8%',  delta: 'up',   accent: 'primary' },
];

export const ALERTS = [
  { rank: 1,  domain: 'fleet',     icon: 'fa-triangle-exclamation', text: 'Bus JQE 4421 brake alert — service within 3 days',         cost: 'RM 8,400 avoid' },
  { rank: 2,  domain: 'demand',    icon: 'fa-route',                text: 'KL-Penang Fri PM — add 2 trips to meet demand',             cost: '+RM 4,200 / wk' },
  { rank: 3,  domain: 'finance',   icon: 'fa-wallet',               text: 'SME Tours receivable now 67 days — escalate',               cost: 'RM 42,800' },
  { rank: 4,  domain: 'workforce', icon: 'fa-users',                text: 'Monday 6am 3-driver gap — call standby now',                cost: 'Fill 100%' },
  { rank: 5,  domain: 'revenue',   icon: 'fa-ticket',               text: 'KB-SGR route — 12 post-journey voids flagged to driver',   cost: 'RM 840' },
  { rank: 6,  domain: 'fleet',     icon: 'fa-bus',                  text: 'Maintenance queue — 4 buses service-due this week',          cost: 'RM 20,000' },
  { rank: 7,  domain: 'demand',    icon: 'fa-chart-line',           text: 'KL-JB off-peak utilization 31% — schedule review needed',   cost: 'Review' },
  { rank: 8,  domain: 'workforce', icon: 'fa-triangle-exclamation', text: 'Sarah Tan overtime 58 hrs/wk — swap with Ng Siew Li',       cost: '-8 hrs OT' },
  { rank: 9,  domain: 'revenue',   icon: 'fa-arrow-trend-down',     text: 'App channel ticket volume swing — investigate 2hr window',  cost: 'Review' },
  { rank: 10, domain: 'finance',   icon: 'fa-coins',                text: 'Eastbound route profitability dip — margin down 4%',         cost: 'Review' },
];

/* ========== CROSS-HELPERS ========== */

export function findRoute(code) {
  return ROUTES.find((r) => r.code === code);
}

export function findBus(idOrPlate) {
  return FLEET.find((b) => b.id === idOrPlate || b.plate === idOrPlate);
}

export function findDriver(id) {
  return DRIVERS.find((d) => d.id === id);
}

export function findCustomer(id) {
  return CUSTOMERS.find((c) => c.id === id);
}

export function filteredFleet(filter) {
  if (!filter || filter === 'all') return FLEET;
  return FLEET.filter((b) => b.status === filter);
}
