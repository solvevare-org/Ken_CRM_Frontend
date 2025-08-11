// ...existing code...
import { 
  Home, 
  Users, 
  Building2, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings, 
  HelpCircle,
  BarChart3,
  MapPin,
  // ...existing code...
  Mail,
  Target
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  collapsed?: boolean;
}

export function Sidebar({ activeTab, onTabChange, collapsed = false }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'leads', label: 'Leads', icon: Target },
    { id: 'properties', label: 'Properties', icon: Building2 },
    { id: 'deals', label: 'Deals', icon: TrendingUp },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'marketing', label: 'Marketing', icon: Mail },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <div className={`
  bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 text-black
      ${collapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-black" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-black">RealEstate</h1>
              <p className="text-xs text-black">CRM Pro</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                ${isActive 
                  ? 'bg-blue-50 text-black border border-blue-200 shadow-sm' 
                  : 'text-black hover:bg-gray-50 hover:text-black'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-black'}`} />
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                ${isActive 
                  ? 'bg-blue-50 text-black border border-blue-200' 
                  : 'text-black hover:bg-gray-50 hover:text-black'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-black'}`} />
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}