export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavMenuItem {
  title: string;
  dropdown?: NavDropdownItem[];
  href?: string;
  isCta?: boolean;
}

export const navigationMenu: NavMenuItem[] = [
  {
    title: 'Company',
    dropdown: [
      { label: 'About Us', href: '#' },
      { label: 'Accreditations & Awards', href: '#' },
      { label: 'Our Customers', href: '#' },
      { label: 'Industry Partners', href: '#' },
      { label: 'Network & Data Centers', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Customer Support (24x7)', href: '#' }
    ]
  },
  {
    title: 'Domain',
    dropdown: [
      { label: 'Domain Registration', href: '#' },
      { label: 'Country Domains', href: '#' },
      { label: 'Domain Transfer', href: '#' }
    ]
  },
  {
    title: 'Web Hosting',
    dropdown: [
      { label: 'Shared Hosting', href: '#' },
      { label: 'WordPress Hosting', href: '#' },
      { label: 'VPS Hosting', href: '#' },
      { label: 'Dedicated Server Hosting', href: '#' },
      { label: 'Reseller Hosting', href: '#' }
    ]
  },
  {
    title: 'Microsoft',
    dropdown: [
      { label: 'Office 365 Business', href: '#' },
      { label: 'Azure Cloud', href: '#' },
      { label: 'Microsoft 365 Enterprise', href: '#' },
      { label: 'Microsoft Co-Pilot', href: '#' },
      { label: 'Dynamics 365', href: '#' },
      { label: 'Microsoft Migration', href: '#' }
    ]
  },
  {
    title: 'Solutions',
    dropdown: [
      { label: 'CRM & ERP Implementation', href: '#' },
      { label: 'Google Workspace', href: '#' },
      { label: 'AWS Cloud', href: '#' },
      { label: 'Backup & Disaster Recovery', href: '#' },
      { label: 'M365 Backup', href: '#' },
      { label: 'Virtual Private Network', href: '#' },
      { label: 'DDoS Protection', href: '#' },
      { label: 'Server Security & Monitoring', href: '#' },
      { label: 'SSL Certificates', href: '#' }
    ]
  },
  {
    title: 'Contact',
    href: '#contact',
    isCta: true
  }
];
