import unhcrImg from "@/assets/unhcr.png";
import iomImg from "@/assets/iom.png";
import orPowerImg from "@/assets/or-power.png";
import unonImg from "@/assets/unon.png";
import careImg from "@/assets/care-international.png";
import mpShahImg from "@/assets/mp-shah.png";
import kirinyagaImg from "@/assets/kirinyaga.png";
import nazarethImg from "@/assets/nazareth.png";
import fhiImg from "@/assets/fhi.png";
import vincetianImg from "@/assets/vincetian.png";

export interface Project {
  client: string;
  date: string;
  value: string;
  image: string;
  desc: string;
  sector?: string;
}

export const PROJECTS: Project[] = [
  {
    client: "UNHCR",
    date: "Aug 2012 – Present",
    value: "$269,400",
    image: unhcrImg,
    sector: "Humanitarian / Refugee Camps",
    desc: "Ongoing AC maintenance contract across Kakuma, Dadaab, Nairobi, and Alinjugur refugee camps, covering preventive servicing, emergency repairs, and full system replacements to keep critical facilities operational in remote, high-demand environments.",
  },
  {
    client: "IOM",
    date: "Jan 2003 – Feb 2017",
    value: "$286,900",
    image: iomImg,
    sector: "Humanitarian / International Organisation",
    desc: "Comprehensive, multi-year AC maintenance contract for IOM facilities in Kakuma, Dadaab, and Nairobi — including routine servicing, gas top-ups, and equipment overhauls across a large, distributed facility network.",
  },
  {
    client: "OR-Power 4 Inc",
    date: "Aug 2012 – Present",
    value: "$184,900",
    image: orPowerImg,
    sector: "Energy / Geothermal",
    desc: "Heavy fabrication and mechanical maintenance work at the Olkaria Geothermal Power Plant in Naivasha, supporting critical plant infrastructure with structural fabrication and ongoing equipment upkeep.",
  },
  {
    client: "UNON",
    date: "Sep 2010 – Dec 2013",
    value: "$28,031",
    image: unonImg,
    sector: "Government / UN Facilities",
    desc: "Full HVAC servicing programme in Nairobi: general cleaning of condensers and evaporators, duct diffuser adjustment, gas top-ups, replacement of liquid line filter driers and worn insulation, pressure switch adjustment, and control panel and expansion valve calibration.",
  },
  {
    client: "Care International",
    date: "Aug 2014 – Dec 2015",
    value: "$14,600",
    image: careImg,
    sector: "Humanitarian",
    desc: "Indoor and outdoor unit servicing in Dadaab, including gas topping, leak sealing, insulation replacement, faulty parts replacement, control panel adjustment, and formal quality control sign-off.",
  },
  {
    client: "MP Shah Hospital",
    date: "Nov 2006 – Aug 2014",
    value: "$19,801",
    image: mpShahImg,
    sector: "Healthcare",
    desc: "Critical mechanical works supporting hospital operations — ventilation systems, kitchen equipment, water pumps, and air conditioning — maintained to the reliability standards a healthcare facility demands.",
  },
  {
    client: "Kirinyaga County Govt",
    date: "August 2022",
    value: "$56,250",
    image: kirinyagaImg,
    sector: "Government / Agriculture",
    desc: "Construction and installation of a solar-powered thermal egg cooling system for the Kiaga Poultry Farmers Society, combining renewable energy with cold-chain infrastructure for agricultural use.",
  },
  {
    client: "Nazareth Hospital",
    date: "Nov 2006 – Present",
    value: "$96,000",
    image: nazarethImg,
    sector: "Healthcare",
    desc: "Refurbishment of kitchen cold stores, laundry equipment servicing, and generator installation across Limuru and Ruiru sites — a long-running relationship spanning mechanical and electrical scopes.",
  },
  {
    client: "Family Health International (FHI)",
    date: "Nov 2006 – Jul 2011",
    value: "$3,960",
    image: fhiImg,
    sector: "Healthcare / NGO",
    desc: "Indoor and outdoor unit servicing across Nakuru and Nairobi, including gas topping, leak sealing, insulation replacement, faulty parts replacement, control panel adjustment, and quality control statements.",
  },
  {
    client: "Vincetian Retreat Centre",
    date: "2019 – Present",
    value: "$10,750",
    image: vincetianImg,
    sector: "Religious / Institutional",
    desc: "Installation of a 15kW solar system, generator repairs and maintenance, electrical installation work, and borehole water pump maintenance across Thika and Lavington sites.",
  },
];