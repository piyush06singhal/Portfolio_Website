import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Smart Study Management Platform',
      description: 'StudyFlow is a full-stack study management platform built with Next.js, TypeScript, and Supabase, focused on smart planning, progress tracking, and productivity analytics. It features automated scheduling, rich notes, flashcards with spaced repetition, deadline tracking, and data-driven study insights.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Analytics', 'Spaced Repetition'],
      image: '/download(5).jpg',
      isImage: true,
      link: 'https://study-resource-organizer.vercel.app/',
      github: 'https://github.com/piyush06singhal/study-resource-organizer'
    },
    {
      title: 'Youtube Video Classifier',
      description: 'Developed a YouTube comment analysis tool using Python, Anvil, and Google Collab. Integrated Google\'s YouTube API to fetch comments and used machine learning for genre classification. Deployed the tool on Anvil for real-time interaction, allowing users to analyze comments and download the results in an Excel file. Additionally, implemented sentiment analysis to assess the overall tone of the comments, enhancing the genre classification accuracy.',
      technologies: ['Python', 'Anvil', 'Google Collab', 'YouTube API', 'Machine Learning'],
      image: '/download - Copy.png',
      isImage: true,
      link: 'https://jam-packed-simplistic-wave.anvil.app/',
      github: 'https://github.com/piyush06singhal/Youtube_Video_classifier'
    },
    {
      title: 'LinkedIn Automation',
      description: 'LinkedAI is an AI-powered LinkedIn automation platform built with Next.js and TypeScript that helps users generate, schedule, and publish high-performing content. Features include intelligent content scheduling, predictive analytics to forecast post performance, real-time engagement insights, and team collaboration through role-based workspaces. The platform uses secure OAuth 2.0 authentication and includes content calendar management, hashtag optimization, and performance benchmarking.',
      technologies: ['Next.js', 'AI', 'OAuth', 'Analytics', 'TypeScript'],
      image: '/download.png',
      isImage: true,
      link: 'https://lauto8m.vercel.app/',
      github: 'https://github.com/piyush06singhal/linkedin-auto'
    },
    {
      title: 'IntentOS',
      description: 'IntentOS v2.0 is a production-grade AI decision intelligence system that converts ambiguous human intent into structured, optimized action plans. It features multi-intent reasoning, confidence-driven clarification, constraint-aware planning, persistent intent memory, and robust guardrails for safe, realistic decision-making.',
      technologies: ['AI', 'Decision Intelligence', 'Intent Recognition', 'Planning', 'Guardrails'],
      image: '/download (6).jpg',
      isImage: true,
      link: 'https://intent-os.vercel.app/',
      github: 'https://github.com/piyush06singhal/IntentOs'
    },
    {
      title: 'Weather Application',
      description: 'A real-time weather application built with HTML5, CSS3, and JavaScript that fetches weather data from the OpenWeatherMap API. It displays temperature, humidity, and wind speed, with unit conversion between Celsius and Fahrenheit. The app is responsive and showcases my skills in API integration and dynamic UI development skills.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeather API'],
      image: '/images - Copy.jpeg',
      isImage: true,
      link: 'https://piyush06singhal.github.io/Weather_App/',
      github: 'https://github.com/piyush06singhal/Weather_App'
    },
    {
      title: 'Finance Manager Application',
      description: 'A full-stack personal finance management application built with Next.js, TypeScript, and Supabase. Features include secure authentication with 2FA, budget tracking, transaction management, savings pots, and recurring bills monitoring.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', '2FA', 'Finance'],
      image: '/images.jpg',
      isImage: true,
      link: 'https://finance-manager-fs-app.vercel.app/',
      github: 'https://github.com/piyush06singhal/Finance_Manager_FSApp'
    },
    {
      title: 'PDF Chat Application',
      description: 'The AI-powered PDF Assistant is a tool developed using Python, Streamlit, LangChain, FAISS, and Google Generative AI. It enables users to upload PDF documents, extract and process their content, and interactively query them for context-based answers. The system efficiently uses FAISS for fast document retrieval and Google Generative AI for generating accurate responses. The user-friendly interface allows seamless document handling, while the tool enhances productivity by streamlining document analysis and providing quick AI-driven insights.',
      technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Google AI'],
      image: '/images (2).jpg',
      isImage: true,
      link: 'https://pdfchatapplication-i3jsd6bspgxjx7w6l8o2y9.streamlit.app/',
      github: 'https://github.com/piyush06singhal/PDF_chat_application'
    },
    {
      title: 'AI Holiday Planner',
      description: 'An intelligent holiday planning application designed specifically for students to optimize their break periods. The AI Holiday Planner analyzes academic calendars, attendance requirements, and exam schedules to identify the ideal holiday periods without compromising academic performance. It features smart algorithms that calculate optimal leave dates, provides attendance impact predictions, and suggests the best times for extended breaks. The application helps students maximize their vacation time while maintaining required attendance percentages, ensuring they can plan trips and holidays strategically throughout the academic year.',
      technologies: ['AI', 'React', 'Calendar Analysis', 'Student Tools', 'Algorithms'],
      image: '/download (1).jpg',
      isImage: true,
      link: 'https://staging-ai-holiday-planner-g962.frontend.encr.app/',
      github: 'https://github.com/piyush06singhal/Ai-holiday-planner'
    },
    {
      title: 'AI Medicine Assistant Application',
      description: 'An offline medical analysis application developed with Python and Streamlit, featuring a built-in knowledge base covering 30+ common health conditions. The app includes an intelligent symptom checker using AI algorithms, emergency contacts with location services, daily health tips, and multi-language support. The modern UI features smooth animations and glass-morphism effects. Works completely offline for privacy and accessibility, making it ideal for users in remote areas.',
      technologies: ['Python', 'Streamlit', 'AI', 'Healthcare', 'Multi-language'],
      image: '/download (2).jpg',
      isImage: true,
      link: 'https://aimedicineassistantapplication-gs3ehgmqcm9wdkmdqdckrj.streamlit.app/',
      github: 'https://github.com/piyush06singhal/AI_Medicine_Assistant_Application'
    }
  ]

  return (
    <div className="page projects-page">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Showcasing my best work
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              {project.isImage ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
              ) : (
                <span className="project-emoji">{project.image}</span>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">
                  <span>Live Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
                <a href={project.github} className="project-link">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
