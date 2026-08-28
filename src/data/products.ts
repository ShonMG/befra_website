import airCon        from "@/assets/airConditioning.jpeg";
import refrigeration from "@/assets/refrigeration.jpeg";
import mechanical1   from "@/assets/mechanical.jpeg";
import mechanical2   from "@/assets/mechanical pumps.jpeg";
import electrical1   from "@/assets/electrical.jpeg";
import electrical2   from "@/assets/borehole_electrical.jpeg";
import fabrication1  from "@/assets/fabrication.jpeg";
import fabrication2  from "@/assets/fabrication_1.jpeg";
import building1     from "@/assets/building.jpeg";
import solar1        from "@/assets/solar.jpeg";
import solar2        from "@/assets/solar_1.jpeg";

export type ProductCategory =
  | "HVAC & Refrigeration"
  | "Mechanical"
  | "Electrical"
  | "Fabrication"
  | "Construction"
  | "Solar";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id:          string;
  name:        string;
  category:    ProductCategory;
  description: string;
  images:      string[];
  specs:       ProductSpec[];
}

export const PRODUCTS: Product[] = [
  {
    id:          "split-ac-unit",
    name:        "Split Air Conditioning Unit",
    category:    "HVAC & Refrigeration",
    description: "Commercial and industrial split AC systems supplied, installed, and commissioned by Befra Engineering. Suitable for offices, hospitals, camp facilities, and industrial spaces requiring precise temperature control.",
    images:      [airCon, refrigeration],
    specs: [
      { label: "Capacity Range",    value: "1.5 HP – 5 HP" },
      { label: "Application",       value: "Commercial & Industrial" },
      { label: "Refrigerant",       value: "R-410A / R-32" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
      { label: "Service Included",  value: "Installation & Commissioning" },
    ],
  },
  {
    id:          "cold-room-system",
    name:        "Cold Room Refrigeration System",
    category:    "HVAC & Refrigeration",
    description: "Walk-in cold stores and refrigerated rooms for hospitals, food storage, and agricultural facilities. Befra designs, supplies, and installs complete cold room systems including insulated panels, compressor units, and temperature controls.",
    images:      [refrigeration, airCon],
    specs: [
      { label: "Temperature Range", value: "-18°C to +10°C" },
      { label: "Application",       value: "Food, Medical, Agricultural" },
      { label: "Panel Type",        value: "PU Insulated Sandwich Panels" },
      { label: "Control System",    value: "Digital thermostat + alarm" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
  {
    id:          "generator-set",
    name:        "Diesel Generator Set",
    category:    "Mechanical",
    description: "Standby and prime power diesel generators supplied and maintained by Befra Engineering. Used across hospitals, camps, and industrial plants where grid reliability cannot be assumed.",
    images:      [mechanical1, mechanical2],
    specs: [
      { label: "Power Range",       value: "10 kVA – 500 kVA" },
      { label: "Fuel Type",         value: "Diesel" },
      { label: "Application",       value: "Standby & Prime Power" },
      { label: "Standards",         value: "ISO 8528 / BS 5514" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
  {
    id:          "borehole-pump",
    name:        "Borehole Water Pump",
    category:    "Mechanical",
    description: "Submersible borehole pumps for institutional, agricultural, and commercial water supply. Befra supplies, installs, and maintains pump systems including rising mains, control panels, and pressure vessels.",
    images:      [mechanical2, mechanical1],
    specs: [
      { label: "Pump Type",         value: "Submersible Centrifugal" },
      { label: "Flow Rate",         value: "Up to 50 m³/hr" },
      { label: "Head Range",        value: "Up to 300 m" },
      { label: "Power Supply",      value: "3-Phase / Solar Compatible" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
  {
    id:          "power-distribution-panel",
    name:        "Power Distribution Panel",
    category:    "Electrical",
    description: "Custom-built main distribution boards (MDBs) and sub-distribution boards (SDBs) for industrial plants, commercial buildings, and institutional facilities. Designed, fabricated, and installed by Befra's electrical team.",
    images:      [electrical1, electrical2],
    specs: [
      { label: "Voltage Rating",    value: "415V / 3-Phase" },
      { label: "Busbar Material",   value: "Copper" },
      { label: "Protection Class",  value: "IP42 / IP54" },
      { label: "Standards",         value: "IEC 61439" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
  {
    id:          "solar-pump-system",
    name:        "Solar-Powered Pump System",
    category:    "Electrical",
    description: "Off-grid solar pump systems for borehole and surface water applications. Ideal for agricultural irrigation and rural water supply where grid power is unavailable or unreliable.",
    images:      [electrical2, electrical1],
    specs: [
      { label: "Panel Capacity",    value: "1 kW – 15 kW" },
      { label: "Controller",        value: "MPPT Solar Controller" },
      { label: "Application",       value: "Irrigation & Water Supply" },
      { label: "Grid Dependency",   value: "None (fully off-grid)" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
  {
    id:          "hvac-ductwork",
    name:        "Custom HVAC Ductwork",
    category:    "Fabrication",
    description: "Precision-fabricated galvanised steel ductwork for commercial and industrial HVAC systems. Made to specification in Befra's fabrication workshop and installed by certified technicians.",
    images:      [fabrication1, fabrication2],
    specs: [
      { label: "Material",          value: "Galvanised Steel (G90)" },
      { label: "Thickness",         value: "0.5 mm – 1.2 mm" },
      { label: "Joints",            value: "TDC / Slip & Drive" },
      { label: "Insulation",        value: "Fibreglass / Foam (optional)" },
      { label: "Warranty",          value: "1 Year (workmanship)" },
    ],
  },
  {
    id:          "steel-structural-frame",
    name:        "Steel Structural Frames",
    category:    "Fabrication",
    description: "Heavy-duty structural steel frames, supports, and platforms fabricated for industrial and commercial applications. Designed to client specifications and compliant with structural safety standards.",
    images:      [fabrication2, fabrication1],
    specs: [
      { label: "Material",          value: "Mild Steel / Stainless Steel" },
      { label: "Surface Finish",    value: "Primed & Painted / Hot-Dip Galvanised" },
      { label: "Welding Standard",  value: "AWS D1.1" },
      { label: "Application",       value: "Industrial & Commercial" },
      { label: "Warranty",          value: "1 Year (workmanship)" },
    ],
  },
  {
    id:          "prefab-cold-store-building",
    name:        "Prefabricated Cold Store Building",
    category:    "Construction",
    description: "Turnkey construction of prefabricated cold storage facilities for agricultural cooperatives, food processors, and medical institutions. Includes civil works, insulated structure, refrigeration system, and solar power integration.",
    images:      [building1, solar1],
    specs: [
      { label: "Structure Type",    value: "Prefabricated Steel Frame" },
      { label: "Insulation",        value: "100 mm PU Panel" },
      { label: "Power Option",      value: "Grid or Solar Off-Grid" },
      { label: "Handover",          value: "Full commissioning + training" },
      { label: "Warranty",          value: "1 Year (all works)" },
    ],
  },
  {
    id:          "solar-panel-system",
    name:        "Solar PV System",
    category:    "Solar",
    description: "Complete solar photovoltaic systems for commercial, institutional, and agricultural clients. Befra designs, supplies, installs, and maintains systems from 1 kW to 100 kW+, with grid-tied and off-grid configurations.",
    images:      [solar1, solar2],
    specs: [
      { label: "System Size",       value: "1 kW – 100 kW+" },
      { label: "Panel Type",        value: "Monocrystalline / Polycrystalline" },
      { label: "Configuration",     value: "Grid-tied / Off-grid / Hybrid" },
      { label: "Battery Option",    value: "Lithium-ion / Lead-acid" },
      { label: "Warranty",          value: "1 Year (installation)" },
    ],
  },
  {
    id:          "solar-street-light",
    name:        "Solar Street Lighting System",
    category:    "Solar",
    description: "All-in-one solar street lights with integrated panels, lithium batteries, and motion sensors. Suitable for estate roads, parking areas, rural paths, and security perimeters.",
    images:      [solar2, solar1],
    specs: [
      { label: "Light Output",      value: "30 W – 200 W LED" },
      { label: "Battery",           value: "Lithium-ion (3–5 day backup)" },
      { label: "Sensor",            value: "PIR Motion + Dusk-to-Dawn" },
      { label: "Pole Height",       value: "4 m – 9 m" },
      { label: "Warranty",          value: "1 Year (parts & labour)" },
    ],
  },
];

export const CATEGORIES: ProductCategory[] = [
  "HVAC & Refrigeration",
  "Mechanical",
  "Electrical",
  "Fabrication",
  "Construction",
  "Solar",
];

export const CATEGORY_COLORS: Record<ProductCategory, string> = {
  "HVAC & Refrigeration": "#0d47a1",
  "Mechanical":           "#1b5e20",
  "Electrical":           "#e65100",
  "Fabrication":          "#37474f",
  "Construction":         "#4a148c",
  "Solar":                "#f57f17",
};