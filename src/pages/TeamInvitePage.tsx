import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { Upload, Mail, Settings } from 'lucide-react';

export function TeamInvitePage() {
  const [emails, setEmails] = useState('');
  const [showCSVModal, setShowCSVModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState('');
  const navigate = useNavigate();

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
      setUploadError('');
    } else {
      setUploadError('Please select a valid CSV file');
    }
  };

  const handleCSVSubmit = () => {
    if (!csvFile) return;
    
    // Simulate CSV processing
    const success = Math.random() > 0.3; // 70% success rate for demo
    
    if (success) {
      setShowCSVModal(false);
      navigate('/payment');
    } else {
      setShowCSVModal(false);
      setShowSupportModal(true);
    }
  };

  const handleManualInvite = () => {
    if (emails.trim()) {
      navigate('/payment');
    }
  };

  const handleCustomWorkspace = () => {
    // Simulate sending custom workspace request
    navigate('/payment');
  };

  return (
    <PageLayout
      title="Invite Your Team"
      subtitle="Add team members to your organization workspace"
      showBackButton
      onBack={() => navigate('/signup-options')}
    >
      <div className="space-y-8">
        <div className="grid gap-6">
          {/* CSV Upload Option */}
          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors bg-white text-gray-900">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Invite via CSV</h3>
                <p className="text-gray-600 mb-4">Upload a CSV file with email addresses to invite multiple team members at once</p>
                <Button 
                  variant="primary"
                  onClick={() => setShowCSVModal(true)}
                >
                  Upload CSV File
                </Button>
              </div>
            </div>
          </div>

          {/* Manual Invite Option */}
          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-green-300 transition-colors bg-white text-gray-900">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Invite Manually</h3>
                <p className="text-gray-600 mb-4">Enter email addresses separated by commas</p>
                <Input
                  placeholder="email1@example.com, email2@example.com"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  className="mb-4"
                />
                <Button 
                  variant="secondary"
                  onClick={handleManualInvite}
                  disabled={!emails.trim()}
                >
                  Send Invitations
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Workspace Option */}
          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors bg-white text-gray-900">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Workspace Request</h3>
                <p className="text-gray-600 mb-4">Need special configurations? Request a custom workspace setup</p>
                <Button 
                  variant="outline"
                  onClick={handleCustomWorkspace}
                >
                  Request Custom Setup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSV Upload Modal */}
      <Modal
        isOpen={showCSVModal}
        onClose={() => setShowCSVModal(false)}
        title="Upload CSV File"
      >
        <div className="space-y-4">
          <p className="text-gray-600">Select a CSV file containing email addresses to invite team members.</p>
          <input
            type="file"
            accept=".csv"
            onChange={handleCSVUpload}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {uploadError && (
            <p className="text-red-600 text-sm">{uploadError}</p>
          )}
          {csvFile && (
            <p className="text-green-600 text-sm">File selected: {csvFile.name}</p>
          )}
          <div className="flex space-x-3">
            <Button onClick={() => setShowCSVModal(false)} variant="outline">
              Cancel
            </Button>
            <Button 
              onClick={handleCSVSubmit}
              disabled={!csvFile}
            >
              Upload & Send Invites
            </Button>
          </div>
        </div>
      </Modal>

      {/* Contact Support Modal */}
      <Modal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
        title="Upload Failed"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            There was an issue processing your CSV file. Our support team has been notified and will contact you shortly.
          </p>
          <div className="flex space-x-3">
            <Button 
              onClick={() => setShowSupportModal(false)} 
              variant="outline"
            >
              Close
            </Button>
            <Button 
              onClick={() => {
                setShowSupportModal(false);
                navigate('/payment');
              }}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </Modal>
    </PageLayout>
  );
}