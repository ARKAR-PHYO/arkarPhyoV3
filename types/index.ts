export interface LayoutProps {
  children: JSX.Element;
}

export interface HeroProps {}
export interface HomeProps {
  experienceData: [];
}
export interface NavigationProps {
  isHam: boolean;
}

export interface HeaderProps {}

export interface NameLogoIconProps {
  className?: string;
  isHam: boolean;
}

export interface ExperiencesProps {
  notionData?: any;
}
export interface PagesLayoutProps {
  children: JSX.Element;
  pageTitle: string;
  className?: string;
  id?: string;
}

// non page
export interface getDatabaseProps {
  databaseId?: any;
}

// Ui
export interface UiTextProps {
  text?: any;
  className?: string;
}

// ICONS
export interface FacebookIconProps {
  className?: string;
}
export interface GithubIconProps {
  className?: string;
}
export interface LinkedInIconProps {
  className?: string;
}

// CONTEXTS

export interface AppContextProps {
  pageId?: any;
  defaultPageId: any;
}
export interface AppWrapperProps {
  children: JSX.Element;
  pageId?: any;
  setPageId?: any;
}
