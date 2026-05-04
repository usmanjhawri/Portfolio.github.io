const portfolioData = {
  profile: {
    name: "Muhammad Usman Yousaf",
    role: "Mechanical Design Engineer",
    location: "Nicosia, Cyprus",
    email: "usmanjhawri@gmail.com",
    phone: "+357 94595326",
    linkedin: "https://www.linkedin.com/in/usmanjhawri",
    tagline: "Robotics, UAV mechanisms, CAD/CAE, prototype delivery",
    summary:
      "Mechanical Design Engineer with 7+ years delivering machine design, robotics, UAV mechanisms, CAD/CAE, prototype builds, validation, and supplier-ready release packages across TRL 1-9.",
    pitch:
      "I help teams turn uncertain mechanical requirements into manufacturable hardware: clear CAD architecture, practical packaging, drawings and BOMs, build support, and fast iteration after real prototype feedback.",
    proofPoints: [
      "Released 120+ parts and assemblies and 100+ engineering drawings across electromechanical product programs.",
      "Owned UGV, service robot, UAV, drivetrain, and CAD automation work from concept through build support.",
      "CSWP and CSWA certified, with strong SOLIDWORKS, Inventor automation, FEA, CFD, MATLAB/Simulink, GD&T, DFM/DFA, and supplier handoff."
    ]
  },
  downloads: [
    {
      label: "Download CV",
      href: "assets/downloads/Muhammad_Usman_Yousaf_CV.pdf",
      download: "Muhammad_Usman_Yousaf_CV.pdf"
    }
  ],
  stats: [
    { value: "7+", label: "years in mechanical design" },
    { value: "TRL 1-9", label: "concept to fielded hardware" },
    { value: "100+", label: "released drawings" },
    { value: "80+", label: "CAD/CAE studies and analyses" }
  ],
  certifications: [
    {
      name: "CSWP",
      label: "Certified SOLIDWORKS Professional",
      detail: "Professional-level SOLIDWORKS part, assembly, drawing, and design-intent competency."
    },
    {
      name: "CSWA",
      label: "Certified SOLIDWORKS Associate",
      detail: "Validated foundation in SOLIDWORKS modeling workflows, assemblies, and engineering documentation."
    }
  ],
  skillGroups: [
    {
      title: "CAD and automation",
      items: ["SOLIDWORKS", "Autodesk Inventor", "iLogic / VBA", "Creo Parametric", "Fusion 360", "Solid Edge", "Geometric Design X"]
    },
    {
      title: "Mechanical design",
      items: ["Machine design", "Mechanism design", "Structural design", "Assembly design", "Electromechanical packaging", "GD&T", "Tolerance analysis"]
    },
    {
      title: "Simulation and validation",
      items: ["FEA", "CFD", "ANSYS", "COMSOL", "Fluent", "ICEM", "MSC ADAMS", "MATLAB/Simulink", "Topology studies"]
    },
    {
      title: "Manufacturing release",
      items: ["Engineering drawings", "BOMs", "DFM/DFA", "DFMEA", "3D printing", "Prototype builds", "Supplier coordination", "Root-cause troubleshooting"]
    },
    {
      title: "Robotics and UAV systems",
      items: ["UGV platforms", "UAV mechanisms", "Service robots", "Payload mounting", "Drivetrains", "Landing gear", "Field-test iteration"]
    }
  ],
  filters: [
    { id: "all", label: "All" },
    { id: "robotics", label: "Robotics" },
    { id: "uav", label: "UAV" },
    { id: "vehicle", label: "Vehicles" },
    { id: "automation", label: "Automation" }
  ],
  process: [
    {
      label: "01",
      title: "Requirements",
      text: "Convert vague constraints into mechanical envelopes, interfaces, loads, access needs, and build assumptions."
    },
    {
      label: "02",
      title: "CAD and packaging",
      text: "Develop architecture, mechanisms, brackets, enclosures, routing clearance, service access, and assembly logic."
    },
    {
      label: "03",
      title: "Release",
      text: "Prepare drawings, BOMs, tolerances, GD&T, DFM decisions, supplier notes, and revision-controlled deliverables."
    },
    {
      label: "04",
      title: "Build and iterate",
      text: "Support assembly, close fit-up issues, capture test feedback, and update the design for repeatability."
    }
  ],
  projects: [
    {
      id: "soil-sampling-ugv",
      title: "Autonomous Soil-Sampling UGV",
      eyebrow: "Agricultural field robot",
      category: "robotics",
      featured: true,
      image: "assets/project-images/site/soil-sampling-ugv.webp",
      imageAlt: "Soil-sampling UGV CAD and manufactured prototype views",
      summary:
        "UGV-mounted soil collection hardware with rotating tool concepts, pneumatic insertion and retrieval, manufacturable mounting interfaces, service access, and field-driven iteration.",
      role:
        "Mechanical design owner for the sampling hardware package, including CAD assemblies, part details, mounting interfaces, build support information, and updates after prototype feedback.",
      quickScan: ["Agricultural UGV", "Mechanical work module", "Manufactured prototype"],
      metrics: [
        { value: "UGV", label: "field robot" },
        { value: "Pneumatic", label: "tool actuation" },
        { value: "Build", label: "prototype support" }
      ],
      facts: [
        { label: "System", value: "Autonomous UGV with soil collection payload" },
        { label: "Main scope", value: "Sampling mechanism and platform integration" },
        { label: "Main risk", value: "Dirt exposure, clearance, repeatability, and service access" },
        { label: "Output", value: "CAD, details, build support, and design updates" }
      ],
      caseStudy: {
        challenge:
          "The mechanism had to package into a mobile field robot while still leaving room for motion, tool access, pneumatic hardware, maintenance, and rugged operation around soil and outdoor conditions.",
        contribution:
          "I worked on the UGV-mounted soil collection hardware, focusing on mechanical interfaces, rotating multi-tool sampling concepts, pneumatic insertion and retrieval, mounting features, and prototype-ready details.",
        decisions: [
          "Kept the sampling mechanism serviceable so tools and interfaces could be reached without disturbing the whole platform.",
          "Protected the payload envelope from dirt exposure while still maintaining clearance for motion and retrieval.",
          "Used CAD assemblies to check packaging conflicts between the UGV body, sampling hardware, pneumatic parts, and access zones.",
          "Updated the mechanical design around durability and repeatability after real hardware feedback."
        ],
        deliverables: [
          "CAD assemblies and part-level detail work",
          "Mounting features and mechanical interfaces",
          "Build-support information for prototype assembly",
          "Design updates after lab and outdoor preparation"
        ],
        validation:
          "The work moved beyond concept imagery into a manufactured prototype, so design choices were checked against assembly, clearance, and field-style use instead of only screen-level fit.",
        outcome:
          "A manufactured agricultural UGV prototype with a mechanical sampling module that shows the complete loop: requirements, CAD packaging, build support, and iteration from hardware feedback."
      },
      tools: ["SOLIDWORKS", "Mechanism design", "Pneumatics", "DFM", "Prototype support"]
    },
    {
      id: "fire-fighting-ugv",
      title: "Autonomous Fire-Fighting UGV",
      eyebrow: "Rugged UGV payload integration",
      category: "robotics",
      image: "assets/project-images/site/fire-fighting-ugv.webp",
      imageAlt: "Fire-fighting UGV CAD views",
      summary:
        "Rugged UGV platform work covering chassis architecture, payload mounting, sensor mast, covers, access panels, electronics space, fabrication handoff, and assembly follow-up.",
      role:
        "Mechanical designer for platform and payload packaging, with responsibility for CAD layout, structural interfaces, access decisions, and prototype handoff.",
      quickScan: ["Rugged platform", "Payload packaging", "Manufacturing follow-up"],
      metrics: [
        { value: "CAD", label: "to fabrication" },
        { value: "Payload", label: "hose/nozzle/sensor" },
        { value: "Access", label: "battery/electronics" }
      ],
      facts: [
        { label: "System", value: "Mobile fire-fighting robot platform" },
        { label: "Main scope", value: "Body, chassis, payload, mast, covers, and brackets" },
        { label: "Main risk", value: "Rugged packaging without blocking service access" },
        { label: "Output", value: "Prototype-ready CAD and fabrication support" }
      ],
      caseStudy: {
        challenge:
          "The UGV needed to carry payload hardware while still remaining buildable, serviceable, and practical for troubleshooting. The design could not be a clean CAD shell only; it had to leave space for real components, wiring, batteries, brackets, and assembly access.",
        contribution:
          "I supported the mechanical architecture of the UGV body and chassis, worked through payload mounting envelopes, designed supporting brackets and covers, and prepared the CAD/drawing handoff for fabrication and assembly follow-up.",
        decisions: [
          "Balanced payload placement with center-of-mass, access, and structural support needs.",
          "Kept electronics and battery areas reachable for build, wiring checks, and troubleshooting.",
          "Used covers and panels to protect internal hardware while still allowing practical removal during assembly.",
          "Worked through fast prototype issues where design, fabrication, and integration were happening close together."
        ],
        deliverables: [
          "UGV body and chassis CAD views",
          "Payload mounting envelope and support concepts",
          "Sensor mast, covers, access panels, and bracket concepts",
          "Fabrication and assembly handoff support"
        ],
        validation:
          "The project progressed into manufacturing and assembly preparation, so packaging choices were reviewed against physical prototype constraints, not only concept renderings.",
        outcome:
          "A rugged UGV prototype path with practical payload integration, maintainable access, and mechanical details prepared for fabrication follow-up."
      },
      tools: ["SOLIDWORKS", "Sheet metal", "Payload packaging", "Manufacturing drawings", "Assembly support"]
    },
    {
      id: "ugo-platform",
      title: "UGO Autonomous Robot Platform",
      eyebrow: "Modular service robot family",
      category: "robotics",
      image: "assets/project-images/site/ugo-platform.webp",
      imageAlt: "UGO robot platform variants and manufactured product views",
      summary:
        "Modular autonomous service robot platform with a universal mobility base, structural interfaces, brackets, enclosures, module-ready assemblies, manufacturing drawings, and BOM support.",
      role:
        "Mechanical ownership for the mobility base and modular product platform, from architecture through drawings, BOM information, prototype assembly support, and design debugging.",
      quickScan: ["Service robot family", "60+ CAD releases", "80+ drawings"],
      metrics: [
        { value: "60+", label: "parts/assemblies" },
        { value: "80+", label: "drawings" },
        { value: "20%", label: "bracket mass reduction" }
      ],
      facts: [
        { label: "System", value: "Autonomous service robot product family" },
        { label: "Main scope", value: "Universal base, modular interfaces, brackets, enclosures" },
        { label: "Main risk", value: "Variant flexibility without assembly confusion" },
        { label: "Output", value: "CAD, drawings, BOMs, prototype support" }
      ],
      caseStudy: {
        challenge:
          "UGO was not one isolated mechanism. It needed a repeatable base platform that could support multiple robot variants, payload configurations, service access needs, and supplier-ready release packages.",
        contribution:
          "I designed the universal mobility base, structural interfaces, brackets, enclosures, module-ready assemblies, and release documentation while supporting prototype assembly and design debugging.",
        decisions: [
          "Defined modular interfaces so different service-robot variants could share a stable base architecture.",
          "Applied DFM and tolerance thinking to reduce fit-up issues during prototype assembly.",
          "Used FEA and lightweighting decisions to reduce bracket mass while maintaining stiffness.",
          "Improved service access and module interchangeability to support a product-family direction."
        ],
        deliverables: [
          "Around 60 released parts and assemblies",
          "Around 80 manufacturing drawings",
          "BOM and supplier handoff information",
          "Prototype assembly and design debugging support"
        ],
        validation:
          "Prototype assembly feedback was used to improve module interchangeability, fit-up, and first-time assembly success across the product family.",
        outcome:
          "A more repeatable modular robot platform with reduced bracket mass, fewer fit-up issues, and clearer release packages for fabrication and assembly."
      },
      tools: ["SOLIDWORKS", "Autodesk Inventor", "FEA", "GD&T", "BOMs"]
    },
    {
      id: "compact-ugv",
      title: "Compact Hazardous-Environment UGV",
      eyebrow: "Constrained autonomous platform",
      category: "robotics",
      image: "assets/project-images/site/compact-ugv.webp",
      imageAlt: "Compact autonomous UGV CAD and prototype build views",
      summary:
        "Compact autonomous UGV packaging with low-clearance chassis constraints, protected payload envelope, wheel layout, cover/interface design, electronics access, and prototype integration support.",
      role:
        "Mechanical packaging and integration support for the chassis, mobility layout, internal hardware access, covers, and physical prototype follow-up.",
      quickScan: ["Compact chassis", "Tight packaging", "Prototype integration"],
      metrics: [
        { value: "Low", label: "clearance envelope" },
        { value: "Protected", label: "payload space" },
        { value: "Access", label: "electronics service" }
      ],
      facts: [
        { label: "System", value: "Small autonomous UGV platform" },
        { label: "Main scope", value: "Chassis, packaging, mobility layout, and covers" },
        { label: "Main risk", value: "Strict space limits and ruggedness" },
        { label: "Output", value: "CAD platform work and prototype integration" }
      ],
      caseStudy: {
        challenge:
          "The platform had strict height and clearance limits, while still needing protected internal packaging, electronics access, and a rugged enough chassis for physical integration.",
        contribution:
          "I focused on the transferable mechanical platform work: chassis packaging, wheel and mobility layout, covers, internal compartments, service access, and CAD-to-prototype follow-up.",
        decisions: [
          "Prioritized low-clearance packaging without trapping critical electronics or blocking troubleshooting access.",
          "Defined a protected payload envelope while keeping the vehicle compact.",
          "Used cover and interface design to balance protection, assembly sequence, and maintenance.",
          "Kept sensitive operational details out while preserving the engineering story."
        ],
        deliverables: [
          "Compact chassis CAD views",
          "Internal packaging layout",
          "Cover and interface concepts",
          "Prototype build and subsystem integration support"
        ],
        validation:
          "The project involved real hardware packaging, so design decisions were informed by physical integration needs and subsystem access constraints.",
        outcome:
          "A compact autonomous platform package that demonstrates practical mechanical discipline under strict space, access, and ruggedness constraints."
      },
      tools: ["CAD packaging", "Chassis design", "Electronics access", "Prototype integration"]
    },
    {
      id: "zenadrone-2000",
      title: "ZenaDrone 2000 UAV Mechanisms",
      eyebrow: "VTOL and propulsion hardware",
      category: "uav",
      image: "assets/project-images/site/zenadrone-2000.webp",
      imageAlt: "UAV folding arm and tilt mechanism CAD studies",
      summary:
        "UAV mechanism development across variable-pitch propulsion, VTOL/tilt concepts, retractable landing gear, folding architectures, CFD/FEA studies, BOMs, drawings, and build documentation.",
      role:
        "Mechanical design engineer for UAV mechanisms and release packages, including concept development, CAD, analysis support, and supplier-ready documentation.",
      quickScan: ["VTOL mechanisms", "50 CFD/FEA studies", "Build documentation"],
      metrics: [
        { value: "50", label: "CFD/FEA studies" },
        { value: "VTOL", label: "tilt hardware" },
        { value: "Release", label: "drawings/BOMs" }
      ],
      facts: [
        { label: "System", value: "ZenaDrone 2000 UAV hardware" },
        { label: "Main scope", value: "Propulsion, tilt, folding, and landing mechanisms" },
        { label: "Main risk", value: "Weight, stiffness, packaging, and motion reliability" },
        { label: "Output", value: "CAD, analyses, drawings, BOMs, build documentation" }
      ],
      caseStudy: {
        challenge:
          "UAV hardware demands tight trade-offs between weight, stiffness, motion clearance, aerodynamic efficiency, manufacturability, and reliable field assembly.",
        contribution:
          "I developed mechanism concepts for variable-pitch propulsion, VTOL/tilt systems, retractable landing gear, and folding architectures while supporting analyses and release documentation.",
        decisions: [
          "Used CFD and FEA results to guide geometry, airfoil screening, structural checks, and lightweighting decisions.",
          "Explored folding and tilt concepts with attention to motion clearance, locking, assembly sequence, and serviceability.",
          "Prepared CAD, drawings, BOMs, and build documentation to move ideas toward prototype hardware.",
          "Balanced concept exploration with practical supplier and fabrication constraints."
        ],
        deliverables: [
          "Variable-pitch and tilt mechanism CAD concepts",
          "Folding arm and landing gear architecture studies",
          "Around 50 CFD/FEA studies across aerodynamic and structural checks",
          "Drawings, BOMs, and build documentation"
        ],
        validation:
          "Analysis work supported design trade-offs before fabrication, reducing guesswork around aerodynamic refinement, structural performance, and lightweighting.",
        outcome:
          "Prototype-ready UAV mechanism concepts backed by CAD, simulation, release documentation, and practical build considerations."
      },
      tools: ["SOLIDWORKS", "CFD", "FEA", "Topology optimization", "Mechanism design"]
    },
    {
      id: "dragonfly-mav",
      title: "Dragonfly-Inspired Flapping-Wing MAV",
      eyebrow: "Bio-inspired micro air vehicle",
      category: "uav",
      image: "assets/project-images/site/dragonfly-mav.webp",
      imageAlt: "Dragonfly wing structure and simulation views",
      summary:
        "Bio-inspired flapping-wing MAV mechanical design, wing flexibility studies, aerodynamic analysis, prototype generations, bench testing, and research validation.",
      role:
        "Mechanical design lead for flapping mechanism development, wing stiffness studies, prototype builds, bench testing, and preparation for sensing and control integration.",
      quickScan: ["Bio-inspired MAV", "30 FEA/CFD studies", "4 prototype generations"],
      metrics: [
        { value: "30", label: "FEA/CFD studies" },
        { value: "4", label: "prototype iterations" },
        { value: "MAV", label: "flapping mechanism" }
      ],
      facts: [
        { label: "System", value: "Dragonfly-inspired micro air vehicle" },
        { label: "Main scope", value: "Flapping mechanism, wing stiffness, and validation" },
        { label: "Main risk", value: "Repeatability, fragile joints, and aerodynamic behavior" },
        { label: "Output", value: "Prototype generations, analysis, and validation support" }
      ],
      caseStudy: {
        challenge:
          "A flapping-wing MAV is mechanically sensitive: small geometry changes can affect stiffness, repeatability, joint durability, and aerodynamic behavior.",
        contribution:
          "I led mechanical design from analytical studies into prototype builds, using FEA and CFD to understand wing structure, nodus flexibility, kinematics, and aerodynamics.",
        decisions: [
          "Studied how nodus flexibility influences wing deformation and mechanical response.",
          "Iterated prototype generations to reduce failure-prone joints and improve repeatability.",
          "Prepared hardware paths for sensing and control integration instead of stopping at passive structure.",
          "Connected research validation needs with practical build details."
        ],
        deliverables: [
          "Flapping mechanism CAD and prototype hardware",
          "Around 30 FEA and CFD studies",
          "Around four prototype generations",
          "Research validation support and publication-ready engineering evidence"
        ],
        validation:
          "Bench testing and repeated prototype builds gave evidence about mechanical repeatability, wing behavior, and failure points that could not be seen from simulation alone.",
        outcome:
          "A validated mechanical development path for a bio-inspired MAV, supporting research outputs and future sensing/control integration."
      },
      tools: ["ANSYS", "Fluent", "Mechanism design", "Prototype testing", "Research validation"]
    },
    {
      id: "halifax-fan",
      title: "Halifax Fan CAD Automation",
      eyebrow: "Quote-to-manufacture workflow",
      category: "automation",
      image: "assets/project-images/site/halifax-fan.webp",
      imageAlt: "Engineering analysis and CAD automation visual",
      summary:
        "Parameterized Autodesk Inventor and iLogic/VBA automation to generate configurable industrial fan assemblies, provisional drawings, and design data for quote-to-manufacture workflows.",
      role:
        "CAD automation developer for parameterized assemblies, configurable model logic, drawing generation, and workflow support across distributed engineering and manufacturing teams.",
      quickScan: ["CAD automation", "60% faster turnaround", "Configurable products"],
      metrics: [
        { value: "60%", label: "turnaround reduction" },
        { value: "iLogic", label: "automation" },
        { value: "Global", label: "team workflow" }
      ],
      facts: [
        { label: "System", value: "Industrial fan CAD automation workflow" },
        { label: "Main scope", value: "Parametric assemblies and provisional drawings" },
        { label: "Main risk", value: "Manual repetition, quoting delays, and configuration errors" },
        { label: "Output", value: "Automated model and drawing generation workflow" }
      ],
      caseStudy: {
        challenge:
          "Configurable industrial fan products can consume large engineering time if each quote or variant requires manual model edits and drawing updates.",
        contribution:
          "I built parameterized Autodesk Inventor models and iLogic/VBA automation so configurable assemblies and provisional drawings could be generated faster and more consistently.",
        decisions: [
          "Mapped important design inputs into reusable model parameters instead of treating each fan variant as a separate manual task.",
          "Linked design data into quote-to-manufacture needs so engineering output supported commercial and production workflows.",
          "Reduced repetitive drafting work while keeping generated assemblies understandable for engineers and manufacturing teams.",
          "Supported distributed coordination with UK, USA, and China teams."
        ],
        deliverables: [
          "Parameterized Autodesk Inventor assemblies",
          "iLogic/VBA automation logic",
          "Provisional drawing generation support",
          "Workflow support for quote-to-manufacture handoff"
        ],
        validation:
          "The workflow reduced engineering turnaround by about 60%, showing that automation was not just a convenience but a measurable production improvement.",
        outcome:
          "A faster, more repeatable, and less error-prone CAD workflow for configurable industrial fan assemblies."
      },
      tools: ["Autodesk Inventor", "iLogic", "VBA", "Parametric CAD", "Manufacturing workflow"]
    },
    {
      id: "myprid-three-wheeler",
      title: "MYPRID Hybrid-Electric Three-Wheeler",
      eyebrow: "Vehicle drivetrain and packaging",
      category: "vehicle",
      image: "assets/project-images/site/myprid-three-wheeler.webp",
      imageAlt: "Hybrid-electric three-wheeler drivetrain CAD assembly",
      summary:
        "Hybrid-electric three-wheeler R&D covering power-split drivetrain architecture, MATLAB/Simulink sizing, vehicle packaging, fabrication coordination, procurement, and prototype validation.",
      role:
        "Research engineer for drivetrain architecture, vehicle packaging, simulation studies, component coordination, fabrication support, and operating-mode validation.",
      quickScan: ["Hybrid drivetrain", "20 Simulink studies", "50+ components"],
      metrics: [
        { value: "20", label: "Simulink studies" },
        { value: "50+", label: "components" },
        { value: "4", label: "operating modes" }
      ],
      facts: [
        { label: "System", value: "Hybrid-electric three-wheeler prototype" },
        { label: "Main scope", value: "Drivetrain architecture, packaging, and validation" },
        { label: "Main risk", value: "Packaging drivetrain hardware with limited chassis changes" },
        { label: "Output", value: "Simulation studies, CAD support, fabrication, and validation" }
      ],
      caseStudy: {
        challenge:
          "The project needed a practical hybrid drivetrain architecture for an existing vehicle platform, with limited packaging room and the need to demonstrate multiple operating modes.",
        contribution:
          "I supported system architecture, MATLAB/Simulink studies, gear ratio and torque-speed sizing, battery and motor packaging, component procurement, fabrication coordination, and validation.",
        decisions: [
          "Used simulation to size drivetrain targets before committing to hardware.",
          "Resolved packaging around battery packs, motor mounts, power electronics, and drivetrain interfaces while minimizing chassis changes.",
          "Coordinated fabrication and procurement so model-level decisions could become physical prototype hardware.",
          "Supported validation across engine-only, EV-only, hybrid, and regenerative-braking modes."
        ],
        deliverables: [
          "Around 20 MATLAB/Simulink studies",
          "Vehicle packaging and CAD support",
          "Fabrication and procurement coordination for 50+ components",
          "Prototype integration and operating-mode validation"
        ],
        validation:
          "Prototype demonstrations tested operating modes and regenerative-braking behavior, linking simulation decisions to real vehicle behavior.",
        outcome:
          "A hybrid-electric three-wheeler prototype path with drivetrain sizing, packaging, hardware coordination, and multi-mode validation evidence."
      },
      tools: ["MATLAB/Simulink", "Vehicle packaging", "CAD", "Prototype validation", "Supplier coordination"]
    }
  ],
  experience: [
    {
      company: "Cyprus Research & Innovation Center (CYRIC)",
      role: "Mechanical / Manufacturing Engineer",
      period: "Sep 2025 - Present",
      text:
        "Mechanical design and CAD release for field-deployed electromechanical systems, including autonomous soil-sampling UGV hardware, compressed-air UAV launch subsystems, and UAV/UGV interface hardware."
    },
    {
      company: "Kaunas University of Technology",
      role: "Project Specialist, Mechanical Design",
      period: "Aug 2024 - Aug 2025",
      text:
        "Mechanical design and validation of a dragonfly-inspired flapping-wing MAV, with FEA, CFD, prototypes, and research validation."
    },
    {
      company: "Nuwatt Technovation",
      role: "CAD Design Engineer",
      period: "Jul 2023 - Jul 2024",
      text:
        "Designed the UGO autonomous service-robot platform, modular mobility base, structural interfaces, brackets, enclosures, drawings, and BOMs."
    },
    {
      company: "Engineering Box",
      role: "Mechanical Design Engineer",
      period: "Jul 2021 - Jun 2023",
      text:
        "Delivered UAV mechanisms, CAD automation, hybrid-electric retrofit work, supplier-ready release packages, CFD, FEA, and prototype build support."
    },
    {
      company: "University of Lahore",
      role: "Research Engineer",
      period: "Nov 2018 - Jun 2021",
      text:
        "Led applied R&D and prototype development for MYPRID hybrid-electric three-wheeler architecture, packaging, fabrication, procurement, and validation."
    }
  ]
};
