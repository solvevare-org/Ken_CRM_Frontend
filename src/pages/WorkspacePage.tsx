import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  Plus, 
  Space as Workspace2, 
  Users, 
  Settings, 
  LogOut, 
  Building2, 
  FolderPlus, 
  BarChart3,
  Bell,
  Search,
  Menu,
  Crown,
  Zap,
  TrendingUp,
  Calendar,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function WorkspacePage() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();

  const handleCreateNewWorkspace = () => {
    navigate('/workspace-details');
  };

  const handleCreateSubOrganization = () => {
    navigate('/workspace-details');
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stats = [
    { label: 'Active Projects', value: '24', change: '+12%', icon: FolderPlus, color: 'from-blue-500 to-purple-600' },
    { label: 'Team Members', value: '18', change: '+25%', icon: Users, color: 'from-green-500 to-emerald-600' },
    { label: 'Revenue', value: '$127K', change: '+18%', icon: TrendingUp, color: 'from-pink-500 to-red-600' },
    { label: 'Productivity', value: '94%', change: '+8%', icon: BarChart3, color: 'from-purple-500 to-indigo-600' }
  ];

  const recentActivities = [
    { action: 'New project "Mobile App Redesign" created', time: '2 hours ago', type: 'project' },
    { action: 'Sarah Johnson joined the team', time: '4 hours ago', type: 'team' },
    { action: 'Q4 Analytics report generated', time: '6 hours ago', type: 'report' },
    { action: 'Client meeting scheduled for tomorrow', time: '8 hours ago', type: 'meeting' },
    { action: 'New workspace "Design Studio" created', time: '1 day ago', type: 'workspace' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-20 glass border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl glass hover:bg-white/20 transition-colors"
              >
                <Menu className="w-6 h-6 text-black" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <Workspace2 className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-black holographic">
                    {state.currentWorkspace?.name || 'Premium Workspace'}
                  </h1>
                  <p className="text-black text-sm">Welcome back, {state.user?.name?.split(' ')[0]}!</p>
                </div>
              </div>
            </div>
            
            {/* Center - Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="Search projects, teams, analytics..."
                  className="w-full pl-12 pr-4 py-3 glass rounded-2xl border border-black text-black placeholder-black focus:outline-none focus:ring-4 focus:ring-black/30 focus:border-black transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Right section */}
            <div className="flex items-center space-x-4">
              <Button variant="glass" size="sm" className="hidden lg:flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Quick Add</span>
              </Button>
              
              <button className="relative p-3 glass rounded-2xl hover:bg-white/20 transition-colors">
                <Bell className="w-6 h-6 text-black" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-red-500 text-black text-xs rounded-full flex items-center justify-center animate-pulse">
                  3
                </span>
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 glass rounded-2xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold">
                      {state.user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-black font-semibold">{state.user?.name}</p>
                    <p className="text-black text-sm capitalize">{state.user?.role}</p>
                  </div>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-16 w-64 glass rounded-2xl border border-white/20 py-2 z-50 animate-scale-in">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="font-semibold text-black">{state.user?.name}</p>
                      <p className="text-sm text-black">{state.user?.email}</p>
                    </div>
                    
                    <button className="w-full px-4 py-3 text-left text-black hover:bg-black/10 flex items-center space-x-3 transition-colors">
                      <Settings className="w-5 h-5" />
                      <span>Settings</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left text-black hover:bg-black/10 flex items-center space-x-3 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-slide-up">
          <div className="glass-card rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl font-black text-black mb-2 holographic">
                  Dashboard Command Center
                </h2>
                <p className="text-xl text-black">
                  Your premium workspace is performing exceptionally well today.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center animate-float">
                  <Crown className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="glass rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                    <div className="text-black text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Create New Workspace */}
          <div 
            onClick={handleCreateNewWorkspace}
            className="group glass-card rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-500 magnetic border border-white/20 hover:border-blue-400/50 animate-slide-up"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <Plus className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2 holographic">Create New Workspace</h3>
                <p className="text-black mb-4">
                  Launch a new workspace for your next big project. Set up teams, configure tools, and start building.
                </p>
                <div className="flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                  <span>Get Started</span>
                  <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Create Sub-Organization */}
          <div 
            onClick={() => navigate('/workspace-details')}
            className="group glass-card rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-500 magnetic border border-white/20 hover:border-green-400/50 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <Workspace2 className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2 holographic">Manage Workspaces</h3>
                <p className="text-black mb-4">
                  View all your workspaces, create new ones, or switch between existing workspaces for different projects.
                </p>
                <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                  <span>Manage Workspaces</span>
                  <Sparkles className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Quick Workspace Switcher */}
        {state.workspaces.length > 1 && (
          <div className="glass-card rounded-3xl p-8 border border-white/20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black holographic">Switch Workspace</h3>
              <Badge variant="info" className="!bg-blue-500/20 !text-blue-300 !border-blue-500/30">
                {state.workspaces.length} available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {state.workspaces
                .filter(workspace => workspace.id !== state.currentWorkspace?.id)
                .slice(0, 4)
                .map((workspace, index) => (
                <div
                  key={workspace.id}
                  onClick={() => dispatch({ type: 'SET_CURRENT_WORKSPACE', payload: workspace })}
                  className="group glass rounded-2xl p-4 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 animate-slide-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Workspace2 className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black group-hover:text-blue-300 transition-colors">
                        {workspace.name}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-black">
                        <span>{workspace.memberCount} members</span>
                        <span>•</span>
                        <span>{workspace.activeListings} active</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-black group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
            
            {state.workspaces.length > 5 && (
              <div className="mt-4 text-center">
                <Button 
                  variant="glass" 
                  size="sm"
                  onClick={() => navigate('/workspace-details')}
                >
                  View All Workspaces
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Recent Activity */}
        <div className="glass-card rounded-3xl p-8 border border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-black holographic">Recent Activity</h3>
            <Button variant="glass" size="sm">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 glass rounded-2xl hover:bg-white/10 transition-colors animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'project' ? 'bg-blue-500' :
                  activity.type === 'team' ? 'bg-green-500' :
                  activity.type === 'report' ? 'bg-purple-500' :
                  activity.type === 'meeting' ? 'bg-yellow-500' :
                  'bg-pink-500'
                } animate-pulse`}></div>
                <div className="flex-1">
                  <p className="text-black font-medium">{activity.action}</p>
                </div>
                <span className="text-black text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}