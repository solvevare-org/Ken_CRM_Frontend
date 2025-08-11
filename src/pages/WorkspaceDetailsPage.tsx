import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { 
  Space as Workspace2, 
  Sparkles, 
  Plus, 
  Calendar,
  Users,
  FolderOpen,
  ArrowRight,
  Building2,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export function WorkspaceDetailsPage() {
  const [workspaceName, setWorkspaceName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();

  const handleSaveAndCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspaceName.trim()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const newWorkspace = {
        id: Date.now().toString(),
        name: workspaceName,
        description: description || 'New workspace for organizing projects and teams',
        type: 'main' as const,
        createdAt: new Date().toISOString(),
        memberCount: 1,
        activeListings: 0,
        totalDeals: 0,
        monthlyRevenue: 0
      };
      
      dispatch({ type: 'ADD_WORKSPACE', payload: newWorkspace });
      setLoading(false);
      navigate('/workspace-created');
    }, 2000);
  };

  const handleSelectWorkspace = (workspace: any) => {
    dispatch({ type: 'SET_CURRENT_WORKSPACE', payload: workspace });
    navigate('/workspace');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <PageLayout
      title="Workspace Management"
      subtitle="Create new workspaces or switch between existing ones"
      showBackButton
      onBack={() => navigate(-1)}
    >
      <div className="space-y-10">
        {/* Existing Workspaces Section */}
        {state.workspaces.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black holographic">
                  Your Workspaces
                </h3>
              </div>
              <Badge variant="info" className="!bg-blue-500/20 !text-blue-300 !border-blue-500/30 px-4 py-2">
                {state.workspaces.length} workspace{state.workspaces.length !== 1 ? 's' : ''}
              </Badge>
            </div>
            
            <div className="grid gap-6">
              {state.workspaces.map((workspace, index) => (
                <div
                  key={workspace.id}
                  onClick={() => handleSelectWorkspace(workspace)}
                  className="group glass-card rounded-3xl p-8 cursor-pointer hover:scale-[1.02] transition-all duration-500 magnetic border border-white/20 hover:border-white/40 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <Workspace2 className="w-8 h-8 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-300 transition-colors">
                          {workspace.name}
                        </h4>
                        <p className="text-black text-base mb-4 leading-relaxed">
                          {workspace.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-black">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Created {formatDate(workspace.createdAt)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{workspace.memberCount} member{workspace.memberCount !== 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FolderOpen className="w-4 h-4" />
                            <span>{workspace.activeListings} active projects</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-2xl font-bold text-black mb-1">
                          <DollarSign className="w-6 h-6 text-green-400" />
                          <span>{formatCurrency(workspace.monthlyRevenue)}</span>
                        </div>
                        <div className="text-sm text-black">Monthly Revenue</div>
                        <div className="flex items-center space-x-1 mt-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-semibold">+12% this month</span>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-black group-hover:text-black group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">Active</span>
                      </div>
                      <div className="text-black text-sm">
                        Last activity: 2 hours ago
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-black text-sm">
                      <span>Click to switch workspace</span>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        {state.workspaces.length > 0 && (
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-transparent text-black font-medium">or create a new workspace</span>
            </div>
          </div>
        )}

        {/* Create New Workspace Section */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Plus className="w-5 h-5 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black holographic">
              Create New Workspace
            </h3>
          </div>

          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Plus className="w-10 h-10 text-black" />
            </div>
            <p className="text-xl text-black leading-relaxed">
              Set up a new workspace to organize different projects, teams, or business units
            </p>
          </div>

          <form onSubmit={handleSaveAndCreate} className="space-y-8">
            <Input
              label="Workspace Name"
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name (e.g., Marketing Team, Product Development)"
              helperText="Choose a descriptive name that reflects the workspace purpose"
              required
              floating={true}
            />
            
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-black mb-2">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what this workspace will be used for... (e.g., This workspace is for managing all marketing campaigns, content creation, and brand initiatives)"
                rows={4}
                className="w-full px-6 py-4 glass rounded-2xl border border-black text-black placeholder-black focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-black focus:bg-black/20 transition-all duration-300 backdrop-blur-xl hover:border-black/30 hover:bg-black/10 resize-none text-base leading-relaxed"
              />
              <p className="text-sm text-black flex items-center space-x-2">
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span>Help your team understand the workspace purpose</span>
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <Sparkles className="w-8 h-8 text-green-400 flex-shrink-0 mt-1 animate-pulse" />
                <div>
                  <h4 className="font-bold text-black mb-4 text-lg">What happens next?</h4>
                  <ul className="text-base text-black space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Your workspace will be created instantly</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Invite team members to start collaborating</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span>Set up projects and organize your workflow</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <span>Customize settings and permissions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              variant="gradient"
              className="w-full flex items-center justify-center space-x-3 !py-5 !text-lg !font-bold"
              loading={loading}
              disabled={!workspaceName.trim()}
              magnetic
              glow
            >
              <Plus className="w-6 h-6" />
              <span>{loading ? 'Creating Workspace...' : 'Create Workspace'}</span>
            </Button>
          </form>
        </div>

        {/* Workspace Benefits */}
        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h4 className="font-bold text-black text-lg">Team Collaboration</h4>
            <p className="text-base text-black leading-relaxed">
              Work together seamlessly with your team members across projects and initiatives
            </p>
          </div>
          <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto">
              <FolderOpen className="w-8 h-8 text-black" />
            </div>
            <h4 className="font-bold text-black text-lg">Project Organization</h4>
            <p className="text-base text-black leading-relaxed">
              Keep your projects organized, accessible, and properly structured for maximum efficiency
            </p>
          </div>
          <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <h4 className="font-bold text-black text-lg">Advanced Features</h4>
            <p className="text-base text-black leading-relaxed">
              Access premium tools, integrations, and analytics to supercharge your productivity
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}