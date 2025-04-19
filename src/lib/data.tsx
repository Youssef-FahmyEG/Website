import { Github,Linkedin } from 'lucide-react';

import LogoTableau from '/public/images/logos/5953920271624814781-removebg-preview.png';
import LogoLooker from '/public/images/logos/5956076057444598550-removebg-preview(1).png';
import LogoSQL from '/public/images/logos/5956076057444598548-removebg-preview.png';
import LogoPython from '/public/images/logos/5953920271624814790-removebg-preview.png';
import LogoWord from '/public/images/logos/5953920271624814773-removebg-preview.png';
import LogoExcel from '/public/images/logos/5953920271624814777-removebg-preview.png';
import LogoPowepoint from '/public/images/logos/5953920271624814778-removebg-preview.png';
import LogoFabric from '/public/images/logos/5953920271624814779-removebg-preview.png';
import LogoETL from '/public/images/logos/etl_9850879.png';
import LogoPowerPi from '/public/images/logos/5953920271624814780-removebg-preview.png';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoVezloo from '/public/images/logos/5953920271624814764-removebg-preview.png';
import LogoEscwa from '/public/images/logos/5953920271624814772-removebg-preview.png';
import Logonu from '/public/images/item.jpg';

import Project2 from '/public/images/project2.png';
import Project1 from '/public/images/project1.png';
import Project3 from '/public/images/project3.png';
import Project4 from '/public/images/project4.png';
import Project5 from '/public/images/project5.png';
import Project7 from '/public/images/project7.png';
import Project6 from '/public/images/project6.png';
import Project8 from '/public/images/project8.png';
import Project9 from '/public/images/project9.png';
import Project10 from '/public/images/project10.png';
import Project11 from '/public/images/project11.png';
import Project12 from '/public/images/project12.png';
import Project13 from '/public/images/project13.png';
import Project14 from '/public/images/project14.png';


import cer1 from '/public/images/5956076057444598627.jpg';
import cer2 from '/public/images/5956076057444598628.jpg';
import cer3 from '/public/images/5956076057444598629.jpg';
import cer4 from '/public/images/5956076057444598630.jpg';
import cer5 from '/public/images/5956076057444598631.jpg';
import cer6 from '/public/images/5956076057444598632.jpg';
import cer7 from '/public/images/5956076057444598633.jpg';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Youssef-FahmyEG',
  GITHUB_REPO: '',
  TWITTER: '',
  FIGMA: '',
  FIGMA_FILE:
    '',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Certificates',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Youssef-FahmyEG',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/yousseffahmy-data-analyst',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Excel',
    logo: LogoExcel,
    
  },
  {
    label: 'Word',
    logo: LogoWord,

  },
  {
    label: 'Powerpoint',
    logo: LogoPowepoint,

  },
  {
    label: 'ETL',
    logo: LogoETL,
  
  },
  {
    label: 'Power Bi',
    logo: LogoPowerPi,
    
  },
  {
    label: 'Tableau',
    logo: LogoTableau,
    
  },
  {
    label: 'Looker Studio',
    logo: LogoLooker,
  
  },
  {
    label: 'SQL',
    logo: LogoSQL,
  
  },
  {
    label: 'Python',
    logo: LogoPython,
    
  },
  {
    label: 'Fabric',
    logo: LogoFabric,
  
  },
  {
    label: 'Git',
    logo: LogoGit,
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: Logonu,
    logoAlt: ' NeuronetiX logo',
    position: ' Data Analyst Intern',
    startDate: new Date(2024, 7),
    endDate: new Date(2024, 10),
    summary: [
      'Using Python libraries(Pandas, NumPy, Matplotlib and Seaborn) to analyze data sets, extract insights, and prepare reports for decision-making purposes.',
      'Creating interactive dashboards and visualizations in Excel and Power BI to present data trends and insights effectively.',
      'Applying analytical skills and critical thinking to solve technical challenges and optimize processes.',
    ],
  },
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Data Analyst Freelancer',
    startDate: new Date(2023, 4),
    currentlyWorkHere: true,
    summary: [
      'Conducting data analysis projects for various clients.',
      'Developing and maintaining dashboards to provide actionable insights using visualization tools.',
    ],
  },
  {
    logo: LogoVezloo,
    logoAlt: 'Vezloo logo',
    position: 'Data Entry Specialist',
    startDate: new Date(2021, 7),
    endDate: new Date(2021, 10),
    summary: [
      'Verified data accuracy and making necessary corrections.',
      'Managed and prioritized multiple data entry tasks to meet deadlines',

    ],
  },
  {
    logo: LogoEscwa,
    logoAlt: 'Escwa logo',
    position: ' Data Annotator',
    startDate: new Date(2020, 10),
    endDate: new Date(2021, 2),
    summary: [
      'Annotated Hard, Soft Skills, Certifications, Degrees, Fields, and Years of Experience in job descriptions.',
      'Gathered and interpreted the data, investigated the problem, isolated and attacked the root cause.',

    ],
  },
];
export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Financial Analysis',
    description:
        'I utilized Power BI for advanced data visualization, leveraging Power Query for data cleaning and transformation and DAX for complex calculations and insightful measures. The project focused on identifying key trends and metrics through the creation of Key Performance Indicators (KPIs) that aid strategic decision-making.\nSteps Applied: Define a business question to solve. Conduct Exploratory Data Analysis (EDA). Clean and prepare data using Power Query. Use DAX to establish relationships for data modeling. Create KPIs using DAX. Build a dynamic dashboard to visualize insights. Key Performance Indicators (KPIs): Total Sales: $1,122K, Total Cost: $728K, Total Quantity: 3,838, Total Profit: $394K, Total Profit in Latest Year: $91K, Total Profit in Previous Year: $102K, Number of Products: 765, Number of Customers: 366, Most Selling Product: Lexmark Printer, Worst-Selling Product: Prang Sticks, Product Categories: 3 (Technology is the best-selling, Office Supplies is the worst), Sub-Categories: 17 (Machines are the best-selling, Fasteners are the worst). This comprehensive approach enabled the discovery of actionable insights, facilitating data-driven decision-making.',
      
    url: 'https://drive.google.com/file/d/1XrEzvtWwXkQr0PzrktUc4lVMjn90iAbM/view?usp=drive_link',
    previewImage: Project1,
    type:"Power BI",
    technologies: [
      'Power BI ',
      'DAX',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Car Analysis',
    description:
      'I leveraged advanced data visualization techniques with Power BI to uncover key trends and metrics. Power Query enabled data cleaning and transformation, while DAX allowed for complex calculations and insightful measures. Incorporating Key Performance Indicators (KPIs) provided valuable insights for strategic decision-making.\nSteps applied in the project:( Business Questions for problem-solving - EDA ( Exploratory Data Analysis) - Cleaning and preparing data using power query - After cleaning data, using DAX to create relations for data modeling - Create some KPIs using DAX - Build a Dynamic Dashboard to show insights )I made this dashboard to show the most sold and the worst cars, Total sales compared to the Previous year, regions in the USA where the company sold more cars, and recommendations to increase sales in the largest and lowest cities, How were the cars sold? and more. List of cars: 1- McLaren P1 2- Jaguar F-Type 3- Porsche C4S 4- BMW X6 5- Mercedes-Benz GLE Coupe 6- Honda NSX 7- Rolls-Royce GM V8 8- BMW i8 9- Chevrolet Corvette 10- Buick Riviera 11- Mercedes-Benz S-classCurrent year sales = 746K compared to Previous year sales = 614K with Growth Rate about 21%The column chart shows November is the highest month of sales but February is the lowest month of sales so I recommend more marketing campaigns before the start of this month next year. The donut chart indicates that the West USA dominates the sales. The project shows sales in the current year compared to the previous year and the growth rate across America. Sales include the cars themselves, maintenance services, and other services such as accessories and arts. Cars are sold directly, by broker, Pre-booking or any other selling technique. During the analysis, I found that the Rolls-Royce GM V8 is the most sold car and the Chevrolet Corvette is the least.',
    url: 'https://drive.google.com/file/d/1WtbxT8T49JFveosYry0m5kfG3P0ZBlrb/view?usp=drive_link',
    previewImage: Project2,
    type:"Power BI",
    technologies: [
      'Power BI ',
      'DAX',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Order Analysis',
    description:
      'The dashboards reveal a significant decline in overall business performance compared to the previous year. Sales have dropped by 33% to $1.45M, while costs decreased by 29% to $1.35M, and quantity sold fell by 36% to 51K units. The top product by sales was "Côte de Blaye" with $164K, but the worst-performing product was "Chocolade," with only 1,759 units sold. The "Beverages" category led in both sales and orders, contributing 21.36% of sales and 24.65% of orders. Germany was the top country, accounting for 15% of all orders, with 121 orders in total. Top customers include "Horst Kloss" and "Jose Pavarotti," with sales of $122K and $121K, respectively. "Cunewalde" and "Boise" were the top cities by sales, each contributing over $120K. The analysis also shows a noticeable decline in orders, down by 34% to 830, with slightly more orders placed on weekends (422) than on business days (408). The best-performing employee was "Margaret," with 156 orders. Additionally, 8 products were discontinued, leaving 69 still active. The data indicates areas for potential growth by focusing on high-performing customers, cities, and products despite the overall downturn.',
    url: 'https://drive.google.com/file/d/1Cocwz6lctd5x8NHVJSX_xr8gWayeF_i-/view?usp=drive_link',
    previewImage: Project3,
    type:"Power BI",
    technologies: [
      'Power BI ',
      'DAX',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Lionel Messi\'s Career',
    description:'The dashboard provides an overview of Lionel Messi\'s career statistics and personal details. Personal Information: Messi was born on June 24, 1987, making him 36 years old. He holds Argentinian citizenship and stands 1.70 meters tall, weighing 72 kilograms. He plays as a Right Winger (RW). Career Achievements: Messi has made 889 appearances, primarily in La Liga, which is his most-played competition. Over his career, he has scored 721 goals and provided 344 assists. Market Value: As of now, his market value is estimated at €35.00 million. Trophies: The dashboard highlights Messi\'s extensive trophy collection, including prestigious awards and cups, symbolized by the icons displayed at the bottom.',
    url: '',
    previewImage: Project4,
    type:"Power BI",
    technologies: [
      'Power BI ',
      'DAX',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'World Population in 2023',
    description:'The dashboard provides a detailed analysis of the global population distribution and migration patterns as of 2023. The total world population is recorded at 8,043,901,603 people. The pie chart shows the distribution of this population by region, with Asia having the largest share at 59%, followed by Africa at 17%, Europe and Latin America both at 9.4%, North America at 4.6%, and Oceania with the smallest share. The bar chart lists the top 10 most populous countries, with India and China leading significantly, followed by the United States, Indonesia, and Pakistan, indicating a concentration of the global population in these countries. The net migration by region chart shows varying trends, with Asia experiencing a net loss of 1.4 million migrants, while North America and Europe have net gains of around 1 million each, indicating these regions are key destinations for migration. Africa, Latin America, and Oceania show lower levels of net migration, with Africa having a net gain of 529,000 and Europe a net gain of 994,800. suggesting different migration patterns and economic opportunities. The net change in population by region highlights that Asia and Africa have experienced the most significant population growth, with net increases of 30.3 million and 29.5 million, respectively, reflecting high birth rates and population growth. In contrast, Europe has a negative net change of approximately 501,900, indicating population decline due to factors like low birth rates and high emigration. North America shows moderate growth, while Latin America and Oceania have minimal changes, suggesting stable population dynamics in these regions. Overall, the dashboard provides a comprehensive overview of the current global population trends, migration flows, and regional demographic changes, which are crucial for understanding global economic and social dynamics.',
    url: '',
    previewImage: Project7,
    type:"Looker",
    technologies: [
      'Looker ',
      'Data Visualization',
    ],
  },
  {
    name: 'Global Causes of Death',
    description:'This Global Death dashboard displays death statistics from 1990 to 2019. The total global deaths amount to 1.468 billion, with China (265M), India (238M), and the United States (71M) leading in death numbers. There are 31 causes of death tracked, with the top five being cardiovascular diseases, chronic respiratory diseases, lower respiratory infections, neonatal disorders, and neoplasms. Death trends show a rising pattern over time. Asia accounts for the highest total deaths by continent (782.7M), followed by Africa (257.85M) and Europe (179.49M).',
    url: 'https://drive.google.com/file/d/1fkqVb8CYoYsgBCJWriJMmgv2cBS2qUIY/view?usp=sharing',
    previewImage: Project10,
    type:"Power BI",
    technologies: [
      'Power BI',
      'DAX',
      'Data Visualization',
    ],
  },
  {
    name: 'Hotel Performance',
    description:'The dashboard provides a comprehensive analysis of hotel and resort performance, highlighting key operational metrics and offering actionable recommendations. Key Insights: Total Bookings: 87K, Cancellation Rate: 27.49%, Average Lead Time: 79.89 days, Total Special Requests: 61K, Bookings by Hotel Type: City Hotel: 53K (61.13%), Resort: 34K (38.87%), Cancellation Rate by Month: Highest: January (38.49%) and October (36.31%), Lowest: March (18.40%), Lead Time by Segment: Groups: 148 days, Offline TA/TO: 106 days, Online TA: 80 days, Direct: 49 days, Corporate: 16 days. Recommendations for Improvement: Cancellation Rate: Analyze January and October customer feedback, Implement flexible policies and monitor competitors’ promotions, Assess cancellation trends between city and resort hotels. Lead Time Optimization: Automate bookings for Groups and Offline TA/TO, Introduce early booking incentives to streamline planning, Upsell short lead-time segments like Corporate and Direct. Hotel Type Performance: Promote Resort Hotels with seasonal offers and packages, Leverage City Hotel success through loyalty programs and corporate partnerships. Market Segment Strategies: Tailor group-specific offers and simplify the group booking process, Strengthen relationships with Online/Offline TA/TO agents and enhance direct booking perks.',
    url: 'https://drive.google.com/file/d/1ogHdpJdff0JJnjDmc2_DReMmaxpNCeqm/view?usp=sharing',
    previewImage: Project9,
    type:"Power BI",
    technologies: [
      'Power BI',
      'DAX',
      'Data Visualization',
    ],
  },
  {
    name: 'Financial Performance',
    description:'The report provides an overview of weekly financial performance, highlighting revenue, costs, profit margins, and top product sales. This week’s total revenue is $75,926, while the total costs amount to $69,716, indicating that the company has maintained a positive revenue stream but still faces significant costs. The revenue and cost charts show daily trends, with the highest revenue occurring towards the end of the week, particularly on Friday and Saturday, suggesting increased sales activity during those days. The profit margin trend is displayed month by month, starting at 18% in January, dipping to a low of 14% in March and June, and fluctuating throughout the year, ending at 14% in December. This reflects variability in profitability, likely due to seasonal factors or cost variations. The sales target achievement is currently at 76%, indicating that the company is on track but still needs to make further efforts to meet its goals fully. The list of top products by sales shows that Jane Smith leads with $19,932 in sales, followed closely by Alex Johnson and Michael Brown, both of whom have multiple entries with slightly lower sales figures. This suggests that a few key salespeople are driving most of the revenue. The report also uses icons next to the sales figures, which could represent different products or categories sold by each salesperson, implying a diverse range of products contributing to overall sales. Overall, this report provides a clear picture of the financial status and sales performance, allowing for strategic adjustments in both cost management and sales efforts to improve profitability and meet sales targets.',
    url: 'https://drive.google.com/file/d/1ljaNB6xOoA6WSpHWtXyXCjVznABD7T-g/view?usp=drive_link',
    previewImage: Project6,
    type:"Tableau",
    technologies: [
      'Tableau ',
      'LOD',
      'Data Modeling',
      'Data Visualization',
    ],
  },
  {
    name: 'Adidas Dashboard',
    description:'The sales dashboard reveals a total revenue of $899.9 million, with New York being the most successful state. Men\'s street footwear emerged as the top-selling product category, reflecting consumer preference. The majority of sales, $356.64 million, came from online transactions, surpassing both in-store and outlet sales. July was the most profitable month, generating $95 million, indicating a peak in consumer spending during this period. Male customers accounted for the largest share of units sold, with 939,000 units purchased. In terms of profit, the dashboard shows a total of $332.1 million, with 2,478,861 units sold. West Gear led the retail segment with $243 million in sales, followed by Foot Locker at $220 million. The Western region was the most lucrative, contributing $270 million to the overall sales. The dashboard also highlights seasonal and regional differences in sales, with online shopping and men\'s footwear consistently driving revenue. These insights suggest targeted strategies could further enhance sales in high-performing regions and product categories, particularly during peak months.',
    url: 'https://drive.google.com/file/d/1qM-d6tHtKwwpoI6OdCAKKpLY4SVK9W3h/view?usp=drive_link',
    previewImage: Project5,
    type:"Power BI",
    technologies: [
      'Power BI ',
      'DAX',
      'Data Modelling',
      'Data Visualization',
      ],
  },
  {
    name: 'Movies Recommendation App',
    description:'After Scraping the best 300 movies, I made a recommendation system app. The program is a Python (GUI) application built with the Tkinter library to recommend movies based on the user\'s mood. Movie data is loaded from a CSV file, and each movie\'s description is analyzed to identify its mood using predefined keywords. The app features a simple graphical interface where users can select their mood and view suggested movies along with details (story, cast, year, rating). It provides a personalized experience tailored to the user\'s current emotional state.',
    url: 'https://drive.google.com/file/d/1TWgnQseqWdu4_psKyPSHgqxjAquH5_bY/view?usp=drive_link',
    previewImage: Project11,
    type:"Python",
    technologies: [
      'Python',
      'GUI',
      'Webscraping',
    ],
  },
  {
    name: 'Video Games Analysis',
    description:'To perform an in-depth exploratory data analysis (EDA) on a video game dataset and answer 25 business-related analytical questions regarding games, platforms, sales, scores, and publishers. Recommendations are: Focus on high-performing genres (Action, Sports, Racing, RPGs), target strong regions (North America & Europe for sales; Japan for RPGs), and monitor trends (mobile, cloud, and VR/AR gaming shifts).',
    url: 'https://drive.google.com/file/d/1pD4xCGlOD_unKnns9A3ZAmKPTqZDxn-b/view?usp=sharing',
    previewImage: Project12,
    type:"Python",
    technologies: [
      'Python',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    name: 'University Student Analysis Using Streamlit',
    description:'The application is an interactive university dashboard built using Streamlit, offering detailed student analytics and performance visualization. It reads student data from a CSV file and allows filtering by gender, department, and age group. The dashboard is organized into four tabs: basic statistics, department overview, performance insights, and score correlation. Each tab displays data using customized visuals including styled metric cards, bar charts, pie charts, scatter plots, and correlation matrices. Key statistics such as attendance, quizzes scores, final exams, and total scores are summarized and visualized per department and student category. The dashboard also analyzes extracurricular participation, parent education impact, and internet access at home. Overall, it provides a visually appealing and data-rich interface to explore and understand student performance patterns.',
    url: 'https://drive.google.com/file/d/1R5oae0sB_RkwY4jh4bkp6THYuf64X0FG/view?usp=sharing',
    previewImage: Project13,
    type:"Python",
    technologies: [
      'Python',
      'Streamlit',
      'Plotly',
    ],
  },
  {
    name: 'Movies Analysis',
    description:'This project explores the Sakila database using MySQL Workbench to analyze and visualize key movie rental metrics. It includes 25 SQL queries addressing customer behavior, film popularity, rental trends, and revenue insights. The dashboard presents data via charts and tables, aiding strategic decisions like boosting top categories, targeting peak rental days, and re-engaging inactive customers for better business outcomes.',
    url: 'https://drive.google.com/file/d/1P7Y4ecJI_MZkbOiRskX8Zu21c3T6L8JB/view?usp=sharing',
    previewImage: Project14,
    type:"SQL",
    technologies: [
      'MYSQL',
      'Data Analysis',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Data Visualization',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    
    personAvatar: cer1,
   },
  {
    
    personAvatar: cer2,
    },
  {
   
    personAvatar: cer3,
    },
  {
    
    personAvatar: cer4,
    },
  {
    
    personAvatar: cer5,
    },
  {
    
    personAvatar: cer6,
    },
  {
    
    personAvatar: cer7,
    },
];
