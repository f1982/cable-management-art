import { Twitter, Youtube } from 'lucide-react'

import { MenuItemData } from '@/components/page/header/menu-data'

export const navMenuData: MenuItemData[] = [
  {
    label: 'Home',
    title: 'Home',
    link: '/',
  },
  {
    title: 'Aggregation',
    link: '/doc',
    label: 'Aggregation',
  },
  {
    title: 'Blog',
    link: '/blog',
    label: 'Blog',
  },
  {
    title: 'About',
    link: '/about',
    label: 'About',
  },
  {
    title: 'Beats',
    link: '/beats',
    label: 'Beats',
  },
]

export const socialLinks: MenuItemData[] = [
  {
    title: 'Twitter',
    label: 'Twitter',
    icon: <Twitter className="stroke-primary" />,
    link: 'https://twitter.com/emojiyou',
  },
  {
    title: 'YouTube',
    label: 'YouTube',
    icon: <Youtube className="stroke-primary" />,
    link: 'https://www.youtube.com/channel/UC8_l368_87i370525030',
  },
  // {
  //   title: 'Ins',
  //   label: 'Ins',
  //   icon: <Instagram className="stroke-primary" />,
  //   link: 'https://www.youtube.com/channel/UC8_l368_87i370525030',
  // },
  // {
  //   title: 'Facebook',
  //   label: 'Facebook',
  //   icon: <Facebook className="stroke-primary" />,
  //   link: 'https://www.youtube.com/channel/UC8_l368_87i370525030',
  // },
]

export const otherLinks: MenuItemData[] = [
  {
    title: 'About',
    link: '/about',
    label: 'About',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    title: 'Terms of Service',
    link: '/terms-of-service',
    label: 'Terms of Service',
  },
]

export const footerLinks = [navMenuData, otherLinks]
