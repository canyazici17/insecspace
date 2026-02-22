import React from 'react';
import ScheduleSection from '../components/ScheduleSection';
import { conferenceData } from '../data/mockData';

const Programme = () => <ScheduleSection schedule={conferenceData.schedule} />;

export default Programme;
