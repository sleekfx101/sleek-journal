import React, { useState } from 'react';
import { FiUser, FiLock, FiDatabase, FiServer, FiShare2, FiCloud, FiCreditCard, FiBell, FiGlobe, FiSave } from 'react-icons/fi';

import PageHeader from '../../components/common/PageHeader';
import ChartCard from '../../components/common/ChartCard';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser size={18} /> },
    { id: 'account', label: 'Account', icon: <FiLock size={18} /> },
    { id: 'data', label: 'Data Management', icon: <FiDatabase size={18} /> },
    { id: 'api', label: 'API Settings', icon: <FiServer size={18} /> },
    { id: 'sharing', label: 'Sharing', icon: <FiShare2 size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell size={18} /> },
    { id: 'subscription', label: 'Subscription', icon: <FiCreditCard size={18} /> },
  ];
  
  return (
    <div className="p-4 md:p-6">
      <PageHeader 
        title="Settings" 
        subtitle="Manage your account and preferences"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-dark-card rounded-xl p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:bg-dark-lighter hover:text-text-primary'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <ChartCard title="Profile Information" toolbar={false}>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="w-24 h-24 rounded-full bg-dark-lighter flex items-center justify-center mb-4 md:mb-0">
                    <FiUser size={36} className="text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Profile Picture</h3>
                    <p className="text-text-secondary text-sm mb-3">Upload a new avatar or profile picture</p>
                    <div className="flex space-x-3">
                      <button className="btn btn-primary">Upload</button>
                      <button className="btn btn-secondary">Remove</button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">First Name</label>
                    <input type="text" className="input w-full" value="John" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Last Name</label>
                    <input type="text" className="input w-full" value="Trader" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Email</label>
                    <input type="email" className="input w-full" value="john.trader@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Phone</label>
                    <input type="tel" className="input w-full" value="+1 (555) 123-4567" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-text-secondary mb-1">Bio</label>
                    <textarea 
                      className="input w-full h-24" 
                      placeholder="Tell us about yourself as a trader..."
                      value="Professional day trader with 5 years of experience in forex and stock markets."
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn btn-primary flex items-center">
                    <FiSave className="mr-2" /> Save Changes
                  </button>
                </div>
              </div>
            </ChartCard>
          )}
          
          {/* Account Settings */}
          {activeTab === 'account' && (
            <ChartCard title="Account Security" toolbar={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Current Password</label>
                      <input type="password" className="input w-full" placeholder="••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">New Password</label>
                      <input type="password" className="input w-full" placeholder="••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Confirm New Password</label>
                      <input type="password" className="input w-full" placeholder="••••••••" />
                    </div>
                    <button className="btn btn-primary">Update Password</button>
                  </div>
                </div>
                
                <div className="h-px bg-dark-lighter"></div>
                
                <div>
                  <h3 className="font-semibold mb-3">Two Factor Authentication</h3>
                  <p className="text-text-secondary mb-3">Add an extra layer of security to your account</p>
                  <button className="btn btn-primary">Enable 2FA</button>
                </div>
                
                <div className="h-px bg-dark-lighter"></div>
                
                <div>
                  <h3 className="font-semibold mb-3">Account Actions</h3>
                  <div className="space-y-3">
                    <button className="btn btn-secondary w-full">Export All Data</button>
                    <button className="btn btn-secondary w-full text-accent-red">Delete Account</button>
                  </div>
                </div>
              </div>
            </ChartCard>
          )}
          
          {/* API Settings */}
          {activeTab === 'api' && (
            <ChartCard title="API Configuration" toolbar={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">API Keys</h3>
                  <div className="bg-dark-lighter p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">API Key</span>
                      <button className="text-primary hover:underline text-sm">Generate New</button>
                    </div>
                    <code className="block p-2 bg-dark rounded text-text-secondary overflow-x-auto">
                      sk_live_51HV1HlGs9QBSbOPrxSWBxPi0hsBKbH*****************
                    </code>
                  </div>
                  <p className="text-text-secondary text-sm">Your API key grants access to your account. Never share it publicly.</p>
                </div>
                
                <div className="h-px bg-dark-lighter"></div>
                
                <div>
                  <h3 className="font-semibold mb-3">Trading Platform Integration</h3>
                  <p className="text-text-secondary mb-4">Connect your trading platform to SleekJournal for automatic trade importing</p>
                  
                  <div className="space-y-3">
                    <div className="bg-dark-lighter p-4 rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <FiGlobe size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="font-medium">TradingView</p>
                          <p className="text-text-secondary text-sm">Connect to TradingView for chart analysis</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary text-sm">Connect</button>
                      </div>
                    </div>
                    
                    <div className="bg-dark-lighter p-4 rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <FiGlobe size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Interactive Brokers</p>
                          <p className="text-text-secondary text-sm">Import trades from Interactive Brokers</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary text-sm">Connect</button>
                      </div>
                    </div>
                    
                    <div className="bg-dark-lighter p-4 rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <FiGlobe size={20} className="mr-3 text-primary" />
                        <div>
                          <p className="font-medium">MetaTrader</p>
                          <p className="text-text-secondary text-sm">Import trades from MT4/MT5</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary text-sm">Connect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ChartCard>
          )}
          
          {/* Data Management */}
          {activeTab === 'data' && (
            <ChartCard title="Data Management" toolbar={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Import/Export</h3>
                  <p className="text-text-secondary mb-4">Manage your trading data</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-dark-lighter p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <FiUploadCloud size={24} className="mr-3 text-primary" />
                        <h4 className="font-medium">Import Data</h4>
                      </div>
                      <p className="text-text-secondary text-sm mb-3">
                        Upload CSV files from trading platforms
                      </p>
                      <button className="btn btn-primary w-full">Import CSV</button>
                    </div>
                    
                    <div className="bg-dark-lighter p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <FiCloud size={24} className="mr-3 text-primary" />
                        <h4 className="font-medium">Export Data</h4>
                      </div>
                      <p className="text-text-secondary text-sm mb-3">
                        Download your trades and analysis
                      </p>
                      <button className="btn btn-primary w-full">Export</button>
                    </div>
                  </div>
                </div>
                
                <div className="h-px bg-dark-lighter"></div>
                
                <div>
                  <h3 className="font-semibold mb-3">Data Storage</h3>
                  <div className="bg-dark-lighter p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-secondary">Storage Used</span>
                      <span className="font-medium">142 MB / 5 GB</span>
                    </div>
                    <div className="w-full bg-dark rounded-full h-2.5 mb-4">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                    <button className="btn btn-secondary text-sm">Manage Storage</button>
                  </div>
                </div>
                
                <div className="h-px bg-dark-lighter"></div>
                
                <div>
                  <h3 className="font-semibold mb-3">Data Backup</h3>
                  <p className="text-text-secondary mb-4">Schedule automatic backups of your trading data</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span>Automatic Backups</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" checked readOnly />
                      <div className="w-11 h-6 bg-dark-lighter peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-dark-card after:border-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Backup Frequency</label>
                      <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary w-full">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Retention Period</label>
                      <select className="bg-dark-lighter border border-dark-card rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary w-full">
                        <option>7 days</option>
                        <option>30 days</option>
                        <option>90 days</option>
                        <option>365 days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </ChartCard>
          )}
          
          {/* Display other settings tabs with default content */}
          {!['profile', 'account', 'api', 'data'].includes(activeTab) && (
            <ChartCard title={tabs.find(tab => tab.id === activeTab)?.label || 'Settings'} toolbar={false}>
              <div className="flex flex-col items-center justify-center py-12">
                <div className="bg-dark-lighter p-4 rounded-full mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.icon || <FiSettings size={32} />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tabs.find(tab => tab.id === activeTab)?.label} Settings</h3>
                <p className="text-text-secondary text-center max-w-md mb-6">
                  Settings for this section are being implemented. Check back soon for updates.
                </p>
                <button className="btn btn-primary">Return to Dashboard</button>
              </div>
            </ChartCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;