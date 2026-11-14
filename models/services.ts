export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'domains',
    icon: 'D',
    title: 'Domain Registration',
    description: 'Choose a unique, memorable name for your website and register it with us, including country-specific domains.',
    link: '#'
  },
  {
    id: 'hosting',
    icon: 'H',
    title: 'Web Hosting',
    description: 'Make your website reachable on the internet with dependable shared, WordPress, VPS and dedicated hosting.',
    link: '#'
  },
  {
    id: 'aws',
    icon: 'A',
    title: 'AWS Cloud',
    description: 'Build, deploy and manage applications with a wide range of AWS services, scaled to your needs.',
    link: '#'
  },
  {
    id: 'bizapps',
    icon: 'Z',
    title: 'Business Applications',
    description: 'Streamline sales, marketing, finance, HR and IT with CRM, ERP and productivity platforms.',
    link: '#'
  }
];
