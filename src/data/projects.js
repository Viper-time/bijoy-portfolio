
/* =========================================================
   BIJOY PORTFOLIO — PROJECTS DATA
   Research projects and technical implementations
   ========================================================= */

const projects = [
  {
    id: 'gan-image-inpainting',
    number: '01',
    title: 'GAN-Based Image Inpainting',
    category: 'Generative AI',
    status: 'Research Project',
    description:
      'Explores the use of Generative Adversarial Networks to reconstruct missing or damaged regions in images while maintaining visual coherence.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'GANs'],
    focus: 'Image restoration and generative modelling',
    link: '',
  },
  {
    id: 'autonomous-research-assistant',
    number: '02',
    title: 'Autonomous Research Assistant Using RAG',
    category: 'LLMs & RAG',
    status: 'Research Project',
    description:
      'A research assistant concept using document retrieval and large language models to support question answering grounded in research documents.',
    technologies: ['Python', 'LangChain', 'Qdrant', 'Ollama'],
    focus: 'Document retrieval and grounded question answering',
    link: '',
  },
  {
    id: 'phishing-url-detection',
    number: '03',
    title: 'Multi-Signal Phishing URL Detection',
    category: 'Cybersecurity & ML',
    status: 'Research Project',
    description:
      'Investigates a data-driven, multi-signal framework for detecting phishing URLs using machine learning and URL-related features.',
    technologies: ['Python', 'Machine Learning', 'Feature Engineering'],
    focus: 'Phishing detection and security analytics',
    link: '',
  },
  {
    id: 'tsunami-risk-microzonation',
    number: '04',
    title: 'Tsunami Risk Micro-Zonation',
    category: 'Geospatial AI',
    status: 'Ongoing Research',
    description:
      'Investigates tsunami susceptibility across the Andaman and Nicobar Islands using seismic observations, bathymetric data, and geospatial analysis.',
    technologies: ['Python', 'QGIS', 'USGS Data', 'GEBCO Bathymetry'],
    focus: 'Spatial analysis and hazard susceptibility mapping',
    link: '',
  },
  
  {
    id: 'layout-aware-scientific-rag',
    number: '05',
    title: 'A Lightweight Layout-Aware Scientific Document Understanding Pipeline for RAG',
    category: 'Document AI & RAG',
    status: 'Research Project',
    description:
      'Explores a lightweight pipeline for extracting and organizing scientific documents while preserving layout information such as headings, sections, tables, and reading order to support retrieval-augmented generation.',
    technologies: ['Python', 'PyMuPDF', 'Document Parsing', 'RAG'],
    focus: 'Layout-aware document understanding and retrieval',
    link: '',
  },
  {
    id: 'land-cover-classification',
    number: '06',
    title: 'Land Cover Classification Using Satellite Imagery',
    category: 'Remote Sensing & Geospatial AI',
    status: 'Research Project',
    description:
      'Investigates the classification of land cover types from satellite imagery, with potential applications in environmental monitoring, land-use analysis, and landscape change assessment.',
    technologies: ['Python', 'Satellite Imagery', 'Machine Learning', 'GIS'],
    focus: 'Image classification and land-cover mapping',
    link: '',
  },
  {
    id: 'multimodal-emotion-detection',
    number: '07',
    title: 'Multimodal Emotion Detection Using Speech and Facial Images',
    category: 'Multimodal AI',
    status: 'Research Project',
    description:
      'Explores emotion recognition by combining acoustic features from speech with visual features extracted from facial images to investigate the benefits of multimodal prediction.',
    technologies: ['Python', 'Speech Processing', 'Computer Vision', 'Deep Learning'],
    focus: 'Multimodal feature fusion and emotion recognition',
    link: '',
  },

]

export default projects
