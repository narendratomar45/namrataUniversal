import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import systemSoftware from "../assets/images/systemSoftware.jpg";
import softwareDevelopment from "../assets/images/softwareDevelopment.jpg";
import crmSoftware from "../assets/images/crmSoftware.jpg";
import sapSoftware from "../assets/images/sapSoftware.jpg";
import erpSoftware from "../assets/images/erpSoftware.jpg";
import securitySoftware from "../assets/images/securitySoftware.jpg";
import embaddedSoftware from "../assets/images/embaddedSoftware.jpg";
import aiSoftware from "../assets/images/aiSoftware.jpg";
import gamingSoftware from "../assets/images/gamingSoftware.jpeg";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const softwareDetails = {
  "System Software": {
    image: systemSoftware,
    description:
      "System software forms the foundational layer of computer operations, serving as the crucial intermediary between hardware components and application software. These essential programs manage every aspect of computer functionality, from basic input/output operations to complex memory management tasks. Without system software, computers would be unable to perform even the most basic functions or run any applications.",
    features: [
      "Hardware resource management and allocation",
      "Provides platform-independent services for applications",
      "Includes operating systems, device drivers, firmware, and utility programs",
      "Memory management and process scheduling",
      "File system management and security controls",
      "User interface provision (GUI/CLI)",
      "Network communication protocols",
    ],
    examples: [
      "Windows OS",
      "macOS",
      "Linux distributions",
      "Android",
      "iOS",
      "UNIX",
      "Chrome OS",
    ],
    benefits: [
      "Enables hardware abstraction for application developers",
      "Optimizes system resource utilization",
      "Provides consistent environment for software execution",
      "Enhances system security and stability",
      "Facilitates hardware communication standardization",
    ],
    industries: [
      "All computing devices",
      "Enterprise IT infrastructure",
      "Cloud computing platforms",
      "Embedded systems",
      "Mobile devices",
    ],
    popularVendors: [
      "Microsoft",
      "Apple",
      "Google",
      "Red Hat",
      "Canonical",
      "IBM",
    ],
    useCases: [
      "Operating personal computers and servers",
      "Managing enterprise IT infrastructure",
      "Running mobile devices",
      "Supporting cloud computing environments",
      "Powering embedded systems in various devices",
    ],
    additionalInfo:
      "System software typically runs in privileged mode with direct hardware access, unlike application software. Modern system software often includes virtualization capabilities, containerization support, and advanced security features like sandboxing and secure boot.",
  },
  "Development Software": {
    image: softwareDevelopment,
    description:
      "Development software encompasses the comprehensive ecosystem of tools that empower software engineers to create, test, debug, and maintain applications across various platforms. These tools form the backbone of the software development lifecycle (SDLC), enabling teams to collaborate effectively, maintain code quality, and deliver robust applications. Modern development software increasingly incorporates AI-assisted coding features and cloud-based collaboration capabilities.",
    features: [
      "Advanced code editors with syntax highlighting and IntelliSense",
      "Integrated debugging and profiling tools",
      "Version control system integration",
      "Cross-platform development support",
      "Automated testing frameworks",
      "CI/CD pipeline integration",
      "Database management tools",
      "Collaboration features for team development",
      "Cloud-based development environments",
      "AI-powered code completion and review",
    ],
    examples: [
      "Visual Studio Code",
      "IntelliJ IDEA Ultimate",
      "GitHub Copilot",
      "Docker",
      "Postman",
      "JIRA",
      "Jenkins",
      "Xcode",
      "Android Studio",
      "Eclipse Theia",
    ],
    benefits: [
      "Accelerates development cycles",
      "Improves code quality and consistency",
      "Enables team collaboration",
      "Simplifies complex development tasks",
      "Provides real-time feedback",
      "Facilitates agile development practices",
      "Reduces time-to-market",
    ],
    industries: [
      "Software development firms",
      "IT departments across all industries",
      "Game development studios",
      "FinTech companies",
      "Healthcare IT",
      "Automotive software",
      "IoT development",
    ],
    popularVendors: [
      "Microsoft",
      "JetBrains",
      "GitHub",
      "Atlassian",
      "Oracle",
      "Amazon Web Services",
    ],
    useCases: [
      "Web application development",
      "Mobile app creation",
      "Enterprise software development",
      "Game programming",
      "System software development",
      "Data science and AI model development",
      "Embedded systems programming",
    ],
    additionalInfo:
      "The modern development software landscape is increasingly shifting toward cloud-based IDEs and AI-assisted coding tools. Many platforms now offer real-time collaboration features similar to Google Docs, allowing distributed teams to work simultaneously on the same codebase.",
  },
  "CRM Software": {
    image: crmSoftware,
    description:
      "Customer Relationship Management (CRM) software represents a transformative approach to managing all aspects of customer interactions, combining sales, marketing, and customer service functions into a unified platform. Modern CRM systems leverage artificial intelligence and machine learning to provide predictive analytics, automate routine tasks, and deliver actionable insights that drive customer engagement and revenue growth. These systems have evolved from simple contact management tools to comprehensive customer experience platforms.",
    features: [
      "360-degree customer view with unified profiles",
      "AI-powered sales forecasting",
      "Marketing automation workflows",
      "Customer service ticket management",
      "Lead scoring and prioritization",
      "Email tracking and engagement analytics",
      "Social media integration",
      "Customizable dashboards and reports",
      "Mobile access with offline capabilities",
      "Integration with ERP and other business systems",
      "Conversational AI for customer service",
    ],
    examples: [
      "Salesforce Customer 360",
      "HubSpot CRM",
      "Microsoft Dynamics 365 Sales",
      "Zoho CRM Plus",
      "Freshsales",
      "Pipedrive",
      "SugarCRM",
      "Oracle CX Sales",
      "SAP Sales Cloud",
      "Creatio",
    ],
    benefits: [
      "Increases sales productivity by 15-20%",
      "Improves customer retention rates",
      "Provides data-driven sales insights",
      "Automates routine administrative tasks",
      "Enhances cross-team collaboration",
      "Shortens sales cycles",
      "Improves forecast accuracy",
      "Personalizes customer interactions",
    ],
    industries: [
      "Retail and e-commerce",
      "Financial services",
      "Telecommunications",
      "Healthcare providers",
      "Professional services",
      "Manufacturing",
      "Real estate",
      "Education",
    ],
    popularVendors: [
      "Salesforce",
      "Microsoft",
      "Oracle",
      "SAP",
      "HubSpot",
      "Zoho",
    ],
    useCases: [
      "Sales pipeline management",
      "Marketing campaign execution",
      "Customer service case management",
      "Account-based marketing",
      "Partner relationship management",
      "Customer analytics and reporting",
      "Field sales enablement",
      "E-commerce personalization",
    ],
    additionalInfo:
      "Modern CRM systems are increasingly incorporating AI capabilities for predictive lead scoring, natural language processing for email and call analysis, and advanced analytics for customer journey mapping. Many now offer industry-specific solutions tailored to verticals like healthcare, financial services, and manufacturing.",
  },
  "SAP Software": {
    image: sapSoftware,
    description:
      "SAP software represents the gold standard in enterprise resource planning, offering comprehensive solutions that integrate all facets of business operations. As the market leader in ERP systems, SAP provides industry-specific solutions that combine decades of business process expertise with cutting-edge technologies like AI, machine learning, and in-memory computing (HANA). SAP's modular approach allows organizations to implement solutions tailored to their specific needs while maintaining the ability to scale as the business grows.",
    features: [
      "Real-time analytics with SAP HANA",
      "Industry-specific best practices",
      "Integrated business processes across functions",
      "Advanced financial management",
      "Supply chain and manufacturing planning",
      "Human capital management",
      "Customer experience management",
      "AI-powered insights and automation",
      "Cloud, hybrid, and on-premise deployment options",
      "Extensive partner ecosystem",
      "Robust security and compliance controls",
    ],
    examples: [
      "SAP S/4HANA",
      "SAP Business Technology Platform",
      "SAP SuccessFactors",
      "SAP Ariba",
      "SAP Fieldglass",
      "SAP Concur",
      "SAP Customer Experience",
      "SAP Analytics Cloud",
      "SAP Integrated Business Planning",
      "SAP Fiori UX",
    ],
    benefits: [
      "Standardizes global business processes",
      "Provides real-time business visibility",
      "Reduces operational costs through automation",
      "Improves regulatory compliance",
      "Enhances decision-making with analytics",
      "Increases operational efficiency",
      "Supports digital transformation initiatives",
      "Facilitates mergers and acquisitions",
    ],
    industries: [
      "Manufacturing",
      "Retail",
      "Financial services",
      "Healthcare",
      "Public sector",
      "Energy and utilities",
      "Professional services",
      "Automotive",
      "Consumer products",
    ],
    popularVendors: ["SAP SE"],
    useCases: [
      "Global financial consolidation",
      "Supply chain optimization",
      "Workforce management",
      "Procurement automation",
      "Asset management",
      "Product lifecycle management",
      "Sales and operations planning",
      "Customer experience management",
      "Sustainability reporting",
    ],
    additionalInfo:
      "SAP's recent focus has been on helping customers transition to their next-generation S/4HANA platform, which leverages their in-memory HANA database technology. They're also emphasizing industry cloud solutions that combine ERP with industry-specific functionality and partner innovations.",
  },
  "ERP Software": {
    image: erpSoftware,
    description:
      "Enterprise Resource Planning (ERP) software serves as the central nervous system of modern organizations, integrating core business functions into a unified system that provides real-time visibility across operations. Contemporary ERP solutions have evolved beyond traditional back-office functions to incorporate advanced technologies like AI, IoT integration, and predictive analytics. These systems break down information silos, enabling data-driven decision-making and process automation across finance, supply chain, operations, reporting, manufacturing, and human resource activities.",
    features: [
      "Unified database for all business functions",
      "Real-time analytics and reporting",
      "Automated workflows across departments",
      "Regulatory compliance management",
      "Supply chain visibility and optimization",
      "Financial management and accounting",
      "Human resources and payroll",
      "Customer relationship management",
      "Project management",
      "Business intelligence integration",
      "Mobile access and cloud deployment",
      "AI-powered forecasting and planning",
      "IoT integration for asset tracking",
    ],
    examples: [
      "SAP S/4HANA",
      "Oracle Fusion Cloud ERP",
      "Microsoft Dynamics 365",
      "NetSuite",
      "Infor CloudSuite",
      "Acumatica",
      "Epicor Kinetic",
      "IFS Applications",
      "Workday Financial Management",
      "Sage Intacct",
    ],
    benefits: [
      "30-50% reduction in operational costs",
      "Improved inventory turnover by 20-30%",
      "50% faster financial close processes",
      "Enhanced regulatory compliance",
      "Real-time business visibility",
      "Standardized global processes",
      "Improved customer service",
      "Better decision-making with analytics",
      "Increased employee productivity",
    ],
    industries: [
      "Manufacturing",
      "Distribution",
      "Professional services",
      "Healthcare",
      "Nonprofit",
      "Construction",
      "Hospitality",
      "Education",
      "Retail",
    ],
    popularVendors: [
      "SAP",
      "Oracle",
      "Microsoft",
      "Infor",
      "Workday",
      "NetSuite",
    ],
    useCases: [
      "Financial consolidation and reporting",
      "Supply chain optimization",
      "Inventory management",
      "Project costing and accounting",
      "Regulatory compliance",
      "Human capital management",
      "Asset maintenance",
      "Procurement automation",
      "Order-to-cash process automation",
    ],
    additionalInfo:
      "Modern ERP systems are increasingly moving to cloud-based deployments with subscription pricing models. There's also growing emphasis on industry-specific functionality, AI-powered automation, and better user experiences through consumer-grade interfaces. Many vendors now offer composable ERP architectures that allow businesses to implement modules as needed.",
  },
  "Security Software": {
    image: securitySoftware,
    description:
      "Security software forms the critical defense layer protecting digital assets from increasingly sophisticated cyber threats in today's interconnected world. Modern security solutions employ advanced techniques like behavioral analysis, machine learning, and threat intelligence sharing to detect and prevent both known and zero-day attacks. These tools have evolved from simple virus scanners to comprehensive platforms that provide protection across endpoints, networks, cloud environments, and identities while ensuring regulatory compliance.",
    features: [
      "Next-generation antivirus with AI detection",
      "Endpoint detection and response (EDR)",
      "Firewall and intrusion prevention",
      "Data loss prevention (DLP)",
      "Email and web security gateways",
      "Identity and access management (IAM)",
      "Cloud security posture management",
      "Security information and event management (SIEM)",
      "Vulnerability scanning and patch management",
      "Encryption and tokenization",
      "Zero trust network access",
      "Threat intelligence integration",
      "Deception technology",
    ],
    examples: [
      "CrowdStrike Falcon",
      "Microsoft Defender for Endpoint",
      "Palo Alto Cortex XDR",
      "Symantec Endpoint Security",
      "McAfee MVISION",
      "Trend Micro Apex One",
      "Fortinet FortiEDR",
      "SentinelOne Singularity",
      "Check Point Harmony",
      "VMware Carbon Black",
    ],
    benefits: [
      "Reduces risk of data breaches",
      "Meets compliance requirements",
      "Provides visibility across IT environment",
      "Automates threat detection and response",
      "Protects against ransomware",
      "Secures remote workforce",
      "Safeguards cloud migration",
      "Minimizes attack surface",
      "Reduces security operations workload",
    ],
    industries: [
      "Financial services",
      "Healthcare",
      "Government",
      "Retail",
      "Education",
      "Critical infrastructure",
      "Technology",
      "Manufacturing",
    ],
    popularVendors: [
      "Microsoft",
      "CrowdStrike",
      "Palo Alto Networks",
      "Broadcom",
      "McAfee",
      "Fortinet",
    ],
    useCases: [
      "Endpoint protection",
      "Network security monitoring",
      "Cloud workload protection",
      "Identity threat detection",
      "Compliance auditing",
      "Incident response",
      "Threat hunting",
      "Data protection",
      "Secure remote access",
    ],
    additionalInfo:
      "The security software landscape is rapidly evolving to address challenges like ransomware, supply chain attacks, and cloud security. There's increasing convergence between network and endpoint security tools, with many vendors offering extended detection and response (XDR) platforms. AI and automation are being heavily incorporated to help address the cybersecurity skills shortage.",
  },
  "Embedded Software": {
    image: embaddedSoftware,
    description:
      "Embedded software represents the invisible intelligence powering modern devices, from everyday appliances to sophisticated industrial equipment. This specialized software is tightly coupled with hardware to perform dedicated functions, often with real-time constraints and limited resources. The proliferation of IoT devices and smart technologies has dramatically expanded the scope and complexity of embedded systems, which now frequently incorporate connectivity, machine learning at the edge, and over-the-air update capabilities.",
    features: [
      "Real-time operating system (RTOS) support",
      "Hardware-specific optimization",
      "Minimal memory and power footprint",
      "Deterministic execution",
      "Fault tolerance and recovery",
      "Over-the-air update capability",
      "Edge computing functionality",
      "Sensor fusion and processing",
      "Low-latency communication",
      "Safety and security certifications",
      "Machine learning inference at edge",
    ],
    examples: [
      "Automotive engine control units",
      "Medical device firmware",
      "Industrial PLC programming",
      "Smart home device firmware",
      "Aerospace avionics",
      "Wearable health monitors",
      "Agricultural equipment controllers",
      "Robotics control systems",
      "Smart meter software",
      "Digital camera firmware",
    ],
    benefits: [
      "Enables device intelligence",
      "Optimizes hardware performance",
      "Reduces power consumption",
      "Provides reliable operation",
      "Supports remote maintenance",
      "Enables edge analytics",
      "Facilitates product differentiation",
      "Extends product lifespan",
    ],
    industries: [
      "Automotive",
      "Aerospace",
      "Medical devices",
      "Industrial automation",
      "Consumer electronics",
      "Telecommunications",
      "Energy",
      "Defense",
    ],
    popularVendors: [
      "Green Hills Software",
      "Wind River",
      "QNX",
      "Microsoft (Azure RTOS)",
      "ARM",
      "Texas Instruments",
    ],
    useCases: [
      "Vehicle control systems",
      "Medical device operation",
      "Factory automation",
      "Smart city infrastructure",
      "Home automation",
      "Aerospace navigation",
      "Energy grid management",
      "Consumer appliance control",
    ],
    additionalInfo:
      "Embedded software development is increasingly adopting DevOps practices with CI/CD pipelines for firmware. There's growing emphasis on security with the rise of connected devices, leading to more focus on secure boot, encrypted communications, and regular security updates. The market is also seeing more use of open-source RTOS options alongside commercial solutions.",
  },
  "AI Software": {
    image: aiSoftware,
    description:
      "Artificial Intelligence software represents the cutting edge of technological innovation, enabling machines to perform tasks that traditionally required human intelligence. Modern AI platforms combine machine learning, deep learning, natural language processing, and computer vision to create systems that can learn, reason, and make decisions. These tools are transforming industries by automating complex processes, uncovering insights in vast datasets, and creating new forms of human-computer interaction through conversational interfaces and predictive capabilities.",
    features: [
      "Machine learning model development",
      "Deep learning frameworks",
      "Natural language processing",
      "Computer vision algorithms",
      "Predictive analytics",
      "Recommendation engines",
      "Generative AI capabilities",
      "AutoML for citizen data scientists",
      "Model training and deployment",
      "Explainable AI features",
      "Edge AI deployment",
      "AI ethics and bias detection",
      "Pre-trained industry models",
    ],
    examples: [
      "TensorFlow",
      "PyTorch",
      "IBM Watson Studio",
      "Google Vertex AI",
      "Microsoft Azure AI",
      "Amazon SageMaker",
      "H2O.ai",
      "DataRobot",
      "OpenAI API",
      "NVIDIA AI Enterprise",
    ],
    benefits: [
      "Automates complex decision-making",
      "Processes unstructured data at scale",
      "Provides predictive insights",
      "Personalizes customer experiences",
      "Optimizes business processes",
      "Enhances operational efficiency",
      "Reduces human error",
      "Creates new revenue opportunities",
    ],
    industries: [
      "Healthcare",
      "Financial services",
      "Retail",
      "Manufacturing",
      "Telecommunications",
      "Energy",
      "Transportation",
      "Media and entertainment",
    ],
    popularVendors: [
      "Google",
      "Microsoft",
      "IBM",
      "Amazon",
      "NVIDIA",
      "OpenAI",
      "Hugging Face",
    ],
    useCases: [
      "Predictive maintenance",
      "Fraud detection",
      "Medical image analysis",
      "Chatbots and virtual agents",
      "Supply chain optimization",
      "Sentiment analysis",
      "Autonomous systems",
      "Personalized recommendations",
      "Document processing automation",
    ],
    additionalInfo:
      "The AI software landscape is rapidly evolving with the emergence of foundation models and generative AI capabilities. There's increasing focus on responsible AI development, with tools for bias detection, model explainability, and AI governance. The market is also seeing more vertical-specific AI solutions tailored to industries like healthcare, finance, and legal services.",
  },
  "Gaming Software": {
    image: gamingSoftware,
    description:
      "Gaming software encompasses the sophisticated tools and platforms that power the multi-billion dollar interactive entertainment industry. Modern game development software provides comprehensive ecosystems for creating immersive 2D and 3D experiences across consoles, PCs, mobile devices, and emerging platforms like VR and cloud gaming. These tools have evolved from simple game makers to complex platforms integrating physics engines, AI behavior systems, multiplayer networking, and monetization features that support games-as-a-service models.",
    features: [
      "Advanced 3D rendering engines",
      "Physics and collision systems",
      "Animation state machines",
      "AI behavior trees",
      "Multiplayer networking",
      "Virtual and augmented reality support",
      "Asset pipelines and management",
      "Scripting and visual programming",
      "Performance profiling tools",
      "Monetization and analytics",
      "Cross-platform deployment",
      "Cloud gaming integration",
      "User-generated content tools",
    ],
    examples: [
      "Unity",
      "Unreal Engine",
      "Godot",
      "Amazon Lumberyard",
      "CryEngine",
      "GameMaker Studio",
      "RPG Maker",
      "Construct",
      "Frostbite",
      "Source 2",
    ],
    benefits: [
      "Reduces development time and cost",
      "Enables high-fidelity graphics",
      "Supports multiple platforms",
      "Provides ready-made solutions",
      "Facilitates team collaboration",
      "Simplifies complex game systems",
      "Enables rapid prototyping",
      "Supports live operations",
    ],
    industries: [
      "Video game development",
      "Serious games for education",
      "Architectural visualization",
      "Film and animation",
      "Military simulation",
      "Healthcare training",
      "Advertising and marketing",
    ],
    popularVendors: [
      "Epic Games",
      "Unity Technologies",
      "Amazon",
      "Crytek",
      "Electronic Arts",
    ],
    useCases: [
      "AAA game development",
      "Indie game creation",
      "Virtual reality experiences",
      "Architectural walkthroughs",
      "Training simulations",
      "Interactive storytelling",
      "Educational games",
      "Advertising gamification",
    ],
    additionalInfo:
      "The gaming software industry is undergoing significant transformation with the rise of real-time 3D experiences beyond games (sometimes called the 'metaverse'). Game engines are increasingly used for non-game applications like film production, automotive design, and urban planning. There's also growing emphasis on tools that support user-generated content and creator economies.",
  },
};

const SoftwareDetail = () => {
  const { softwareName } = useParams();
  const detail = softwareDetails[softwareName];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  if (!detail) {
    return <div className="text-center py-20">Category not found</div>;
  }

  return (
    <div className="w-full bg-gray-50 text-gray-800 py-16">
      <div className="w-full">
        <div className="w-full h-[80vh]" data-aos="fade-up">
          <img
            src={detail.image}
            alt={softwareName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto my-10 text-center" data-aos="zoom-in">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 text-center">
            {softwareName} <span className="text-blue-500">Details</span>
          </h1>
          <p className="text-gray-600 mb-4">{detail.additionalInfo}</p>
        </div>

        <div
          className="w-[95%] mx-auto bg-white p-8 rounded-xl shadow-md mb-8"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Overview
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {detail.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Key Features
              </h2>
              <ul className="space-y-3">
                {detail.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">
                      <GiCheckMark />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Benefits
              </h2>
              <ul className="space-y-3">
                {detail.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">
                      <FaArrowRight />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[95%] mx-auto grid md:grid-cols-2 gap-8 mb-8">
          <div
            className="bg-white p-8 rounded-xl shadow-md"
            data-aos="flip-left"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Popular Examples
            </h2>
            <div className="flex flex-wrap gap-3">
              {detail.examples.map((example, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>

          <div
            className="bg-white p-8 rounded-xl shadow-md"
            data-aos="flip-right"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Leading Vendors
            </h2>
            <div className="flex flex-wrap gap-3">
              {detail.popularVendors.map((vendor, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {vendor}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="w-[95%] mx-auto bg-white p-8 rounded-xl shadow-md mb-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Industry Applications
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {detail.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                data-aos="fade-up"
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-[95%] mx-auto bg-white p-8 rounded-xl shadow-md"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Common Use Cases
          </h2>
          <ul className="space-y-4">
            {detail.useCases.map((useCase, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1 text-xl">•</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {useCase}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDetail;
