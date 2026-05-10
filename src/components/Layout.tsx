import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import PillNav from './PillNav';
import type { PillNavItem } from './PillNav';
import logo from '../assets/logo.svg';
import { useStore } from '../store';

const NAV_PILLS: PillNavItem[] = [
  { href: '/trips', label: 'My Trips', ariaLabel: 'My Trips' },
  { href: '/trips/new', label: 'New Trip', ariaLabel: 'New Trip' },
  { href: '/cities', label: 'Cities', ariaLabel: 'Cities' },
  { href: '/activities', label: 'Activities', ariaLabel: 'Activities' },
  { href: '/itinerary', label: 'Itinerary', ariaLabel: 'Itinerary' },
  { href: '/budget', label: 'Budget', ariaLabel: 'Budget' },
  { href: '/packing', label: 'Packing', ariaLabel: 'Packing' },
  { href: '/notes', label: 'Notes', ariaLabel: 'Notes' },
];

interface LayoutProps {
  children: React.ReactNode;
  /** Passed by many pages for future use / consistency; navigation is pathname-driven. */
  title?: string;
}

export default function Layout({ children }: LayoutProps) {
  const { user, logout } = useStore();
  const location = useLocation();


  const pillItems = React.useMemo(() => {
    const list = [...NAV_PILLS];
    if (user?.role === 'admin') {
      list.push({ href: '/admin', label: 'Analytics', ariaLabel: 'Analytics' });
    }
    return list;
  }, [user?.role]);

  const pillPalette = {
    baseColor: '#3d2f24', // Deep coffee brown ink
    pillColor: '#fffcf6', 
    hoveredPillTextColor: '#fffcf6',
    pillTextColor: '#3d2f24',
  };

  return (
    <div className="app-shell-new">
      <div className="explorer-chart-watermark" aria-hidden />
      <header className="header-bar">
        <div className="header-pill-slot">
          <PillNav
            embedded
            logo={logo}
            logoAlt="DesiVagabond"
            logoHref="/"
            items={pillItems}
            activeHref={location.pathname}
            className="custom-nav"
            ease="power2.out"
            baseColor={pillPalette.baseColor}
            pillColor={pillPalette.pillColor}
            hoveredPillTextColor={pillPalette.hoveredPillTextColor}
            pillTextColor={pillPalette.pillTextColor}
            initialLoadAnimation
          />
        </div>

        <div className="header-right">


          <NavLink to="/profile" className={({ isActive }) => `avatar-btn${isActive ? ' active' : ''}`} title={user?.name}>
            <div className="avatar-circle">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
          </NavLink>

          <button type="button" className="btn btn-ghost btn-icon" onClick={logout} title="Sign out">
            <LogOut size={16} />
          </button>
        </div>
      </header>

      <main className="main-new">
        <div className="page-content fade-up">
          {children}
        </div>
      </main>
    </div>
  );
}
