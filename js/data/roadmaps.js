const RESOURCE_SETS={
  html:[
    {name:'MDN: Structuring content with HTML',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',access:'Free'},
    {name:'MDN: Basic HTML syntax',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',access:'Free'},
    {name:'freeCodeCamp: Responsive Web Design',url:'https://www.freecodecamp.org/learn/2022/responsive-web-design/',access:'Free'}
  ],
  css:[
    {name:'MDN: Styling basics',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',access:'Free'},
    {name:'MDN: CSS layout',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout',access:'Free'},
    {name:'W3Schools: CSS tutorial',url:'https://www.w3schools.com/css/',access:'Free'}
  ],
  javascript:[
    {name:'MDN: JavaScript fundamentals',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting',access:'Free'},
    {name:'The Modern JavaScript Tutorial: First steps',url:'https://javascript.info/first-steps',access:'Free'},
    {name:'freeCodeCamp: JavaScript Algorithms and Data Structures',url:'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/',access:'Free'}
  ],
  dom:[
    {name:'MDN: Introduction to the DOM',url:'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',access:'Free'},
    {name:'MDN: Event handlers',url:'https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers',access:'Free'},
    {name:'MDN: Using the Fetch API',url:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',access:'Free'}
  ],
  git:[
    {name:'Pro Git: Getting started',url:'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',access:'Free'},
    {name:'GitHub Skills: Learn GitHub',url:'https://skills.github.com/',access:'Free'},
    {name:'GitHub Docs: Hello World',url:'https://docs.github.com/en/get-started/start-your-journey/hello-world',access:'Free'}
  ],
  portfolio:[
    {name:'GitHub Docs: GitHub Pages quickstart',url:'https://docs.github.com/en/pages/quickstart',access:'Free'},
    {name:'freeCodeCamp: Responsive Web Design projects',url:'https://www.freecodecamp.org/learn/2022/responsive-web-design/',access:'Free'},
    {name:'GitHub Skills: Publish a website',url:'https://skills.github.com/',access:'Free'}
  ],
  python:[
    {name:'Python: The official tutorial',url:'https://docs.python.org/3/tutorial/',access:'Free'},
    {name:'Kaggle Learn: Python',url:'https://www.kaggle.com/learn/python',access:'Free'},
    {name:'freeCodeCamp: Scientific Computing with Python',url:'https://www.freecodecamp.org/learn/scientific-computing-with-python/',access:'Free'}
  ],
  functions:[
    {name:'Python: More control flow tools',url:'https://docs.python.org/3/tutorial/controlflow.html',access:'Free'},
    {name:'Real Python: Defining Your Own Python Function',url:'https://realpython.com/defining-your-own-python-function/',access:'Free'},
    {name:'Exercism: Python practice track',url:'https://exercism.org/tracks/python',access:'Free'}
  ],
  oop:[
    {name:'Python: Classes',url:'https://docs.python.org/3/tutorial/classes.html',access:'Free'},
    {name:'Real Python: Object-Oriented Programming in Python',url:'https://realpython.com/python3-object-oriented-programming/',access:'Free'},
    {name:'Exercism: Python practice track',url:'https://exercism.org/tracks/python',access:'Free'}
  ],
  files:[
    {name:'Python: Input and output',url:'https://docs.python.org/3/tutorial/inputoutput.html',access:'Free'},
    {name:'Python: pathlib documentation',url:'https://docs.python.org/3/library/pathlib.html',access:'Free'},
    {name:'Automate the Boring Stuff with Python',url:'https://automatetheboringstuff.com/',access:'Free'}
  ],
  automation:[
    {name:'Automate the Boring Stuff with Python',url:'https://automatetheboringstuff.com/',access:'Free'},
    {name:'Python: The os module',url:'https://docs.python.org/3/library/os.html',access:'Free'},
    {name:'Exercism: Python practice track',url:'https://exercism.org/tracks/python',access:'Free'}
  ],
  pandas:[
    {name:'pandas: Getting started tutorials',url:'https://pandas.pydata.org/docs/getting_started/intro_tutorials/',access:'Free'},
    {name:'Kaggle Learn: Pandas',url:'https://www.kaggle.com/learn/pandas',access:'Free'},
    {name:'Python Data Science Handbook',url:'https://jakevdp.github.io/PythonDataScienceHandbook/',access:'Free'}
  ],
  statistics:[
    {name:'Khan Academy: Statistics and probability',url:'https://www.khanacademy.org/math/statistics-probability',access:'Free'},
    {name:'OpenIntro Statistics',url:'https://www.openintro.org/book/os/',access:'Free'},
    {name:'StatQuest: Video index',url:'https://statquest.org/video-index/',access:'Free'}
  ],
  sql:[
    {name:'SQLBolt: Interactive SQL lessons',url:'https://sqlbolt.com/',access:'Free'},
    {name:'PostgreSQL: Tutorial',url:'https://www.postgresql.org/docs/current/tutorial.html',access:'Free'},
    {name:'Kaggle Learn: Intro to SQL',url:'https://www.kaggle.com/learn/intro-to-sql',access:'Free'}
  ],
  visualization:[
    {name:'Matplotlib: Tutorials',url:'https://matplotlib.org/stable/tutorials/index.html',access:'Free'},
    {name:'seaborn: User guide and tutorial',url:'https://seaborn.pydata.org/tutorial.html',access:'Free'},
    {name:'Plotly: Getting started with Python',url:'https://plotly.com/python/getting-started/',access:'Free'}
  ],
  machineLearning:[
    {name:'Google: Machine Learning Crash Course',url:'https://developers.google.com/machine-learning/crash-course',access:'Free'},
    {name:'scikit-learn: Getting started',url:'https://scikit-learn.org/stable/getting_started.html',access:'Free'},
    {name:'Kaggle Learn: Intro to Machine Learning',url:'https://www.kaggle.com/learn/intro-to-machine-learning',access:'Free'}
  ],
  ai:[
    {name:'Hugging Face: The course',url:'https://huggingface.co/learn/nlp-course/chapter1/1',access:'Free'},
    {name:'PyTorch: Tutorials',url:'https://pytorch.org/tutorials/',access:'Free'},
    {name:'TensorFlow: Learn',url:'https://www.tensorflow.org/learn',access:'Free'}
  ],
  responsibleAi:[
    {name:'NIST: AI Risk Management Framework',url:'https://www.nist.gov/itl/ai-risk-management-framework',access:'Free'},
    {name:'Google: Responsible AI practices',url:'https://ai.google/responsibility/principles/',access:'Free'},
    {name:'Microsoft: Responsible AI principles',url:'https://www.microsoft.com/en-us/ai/principles-and-approach',access:'Free'}
  ],
  networking:[
    {name:'Cloudflare Learning: What is a computer network?',url:'https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/',access:'Free'},
    {name:'Wireshark: User guide',url:'https://www.wireshark.org/docs/wsug_html_chunked/',access:'Free'},
    {name:'Cisco Networking Academy: Networking courses',url:'https://www.netacad.com/courses/networking',access:'Free'}
  ],
  linux:[
    {name:'Ubuntu: Command line for beginners',url:'https://ubuntu.com/tutorials/command-line-for-beginners',access:'Free'},
    {name:'Linux Journey: Learn the ways of Linux',url:'https://linuxjourney.com/',access:'Free'},
    {name:'The Linux Command Line',url:'https://linuxcommand.org/tlcl.php',access:'Free'}
  ],
  security:[
    {name:'NIST: Cybersecurity Framework',url:'https://www.nist.gov/cyberframework',access:'Free'},
    {name:'CISA: Secure Our World',url:'https://www.cisa.gov/secure-our-world',access:'Free'},
    {name:'Cisco Skills for All: Introduction to Cybersecurity',url:'https://skillsforall.com/course/introduction-to-cybersecurity',access:'Free'}
  ],
  webSecurity:[
    {name:'OWASP: Top 10 web application risks',url:'https://owasp.org/www-project-top-ten/',access:'Free'},
    {name:'PortSwigger: Web Security Academy',url:'https://portswigger.net/web-security',access:'Free'},
    {name:'OWASP Juice Shop: Project and learning app',url:'https://owasp.org/www-project-juice-shop/',access:'Free'}
  ],
  labs:[
    {name:'PortSwigger: Web Security Academy labs',url:'https://portswigger.net/web-security',access:'Free'},
    {name:'picoCTF: Practice cybersecurity challenges',url:'https://picoctf.org/',access:'Free'},
    {name:'OWASP WebGoat: Lessons',url:'https://owasp.org/www-project-webgoat/',access:'Free'}
  ],
  incident:[
    {name:'NIST: Computer Security Incident Handling Guide',url:'https://csrc.nist.gov/pubs/sp/800/61/r2/final',access:'Free'},
    {name:'NIST: Incident Response Recommendations and Considerations',url:'https://csrc.nist.gov/pubs/sp/800/61/r3/final',access:'Free'},
    {name:'NIST: Cybersecurity Framework',url:'https://www.nist.gov/cyberframework',access:'Free'}
  ],
  android:[
    {name:'Android Basics with Compose',url:'https://developer.android.com/courses/android-basics-compose/course',access:'Free'},
    {name:'Android Developers: Compose tutorial',url:'https://developer.android.com/develop/ui/compose/tutorial',access:'Free'},
    {name:'Kotlin: Get started',url:'https://kotlinlang.org/docs/getting-started.html',access:'Free'}
  ],
  mobile:[
    {name:'React Native: Getting started',url:'https://reactnative.dev/docs/getting-started',access:'Free'},
    {name:'Expo: Introduction to the tutorial',url:'https://docs.expo.dev/tutorial/introduction/',access:'Free'},
    {name:'Flutter: Write your first app',url:'https://docs.flutter.dev/get-started/codelab',access:'Free'}
  ],
  appTesting:[
    {name:'Android Developers: Test apps',url:'https://developer.android.com/training/testing',access:'Free'},
    {name:'Android Basics with Compose',url:'https://developer.android.com/courses/android-basics-compose/course',access:'Free'},
    {name:'Expo: Introduction to the tutorial',url:'https://docs.expo.dev/tutorial/introduction/',access:'Free'}
  ],
  java:[
    {name:'Dev.java: Learn Java',url:'https://dev.java/learn/',access:'Free'},
    {name:'Java SE 8 Tutorials',url:'https://docs.oracle.com/javase/tutorial/',access:'Free'},
    {name:'Exercism: Java practice track',url:'https://exercism.org/tracks/java',access:'Free'}
  ],
  javaTools:[
    {name:'Dev.java: Learn Java',url:'https://dev.java/learn/',access:'Free'},
    {name:'JUnit 5: User guide',url:'https://junit.org/junit5/docs/current/user-guide/',access:'Free'},
    {name:'Maven: Getting started guide',url:'https://maven.apache.org/guides/getting-started/',access:'Free'}
  ],
  c:[
    {name:'Learn-C.org: Interactive C tutorial',url:'https://www.learn-c.org/',access:'Free'},
    {name:'cppreference: C language reference',url:'https://en.cppreference.com/w/c',access:'Free'},
    {name:'GNU C Language Intro and Reference Manual',url:'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html',access:'Free'}
  ],
  cMemory:[
    {name:'cppreference: C pointers',url:'https://en.cppreference.com/w/c/language/pointer',access:'Free'},
    {name:'GNU C Manual: Pointers',url:'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html',access:'Free'},
    {name:'Learn-C.org: Pointers',url:'https://www.learn-c.org/',access:'Free'}
  ],
  cTools:[
    {name:'GCC: Online documentation',url:'https://gcc.gnu.org/onlinedocs/',access:'Free'},
    {name:'GDB: Online documentation',url:'https://sourceware.org/gdb/current/onlinedocs/gdb/',access:'Free'},
    {name:'CMake: Tutorial',url:'https://cmake.org/cmake/help/latest/guide/tutorial/',access:'Free'}
  ],
  cloud:[
    {name:'AWS: Cloud Practitioner training',url:'https://aws.amazon.com/training/learn-about/cloud-practitioner/',access:'Free'},
    {name:'Google Cloud: What is cloud computing?',url:'https://cloud.google.com/learn/what-is-cloud-computing',access:'Free'},
    {name:'Microsoft Azure: What is cloud computing?',url:'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/',access:'Free'}
  ],
  cloudOps:[
    {name:'AWS: Well-Architected Framework',url:'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',access:'Free'},
    {name:'Google Cloud: Architecture Framework',url:'https://cloud.google.com/architecture/framework',access:'Free'},
    {name:'Microsoft: Azure Architecture Center',url:'https://learn.microsoft.com/en-us/azure/architecture/',access:'Free'}
  ],
  containers:[
    {name:'Docker: Learn Docker',url:'https://docs.docker.com/learn/',access:'Free'},
    {name:'Docker: Get started',url:'https://docs.docker.com/get-started/',access:'Free'},
    {name:'Kubernetes: Tutorials',url:'https://kubernetes.io/docs/tutorials/',access:'Free'}
  ],
  cicd:[
    {name:'GitHub Docs: Actions quickstart',url:'https://docs.github.com/en/actions/get-started/quickstart',access:'Free'},
    {name:'GitHub Skills: Continuous integration with GitHub Actions',url:'https://skills.github.com/',access:'Free'},
    {name:'Docker: Learn Docker',url:'https://docs.docker.com/learn/',access:'Free'}
  ],
  terraform:[
    {name:'HashiCorp: Terraform tutorials',url:'https://developer.hashicorp.com/terraform/tutorials',access:'Free'},
    {name:'Kubernetes: Tutorials',url:'https://kubernetes.io/docs/tutorials/',access:'Free'},
    {name:'Google Cloud: Architecture Framework',url:'https://cloud.google.com/architecture/framework',access:'Free'}
  ],
  uxResearch:[
    {name:'Nielsen Norman Group: User interviews',url:'https://www.nngroup.com/articles/user-interviews/',access:'Free'},
    {name:'Nielsen Norman Group: Usability testing 101',url:'https://www.nngroup.com/articles/usability-testing-101/',access:'Free'},
    {name:'Figma: Resource library',url:'https://www.figma.com/resource-library/',access:'Free'}
  ],
  uxDesign:[
    {name:'Figma: Resource library',url:'https://www.figma.com/resource-library/',access:'Free'},
    {name:'Material Design 3',url:'https://m3.material.io/',access:'Free'},
    {name:'Nielsen Norman Group: Usability heuristics',url:'https://www.nngroup.com/articles/ten-usability-heuristics/',access:'Free'}
  ],
  accessibility:[
    {name:'W3C WAI: Introduction to web accessibility',url:'https://www.w3.org/WAI/fundamentals/accessibility-intro/',access:'Free'},
    {name:'W3C WAI: WCAG overview',url:'https://www.w3.org/WAI/standards-guidelines/wcag/',access:'Free'},
    {name:'Material Design 3: Accessibility',url:'https://m3.material.io/foundations/accessible-design/overview',access:'Free'}
  ],
  electronics:[
    {name:'MIT OpenCourseWare: Circuits and Electronics',url:'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/',access:'Free'},
    {name:'All About Circuits: Textbook',url:'https://www.allaboutcircuits.com/textbook/',access:'Free'},
    {name:'Arduino: Documentation',url:'https://docs.arduino.cc/',access:'Free'}
  ],
  embedded:[
    {name:'Arduino: Documentation',url:'https://docs.arduino.cc/',access:'Free'},
    {name:'Espressif: ESP-IDF Get Started',url:'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/',access:'Free'},
    {name:'Raspberry Pi: Documentation',url:'https://www.raspberrypi.com/documentation/',access:'Free'}
  ],
  pcb:[
    {name:'KiCad: Documentation',url:'https://docs.kicad.org/',access:'Free'},
    {name:'SparkFun: PCB Basics',url:'https://learn.sparkfun.com/tutorials/pcb-basics/all',access:'Free'},
    {name:'All About Circuits: Textbook',url:'https://www.allaboutcircuits.com/textbook/',access:'Free'}
  ],
  cad:[
    {name:'FreeCAD: Getting started',url:'https://wiki.freecad.org/Getting_started',access:'Free'},
    {name:'Onshape Learning Center',url:'https://learn.onshape.com/',access:'Free'},
    {name:'Autodesk Fusion documentation',url:'https://help.autodesk.com/view/fusion360/ENU/',access:'Free'}
  ],
  mechanical:[
    {name:'MIT OpenCourseWare: Mechanics of Materials',url:'https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/',access:'Free'},
    {name:'Onshape Learning Center',url:'https://learn.onshape.com/',access:'Free'},
    {name:'FreeCAD: Getting started',url:'https://wiki.freecad.org/Getting_started',access:'Free'}
  ],
  civil:[
    {name:'Autodesk: Civil 3D documentation',url:'https://help.autodesk.com/view/CIV3D/2025/ENU/',access:'Free'},
    {name:'FHWA: Hydraulics engineering resources',url:'https://www.fhwa.dot.gov/engineering/hydraulics/',access:'Free'},
    {name:'MIT OpenCourseWare: Civil and Environmental Engineering',url:'https://ocw.mit.edu/courses/civil-and-environmental-engineering/',access:'Free'}
  ],
  civilStructure:[
    {name:'MIT OpenCourseWare: Civil and Environmental Engineering',url:'https://ocw.mit.edu/courses/civil-and-environmental-engineering/',access:'Free'},
    {name:'AISC: Education and continuing education',url:'https://www.aisc.org/education/continuingeducation/',access:'Free'},
    {name:'Autodesk: Civil 3D documentation',url:'https://help.autodesk.com/view/CIV3D/2025/ENU/',access:'Free'}
  ],
  civilWater:[
    {name:'USGS: Water Science School',url:'https://www.usgs.gov/special-topics/water-science-school',access:'Free'},
    {name:'FHWA: Hydraulics engineering resources',url:'https://www.fhwa.dot.gov/engineering/hydraulics/',access:'Free'},
    {name:'OpenStreetMap: LearnOSM',url:'https://learnosm.org/en/',access:'Free'}
  ],
  business:[
    {name:'OpenStax: Principles of Management',url:'https://openstax.org/details/books/principles-management',access:'Free'},
    {name:'U.S. Small Business Administration: Business guide',url:'https://www.sba.gov/business-guide',access:'Free'},
    {name:'PMI: Kickoff project management guide',url:'https://www.pmi.org/kickoff',access:'Free'}
  ],
  finance:[
    {name:'OpenStax: Principles of Accounting, Volume 1',url:'https://openstax.org/details/books/principles-financial-accounting',access:'Free'},
    {name:'Khan Academy: Finance and capital markets',url:'https://www.khanacademy.org/economics-finance-domain/core-finance',access:'Free'},
    {name:'U.S. Small Business Administration: Manage your finances',url:'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',access:'Free'}
  ],
  marketing:[
    {name:'HubSpot Academy: Digital Marketing course',url:'https://academy.hubspot.com/courses/digital-marketing',access:'Free'},
    {name:'Google Skillshop: Online training',url:'https://skillshop.withgoogle.com/',access:'Free'},
    {name:'Google Search Central: SEO Starter Guide',url:'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',access:'Free'}
  ],
  social:[
    {name:'Meta Blueprint: Learn marketing',url:'https://www.facebook.com/business/learn',access:'Free'},
    {name:'HubSpot Academy: Social media marketing',url:'https://academy.hubspot.com/courses/social-media',access:'Free'},
    {name:'Google Skillshop: Online training',url:'https://skillshop.withgoogle.com/',access:'Free'}
  ],
  analytics:[
    {name:'Google Skillshop: Google Analytics training',url:'https://skillshop.withgoogle.com/',access:'Free'},
    {name:'Kaggle Learn: Data visualization',url:'https://www.kaggle.com/learn/data-visualization',access:'Free'},
    {name:'Tableau: Free training videos',url:'https://www.tableau.com/learn/training',access:'Free'}
  ]
};

const skill=(name,level,learn,topics,duration,resources,practice,miniProject)=>({
  name,level,learn,topics,duration,resources:RESOURCE_SETS[resources],practice,miniProject
});
const stage=(title,skills)=>({title,skills});
const roadmap=(slug,title,summary,stages,project)=>({slug,title,summary,stages,project});

const ROADMAPS=[
  roadmap('web-development','Web Development','Build accessible, responsive websites from semantic HTML through interactive JavaScript and a published portfolio.',[
    stage('Build the foundation',[
      skill('HTML & semantic markup','Beginner','Structure pages with meaningful, accessible HTML so content works across browsers and assistive technologies.',['Document structure and elements','Headings, links, lists, and images','Forms, labels, and semantic landmarks'],'1-2 weeks','html','Recreate a simple article page using headings, links, lists, and a labelled form.','Build an accessible personal profile page with semantic sections and responsive images.'),
      skill('CSS, Flexbox & Grid','Beginner','Style interfaces with the cascade, responsive units, and modern layout tools.',['Selectors and the box model','Flexbox and CSS Grid','Responsive breakpoints and focus states'],'2-3 weeks','css','Create a responsive card layout and test it at phone, tablet, and desktop widths.','Design a responsive landing page with navigation, cards, and a mobile layout.')
    ]),
    stage('Add interaction',[
      skill('JavaScript fundamentals','Beginner','Use variables, functions, arrays, objects, and control flow to add browser-side behavior.',['Values and expressions','Conditions, loops, and functions','Arrays, objects, and modules'],'3-4 weeks','javascript','Solve small exercises for filtering, formatting, and validating data.','Build an interactive quiz with score feedback and restart controls.'),
      skill('DOM & Fetch API','Intermediate','Connect JavaScript to the page, respond to user events, and handle asynchronous data safely.',['DOM selection and updates','Events and form handling','Fetch, JSON, loading, and error states'],'2-3 weeks','dom','Build a search box that filters a local list and handles empty results.','Create a small public-data dashboard with loading and error messages.')
    ]),
    stage('Ship your work',[
      skill('Git & GitHub','Beginner','Track changes and collaborate with a clear, reviewable project history.',['Repositories and commits','Branches and merges','Issues, pull requests, and README files'],'1-2 weeks','git','Make a branch, change a page, and merge it with a descriptive commit history.','Publish a project repository with a clear README and contribution notes.'),
      skill('Build 3 portfolio projects','Advanced','Combine layout, interaction, accessibility, and version control into polished work samples.',['Plan scope and user needs','Build and test iteratively','Document and publish the result'],'3-5 weeks','portfolio','Review each project against keyboard access, mobile layout, and broken-link checks.','Publish a portfolio with three small, distinct projects and project write-ups.')
    ])
  ],{title:'Responsive student resource hub',brief:'Build a multi-page resource hub with accessible navigation, search, useful content, and a mobile-first layout.',deliverables:['Semantic HTML and responsive CSS','At least one useful JavaScript interaction','Accessible labels and keyboard operation','Published source repository and project README']}),
  roadmap('app-development','App Development','Learn mobile interface patterns, app state, data access, and testing with a small cross-platform or Android project.',[
    stage('Choose a mobile foundation',[
      skill('Kotlin and Android basics','Beginner','Learn the Kotlin and Android concepts used to create native mobile applications.',['Kotlin values and functions','Android project structure','Compose UI building blocks'],'2-3 weeks','android','Complete small Kotlin exercises and build a screen with text, buttons, and state.','Create a simple Android welcome and settings screen using Compose.'),
      skill('Mobile UI and navigation','Beginner','Design screens and navigation that are clear, responsive, and usable on mobile devices.',['Screen layouts and components','Navigation and user input','Material design principles'],'2-3 weeks','mobile','Sketch a three-screen flow and label its primary and secondary actions.','Build a small multi-screen app prototype with a clear navigation flow.')
    ]),
    stage('Connect application behavior',[
      skill('App state and data','Intermediate','Separate interface state from data and handle asynchronous requests and local persistence.',['State and lifecycle basics','REST requests and JSON','Loading, error, and empty states'],'2-3 weeks','mobile','Model success, loading, and failure responses using mock data.','Create a saved-items app that reads a public API and handles offline empty states.'),
      skill('Mobile testing and release readiness','Intermediate','Check app behavior across devices and prepare a reliable, documented build.',['Unit and UI test concepts','Accessibility and device sizes','Release checklist and versioning'],'1-2 weeks','appTesting','Write test cases for navigation, invalid input, and a slow or failed request.','Deliver a tested app prototype with screenshots and a release-readiness checklist.')
    ])
  ],{title:'Campus events companion app',brief:'Create a mobile app concept that helps students browse, search, and save campus events.',deliverables:['Three connected mobile screens','Search and save interaction','Clear loading and empty states','Test checklist and short setup guide']}),
  roadmap('python','Python Programming','Progress from readable Python fundamentals to reusable modules, automation, and introductory data work.',[
    stage('Learn the language',[
      skill('Syntax & data types','Beginner','Write readable Python statements and use core built-in types.',['Variables and numeric values','Strings, lists, and dictionaries','Input, output, and type conversion'],'1-2 weeks','python','Write short scripts to format names, calculate totals, and summarize a list.','Create a command-line study planner that stores tasks in structured data.'),
      skill('Functions & modules','Beginner','Break a program into reusable functions and organize related code into modules.',['Parameters and return values','Scope and built-in modules','Imports and simple documentation'],'1-2 weeks','functions','Refactor repeated calculations into small functions with clear inputs and outputs.','Build a reusable unit-conversion module with a command-line interface.')
    ]),
    stage('Structure and reuse',[
      skill('OOP basics','Intermediate','Model related data and behavior with classes while keeping designs small and testable.',['Classes and instances','Methods and initialization','Composition and simple inheritance'],'2 weeks','oop','Model a library item and write methods for checkout and availability.','Create a small inventory model with validation and readable class behavior.'),
      skill('File handling & libraries','Intermediate','Read and write common file formats and use the standard library for everyday tasks.',['Text and CSV files','Paths and directories','Exceptions and context managers'],'1-2 weeks','files','Read a CSV file, validate each row, and report malformed entries.','Build a file organizer that previews changes before applying them.')
    ]),
    stage('Practice with data',[
      skill('Mini automation project','Intermediate','Automate a repetitive task with careful input checks, logging, and a useful summary.',['Identify a repeatable workflow','Use pathlib and standard modules','Test edge cases and document use'],'1-2 weeks','automation','Write a dry-run mode and test it with temporary folders.','Create a study-file organizer or batch report generator with a safe preview mode.'),
      skill('Intro to pandas','Intermediate','Load tabular data, inspect it, and perform basic filtering and aggregation with pandas.',['Series and DataFrames','Selecting and cleaning rows','Group, summarize, and export'],'2 weeks','pandas','Explore a small public CSV and answer five questions with reproducible code.','Create a short notebook that cleans a dataset and presents three findings.')
    ])
  ],{title:'Student study data assistant',brief:'Create a Python tool that reads a small CSV of study sessions and produces useful summaries.',deliverables:['Reusable functions and clear modules','Input validation and file handling','Summary output or simple chart','Instructions and example dataset']}),
  roadmap('java-programming','Java Programming','Learn Java syntax, object-oriented design, collections, and the testing tools used in small applications.',[
    stage('Java foundations',[
      skill('Java syntax and types','Beginner','Write Java programs with variables, expressions, control flow, and methods.',['JDK and first program','Primitive and reference types','Conditions, loops, and methods'],'2-3 weeks','java','Write small programs that validate input and format a result.','Build a command-line grade or budget calculator with clear methods.'),
      skill('Classes and interfaces','Beginner','Represent application concepts with classes and use interfaces to define behavior.',['Classes, constructors, and fields','Encapsulation and access','Interfaces and composition'],'2 weeks','java','Model a basic account or library item and test its public behavior.','Create a small booking model with separate domain classes.')
    ]),
    stage('Build reliable programs',[
      skill('Collections and exceptions','Intermediate','Choose collection types and handle invalid or exceptional states explicitly.',['Lists, sets, and maps','Generics and iteration','Exceptions and resource handling'],'2 weeks','java','Count and group records with collections and handle invalid input.','Create a contact manager with search, update, and validation operations.'),
      skill('Testing and build tools','Intermediate','Run repeatable tests and organize a small Java project with a standard build tool.',['Maven project structure','JUnit tests and assertions','Readable build and run steps'],'2 weeks','javaTools','Write unit tests for normal, boundary, and invalid input cases.','Package a tested command-line application with a short setup guide.')
    ])
  ],{title:'Student records command-line app',brief:'Build a small Java application to add, search, and summarize fictional student records.',deliverables:['Encapsulated model classes','Collection-based search and summaries','JUnit tests','Maven build instructions']}),
  roadmap('c-programming','C Programming','Develop a strong C foundation with pointers, memory awareness, and practical debugging.',[
    stage('Start with C',[
      skill('C syntax and control flow','Beginner','Write and compile small C programs using functions, expressions, and control flow.',['Compiler and main function','Types, operators, and conditions','Loops and functions'],'2-3 weeks','c','Solve input/output exercises and compile with warnings enabled.','Build a menu-driven command-line calculator with input validation.'),
      skill('Arrays, strings, and structs','Beginner','Organize related values and work safely with arrays and null-terminated strings.',['Arrays and indexing','C strings and standard functions','Structs and typedef'],'2 weeks','c','Parse a short list of records and check bounds before every access.','Create a small contact list using structs and fixed-size input buffers.')
    ]),
    stage('Understand memory and tools',[
      skill('Pointers and memory','Intermediate','Understand addresses, pointer operations, and dynamic allocation while avoiding common errors.',['Addresses and pointer types','Arrays and pointer relationships','Allocation, ownership, and cleanup'],'2-3 weeks','cMemory','Trace pointer examples and test allocations with clear cleanup paths.','Build a dynamically sized list with documented ownership and error handling.'),
      skill('Build, debug, and test','Intermediate','Compile with useful diagnostics and use a debugger to investigate failures.',['Compiler flags and warnings','GDB breakpoints and inspection','Small tests and build scripts'],'1-2 weeks','cTools','Fix a seeded logic error by stepping through the program with GDB.','Deliver a tested command-line utility with a reproducible build script.')
    ])
  ],{title:'C command-line utility',brief:'Build a small C program that parses input, validates it, and produces a concise report.',deliverables:['Functions split by responsibility','Bounds and allocation checks','Compiler warnings addressed','Debugging notes and test cases']}),
  roadmap('data-science','Data Science','Turn raw data into a reproducible analysis using statistics, Python, SQL, visualization, and introductory machine learning.',[
    stage('Prepare and understand data',[
      skill('Statistics basics','Beginner','Use descriptive statistics and probability concepts to interpret data carefully.',['Distributions and summary statistics','Sampling and variability','Correlation and limitations'],'2-3 weeks','statistics','Compare mean and median on a skewed dataset and explain the difference.','Write a one-page descriptive analysis of a public dataset.'),
      skill('Python + pandas','Beginner','Load, inspect, clean, and transform tabular data with Python and pandas.',['Read and inspect files','Missing values and types','Filter, group, and join'],'2-3 weeks','pandas','Clean a dataset with missing values and document each transformation.','Prepare a reproducible notebook that cleans a dataset and saves a tidy output.')
    ]),
    stage('Query and communicate',[
      skill('SQL','Intermediate','Retrieve and summarize structured data with readable SQL queries.',['SELECT, filtering, and sorting','Joins and grouping','Subqueries and null handling'],'2 weeks','sql','Answer questions from a sample relational database using joins and aggregates.','Create a small query notebook with five documented business questions.'),
      skill('Visualization','Intermediate','Choose clear chart forms and explain the patterns and uncertainty in a dataset.',['Chart selection and encodings','Labels, scales, and comparisons','Accessible chart annotations'],'2 weeks','visualization','Recreate one chart with clear labels and a short interpretation.','Build a compact dashboard or report with three audience-focused charts.')
    ]),
    stage('Model and present',[
      skill('Machine learning basics','Intermediate','Train and evaluate a simple model without confusing training performance with generalization.',['Features and target variables','Train/test split and baselines','Metrics and overfitting'],'2-3 weeks','machineLearning','Compare a baseline to a model using a held-out test set.','Create a model notebook that reports metrics and explains limitations.'),
      skill('Kaggle project','Advanced','Combine analysis, code, and communication in a reproducible end-to-end project.',['Frame a question','Document data preparation','Present findings and limitations'],'2-3 weeks','pandas','Review a notebook for reproducibility, leakage, and unsupported conclusions.','Publish a reproducible analysis with a README and a concise findings summary.')
    ])
  ],{title:'Public dataset insight report',brief:'Choose a public dataset, answer a focused question, and communicate findings without overstating what the data shows.',deliverables:['Reproducible notebook and data-source citation','Data cleaning and descriptive analysis','At least three labeled visualizations','Limitations and findings summary']}),
  roadmap('artificial-intelligence-machine-learning','Artificial Intelligence and Machine Learning','Learn the foundations of machine learning, neural networks, and responsible model evaluation using beginner-friendly tools.',[
    stage('Prepare the data',[
      skill('Python for AI','Beginner','Use Python and numerical arrays to prepare data for model experiments.',['Python functions and notebooks','NumPy arrays and shapes','Train/test data preparation'],'2-3 weeks','python','Load a small dataset and verify its dimensions, types, and missing values.','Prepare a documented notebook that explores a public dataset before modeling.'),
      skill('Machine learning foundations','Beginner','Understand supervised learning, baselines, features, and evaluation at a conceptual level.',['Regression and classification','Baselines and feature choices','Metrics and generalization'],'3 weeks','machineLearning','Compare a simple baseline with one model using held-out data.','Train and evaluate a small classifier and explain what its metrics mean.')
    ]),
    stage('Explore models responsibly',[
      skill('Neural networks','Intermediate','Build an introductory neural network and understand its training loop and limits.',['Tensors and layers','Loss and optimization','Validation and overfitting'],'3 weeks','ai','Change one model setting at a time and record its validation effect.','Train a small image or text classifier using a public tutorial dataset.'),
      skill('Responsible AI evaluation','Intermediate','Check model behavior, data limitations, privacy, and potential harms before presenting results.',['Data provenance and consent','Subgroup evaluation and bias','Transparent limitations and safeguards'],'1-2 weeks','responsibleAi','Write a model card outline for a tutorial model and identify missing evidence.','Present a model with a model card, evaluation summary, and clear limitations.')
    ])
  ],{title:'Responsible prediction prototype',brief:'Build a small educational prediction prototype from a public or synthetic dataset and explain how it should and should not be used.',deliverables:['Reproducible notebook','Baseline and evaluation metrics','Data and model limitations','Short model card and presentation']}),
  roadmap('cybersecurity','Cybersecurity','Build safe defensive security fundamentals with networking, Linux, secure design, authorized practice, and incident reporting.',[
    stage('Learn systems fundamentals',[
      skill('Networking basics','Beginner','Understand the network concepts needed to interpret ordinary traffic and security boundaries.',['IP addresses and ports','DNS, HTTP, and TLS concepts','Packet capture fundamentals'],'2 weeks','networking','Inspect a provided packet capture and label ordinary protocol flows.','Create a network diagram for a fictional student web application.'),
      skill('Linux basics','Beginner','Navigate a Linux environment and use permissions and command-line tools safely.',['Files, paths, and shell commands','Users and permissions','Processes and logs'],'2 weeks','linux','Use a sandbox to inspect files, permissions, and sample logs.','Write a short command-line checklist for reviewing a Linux test VM.')
    ]),
    stage('Apply defensive principles',[
      skill('Security fundamentals (CIA)','Beginner','Use confidentiality, integrity, and availability to reason about common security decisions.',['Threats, assets, and controls','Least privilege and authentication','Backups and defense in depth'],'1-2 weeks','security','Map a fictional service’s assets to simple risks and protective controls.','Create a one-page threat model for a student club website.'),
      skill('Web vulnerabilities (OWASP)','Intermediate','Recognize common web application risks and learn safe defensive mitigations.',['Input validation and output encoding','Authentication and access control','Security testing and remediation'],'2-3 weeks','webSecurity','Complete authorized beginner lessons in a local training lab only.','Write a remediation checklist for a deliberately vulnerable training app.')
    ]),
    stage('Practice and communicate',[
      skill('Practice labs','Intermediate','Build methodical testing habits in intentionally vulnerable, authorized learning environments.',['Scope and authorization','Observe and record evidence','Verify fixes and retest'],'2-3 weeks','labs','Complete guided beginner labs and keep notes without targeting real systems.','Prepare a short lab journal with scope, evidence, and defensive takeaways.'),
      skill('Write a security report','Advanced','Communicate a finding responsibly with evidence, impact, and actionable remediation.',['Clear finding summary','Reproduction within authorized scope','Impact, remediation, and retest'],'1-2 weeks','incident','Rewrite a vague finding into a concise, reproducible training-lab report.','Produce a sample report for a fictional, intentionally vulnerable training app.')
    ])
  ],{title:'Defensive security review',brief:'Review a fictional web service using a supplied safe scope and communicate a small set of defensive improvements.',deliverables:['Scope and asset diagram','Risk and control checklist','Training-lab-only observations','Prioritized remediation report']}),
  roadmap('cloud-computing','Cloud Computing','Understand cloud service models, core infrastructure, identity, security, cost awareness, and deployment design.',[
    stage('Understand the cloud',[
      skill('Cloud fundamentals','Beginner','Compare cloud service models and learn the basic reasons teams use cloud services.',['IaaS, PaaS, and SaaS','Regions and availability concepts','Shared responsibility'],'1-2 weeks','cloud','Map a familiar app to its likely compute, storage, and network needs.','Draw a cloud architecture diagram for a fictional campus events app.'),
      skill('Compute, storage, and networking','Beginner','Explore virtual machines, object storage, and network boundaries using provider learning materials.',['Compute choices','Object and block storage','Virtual networks and access paths'],'2-3 weeks','cloud','Compare two hypothetical service choices using a cost and reliability checklist.','Design a small, diagram-only cloud deployment with clear network boundaries.')
    ]),
    stage('Design for safe operations',[
      skill('Cloud identity and security','Intermediate','Apply least privilege, secure configuration, and basic data protection to cloud designs.',['Identity and access management','Secrets and encryption concepts','Logging and shared responsibility'],'2 weeks','cloudOps','Review a fictional access policy and reduce unnecessary permissions.','Write a cloud security checklist for a small student project.'),
      skill('Cloud operations and cost awareness','Intermediate','Plan monitoring, reliability, and basic cost controls for a small cloud workload.',['Health checks and logs','Availability and backups','Budgets, tags, and cleanup'],'2 weeks','cloudOps','Estimate resource needs and list safe teardown steps for a lab environment.','Prepare an operations runbook and cost-control plan for the design project.')
    ])
  ],{title:'Cloud-ready campus service design',brief:'Create a secure, cost-aware architecture plan for a fictional student service; diagrams and free learning sandboxes are sufficient.',deliverables:['Architecture diagram and service choices','Identity and network controls','Monitoring and backup plan','Estimated cost assumptions and cleanup checklist']}),
  roadmap('devops','DevOps','Practice source control, containers, automated checks, and infrastructure concepts with small, reproducible projects.',[
    stage('Automate the workflow',[
      skill('Linux and version control','Beginner','Use command-line and Git workflows to make software changes traceable and repeatable.',['Shell navigation and files','Branches and commits','Review and merge workflow'],'1-2 weeks','git','Create a branch and document a small change from start to merge.','Set up a clean repository with a build and run guide.'),
      skill('Containers with Docker','Beginner','Package an application and its dependencies in a reproducible container image.',['Images and containers','Dockerfiles and ports','Volumes and safe cleanup'],'2 weeks','containers','Containerize a small static or command-line application.','Document how to build, run, and stop a local development container.')
    ]),
    stage('Deliver and operate',[
      skill('CI/CD with GitHub Actions','Intermediate','Automate repeatable checks when code changes and make workflow results visible.',['Workflow files and events','Automated test jobs','Secrets and least privilege'],'2 weeks','cicd','Create a workflow that runs lint or tests on a pull request.','Add CI checks and a short workflow explanation to a sample repository.'),
      skill('Infrastructure and orchestration','Advanced','Understand declarative infrastructure and container orchestration at an introductory level.',['Desired state and configuration','Terraform plan and apply concepts','Kubernetes workloads and services'],'2-3 weeks','terraform','Review an example infrastructure plan without applying real cloud resources.','Create a local-only deployment diagram and a safe teardown runbook.')
    ])
  ],{title:'Automated delivery pipeline',brief:'Create a small application repository with automated checks and a documented local container workflow.',deliverables:['Versioned source repository','Container build and run steps','CI workflow with automated checks','Security and cleanup notes']}),
  roadmap('ui-ux-design','UI/UX Design','Learn user research, wireframing, visual systems, accessibility, and usability evaluation for digital experiences.',[
    stage('Understand users',[
      skill('User research and problem framing','Beginner','Practice turning a user need into a focused, ethical design question.',['Interview planning and consent','Note taking and synthesis','Personas and journey maps'],'1-2 weeks','uxResearch','Write neutral interview questions and test them with a peer.','Create a short research summary for a fictional campus service.'),
      skill('Wireframes and interaction flows','Beginner','Map task flows and explore low-fidelity layouts before investing in visual detail.',['Task flows and information hierarchy','Wireframes and annotations','Prototype interactions'],'2 weeks','uxDesign','Sketch two alternative flows for the same task and compare trade-offs.','Create a clickable low-fidelity prototype for a student-facing task.')
    ]),
    stage('Design and validate',[
      skill('Visual design systems','Intermediate','Use consistent typography, spacing, color, and reusable components in an interface.',['Type scale and spacing','Color and contrast','Components and states'],'2-3 weeks','uxDesign','Create a small component sheet with normal, hover, and disabled states.','Design a compact visual system and apply it to three connected screens.'),
      skill('Accessibility and usability testing','Intermediate','Check interface accessibility and use observed usability issues to improve a design.',['Keyboard and focus order','Contrast and labels','Task-based usability test'],'1-2 weeks','accessibility','Run a peer test, record observed friction, and revise one screen.','Deliver an accessible prototype with a short test report and revision notes.')
    ])
  ],{title:'Inclusive student service prototype',brief:'Design a student-facing service from a defined user need through research, prototype, and usability review.',deliverables:['Research question and consent-aware notes','Annotated user flow and prototype','Reusable visual components','Accessibility and usability findings']}),
  roadmap('electronics-embedded-systems','Electronics and Embedded Systems','Explore circuit fundamentals, microcontrollers, embedded software, and safe hardware prototyping.',[
    stage('Start with electronics',[
      skill('Circuit fundamentals','Beginner','Understand voltage, current, resistance, and simple component behavior before prototyping.',['Ohm’s law and power','Series and parallel circuits','Reading simple schematics'],'2-3 weeks','electronics','Calculate expected values for low-voltage LED circuits before building.','Document a simple sensor circuit with a diagram and measured observations.'),
      skill('Microcontrollers and firmware','Beginner','Write and upload small programs that read inputs and control outputs on a development board.',['Board setup and GPIO','Digital and analog input','Timing and serial output'],'2-3 weeks','embedded','Use a board simulator or low-voltage kit to read a sensor and log values.','Build a safe environmental sensor demo with a clear wiring diagram.')
    ]),
    stage('Connect and document',[
      skill('Embedded interfaces and protocols','Intermediate','Connect peripheral devices using common serial communication patterns.',['UART, I2C, and SPI concepts','Data sheets and pinouts','Error handling and timing'],'2 weeks','embedded','Read a device datasheet and identify its power, pins, and bus address.','Create a simulated sensor interface and document its message flow.'),
      skill('PCB and prototype workflow','Intermediate','Move from a circuit sketch to a reviewed board layout and reproducible prototype notes.',['Schematic capture','Footprints and routing basics','Design-rule checks and bill of materials'],'2-3 weeks','pcb','Review a tutorial PCB for clear labels, power paths, and design-rule issues.','Create a small, low-voltage sensor-board design in a simulator or CAD tool.')
    ])
  ],{title:'Low-voltage sensor node',brief:'Design a safe, low-voltage sensor prototype or simulation and document how to reproduce it.',deliverables:['Circuit diagram and parts list','Firmware source and setup steps','Interface and test notes','PCB layout or simulator screenshot']}),
  roadmap('mechanical-design-cad','Mechanical Design and CAD','Build mechanical drawing, parametric modeling, assembly, and design-for-manufacturing skills with CAD practice.',[
    stage('Model a design',[
      skill('Engineering drawings and dimensions','Beginner','Read and create clear technical drawings with units, views, and manufacturing dimensions.',['Orthographic and isometric views','Units, tolerances, and annotations','Drawing conventions'],'1-2 weeks','mechanical','Annotate a simple part drawing and check that all important dimensions are defined.','Produce a dimensioned drawing for a small everyday object.'),
      skill('Parametric CAD modeling','Beginner','Create editable 3D parts using sketches, constraints, and feature history.',['Sketch constraints','Extrude, revolve, and fillet','Parameters and design changes'],'2-3 weeks','cad','Rebuild a simple part while keeping its sketches fully constrained.','Model a small desk organizer with editable dimensions and a drawing.')
    ]),
    stage('Assemble and improve',[
      skill('Assemblies and motion','Intermediate','Combine parts with meaningful constraints and evaluate simple motion or fit.',['Part organization','Assembly mates and joints','Clearance and interference checks'],'2 weeks','cad','Assemble a simple hinge and inspect its motion and clearances.','Create an assembly of a small adjustable stand with an exploded view.'),
      skill('Simulation and design for manufacturing','Advanced','Use basic engineering checks and manufacturing constraints to improve a design.',['Load paths and assumptions','Material and process selection','Design review and iteration'],'2-3 weeks','mechanical','Compare two design options using a short assumptions and trade-offs table.','Revise a part for fewer features and clearer manufacturing documentation.')
    ])
  ],{title:'Adjustable desk accessory',brief:'Design a small adjustable accessory, model its parts, and explain key assumptions and manufacturing choices.',deliverables:['Parametric part files','Dimensioned drawing and assembly view','Material and manufacturing notes','Design-review and iteration summary']}),
  roadmap('civil-engineering','Civil Engineering','Explore civil design principles, structural materials, infrastructure systems, and project documentation.',[
    stage('Study site and structures',[
      skill('Surveying and site data','Beginner','Interpret basic site measurements and organize location data for early design decisions.',['Units and measurement checks','Site plans and contours','GIS layers and coordinate awareness'],'2 weeks','civil','Inspect a public map layer and list its scale and data limitations.','Prepare a simple site-analysis sheet using public map data.'),
      skill('Structural materials and analysis','Beginner','Learn the role of loads, materials, and simplified structural models in safe design.',['Loads and support reactions','Material properties','Model assumptions and safety factors'],'2-3 weeks','civilStructure','Work through an introductory statics example and state its assumptions.','Create a conceptual load-path sketch for a small pedestrian shelter.')
    ]),
    stage('Plan infrastructure',[
      skill('Transportation and water systems','Intermediate','Understand introductory transportation and water-system concepts using public technical resources.',['Basic traffic and access concepts','Watersheds and runoff','Design constraints and context'],'2-3 weeks','civilWater','Trace a small drainage area on a public map and list data needed for design.','Prepare a concept note for a safe campus walking and drainage improvement.'),
      skill('Civil CAD and project documentation','Intermediate','Use civil CAD concepts to organize alignments, surfaces, plans, and design notes.',['Civil 3D project structure','Surfaces and alignments','Drawing review and version notes'],'2-3 weeks','civil','Follow official Civil 3D documentation using sample data only.','Create a conceptual site plan and a concise review checklist.')
    ])
  ],{title:'Campus access and drainage concept',brief:'Prepare a conceptual, non-construction design study for a campus access or drainage improvement using public or synthetic data.',deliverables:['Site context and data limitations','Conceptual plan and system sketch','Design assumptions and constraints','Review checklist; no construction-ready claims']}),
  roadmap('business-management','Business and Management','Learn how organizations create value, understand customers, reason about budgets, and coordinate small projects.',[
    stage('Understand organizations',[
      skill('Business fundamentals and strategy','Beginner','Describe how an organization serves customers, uses resources, and evaluates goals.',['Value propositions and stakeholders','Business models and operations','Goals, measures, and trade-offs'],'2 weeks','business','Compare two familiar services by audience, value, and delivery model.','Write a one-page business model for a fictional student service.'),
      skill('Customer and market research','Beginner','Gather and summarize customer needs without confusing assumptions with evidence.',['Research questions and sampling','Competitor and market scan','Synthesis and positioning'],'1-2 weeks','business','Draft neutral survey questions and identify possible sources of bias.','Prepare a short market-research brief for a fictional campus product.')
    ]),
    stage('Plan and deliver',[
      skill('Finance and budgeting basics','Intermediate','Create a simple budget and understand revenue, costs, and basic financial statements.',['Fixed and variable costs','Budget and cash-flow basics','Assumptions and sensitivity'],'2 weeks','finance','Build a small spreadsheet budget and test how assumptions change the result.','Prepare a transparent starter budget for a fictional student event.'),
      skill('Project coordination and communication','Intermediate','Plan work, communicate progress, and manage risks in a small team project.',['Scope and milestones','Roles, dependencies, and risks','Status updates and retrospective'],'1-2 weeks','business','Break a class assignment into tasks and identify one schedule risk.','Create a one-page project charter and weekly progress update template.')
    ])
  ],{title:'Student service launch plan',brief:'Plan a small fictional student service from user need through budget, milestones, and a concise stakeholder pitch.',deliverables:['Customer and value summary','Basic budget with assumptions','Milestones, roles, and risks','Short stakeholder presentation']}),
  roadmap('digital-marketing','Digital Marketing','Plan ethical digital campaigns with content, search, social channels, analytics, and measurable goals.',[
    stage('Plan the campaign',[
      skill('Content strategy and SEO','Beginner','Plan useful content around audience needs and learn foundational search optimization.',['Audience and search intent','Keyword and topic planning','On-page content quality'],'2 weeks','marketing','Improve a draft page title and outline using a clear audience question.','Create a small content calendar for a fictional campus service.'),
      skill('Social media campaign planning','Beginner','Choose a channel and plan accessible, consistent content for a defined audience.',['Channel and audience fit','Content formats and calendar','Community guidelines and accessibility'],'1-2 weeks','social','Create sample posts with alt text and a clear call to action.','Build a two-week campaign plan with channel-specific sample content.')
    ]),
    stage('Measure and refine',[
      skill('Paid media and campaign fundamentals','Intermediate','Understand campaign objectives, targeting concepts, budgets, and responsible ad practices.',['Objectives and audience definitions','Budget and creative testing','Privacy and platform policies'],'2 weeks','marketing','Compare two fictional ad concepts against one measurable objective.','Prepare a campaign brief with audience, budget assumptions, and policy checks.'),
      skill('Marketing analytics and reporting','Intermediate','Use basic analytics to evaluate campaign performance and communicate limits.',['Events and conversion definitions','Metrics and attribution limits','Reporting and next-step hypotheses'],'2 weeks','analytics','Choose meaningful metrics for a sample campaign and reject vanity metrics.','Create a mock campaign report with a dashboard sketch and next-step hypothesis.')
    ])
  ],{title:'Student service awareness campaign',brief:'Design a small ethical campaign for a fictional student service and show how success would be measured.',deliverables:['Audience and campaign objective','Search and content plan','Channel calendar and sample creative','Measurement plan with privacy notes']})
];
