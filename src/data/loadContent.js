import personalInfo from '../../content/settings/personalInfo.json';
import contactInfo from '../../content/settings/contactInfo.json';

const projectModules = import.meta.glob('/content/projects/*.json', { eager: true, import: 'default' });
const timelineModules = import.meta.glob('/content/timeline/*.json', { eager: true, import: 'default' });
const skillsModules = import.meta.glob('/content/skills/*.json', { eager: true, import: 'default' });

const slugFromPath = (path) => path.split('/').pop().replace('.json', '');

export const navLinks = [
  { id: 'about', label: '关于' },
  { id: 'works', label: '作品' },
  { id: 'timeline', label: '经历' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '联系' },
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
