export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Ich lege Wert auf enge Zusammenarbeit mit Kunden und fördere offene Kommunikation",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ich bin flexibel in der Kommunikation über Zeitzonen hinweg",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mein Tech-Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech-Enthusiast mit Leidenschaft für Entwicklung",
    description: "Ich versuche ständig, mich zu verbessern",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Derzeit entwickle ich eine JS-Animationsbibliothek",
    description: "Der Insiderblick",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Möchten Sie ein Projekt gemeinsam starten?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Ich bin entschlossen, meine Kenntnisse und Fähigkeiten in der Softwareentwicklung kontinuierlich zu verbessern, um innovative Lösungen zu schaffen und den Anforderungen der modernen Technologie gerecht zu werden.",
    name: "Toni Cvetanoski",
    title: "Praktikant im Bereich Anwendungsentwicklung",
  },
  {
    quote:
      "Mein Ziel ist es, in einem kreativen und dynamischen Umfeld zu arbeiten, wo ich sowohl lernen als auch zum Erfolg des Teams beitragen kann, während ich meine Leidenschaft für die Programmierung verwirkliche.",
    name: "Toni Cvetanoski",
    title: "Praktikant im Bereich Anwendungsentwicklung",
  },
  {
    quote:
      "Ich strebe danach, in der Softwareentwicklung zu wachsen und einen positiven Beitrag zu leisten.",
    name: "Toni Cvetanoski",
    title: "Praktikant im Bereich Anwendungsentwicklung",
  },
  {
    quote:
      "Mein Ziel ist es, praktische Kenntnisse in einem professionellen Umfeld zu erwerben.",
    name: "Toni Cvetanoski",
    title: "Praktikant im Bereich Anwendungsentwicklung",
  },
  {
    quote:
      "Ich bin begeistert von der Möglichkeit, in einem kreativen Team zu arbeiten, um neue Ideen zu entwickeln und meine Fähigkeiten in der Softwareentwicklung auszubauen.",
    name: "Toni Cvetanoski",
    title: "Praktikant im Bereich Anwendungsentwicklung",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Praktikum zur Entwicklung von Webanwendungen unter Verwendung moderner Technologien wie Vue.js, React.js und Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    desc: "Praktikum zur Unterstützung bei der Entwicklung und Wartung von Serveranwendungen und APIs mit Technologien wie Node.js, Express.js und MongoDB.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Junior UI/UX Designer",
    desc: "Praktikum mit Mitwirkung an der Gestaltung ansprechender Benutzererfahrungen und Entwicklung von Prototypen.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Java Software Development Intern",
    desc: "Praktikum zur Unterstützung bei der Entwicklung von Desktop-Anwendungen in Java, einschließlich der Implementierung von benutzerfreundlichen Oberflächen und Backend-Logik.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];