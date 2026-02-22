import React from 'react';
import SponsorsSection from '../components/SponsorsSection';
import { conferenceData } from '../data/mockData';

const Sponsorship = () => <SponsorsSection sponsors={conferenceData.sponsors} />;

export default Sponsorship;
