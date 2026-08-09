export interface Project {
  id: string;
  code: string;
  title: string;
  mcu: string;
  language: string;
  system: string;
  status: string;
  description: string;
  features: string[];
  tags: string[];
  githubUrl?: string; // TODO: Add GitHub repository links here once project repositories are available.
  diagramType: 'barrier' | 'water' | 'smoke';
  fullDetails: {
    overview: string;
    technology: string[];
    hardware: string[];
    workflow: string[];
    result: string;
    futureWork: string[];
  };
}

export interface EducationItem {
  id: string;
  years: string;
  degree: string;
  field: string;
  institution: string;
  scoreType: 'CGPA' | 'PERCENTAGE';
  score: string;
  checkpoint: string;
}

export interface SkillGaugeItem {
  name: string;
  category: 'CORE' | 'PROGRAMMING' | 'WORKING' | 'ADDITIONAL';
  levelPercent: number; // For visualization in instrument cluster
  code: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: string;
  badgeCode: string;
  // TODO: Replace placeholder certificate titles with exact certificate names once confirmed by Basavaraj.
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "BASAVARAJ GOGI",
  title: "ELECTRONICS & COMMUNICATION ENGINEERING",
  tagline: "Engineering the electronics that drive tomorrow's machines.",
  subTagline: "From circuits to intelligent autonomous hardware.",
  institution: "Atria Institute of Technology",
  location: "Bengaluru, Karnataka",
  email: "Basavarajgogi10.10@gmail.com",
  phone: "9380194307",
  linkedin: "https://linkedin.com/in/basavaraj-gogi-2b6819339",
  resumePath: "/Basavaraj-Gogi-Resume.pdf",
  metadata: {
    field: "ELECTRONICS",
    specialization: "EMBEDDED SYSTEMS",
    status: "ENGINEERING STUDENT",
    interest: "AUTOMOTIVE ELECTRONICS & SENSOR NETWORKS",
  },
  bio: "Final-year Electronics and Communication Engineering student seeking a core electronics / embedded systems role, with hands-on project experience building ESP32/ESP8266-based sensor and monitoring systems. Strong fundamentals in analog & digital electronics, embedded C, and control systems, with a keen interest in applying these to real-world hardware design and automation problems."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    checkpoint: "CHECKPOINT 01",
    years: "2023 — 2027",
    degree: "BACHELOR OF ENGINEERING",
    field: "Electronics and Communication Engineering",
    institution: "Atria Institute of Technology",
    scoreType: "CGPA",
    score: "7.68"
  },
  {
    id: "edu-2",
    checkpoint: "CHECKPOINT 02",
    years: "2021 — 2023",
    degree: "PRE-UNIVERSITY",
    field: "PCMC (Physics, Chemistry, Math, Computer Science)",
    institution: "SBR Residential PU College",
    scoreType: "PERCENTAGE",
    score: "87.33%"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    code: "PROTOTYPE // 001",
    title: "AUTOMATIC TOLL GATE OPENER",
    mcu: "ESP32",
    language: "EMBEDDED C",
    system: "SENSOR + ACTUATOR",
    status: "COMPLETED",
    description: "Designed and developed an automated toll gate system using an ESP32 microcontroller interfaced with sensors to detect vehicles and control gate operation without manual intervention.",
    features: [
      "Designed and developed an automated toll gate system using an ESP32 microcontroller interfaced with sensors to detect vehicles and control gate operation without manual intervention.",
      "Implemented real-time sensor-to-actuator logic in embedded C, reducing manual gate operation delay and improving vehicle throughput at the checkpoint.",
      "Vehicle detection via IR / proximity sensors",
      "Embedded C firmware optimization",
      "Real-time low-latency physical barrier response"
    ],
    tags: ["ESP32", "Embedded C", "IR Sensors", "Servo Control", "Automation"],
    diagramType: "barrier",
    fullDetails: {
      overview: "Designed and developed an automated toll gate system using an ESP32 microcontroller interfaced with sensors to detect vehicles and control gate operation without manual intervention. Implemented real-time sensor-to-actuator logic in embedded C, reducing manual gate operation delay and improving vehicle throughput at the checkpoint.",
      technology: ["ESP32 Microcontroller", "Embedded C", "C Programming", "PWM Servo Control"],
      hardware: ["ESP32 DevKit V1", "IR Proximity Sensors", "High-Torque Servo Motor", "Status LEDs & Piezo Beeper", "5V/12V Power Supply Module"],
      workflow: [
        "Vehicle approaches checkpoint and trips IR proximity detection sensor",
        "ESP32 receives interrupt signal and processes sensor-to-actuator control logic",
        "Embedded C program sends PWM signal to actuate barrier arm",
        "Vehicle passes through safely and secondary sensor triggers gate closure"
      ],
      result: "Successfully reduced manual toll gate operation delay while significantly improving vehicle throughput at the checkpoint.",
      futureWork: ["RFID tag verification", "License plate optical character recognition module", "Cloud IoT dashboard integration"]
    }
  },
  {
    id: "proj-2",
    code: "PROTOTYPE // 002",
    title: "WATER QUALITY MONITORING SYSTEM",
    mcu: "ESP32",
    language: "EMBEDDED C / C++",
    system: "MONITORING & TELEMETRY",
    status: "COMPLETED",
    description: "Built an ESP32-based system to monitor water quality parameters including Total Dissolved Solids (TDS) and Electrical Conductivity (EC) using dedicated sensor modules.",
    features: [
      "Built an ESP32-based system to monitor water quality parameters including Total Dissolved Solids (TDS) and Electrical Conductivity (EC) using dedicated sensor modules.",
      "Logged and processed sensor readings in real time to flag water samples outside acceptable purity thresholds, supporting early contamination detection.",
      "Real-time analog conductivity sensing",
      "Threshold calibration & alarm logic",
      "Telemetry display output"
    ],
    tags: ["ESP32", "TDS Sensor", "EC Sensor", "Telemetry", "Analog Interfacing"],
    diagramType: "water",
    fullDetails: {
      overview: "Built an ESP32-based system to monitor water quality parameters including Total Dissolved Solids (TDS) and Electrical Conductivity (EC) using dedicated sensor modules. Logged and processed sensor readings in real time to flag water samples outside acceptable purity thresholds, supporting early contamination detection.",
      technology: ["ESP32 ADC Multi-Sampling", "Embedded C / C++", "I2C OLED Display", "Signal Processing Filters"],
      hardware: ["ESP32 Microcontroller", "Analog TDS Sensor Module", "EC Conductivity Electrode", "I2C OLED Screen", "Voltage Conditioning Circuit"],
      workflow: [
        "Sensor probe samples liquid electrical conductivity and dissolved solids",
        "ESP32 ADC reads analog voltage signals from dedicated sensor modules",
        "Embedded C firmware calculates PPM and EC values with temperature compensation",
        "System flags readings outside safe purity limits and updates live display"
      ],
      result: "Logged and processed sensor readings in real time to flag non-compliant water samples, enabling rapid early contamination detection.",
      futureWork: ["pH & Turbidity multi-sensor array", "LoRaWAN long-range remote telemetry node"]
    }
  },
  {
    id: "proj-3",
    code: "PROTOTYPE // 003",
    title: "SMOKE DETECTOR SYSTEM",
    mcu: "ESP8266",
    language: "EMBEDDED C",
    system: "SAFETY & ALERTS",
    status: "COMPLETED",
    description: "Developed a microcontroller-based smoke and fire detection system using an MQ-series gas sensor interfaced with ESP8266, triggering an early-warning alert on smoke detection.",
    features: [
      "Developed a microcontroller-based smoke and fire detection system using an MQ-series gas sensor interfaced with ESP8266, triggering an early-warning alert on smoke detection.",
      "Enhanced response reliability by tuning sensor threshold calibration to reduce false positives in a home-safety use case.",
      "MQ-Series gas sensor integration",
      "Buzzer & visual LED emergency alarm",
      "Low-power MCU safety monitoring"
    ],
    tags: ["ESP8266", "MQ Gas Sensor", "Safety Alert", "Sensor Calibration", "Embedded C"],
    diagramType: "smoke",
    fullDetails: {
      overview: "Developed a microcontroller-based smoke and fire detection system using an MQ-series gas sensor interfaced with ESP8266, triggering an early-warning alert on smoke detection. Enhanced response reliability by tuning sensor threshold calibration to reduce false positives in a home-safety use case.",
      technology: ["ESP8266 Microcontroller", "Embedded C", "Analog Comparator Thresholding", "Interrupt Siren Driver"],
      hardware: ["ESP8266 NodeMCU", "MQ-Series Gas Sensor", "Active Piezo Buzzer", "Warning LED Array", "5V Power Regulator"],
      workflow: [
        "MQ-series gas sensor continuously monitors ambient smoke & gas concentration",
        "ESP8266 reads analog output pin and evaluates against calibrated threshold",
        "Tuned firmware filters out transient spikes to eliminate false alarms",
        "When true smoke hazard detected, early-warning audio & visual sirens activate immediately"
      ],
      result: "Achieved high response reliability and minimized false positives in real-world home safety testing.",
      futureWork: ["Wi-Fi push alert to mobile phones via MQTT", "Multi-room interconnected safety network"]
    }
  }
];

export const SKILLS_GAUGES: SkillGaugeItem[] = [
  { name: "EMBEDDED C / C", category: "PROGRAMMING", levelPercent: 94, code: "MOD-01" },
  { name: "PYTHON", category: "PROGRAMMING", levelPercent: 86, code: "MOD-02" },
  { name: "ANALOG ELECTRONICS", category: "CORE", levelPercent: 89, code: "MOD-03" },
  { name: "DIGITAL ELECTRONICS", category: "CORE", levelPercent: 91, code: "MOD-04" },
  { name: "ESP32 / ESP8266", category: "CORE", levelPercent: 95, code: "MOD-05" },
  { name: "EMBEDDED SYSTEMS", category: "CORE", levelPercent: 92, code: "MOD-06" },
  { name: "VLSI FUNDAMENTALS", category: "WORKING", levelPercent: 78, code: "MOD-07" },
  { name: "DIGITAL SIGNAL PROCESSING", category: "WORKING", levelPercent: 82, code: "MOD-08" },
  { name: "CONTROL SYSTEMS", category: "WORKING", levelPercent: 85, code: "MOD-09" },
  { name: "NETWORK ANALYSIS", category: "WORKING", levelPercent: 84, code: "MOD-10" },
  { name: "MACHINE LEARNING (BASICS)", category: "ADDITIONAL", levelPercent: 72, code: "MOD-11" },
  { name: "DEVOPS FUNDAMENTALS", category: "ADDITIONAL", levelPercent: 75, code: "MOD-12" }
];

export const SOFT_SKILLS = [
  "TEAMWORK",
  "TIME MANAGEMENT",
  "LEADERSHIP",
  "EFFECTIVE COMMUNICATION",
  "CRITICAL THINKING"
];

export const LANGUAGES = [
  { name: "ENGLISH", level: "FLUENT" },
  { name: "KANNADA", level: "NATIVE / FLUENT" },
  { name: "HINDI", level: "PROFICIENT" }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "TCS Certification",
    issuer: "TCS iON",
    type: "Industry Skill Certificate",
    badgeCode: "TCS-iON-ECE-2024"
  },
  {
    id: "cert-2",
    title: "Digital Communication",
    issuer: "NPTEL / Online Certification",
    type: "Academic Excellence",
    badgeCode: "NPTEL-DIGCOMM-2024"
  },
  {
    id: "cert-3",
    title: "DevOps Fundamentals",
    issuer: "Online Certification",
    type: "Systems & Infrastructure",
    badgeCode: "DEVOPS-FUND-2024"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "STATE-LEVEL HACKATHON",
    category: "COMPETITION & PROTOTYPING",
    description: "Participated in a State-Level Hackathon, collaborating with a team to develop a working prototype under time constraints.",
    iconName: "Cpu"
  },
  {
    id: "ach-2",
    title: "DRONE CLUB MEMBER",
    category: "AEROSPACE ELECTRONICS",
    description: "Active member of the Drone Club, gaining hands-on exposure to drone technology and team-based technical projects.",
    iconName: "Radio"
  },
  {
    id: "ach-3",
    title: "TECHNICAL SUMMITS & WORKSHOPS",
    category: "CONTINUOUS LEARNING",
    description: "Attended technical summits and workshops to stay updated with emerging trends in electronics and embedded systems.",
    iconName: "Award"
  }
];
