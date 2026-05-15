import personalInfo from '../../content/settings/personalInfo.json';
import contactInfo from '../../content/settings/contactInfo.json';

const projectModules = import.meta.glob('/content/projects/*.json', { eager: true, import: 'default' });
const timelineModules = import.meta.glob('/content/timeline/*.json', { eager: true, import: 'default' });
const skillsModules = import.meta.glob('/content/skills/*.json', { eager: true, import: 'default' });

const slugFromPath = (path) => path.split('/').pop().replace('.json', '');

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'timeline', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const projects = Object.entries(projectModules).map(([path, data]) => ({
  id: slugFromPath(path),
  ...data,
}));

export const timeline = Object.entries(timelineModules).map(([path, data]) => ({
  id: slugFromPath(path),
  ...data,
}));

export const skillCategories = Object.values(skillsModules);

export { personalInfo, contactInfo };
