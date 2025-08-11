import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Users, User, Crown, Building2, Sparkles, Zap } from 'lucide-react';

export function SignupOptionsPage() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const handleIndividualSignup = () => {
    dispatch({ type: 'SET_SIGNUP_TYPE', payload: 'individual' });
    navigate('/payment');
  };

  const handleOrganizationSignup = () => {
    dispatch({ type: 'SET_SIGNUP_TYPE', payload: 'organization' });
    navigate('/team-invite');
  };

  return (
    <PageLayout
      title="Choose Your Journey"
      subtitle="Select the perfect workspace solution tailored to your unique needs"
      showBackButton
      onBack={() => navigate('/')}
    >
      <div className="space-y-8">
        {/* Main Options */}
        <div className="grid gap-6">
          {/* Individual Option */}
          <div 
            className="group relative glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 magnetic border border-white/20 hover:border-white/40"
            onClick={handleIndividualSignup}
          >
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <User className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2 holographic">Individual Pro</h3>
                <p className="text-black text-lg mb-4 leading-relaxed">
                  Perfect for solo entrepreneurs, freelancers, and personal projects. 
                  Get premium features with unlimited potential.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    ⚡ Instant Setup
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    🚀 AI Assistant
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    💎 Premium Tools
                  </span>
                </div>
                
                <div className="flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                  <span>Get Started</span>
                  <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Hover effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>

          {/* Organization Option */}
          <div 
            className="group relative glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 magnetic border border-white/20 hover:border-white/40"
            onClick={handleOrganizationSignup}
          >
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <Building2 className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2 holographic">Organization Elite</h3>
                <p className="text-black text-lg mb-4 leading-relaxed">
                  Built for teams, agencies, and enterprises. Advanced collaboration 
                  tools with unlimited scalability and premium support.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    👥 Team Management
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                    📊 Advanced Analytics
                  </span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30">
                    🔒 Enterprise Security
                  </span>
                </div>
                
                <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                  <span>Build Your Empire</span>
                  <Sparkles className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Hover effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl p-8 border border-white/20">
          <h3 className="text-xl font-bold text-black mb-6 text-center holographic">Feature Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-black mb-4">Features</h4>
              <div className="space-y-3 text-black">
                <div>Workspaces</div>
                <div>Team Members</div>
                <div>Storage</div>
                <div>AI Assistant</div>
                <div>Priority Support</div>
                <div>Custom Integrations</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-blue-300 mb-4">Individual Pro</h4>
              <div className="space-y-3">
                <div className="text-black">5 Workspaces</div>
                <div className="text-black">Personal Only</div>
                <div className="text-black">100GB</div>
                <div className="text-green-400">✓ Included</div>
                <div className="text-green-400">✓ Email Support</div>
                <div className="text-yellow-400">Basic</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-green-300 mb-4">Organization Elite</h4>
              <div className="space-y-3">
                <div className="text-black">Unlimited</div>
                <div className="text-black">Up to 100</div>
                <div className="text-black">1TB</div>
                <div className="text-green-400">✓ Advanced AI</div>
                <div className="text-green-400">✓ 24/7 Priority</div>
                <div className="text-green-400">✓ Full Access</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Login */}
        <div className="text-center pt-6">
          <Button 
            variant="glass"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 mx-auto"
          >
            <span>← Back to Login</span>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}