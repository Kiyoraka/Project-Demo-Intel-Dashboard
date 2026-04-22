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
