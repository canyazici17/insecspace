import React from 'react';
import AboutSection from '../components/AboutSection';
import { conferenceData } from '../data/mockData';

const About = () => <AboutSection aboutData={conferenceData.about} />;

export default About;
