import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, User } from 'lucide-react';

const ScheduleSection = ({ schedule }) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three days of insightful sessions, workshops, and networking
          </p>
        </div>

        {/* Schedule Tabs */}
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-gray-900 border border-cyan-500/30 p-1 rounded-lg">
            {schedule.map((day, index) => (
              <TabsTrigger
                key={index}
                value={String(index)}
                onClick={() => setActiveDay(index)}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white text-gray-400 font-semibold uppercase tracking-wider transition-all"
              >
                {day.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {schedule.map((day, dayIndex) => (
            <TabsContent key={dayIndex} value={String(dayIndex)}>
              <div className="space-y-4 max-w-4xl mx-auto">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Time */}
                      <div className="flex items-center gap-2 text-cyan-400 min-w-[140px]">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{session.time}</span>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-px h-12 bg-cyan-500/30" />

                      {/* Session Info */}
                      <div className="flex-grow">
                        <h3 className="text-white font-bold text-lg mb-2">
                          {session.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{session.speaker}</span>
                        </div>
                      </div>

                      {/* Decorative element */}
                      <div className="hidden md:block w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    </div>

                    {/* Hover line effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;
