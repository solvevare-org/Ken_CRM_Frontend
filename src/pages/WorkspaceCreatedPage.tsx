import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { CheckCircle, Rocket, Users, Settings } from 'lucide-react';

export function WorkspaceCreatedPage() {
  const navigate = useNavigate();
  const { state } = useAppContext();

  const handleGoToWorkspace = () => {
    navigate('/workspace');
  };

  return (
    <PageLayout>
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900">
            Workspace Created Successfully!
          </h1>
          
          <p className="text-xl text-gray-600">
            Welcome to <span className="font-semibold text-blue-600">
              {state.currentWorkspace?.name || 'your workspace'}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Started</h3>
            <p className="text-sm text-gray-600">Begin creating projects and organizing your work</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Invite Team</h3>
            <p className="text-sm text-gray-600">Add team members and start collaborating</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Customize</h3>
            <p className="text-sm text-gray-600">Configure settings to match your workflow</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            🎉 You're all set!
          </h3>
          <p className="text-gray-600 mb-6">
            Your workspace is ready and waiting. Jump in and start exploring all the features 
            we've prepared for you and your team.
          </p>
          
          <Button 
            onClick={handleGoToWorkspace}
            size="lg"
            className="min-w-48"
          >
            Go to Workspace
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}