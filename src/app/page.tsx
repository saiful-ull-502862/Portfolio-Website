'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  TrendingUp,
  ChevronRight,
  ExternalLink,
  Play,
  FileText,
  Database,
  Copy,
  Menu
} from 'lucide-react'

export default function ResearchWebsite() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Multi-scale Modeling of Articular Cartilage",
      institution: "4MLAB, UL Lafayette",
      period: "Aug 2021 - Present",
      description: "Developed experimentally validated microstructural finite element model simulating mechanical behavior of cartilage under physiological loading to identify osteoarthritis progression.",
      objectives: [
        "Develop multi-scale computational model of cartilage biomechanics",
        "Validate model against experimental data",
        "Analyze chondrocyte mechanobiology under various loading conditions"
      ],
      results: [
        "Identified key factors in osteoarthritis progression",
        "Published 2 peer-reviewed papers on cartilage modeling",
        "Developed framework applicable to other soft tissues"
      ],
      applications: ["Biomimetic material design", "Engineered composites optimization", "Biomedical applications", "Tissue engineering"],
      technologies: ["ABAQUS", "Python", "FEA", "Material Homogenization", "MATLAB"],
      image: "/api/placeholder/400/300",
      datasets: ["Cartilage mechanical properties dataset", "Physiological loading conditions", "Chondrocyte deformation data"],
      videos: ["Cartilage deformation simulation", "Multi-scale model visualization"]
    },
    {
      id: 2,
      title: "Markerless Motion Capture for Military Load Carriage",
      institution: "4MLAB, UL Lafayette",
      period: "Aug 2021 - Present",
      description: "Led undergraduate team to develop simulation framework using markerless motion capture to analyze gait mechanics under military load and assess knee osteoarthritis risk.",
      objectives: [
        "Develop markerless motion capture analysis system",
        "Assess knee joint biomechanics under military load",
        "Quantify osteoarthritis risk factors in military personnel"
      ],
      results: [
        "Created validated motion analysis pipeline",
        "Identified key risk factors for knee injuries",
        "Guided development of injury prevention protocols"
      ],
      applications: ["Injury prevention systems", "Military rehabilitation", "Biomechanical analysis", "Rehabilitation engineering"],
      technologies: ["Motion Capture", "FEA Integration", "Ground Reaction Forces", "MATLAB", "OpenPose"],
      image: "/api/placeholder/400/300",
      datasets: ["Military gait analysis data", "Ground reaction forces", "Joint kinematics"],
      videos: ["Gait mechanics analysis", "Military load simulation"]
    },
    {
      id: 3,
      title: "Air-Coupled FEM for Early-Age Concrete",
      institution: "Tran's Lab, Michigan Tech",
      period: "Jan 2024 - Aug 2024",
      description: "Developed innovative non-contact ultrasonic techniques to assess early-stage concrete properties using leaky Rayleigh wave analysis.",
      objectives: [
        "Develop non-contact ultrasonic testing methods",
        "Assess early-age concrete properties",
        "Create predictive models for construction quality control"
      ],
      results: [
        "Improved non-destructive testing capabilities",
        "Reduced inspection time by 40%",
        "Enhanced quality assessment accuracy"
      ],
      applications: ["Construction quality control", "Infrastructure durability assessment", "Non-destructive testing", "Structural health monitoring"],
      technologies: ["Ultrasonic Testing", "FEA", "Leaky Rayleigh Wave", "ABAQUS", "Python"],
      image: "/api/placeholder/400/300",
      datasets: ["Early-age concrete properties", "Ultrasonic testing data", "Material characterization"],
      videos: ["Concrete testing demonstration", "Wave propagation simulation"]
    },
    {
      id: 4,
      title: "Health-Tech Startup: AI-driven Cardiac Arrest Prediction",
      institution: "Opportunity Machine",
      period: "June 2025 – Present",
      description: "Developing innovative health-tech solution focused on AI-driven cardiac arrest prediction using wearable sensor data and machine learning algorithms.",
      objectives: [
        "Develop AI model for cardiac event prediction",
        "Integrate with wearable sensor platforms",
        "Validate model against clinical data"
      ],
      results: [
        "Created MVP with proof-of-concept model",
        "Validated approach with clinical advisors",
        "Pursuing funding and partnership opportunities"
      ],
      applications: ["Preventive healthcare", "Wearable technology", "Emergency response optimization", "AI in medicine"],
      technologies: ["Python", "Machine Learning", "TensorFlow", "Healthcare APIs", "Wearable SDKs"],
      image: "/api/placeholder/400/300",
      datasets: ["Simulated patient data", "Wearable sensor protocols", "Clinical validation parameters"],
      videos: ["Demo presentation", "Technical architecture overview"]
    }
  ]

  const skills = [
    {
      category: "Technical",
      items: [
        { name: "FEA & Simulation", level: 95, description: "Advanced ABAQUS, FEA modeling, computational mechanics" },
        { name: "Programming", level: 85, description: "Python, MATLAB, JavaScript, data analysis" },
        { name: "Biomechanics", level: 90, description: "Soft tissue modeling, cartilage mechanics, gait analysis" },
        { name: "Research", level: 90, description: "Computational modeling, experimentation, validation" },
        { name: "Machine Learning", level: 75, description: "AI models, TensorFlow, predictive analytics" },
        { name: "Materials Science", level: 80, description: "Constitutive modeling, material characterization" }
      ]
    },
    {
      category: "Professional",
      items: [
        { name: "Project Leadership", level: 85, description: "Leading research teams, coordinating cross-functional efforts" },
        { name: "Technical Communication", level: 90, description: "Research presentations, technical writing, stakeholder engagement" },
        { name: "Problem Solving", level: 95, description: "Complex technical challenges, innovative solutions" },
        { name: "Research Translation", level: 80, description: "Converting research to practical applications" }
      ]
    }
  ]

  const experiences = [
    {
      title: "Technical Intern",
      company: "Opportunity Machine",
      location: "Lafayette, LA",
      period: "June 2025 – Present",
      description: "Developing health-tech startup concept focused on AI-driven cardiac arrest prediction, leading customer discovery, value proposition, and investor pitching.",
      type: "internship"
    },
    {
      title: "Service Advisor",
      company: "AUDI",
      location: "Dhaka, Bangladesh",
      period: "Feb 2019 – Aug 2021",
      description: "Led introduction of mild hybrid technology in Bangladesh, enhancing service efficiency, optimizing inventory and supplier management.",
      type: "full-time"
    },
    {
      title: "Research Assistant",
      company: "Tran's Lab, Michigan Tech",
      location: "Houghton, MI",
      period: "Jan 2024 – Aug 2024",
      description: "Developed air-coupled finite element model for early-age concrete property assessment using non-contact ultrasonic techniques.",
      type: "research"
    }
  ]

  const publications = [
    {
      title: "Hyperelastic constitutive modeling of healthy and enzymatically mediated degraded articular cartilage",
      authors: "Istiak, Asif, Saiful Islam, Malek Adouni, and Tanvir R. Faisal",
      journal: "Biomechanics and modeling in mechanobiology",
      year: "2024"
    },
    {
      title: "Conversion of an FDM printer to direct ink write 3D bioprinter utilizing an efficient and cost-effective extrusion system",
      authors: "YH Dang, Elise Dauzat, Asif Istiak, Kevin Jackson, Victoria Songe, Luke West, Md Imrul Kayes, Md Saiful Islam, Tanvir R Faisal",
      journal: "Annals of 3D Printed Medicine",
      year: "2024"
    },
    {
      title: "Biomechanics and mechanobiology of cartilage via multi-structural fibril-reinforced poro-hyperelastic (MS-FRPHE) finite element modeling",
      authors: "Md Islam, T. Faisal",
      journal: "Acta Biomaterialia, Elsevier",
      year: "Under review"
    }
  ]

  const recentUpdates = [
    {
      date: "2024-10-15",
      title: "Presented at International Symposium on Computer Methods in Biomechanics",
      description: "Delivered presentation on multiscale fibril-reinforced poro-hyperelastic model for cartilage mechanobiology in Vancouver, Canada.",
      type: "presentation"
    },
    {
      date: "2024-09-20",
      title: "Best Research Abstract Award",
      description: "Received best research abstract award at Southern Biomedical Engineering Conference, Shreveport, LA.",
      type: "award"
    },
    {
      date: "2024-08-01",
      title: "Joined Opportunity Machine Launch Academy",
      description: "Selected for Launch Academy program to develop AI-driven cardiac arrest prediction startup.",
      type: "career"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="font-bold text-xl hidden sm:block">Md Saiful Islam</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a href="#overview" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Overview</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Projects</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Experience</a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Publications</a>
              <a href="#updates" className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Updates</a>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="outline" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <Badge variant="secondary">Ph.D. Candidate</Badge>
                <Badge variant="outline">Mechanical Engineering</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Finite Element Analysis & Biomechanics Researcher
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 leading-relaxed">
                Ph.D. candidate specializing in FEA, soft materials, and biomechanics with 4+ years of experience in computational modeling and health-tech innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm">md-saiful.islam1@louisiana.edu</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm">337-455-0914</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm">Lafayette, LA</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <Avatar className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
                  <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    MSI
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Research Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Publications</span>
                      <span className="font-semibold">3+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Presentations</span>
                      <span className="font-semibold">5+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Years Experience</span>
                      <span className="font-semibold">4+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Award className="w-5 h-5 mr-2 text-purple-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Ph.D. in Systems Engineering</p>
                      <p className="text-sm text-slate-600">UL Lafayette • CGPA: 3.90/4.00</p>
                      <p className="text-xs text-slate-500">Expected 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold">M.S. in Mechanical Engineering</p>
                      <p className="text-sm text-slate-600">UL Lafayette • CGPA: 3.87/4.00</p>
                      <p className="text-xs text-slate-500">2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                    Key Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">FEA</Badge>
                    <Badge variant="secondary">ABAQUS</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Biomechanics</Badge>
                    <Badge variant="secondary">MATLAB</Badge>
                    <Badge variant="secondary">Research</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Ph.D. candidate in Mechanical Engineering with extensive experience in Finite Element Analysis, biomechanics, and health-tech innovation. Strong background in research, simulation, and collaborative problem-solving with a focus on developing computational models for biomedical applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Highlights</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• 4+ years hands-on FEA experience with ABAQUS</li>
                      <li>• Python scripting for automation and analysis</li>
                      <li>• 3 years industrial experience as Service Advisor</li>
                      <li>• Authored multiple research publications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Research Focus</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Multi-scale cartilage modeling</li>
                      <li>• Military biomechanics analysis</li>
                      <li>• Non-destructive testing methods</li>
                      <li>• Health-tech innovation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {skills.map((skillCategory, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-4 text-slate-800">{skillCategory.category}</h3>
                      <div className="space-y-4">
                        {skillCategory.items.map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-slate-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2.5">
                              <div 
                                className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" 
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-2"></div>
                          <p className="text-sm text-slate-500">Project Image</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.institution}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-slate-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline">{app}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-slate-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <FileText className="w-4 h-4" />
                          <span>{project.datasets.length} Datasets</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Play className="w-4 h-4" />
                          <span>{project.videos.length} Videos</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Database className="w-4 h-4" />
                          <span>Analysis Data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start space-x-6 group">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {exp.type === 'research' && <BookOpen className="w-6 h-6 text-white" />}
                      {exp.type === 'internship' && <TrendingUp className="w-6 h-6 text-white" />}
                      {exp.type === 'full-time' && <Users className="w-6 h-6 text-white" />}
                    </div>
                    <Card className="flex-1 transition-all duration-300 hover:shadow-md border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg text-slate-800">{exp.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-slate-700 mt-1">
                              {exp.company} • {exp.location}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="w-fit h-8 self-start md:self-auto">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                        {exp.type === 'research' && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">FEA</Badge>
                            <Badge variant="secondary" className="text-xs">Biomechanics</Badge>
                            <Badge variant="secondary" className="text-xs">Simulation</Badge>
                          </div>
                        )}
                        {exp.type === 'internship' && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">Health-tech</Badge>
                            <Badge variant="secondary" className="text-xs">AI</Badge>
                            <Badge variant="secondary" className="text-xs">Startup</Badge>
                          </div>
                        )}
                        {exp.type === 'full-time' && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">Leadership</Badge>
                            <Badge variant="secondary" className="text-xs">Customer Relations</Badge>
                            <Badge variant="secondary" className="text-xs">Inventory Management</Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                    <CardDescription className="text-base">
                      {pub.authors}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-slate-600">
                        <BookOpen className="w-4 h-4" />
                        <span>{pub.journal}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{pub.year}</Badge>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Selected Presentations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-sm">Multiscale fibril-reinforced poro-hyperelastic model for cartilage and chondrocyte mechanobiology</h4>
                    <p className="text-xs text-slate-600 mt-1">19th International Symposium on Computer Methods in Biomechanics and Biomedical Engineering, 2024, Vancouver, Canada</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-sm">Multi-structural Fibril-reinforced Poro-hyperelastic (MSFPH) Finite Element Modeling Approach</h4>
                    <p className="text-xs text-slate-600 mt-1">Orthopedic Research Society (ORS) 2024, Long Beach, CA</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-sm">A multi-structural fibril-reinforced poro-hyperelastic (MSFPH) finite element model</h4>
                    <p className="text-xs text-slate-600 mt-1">Carnegie Mellon Forum on Biomedical Engineering, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {skills.map((skillCategory, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{skillCategory.category} Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillCategory.items.map((skill, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">{skill.name}</span>
                            <span className="text-sm font-semibold text-slate-600">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div 
                              className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-slate-600 pt-1">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {recentUpdates.map((update, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{update.title}</CardTitle>
                        <CardDescription className="text-sm text-slate-600 mt-1">
                          {new Date(update.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </CardDescription>
                      </div>
                      <Badge variant={
                        update.type === 'award' ? 'default' :
                        update.type === 'presentation' ? 'secondary' :
                        'outline'
                      }>
                        {update.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{update.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Easy Share Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share My Portfolio</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Interested in my work? Share this portfolio with your colleagues and potential collaborators.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-xl font-mono bg-black/20 rounded-lg p-4 mb-4 break-all">
              https://saiful-ull-502862.github.io/Portfolio-Website
            </p>
            <Button 
              onClick={() => navigator.clipboard.writeText('https://saiful-ull-502862.github.io/Portfolio-Website')}
              className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Link to Clipboard
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
              onClick={() => window.open('mailto:md-saiful.islam1@louisiana.edu?subject=Regarding your portfolio', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
              onClick={() => window.open('https://www.linkedin.com/in/your-profile', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? I'm always open to discussing new opportunities and challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
              onClick={() => window.open('mailto:md-saiful.islam1@louisiana.edu', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
              onClick={() => window.open('https://www.linkedin.com/in/your-profile', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2024 Md Saiful Islam. Built with Next.js and deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  )
}
    </div>
  )
}