import { ExperienceItem, SkillCategory, EducationItem, CertificationItem } from './types';

export const RESUME_LINK = "?view=resume"; 

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/saurabhbusinessanalyst",
  github: "https://github.com/Saurabhchhiller",
  email: "schhiller1@gmail.com",
  phone: "(657) 234-6023"
};

export const SUMMARY = `Senior Business Analyst / Product Analyst with 9+ years of experience driving enterprise system implementations across healthcare, university systems, and government. Proven success in leading Agile delivery, optimizing business processes, and designing scalable product workflows. Adept at stakeholder alignment, API integration, and documentation excellence for high-impact platforms like SeRA, UltraTouch®, and IMPEI.`;

export const SKILLS: SkillCategory[] = [
  {
    title: "Project Management & Agile",
    skills: ["Agile Scrum", "Product Ownership", "JIRA", "Azure DevOps", "MS Project", "Stakeholder Management", "Resource Management", "Change Management", "Cross-Cultural Relationship Management"]
  },
  {
    title: "Analysis & Documentation",
    skills: ["Requirement Elicitation", "User Stories", "Business Process Modeling", "Confluence", "Lucid Chart", "SharePoint", "Balsamiq", "Camunda", "MS Office Suite"]
  },
  {
    title: "Technical & Integration",
    skills: ["REST API", "SOAP API", "Microsoft Azure", "System Integration", "Microservices", "SQL", "Data Mapping", "ETL Processes"]
  },
  {
    title: "Data & Quality",
    skills: ["Oracle", "MS SQL Server", "PostgreSQL", "Tableau", "Quality Assurance", "UAT", "Data Analysis", "Training & Facilitation"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "stanford",
    role: "Sr. Business Analyst / Product Analyst",
    company: "Stanford University",
    period: "January 2025 - Present",
    location: "Redwood City",
    description: "Streamlining the proposal and award lifecycle for the Stanford electronic Research Administration System (SeRA).",
    achievements: [
      "Translated complex stakeholders need into actionable product features, streamlining the proposal and award lifecycle.",
      "Designed intuitive user interfaces across key SeRA modules, reducing user errors and support requests by 30%.",
      "Managed Agile Scrum ceremonies as Product Owner, prioritizing user stories and driving high-velocity sprint execution.",
      "Identified and resolved system inefficiencies through targeted analysis, accelerating award intake and processing times.",
      "Created comprehensive documentation for proposal routing workflows (PDRF), accelerating onboarding and reducing cross-team misunderstandings.",
      "Collaborated with development teams to implement scalable, data-driven solutions that support evolving research workflows.",
      "Improved user satisfaction scores by delivering targeted enhancements to SeRA based on direct stakeholder feedback and analytics."
    ]
  },
  {
    id: "carb",
    role: "Sr. Business Analyst / Quality Analyst",
    company: "California Air Resource Board (via Qual Apps)",
    period: "December 2022 – October 2024",
    location: "Remote",
    description: "Executed detailed business analysis to identify challenges and opportunities for the IMPEI project.",
    achievements: [
      "Established strong relationships with 20+ stakeholders by conducting interviews and facilitating workshops, leading to a 20% increase in stakeholder satisfaction.",
      "Created and refined detailed swim lane diagrams and process maps, utilizing Lucid Chart to enhance clarity and reduce misunderstandings, which improved team efficiency by 30%.",
      "Developed 50+ comprehensive use cases and user stories using JIRA to streamline development processes in an Agile environment, ensuring clarity in system functionalities.",
      "Documented high-level requirements, Epics, and user stories, utilizing Confluence to ensure alignment with business objectives and effective communication with cross-functional teams.",
      "Supported the development of Organizational Change Management (OCM) deliverables, contributing to a 30% reduction in onboarding time and a 25% increase in user satisfaction during transitions.",
      "Implemented 10+ process improvements reflective of business analysis insights to optimize workflows and reduce operational costs by 20%.",
      "Led functional testing activities for the IMPEI project, ensuring business requirements were met and achieving a 95% defect-free release.",
      "Managed requirements traceability throughout the Agile project lifecycle, ensuring alignment during design and testing phases to achieve successful business outcomes."
    ]
  },
  {
    id: "d2",
    role: "Sr. Business System Analyst",
    company: "D2 Solutions",
    period: "April 2021 - November 2022",
    location: "Remote",
    description: "Empowered healthcare leaders to enhance business needs through consulting and SaaS technology solutions.",
    achievements: [
      "UltraTouch Engage (Patient Engagement & Assessments) - Developed to bring manufacturers, providers, pharmacies, and patients closer together.",
      "UltraTouch Verify (Prior Authorization Automation) – Enhanced this automated PA and BV platform to reduce average authorization and verification time to less than 24 hours.",
      "Led the full lifecycle delivery of UltraTouch® Engage, a patient engagement platform designed to reduce therapy abandonment and support pharmacists in monitoring adverse events.",
      "Designed and delivered a mobile survey feature allowing elderly patients to respond to pharmacist outreach digitally via SMS.",
      "Implemented follow-up workflows for 1-day, 7-day, 1-month, and 6-month patient assessments to monitor side effects.",
      "Designed RESTful API integrations across pharmacy and patient systems to support real-time onboarding and therapy access.",
      "Created detailed data mapping documents and source-to-target logic for integrating pharmacy, patient, and claims data from legacy systems.",
      "Acted as Product Owner during analysis and design phases for UltraTouch® Engage, translating stakeholder needs into Agile-ready user stories."
    ]
  },
  {
    id: "highmark",
    role: "Sr. Consultant Business Analyst",
    company: "Highmark (via SDLC Partners)",
    period: "December 2020 - April 2021",
    location: "Remote",
    description: "Led business analysis for decomposing legacy monolith into micro-products during large-scale digital transformation.",
    achievements: [
      "Led the business analysis and roadmap planning for decomposing the legacy monolith into micro-products, starting with the Member Portal.",
      "Acted as Product Owner, defining user stories, managing the backlog, and leading Agile ceremonies to deliver sprint goals.",
      "Facilitated technical workshops to define API contracts for secure, real-time data exchange between services.",
      "Delivered clear specifications and coordinated UAT, reducing iteration cycles and ensuring high-quality feature releases.",
      "Helped reduce development cycle times through proactive QA support and continuous stakeholder engagement."
    ]
  },
  {
    id: "caremetx",
    role: "Sr. Business Analyst",
    company: "CareMetx",
    period: "September 2019 - December 2020",
    location: "Oakland, CA",
    description: "Supported commercialization support to pharmaceutical and biotechnology drug manufacturers.",
    achievements: [
      "Facilitated communication among external, interface, and internal stakeholders to ensure uninterrupted project progress.",
      "Developed artifacts such as CR Request forms, SLA documentation, and Mutual Data Services agreements to support project requirements.",
      "Created efficient swim lane diagrams to streamline project coordination.",
      "Analyzed HLD and LLD systems flow with data and protocol modalities to ensure alignment with project objectives.",
      "Excelled in creating artifacts like BRD, Functional and Interface specs (REST and SOAP-based APIs).",
      "Worked on EDI to create Data mapping documents, Field, and database analysis (EDI 856 & 997).",
      "Closely worked with UAT and QA teams to ensure the solution was delivered per business expectations.",
      "Documented requirements in accordance with high-level IT policies and client performance standards."
    ]
  },
  {
    id: "cvs",
    role: "Lead Consultant / Business Analyst",
    company: "CVS Health",
    period: "November 2018 - March 2019",
    location: "Richardson, Texas",
    description: "Provided new business and projection reports to businesses based on their role and designation.",
    achievements: [
      "Gathered process, data related requirements from the business and gained insights into the purpose for value addition for a future state in existing reporting.",
      "Participated in Project management process and provided technical and functional assistance in identifying, evaluating, and developing systems.",
      "Identified the Data Elements from the Source to Target tables for the Data Warehouse team.",
      "Performed Analysis - source system data validation, impact analysis of downstream reports/applications, and database research by leveraging SQL.",
      "Hands-on experience with Tableau to configure reports as per client requirements.",
      "Developed SQL Queries, wrote test cases, validated the data using SQL, and signed off for UAT."
    ]
  },
  {
    id: "moodys",
    role: "Technical Product Analyst",
    company: "Moody's Analytics",
    period: "May 2018 - October 2018",
    location: "San Francisco, CA",
    description: "Enhanced 'Credit Lens' application to help financial institutions make better decisions.",
    achievements: [
      "Conducted requirement analysis through detailed interactions with product owners and stakeholders, ensuring precise project specifications.",
      "Created and assigned the user stories in Rally based on technical specifications.",
      "Led backlog-grooming sessions to estimate user stories with story points and assign business value by working with the Product Manager.",
      "Created Report template files in DevExpress like Admin Reports, Call Reports, and Credit Presentation Reports.",
      "Created the BPMN workflow diagram in Camunda, defining all the users as in the requirements.",
      "Collected and analyzed data to present key information visually, optimizing business functions.",
      "Created the Data mapping document to integrate Credit Lens with Finasta (Laser Pro)."
    ]
  },
  {
    id: "wellsfargo",
    role: "System Analyst",
    company: "Wells Fargo",
    period: "August 2016 - May 2018",
    location: "San Antonio, TX",
    description: "Assisted application SME with analysis, data mapping, and conversion for HP ALM Quality Center schemas.",
    achievements: [
      "Elicited system requirements using various techniques such as interviews and Document Analysis.",
      "Performed the Analysis of Business requirements from Users for Data conversion.",
      "Performed the Data Analysis, Data Mapping for Schema conversion.",
      "Used Assure Tools to access, visualize, and standardize the data from different schemas.",
      "Involved in the Migration of projects across the different servers per the requirement of End Users.",
      "Conducted Walkthrough/familiarization sessions of mapping documents for End Users.",
      "Involved in fixing the defects raised by End-Users for converted HP ALM Quality Center schemas.",
      "Used MY-SQL functions to extract data from existing HP ALM Quality Center schemas to create a client mapping document.",
      "Increased Client Satisfaction by 20% (Source: Number of tickets)."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech, Mechanical Engineering",
    institution: "Kurukshetra University, India",
    year: "August 2007 - July 2011"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Professional Scrum Product Owner (PSPO) – July 2018" },
  { name: "Professional Scrum Master (PSM I) – November 2020" }
];