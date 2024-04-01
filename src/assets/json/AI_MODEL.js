export const aiModel = [
	{
		name: 'Jasper',
		category: ['Speech Recognition and Generation'],
		description:
			'State-of-the-art speech-to-text model known for accuracy and efficiency.',
		use_cases: [
			'Automatic transcription',
			'Voice search applications',
			'Closed captioning systems',
		],
		interaction: {
			type: 'api',
			api: {
				repository: 'https://github.com/NVIDIA/NeMo',
				documentation: 'https://developer.nvidia.com/nemo/asr/jasper',
			},
		},
	},
	{
		name: 'Tacotron 2',
		category: ['Speech Recognition and Generation'],
		description:
			'Text-to-speech model for generating realistic human-like speech.',
		use_cases: [
			'Text-to-speech synthesis for audiobooks',
			'AI assistants with natural-sounding voices',
			'Accessibility tools for visually impaired users',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org/pdf/1712.05884.pdf',
		},
	},
	{
		name: 'Generative Adversarial Networks (GANs)',
		category: ['Generative Models'],
		description:
			'Powerful framework for generating realistic images, audio, and other types of data.',
		use_cases: [
			'Image generation for artistic purposes',
			'Creating realistic product mockups',
			'Data augmentation for machine learning tasks',
		],
		interaction: {
			type: 'code',
			link: 'https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix',
		},
	},
	{
		name: 'Variational Autoencoders (VAEs)',
		category: ['Generative Models'],
		description:
			'Model images or other data by learning a compressed representation and generating new samples from that space.',
		use_cases: [
			'Anomaly detection',
			'Data compression',
			'Generating variations of existing data (e.g., different styles of images)',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org/pdf/1312.6114.pdf',
		},
	},
	{
		name: 'StyleGAN2',
		category: ['Generative Models'],
		description:
			'State-of-the-art GAN architecture for generating incredibly realistic and high-fidelity images.',
		use_cases: [
			'Creating realistic portraits',
			'Generating images for creative content',
			'Visual effects in movies and games',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org.pdf/pdf/1912.09821.pdf',
		},
	},
	{
		name: 'T5 (Base)',
		category: ['Natural Language Processing'],
		description:
			'Efficient text-to-text transfer model, able to perform various NLP tasks based on a single model architecture.',
		use_cases: [
			'Machine translation',
			'Text summarization',
			'Question answering',
		],
		interaction: {
			type: 'playground',
			link: 'https://huggingface.co/t5-base/playground',
		},
	},
	{
		name: 'spaCy (en_core_web_sm)',
		category: ['Natural Language Processing'],
		description:
			'Open-source library offering pre-trained statistical models for various NLP tasks in multiple languages (example: en_core_web_sm for English).',
		use_cases: [
			'Named entity recognition',
			'Part-of-speech tagging',
			'Text parsing and analysis',
		],
		interaction: {
			type: 'code',
			link: 'https://spacy.io/usage/beginner',
		},
	},
	{
		name: 'AlphaZero',
		category: ['Reinforcement Learning'],
		description:
			'Powerful reinforcement learning agent that mastered chess, Go, and Shogi with superhuman performance.',
		use_cases: [
			'Game playing',
			'Robotics control',
			'Resource optimization and scheduling',
		],
		interaction: {
			type: 'research',
			link: 'https://deepmind.com/research/publication/alphazero',
		},
	},
	{
		name: 'Stable Baselines3',
		category: ['Reinforcement Learning'],
		description:
			'Open-source library providing various reinforcement learning algorithms and implementations.',
		use_cases: [
			'Developing and training reinforcement learning agents',
			'Experimenting with different RL algorithms',
			'Reinforcement learning research',
		],
		interaction: {
			type: 'code',
			link: 'https://github.com/DLR-ISS/stable-baselines3',
		},
	},
	{
		name: 'Gym',
		category: ['Reinforcement Learning'],
		description:
			'Toolkit for developing and comparing reinforcement learning algorithms by providing a standardized environment interface.',
		use_cases: [
			'Prototyping and testing RL algorithms',
			'Benchmarking different RL approaches',
			'Designing custom reinforcement learning environments',
		],
		interaction: {
			type: 'code',
			link: 'https://gym.openai.com/docs/',
		},
	},
	{
		name: 'CLIP',
		category: ['Computer Vision and Natural Language Processing'],
		description:
			'Connects text and image representations, allowing for image retrieval based on textual descriptions or generating text captions for images.',
		use_cases: [
			'Image search with natural language queries',
			'Automatic image captioning',
			'Visual question answering',
		],
		interaction: {
			type: 'research',
			link: 'https://openai.com/blog/clip/',
		},
	},
	{
		name: 'StarGAN',
		category: ['Generative Models'],
		description:
			'GAN model for manipulating facial attributes in images, allowing for editing features like hair color, age, and emotion.',
		use_cases: [
			'Generating variations of human faces',
			'Data augmentation for facial recognition tasks',
			'Creating realistic avatars',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org.pdf/pdf/1905.09579.pdf',
		},
	},
	{
		name: 'LaMDA (LaMDA 1)',
		category: ['Natural Language Processing'],
		description:
			'Large language model from Google AI, known for its ability to engage in informative and comprehensive conversations.',
		use_cases: ['Chatbots', 'Virtual assistants', 'Machine translation'],
		interaction: {
			type: 'research',
			link: 'https://ai.googleblog.com/2021/01/lamda-language-model-for-dialogue.html',
		},
	},
	{
		name: 'YOLOv7 (latest version)',
		category: ['Computer Vision'],
		description:
			'Latest iteration of the YOLO object detection model, offering improved accuracy and speed compared to previous versions.',
		use_cases: [
			'Self-driving cars',
			'Video surveillance',
			'Real-time object recognition',
		],
		interaction: {
			type: 'code',
			link: 'https://github.com/WongKinYiu/yolov7',
		},
	},
	{
		name: 'DETR (Detection Transformer)',
		category: ['Computer Vision'],
		description:
			'Transformer-based model for object detection and instance segmentation, known for its efficiency and high performance.',
		use_cases: [
			'Autonomous vehicles',
			'Medical image analysis',
			'Robotic object manipulation',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org.pdf/pdf/2005.10617.pdf',
		},
	},
	{
		name: 'Jukebox (limited access)',
		category: ['Generative Models'],
		description:
			'Powerful model for generating musical pieces in various styles based on text descriptions, with limited public access.',
		use_cases: [
			'Music composition',
			'Audio generation for creative applications',
			'Personalization of music experiences',
		],
		interaction: {
			type: 'none',
			api: {
				note: 'Limited access through OpenAI API waitlist.',
			},
		},
	},
	{
		name: 'Stable Diffusion',
		category: ['Generative Models'],
		description:
			'Text-to-image diffusion model known for its ability to generate high-quality and creative images from textual descriptions.',
		use_cases: [
			'Concept art creation',
			'Image editing and manipulation',
			'Generating illustrations for creative content',
		],
		interaction: {
			type: 'code',
			link: 'https://github.com/CompVis/stable-diffusion',
		},
	},
	{
		name: 'Megatron-Turing NLG',
		category: ['Natural Language Processing'],
		description:
			'Large language model from NVIDIA known for its ability to generate different creative text formats, translation, and code.',
		use_cases: [
			'Content creation',
			'Machine translation',
			'AI-powered writing assistants',
		],
		interaction: {
			type: 'research',
			link: 'https://arxiv.org/pdf/2201.08237.pdf',
		},
	},
	{
		name: 'BART (Base)',
		category: ['Natural Language Processing'],
		description:
			'Pre-trained model for various NLP tasks, combining strengths of sequence-to-sequence and attention mechanisms.',
		use_cases: [
			'Machine translation',
			'Text summarization',
			'Question answering',
		],
		interaction: {
			type: 'playground',
			link: 'https://huggingface.co/facebook/bart-base',
		},
	},
	// ... add 11 more models following the same format
];
