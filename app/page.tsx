"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, BookOpen, Building2, Music, FileText, ChevronDown, Zap, Target, Award } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sections = [
    { id: "profile", title: "STUDENT PROFILE", icon: User },
    { id: "orientation", title: "COURSE REFLECTION", icon: BookOpen },
    { id: "institutional", title: "INSTITUTIONAL IDENTITY", icon: Building2 },
    { id: "hymns", title: "HYMN PARTICIPATION", icon: Music },
    { id: "summary", title: "PORTFOLIO SUMMARY", icon: FileText },
  ]

  const scrollToSection = (sectionId: string, index: number) => {
    setActiveSection(index)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-blue-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-45">
                <Zap className="h-5 w-5 text-black transform -rotate-45" />
              </div>
              <div>
                <div className="text-xl font-black tracking-wider">CMU</div>
                <div className="text-xs text-blue-400 font-semibold">PORTFOLIO</div>
              </div>
            </div>
            <div className="hidden md:flex gap-1">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`px-4 py-2 text-sm font-bold cursor-pointer transition-all duration-300 border-2 ${
                    activeSection === index
                      ? "bg-blue-500 text-black border-blue-500"
                      : "text-blue-400 border-transparent hover:border-blue-500/50 hover:text-white"
                  }`}
                  onClick={() => scrollToSection(section.id, index)}
                >
                  {section.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="container mx-auto px-6">
          <div
            className={`text-center transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="mb-8">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg mb-6">
                <div className="bg-black px-6 py-3 rounded-md">
                  <span className="text-blue-400 font-black text-sm tracking-widest">PERFORMANCE TASK NO. 1</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                  GETTING TO
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  KNOW CMU
                </span>
                <br />
                <span className="text-white">& ME</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
                A DIGITAL PORTFOLIO REFLECTING PERSONAL INTRODUCTION, COURSE UNDERSTANDING, AND INSTITUTIONAL ALIGNMENT
              </p>
            </div>

            <div className="flex justify-center">
              <ChevronDown className="h-8 w-8 text-blue-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        {/* Part 1: Student Profile */}
        <section id="profile" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <User className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="text-blue-400 font-black text-sm tracking-widest">PART 01</div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">STUDENT PROFILE</h2>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 shadow-2xl hover:border-blue-500/60 transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="relative w-48 h-48 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <Image
                          src="euan.png"
                          alt="Student Profile"
                          fill
                          className="rounded-full object-cover border-4 border-blue-500 relative z-10"
                        />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center z-20">
                          <Target className="h-8 w-8 text-black" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">[YOUR NAME]</h3>
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold px-4 py-2">
                        BUSINESS ADMINISTRATION
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-8">
                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 shadow-2xl hover:border-blue-500/60 transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                      PERSONAL BIO
                    </h4>
                    <div className="bg-gradient-to-r from-blue-500/5 to-cyan-400/5 p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        <span className="text-blue-400 font-bold">My name is Euan Jan Dematera</span>, and I am passionate about
                        business administration and entrepreneurship. My interests include strategic planning, financial
                        analysis, and organizational leadership. My career goals involve becoming a successful business
                        leader who can contribute to sustainable economic development in our community. For this
                        subject, I expect to gain comprehensive knowledge about business fundamentals, develop critical
                        thinking skills, and build a strong foundation for my future career in business administration.
                        I am committed to active participation, continuous learning, and applying theoretical concepts
                        to real-world business scenarios throughout this course.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Course Orientation */}
        <section id="orientation" className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="text-green-400 font-black text-sm tracking-widest">PART 02</div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">COURSE REFLECTION</h2>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
            </div>


            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                  SUCCESS STRATEGY
                </h3>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-400/10 p-6 rounded-lg border border-green-500/30">
                  <p className="text-gray-300 leading-relaxed text-lg">
                     To ensure success in this course, I will
                    maintain consistent attendance and active participation in all class activities. I plan to establish
                    a regular study schedule, complete all assignments on time, and seek clarification when needed. I
                    will utilize the LMS effectively for accessing course materials and submitting requirements.
                    Additionally, I will engage in collaborative learning with classmates, participate in group
                    discussions, and apply course concepts to practical situations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Part 3: Institutional Identity */}
        <section id="institutional" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="text-purple-400 font-black text-sm tracking-widest">PART 03</div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">INSTITUTIONAL IDENTITY</h2>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>

            {/* CMU Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-center text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CITY OF MALABON UNIVERSITY
                </span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "VISION",
                    content:
                      "CMU aims to provide transformative and globally competitive higher education, holistic formation, research and innovation, excellent delivery of services, and sustainable community extension and Linkages.",
                  },
                  {
                    title: "MISSION",
                    content:
                      "A leading university that is committed for the advancement of human lives and global competitiveness through academic excellence research and community linkages",
                  },
                  {
                    title: "CORE VALUES",
                    content:
                      "C-ompetent, M-orally Upright, U-nited, A-daptable, H-onest, O-ptimistic, N-ationalistic.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-black text-purple-400 mb-3 text-lg">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>


            {/* Reflection */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
                  CORE VALUE REFLECTION
                </h3>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-400/10 p-6 rounded-lg border border-purple-500/30">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    <span className="text-purple-400 font-bold">
                      The core value that resonates with me most is Optimistic
                    </span>{" "}
                    because it represents my personal commitment to continuous improvement and high-quality performance
                    in all endeavors. Excellence drives me to go beyond minimum requirements and strive for outstanding
                    results in my academic pursuits and future career. This value aligns with my belief that success
                    comes from dedication, hard work, and the pursuit of mastery in one's chosen field.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Part 4: Hymn Participation */}
        <section id="hymns" className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
                  <Music className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="text-orange-400 font-black text-sm tracking-widest">PART 04</div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">HYMN PARTICIPATION</h2>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-black text-orange-400 mb-4 text-xl">CMU HYMN</h3>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-400/10 p-4 rounded-lg border border-orange-500/30">
                    <p className="text-gray-400 text-sm">
                            City of Malabon University Home of the city's scholar We bid you honor and glory Through you we move ahead
                            The wisdom you instilled in our hearts Inspired us to blazed every path
                            The blue and gold shall live forever Alma Mater, CMU!
                            City of Malabon University Hope of the youth of our city Empowered, we have found our dignity Unwavering, moving on
                            Forever we shall put you in our hearts CMU, the school we love
                            The blue and gold shall live forever Alma Mater, CMU!
                            The blue and gold shall live forever Alma Mater, CMU!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-black text-red-400 mb-4 text-xl">MALABON HYMN</h3>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-400/10 p-4 rounded-lg border border-red-500/30">
                    <p className="text-gray-400 text-sm">
ito ang bagong umaga 
bumangon na`t magsikap 
tayong lahat ay patungo 
sa langit na pag unlad 
sabay tayo sa paglakad 
kasabay ng ating mga yapak 
habang sa iisang tinig 
ito ang ating awit 
malabon,mahal nating bayan 
tayo ang siyang mga kawal 
walang kaba ang dibdib 
pagkat ako ikaw ay kapit bisig 
malabon mahal nating bayan 
dito ay may bayanihan 
isigaw natinb sa daigdig 
tayo`y isang bayan isang awit isang tinig</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-400"></div>
                  HYMN REFLECTION
                </h3>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-400/10 p-6 rounded-lg border border-orange-500/30">
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    The CMU and Malabon hymns hold deep significance for me as a student of this institution. These
                    hymns represent the rich history, traditions, and values that define our university and our city.
                    When I listen to the CMU hymn, I feel a sense of pride and belonging to this academic community that
                    has shaped countless lives and contributed to our nation's development.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    The Malabon hymn connects me to my local roots and reminds me of the responsibility I have to
                    contribute to my community's growth and prosperity. Both hymns inspire me to uphold the values of
                    excellence, service, and integrity throughout my academic journey and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Part 5: Portfolio Summary */}
        <section id="summary" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg flex items-center justify-center">
                  <FileText className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="text-cyan-400 font-black text-sm tracking-widest">PART 05</div>
                  <h2 className="text-4xl md:text-5xl font-black text-white">PORTFOLIO SUMMARY</h2>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-400"></div>
                    PORTFOLIO OVERVIEW
                  </h3>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-400/10 p-6 rounded-lg border border-cyan-500/30">
                    <p className="text-gray-300 leading-relaxed">
                      This portfolio represents my comprehensive introduction to the CMU community and my commitment to
                      academic excellence. Through this task, I have reflected on my personal goals, understood course
                      expectations, aligned myself with institutional values, and connected with our university's
                      cultural heritage through its hymns.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    MY COMMITMENT
                  </h3>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 p-6 rounded-lg border border-blue-500/30">
                    <p className="text-gray-300 leading-relaxed">
                      As I embark on this academic journey at CMU, I commit to upholding the values of excellence,
                      integrity, and service that define our institution. I pledge to be an active participant in my
                      learning, contribute positively to the university community, and represent CMU with pride and
                      honor.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-500/30 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="text-xl font-black text-white">CMU PORTFOLIO</span>
            </div>
            <p className="text-gray-400 mb-2">© 2024 CITY OF MALABON UNIVERSITY</p>
            <p className="text-blue-400 text-sm font-bold">COLLEGE OF BUSINESS ADMINISTRATION</p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
