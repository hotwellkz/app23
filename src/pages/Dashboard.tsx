import React from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { ActiveProjects } from '../components/dashboard/ActiveProjects';
import { ClientsOverview } from '../components/dashboard/ClientsOverview';
import { FinancialWidget } from '../components/dashboard/FinancialWidget';
import { ProjectTimeline } from '../components/dashboard/ProjectTimeline';
import { DashboardNotifications } from '../components/dashboard/DashboardNotifications';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Панель управления</h1>
          <p className="mt-1 text-sm text-gray-500">
            Обзор ключевых показателей и активных проектов
          </p>
        </div>

        <div className="grid gap-8">
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ActiveProjects />
              <ProjectTimeline />
            </div>
            
            <div className="space-y-8">
              <ClientsOverview />
              <FinancialWidget />
              <DashboardNotifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};