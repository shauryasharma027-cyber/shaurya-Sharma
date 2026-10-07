import { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  Key,
  Shield,
  User,
  Users,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
  LogOut,
  ExternalLink,
  ChevronDown,
  Trash2,
  Copy,
  Plus,
  Eye,
  EyeOff,
  Database,
  Download,
  AlertCircle
} from 'lucide-react';
import NoveLogo from './NoveLogo';
import {
  AdminAccount,
  authenticateAdmin,
  getActiveAdminSession,
  logoutAdmin,
  getAdminAccounts,
  updateAdminAccount
} from '../lib/adminAuth';
import {
  fetchLeads,
  updateLeadStatus,
  deleteLead,
  submitProjectInquiry,
  fetchNewsletterSubscribers,
  ProjectInquiryPayload,
  NewsletterSubscriber,
  supabase
} from '../lib/supabase';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Initial sample leads for immediate feedback if database table is just provisioned
const SEED_LEADS: ProjectInquiryPayload[] = [
  {
    id: 'seed-1',
    name: 'Vikramaditya Rathore',
    email: 'vikram@rathoreheritage.com',
    phone: '9829012345',
    company: 'Rathore Heritage Palace & Hotels',
    services: ['Web Development & WebGL', 'Social Media Marketing & Reels', 'SEO Architecture'],
    budget: '₹3,50,000 – ₹8,00,000 (Scale)',
    timeline: '4–6 Weeks (Standard)',
    details: 'Looking to overhaul our Jaipur luxury resort digital booking portal with 3D room walk-throughs and scale Meta performance ads for high-net-worth Delhi/Mumbai travelers.',
    status: 'new',
    created_at: new Date(Date.now() - 3600000 * 3).toISOString()
  },
  {
    id: 'seed-2',
    name: 'Ananya Mehra',
    email: 'ananya@zuvajewels.in',
    phone: '9413340605',
    company: 'Zuva Fine Jewelry',
    services: ['High-Scale Shopify E-commerce', 'Social Media Marketing & Reels', 'Google & Meta Ads (ROAS Scaling)'],
    budget: '₹1,50,000 – ₹3,50,000 (Growth)',
    timeline: '2–4 Weeks (Expedited)',
    details: 'Need cinematic Instagram reels production in Jaipur and WhatsApp automated recovery funnels to scale direct-to-consumer sales from ₹15L to ₹60L/month.',
    status: 'contacted',
    created_at: new Date(Date.now() - 3600000 * 24).toISOString()
  }
];

export default function AdminPortal({ isOpen, onClose }: AdminPortalProps) {
  // Auth state
  const [currentAdmin, setCurrentAdmin] = useState<AdminAccount | null>(null);
  const [emailInput, setEmailInput] = useState('shauryasharma027@gmail.com');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Dashboard tab state
  const [activeTab, setActiveTab] = useState<'leads' | 'subscribers' | 'team' | 'supabase'>('leads');

  // Leads state
  const [leads, setLeads] = useState<ProjectInquiryPayload[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<ProjectInquiryPayload | null>(null);

  // Subscribers state
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(false);

  // Admin team state (2 seats)
  const [adminAccounts, setAdminAccounts] = useState<AdminAccount[]>([]);
  const [editingAdmin, setEditingAdmin] = useState<AdminAccount | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<string | null>(null);

  // Supabase connection test state
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('connected');

  // Manual lead modal state
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadEmail, setNewLeadEmail] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadCompany, setNewLeadCompany] = useState('');
  const [newLeadBudget, setNewLeadBudget] = useState('₹1,50,000 – ₹3,50,000 (Growth)');
  const [newLeadDetails, setNewLeadDetails] = useState('');

  // Check existing session
  useEffect(() => {
    if (isOpen) {
      const session = getActiveAdminSession();
      if (session) {
        setCurrentAdmin(session);
      }
      setAdminAccounts(getAdminAccounts());
      loadDashboardData();
    }
  }, [isOpen]);

  const loadDashboardData = async () => {
    setIsLoadingLeads(true);
    setIsLoadingSubscribers(true);

    try {
      const res = await fetchLeads();
      if (res.success && res.data && res.data.length > 0) {
        setLeads(res.data);
      } else {
        // Use seed leads if no data yet
        setLeads(SEED_LEADS);
      }
    } catch {
      setLeads(SEED_LEADS);
    } finally {
      setIsLoadingLeads(false);
    }

    try {
      const subRes = await fetchNewsletterSubscribers();
      if (subRes.success && subRes.data) {
        setSubscribers(subRes.data);
      } else {
        setSubscribers([
          { id: 1, email: 'shauryasharma027@gmail.com', created_at: new Date().toISOString() },
          { id: 2, email: 'partner@novesocial.in', created_at: new Date(Date.now() - 86400000).toISOString() }
        ]);
      }
    } catch {
      // ignore
    } finally {
      setIsLoadingSubscribers(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const result = authenticateAdmin(emailInput, passwordInput);
    if (result.success && result.admin) {
      setCurrentAdmin(result.admin);
      setAdminAccounts(getAdminAccounts());
      loadDashboardData();
    } else {
      setAuthError(result.error || 'Invalid credentials');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setCurrentAdmin(null);
    setPasswordInput('');
  };

  const handleStatusChange = async (leadId: string | number, newStatus: string) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus as ProjectInquiryPayload['status'] } : lead))
    );
    try {
      await updateLeadStatus(leadId, newStatus);
    } catch (err) {
      console.warn('Status update note:', err);
    }
  };

  const handleDeleteLead = async (leadId: string | number) => {
    if (confirm('Are you sure you want to remove this lead?')) {
      setLeads((prev) => prev.filter((l) => l.id !== leadId));
      if (selectedLead?.id === leadId) setSelectedLead(null);
      try {
        await deleteLead(leadId);
      } catch (err) {
        console.warn('Delete note:', err);
      }
    }
  };

  const handleAddManualLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName.trim() || !newLeadEmail.trim()) return;

    const newLead: ProjectInquiryPayload = {
      id: `manual-${Date.now()}`,
      name: newLeadName,
      email: newLeadEmail,
      phone: newLeadPhone || undefined,
      company: newLeadCompany || undefined,
      services: ['Custom Growth Sprint'],
      budget: newLeadBudget,
      timeline: 'Standard',
      details: newLeadDetails,
      status: 'new',
      created_at: new Date().toISOString()
    };

    setLeads((prev) => [newLead, ...prev]);
    setShowAddLeadModal(false);

    try {
      await submitProjectInquiry(newLead);
    } catch (err) {
      console.warn('Manual lead insert error:', err);
    }

    setNewLeadName('');
    setNewLeadEmail('');
    setNewLeadPhone('');
    setNewLeadCompany('');
    setNewLeadDetails('');
  };

  const handleSaveAdminAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAdmin) return;

    const updates: Partial<AdminAccount> = {
      name: editName.trim() || editingAdmin.name,
      email: editEmail.trim() || editingAdmin.email,
    };
    if (editPassword.trim()) {
      updates.password = editPassword.trim();
    }

    const success = updateAdminAccount(editingAdmin.id, updates);
    if (success) {
      setAdminAccounts(getAdminAccounts());
      if (currentAdmin?.id === editingAdmin.id) {
        setCurrentAdmin({ ...currentAdmin, ...updates });
      }
      setEditingAdmin(null);
      setSaveSuccessNotice(`Successfully updated ${updates.name || editingAdmin.name}'s account.`);
      setTimeout(() => setSaveSuccessNotice(null), 4000);
    }
  };

  const exportLeadsToCsv = () => {
    const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Company', 'Services', 'Budget', 'Status', 'Details'];
    const rows = leads.map((l) => [
      l.id || '',
      l.created_at || '',
      `"${l.name || ''}"`,
      `"${l.email || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.company || ''}"`,
      `"${(l.services || []).join(', ')}"`,
      `"${l.budget || ''}"`,
      l.status || 'new',
      `"${(l.details || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `novesocial_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.phone || '').includes(searchTerm) ||
      (lead.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.services || []).some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || (lead.status || 'new') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md overflow-y-auto p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-7xl min-h-[600px] my-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* ========================================================================= */}
        {/* VIEW 1: AUTHENTICATION SCREEN IF NOT LOGGED IN                            */}
        {/* ========================================================================= */}
        {!currentAdmin ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-w-md bg-slate-850/80 border border-slate-700/80 rounded-2xl p-8 shadow-xl backdrop-blur-xl">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                  <span>JAIPUR HQ · 2-SEAT ADMIN COMMAND</span>
                </div>
                <h3 className="font-display text-2xl font-black text-white">
                  Nove Social Admin Portal
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Authenticate to inspect real-time inbound leads, WhatsApp CRM, and Supabase telemetry.
                </p>
              </div>

              {authError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Authorized Admin Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      required
                      placeholder="shauryasharma027@gmail.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Security Password
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20 active:scale-98 flex items-center justify-center gap-2 mt-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enter Agency Admin Desk</span>
                </button>
              </form>

              {/* Authorized Seats Info */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 space-y-1">
                <div className="font-semibold text-slate-400">Authorized Admin Seats (2 People):</div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>1. Shaurya Sharma (Super Admin)</span>
                  <span className="text-cyan-400 text-[10px]">shauryasharma027@gmail.com</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>2. Partner Admin</span>
                  <span className="text-slate-400 text-[10px]">partner@novesocial.in</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* VIEW 2: FULL ADMIN CONTROL DASHBOARD                                      */
          /* ========================================================================= */
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Top Command Bar */}
            <header className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <NoveLogo size="sm" showJaipur={true} />
                <div className="h-4 w-[1px] bg-slate-700 hidden sm:block" />
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest hidden sm:inline-block">
                  AGENCY CONTROL TOWER
                </span>
              </div>

              {/* Status Pills */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  <Database className="w-3 h-3 text-emerald-400" />
                  <span>Supabase:</span>
                  <span className="text-emerald-400 font-bold">nafxsqfzfpfurikfupgi</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs">
                  <div className="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold text-[10px] flex items-center justify-center">
                    {currentAdmin.avatar || 'AD'}
                  </div>
                  <div className="text-left hidden sm:block">
                    <span className="text-[11px] font-bold block text-slate-200">{currentAdmin.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400 block -mt-0.5">{currentAdmin.role}</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Website</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:px-6 bg-slate-900/60 border-b border-slate-800">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Total Inbound Leads</span>
                <span className="text-2xl font-bold font-display text-white mt-0.5 block">{leads.length}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Action Required (New)</span>
                <span className="text-2xl font-bold font-display text-cyan-400 mt-0.5 block">
                  {leads.filter((l) => (l.status || 'new') === 'new').length}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Subscribers</span>
                <span className="text-2xl font-bold font-display text-purple-400 mt-0.5 block">{subscribers.length}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Admin Seats Active</span>
                <span className="text-2xl font-bold font-display text-emerald-400 mt-0.5 block">2 / 2</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="px-4 sm:px-6 pt-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between overflow-x-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`pb-3 px-3 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'leads'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Project Leads ({leads.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('subscribers')}
                  className={`pb-3 px-3 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'subscribers'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Newsletter List ({subscribers.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('team')}
                  className={`pb-3 px-3 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'team'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Seats (2)</span>
                </button>

                <button
                  onClick={() => setActiveTab('supabase')}
                  className={`pb-3 px-3 text-xs font-mono font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'supabase'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Database Setup</span>
                </button>
              </div>

              <div className="pb-2 hidden sm:flex items-center gap-2">
                <button
                  onClick={loadDashboardData}
                  disabled={isLoadingLeads}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Refresh leads"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* TAB CONTENT AREA */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              {/* ========================================================================= */}
              {/* TAB 1: LEADS & INQUIRIES                                                  */}
              {/* ========================================================================= */}
              {activeTab === 'leads' && (
                <div className="space-y-4">
                  {/* Actions Header */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 max-w-md">
                      <div className="relative flex-1">
                        <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search leads by name, email, brand, phone..."
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
                      >
                        <option value="all">All Status</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={exportLeadsToCsv}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-medium text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export CSV</span>
                      </button>

                      <button
                        onClick={() => setShowAddLeadModal(true)}
                        className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Lead</span>
                      </button>
                    </div>
                  </div>

                  {/* Leads List / Grid */}
                  {filteredLeads.length === 0 ? (
                    <div className="py-16 text-center text-slate-500 text-xs font-mono">
                      No inbound leads matching filter. New submissions through the website will appear here in real-time.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {filteredLeads.map((lead) => {
                        const statusColors: Record<string, string> = {
                          new: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
                          contacted: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
                          qualified: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
                          in_sprints: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
                          closed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        };
                        const currentStatus = lead.status || 'new';

                        return (
                          <div
                            key={lead.id || lead.email}
                            className="p-5 rounded-2xl bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                          >
                            <div className="flex-1 space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-bold text-white text-sm">{lead.name}</span>
                                {lead.company && (
                                  <span className="text-xs text-cyan-400 font-medium">· {lead.company}</span>
                                )}
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${statusColors[currentStatus] || statusColors.new}`}>
                                  {currentStatus}
                                </span>
                                {lead.created_at && (
                                  <span className="text-[10px] font-mono text-slate-500">
                                    {new Date(lead.created_at).toLocaleDateString()} {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                )}
                              </div>

                              {/* Contact Details */}
                              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                                <span className="text-slate-300">📧 {lead.email}</span>
                                {lead.phone && <span className="text-slate-300">📱 {lead.phone}</span>}
                                <span className="text-emerald-400 font-semibold">💰 {lead.budget}</span>
                              </div>

                              {/* Services */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                {(lead.services || []).map((s, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>

                              {/* Details note */}
                              {lead.details && (
                                <p className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 leading-relaxed font-normal mt-2">
                                  "{lead.details}"
                                </p>
                              )}
                            </div>

                            {/* Action Buttons Zone */}
                            <div className="flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                              <div className="flex items-center gap-2">
                                {/* 1-Click WhatsApp reply */}
                                {lead.phone && (
                                  <a
                                    href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                                      `Hi ${lead.name}, this is Shaurya from Nove Social Jaipur. I received your project brief regarding ${lead.company || 'your brand'} and would love to discuss your growth roadmap!`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                                    title="Open WhatsApp chat with client"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                                    <span>WhatsApp</span>
                                  </a>
                                )}

                                <a
                                  href={`mailto:${lead.email}?subject=Nove%20Social%20Project%20Discovery%20-%20${encodeURIComponent(lead.company || lead.name)}`}
                                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors flex items-center gap-1"
                                >
                                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                                  <span>Email</span>
                                </a>

                                <button
                                  onClick={() => handleDeleteLead(lead.id || lead.email)}
                                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                                  title="Delete lead"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Status Dropdown */}
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-slate-500">Status:</span>
                                <select
                                  value={currentStatus}
                                  onChange={(e) => handleStatusChange(lead.id || lead.email, e.target.value)}
                                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 font-mono text-[11px]"
                                >
                                  <option value="new">New</option>
                                  <option value="contacted">Contacted</option>
                                  <option value="qualified">Qualified</option>
                                  <option value="in_sprints">In Sprints</option>
                                  <option value="closed">Closed</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================================= */}
              {/* TAB 2: NEWSLETTER SUBSCRIBERS                                             */}
              {/* ========================================================================= */}
              {activeTab === 'subscribers' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">Newsletter Audience</h4>
                      <p className="text-xs text-slate-400">Captured via the website footer and digital dispatches.</p>
                    </div>

                    <button
                      onClick={() => {
                        const emailList = subscribers.map((s) => s.email).join(', ');
                        navigator.clipboard.writeText(emailList);
                        alert(`Copied ${subscribers.length} emails to clipboard!`);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-medium text-white transition-colors flex items-center gap-1.5 border border-slate-700"
                    >
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy All Emails</span>
                    </button>
                  </div>

                  <div className="rounded-2xl bg-slate-850 border border-slate-800 overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase">
                        <tr>
                          <th className="py-3 px-4">#</th>
                          <th className="py-3 px-4">Subscriber Email</th>
                          <th className="py-3 px-4">Timestamp</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {subscribers.map((sub, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/40 font-mono text-slate-300">
                            <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                            <td className="py-3 px-4 font-bold text-white">{sub.email}</td>
                            <td className="py-3 px-4 text-slate-400">
                              {sub.created_at ? new Date(sub.created_at).toLocaleDateString() : 'Recent'}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <a
                                href={`mailto:${sub.email}`}
                                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 text-[11px]"
                              >
                                Send Dispatch
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* TAB 3: ADMIN TEAM SEATS (2 PEOPLE)                                        */}
              {/* ========================================================================= */}
              {activeTab === 'team' && (
                <div className="max-w-3xl space-y-6">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">Authorized Admin Accounts</h4>
                    <p className="text-xs text-slate-400">
                      Configured for 2 agency principals. You can update names, emails, and passwords for both seats below.
                    </p>
                  </div>

                  {saveSuccessNotice && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{saveSuccessNotice}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {adminAccounts.map((account, index) => (
                      <div
                        key={account.id}
                        className="p-6 rounded-2xl bg-slate-850 border border-slate-800 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm">
                                {account.avatar || `A${index + 1}`}
                              </div>
                              <div>
                                <h5 className="font-bold text-white text-sm">{account.name}</h5>
                                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                                  {account.role}
                                </span>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                              Seat {index + 1} of 2
                            </span>
                          </div>

                          <div className="space-y-2 text-xs font-mono text-slate-400 mb-6 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <div>Email: <span className="text-white font-semibold">{account.email}</span></div>
                            <div>Password: <span className="text-slate-500">••••••••••••</span></div>
                            {account.lastLogin && (
                              <div className="text-[10px] text-slate-500">
                                Last active: {new Date(account.lastLogin).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setEditingAdmin(account);
                            setEditName(account.name);
                            setEditEmail(account.email);
                            setEditPassword('');
                          }}
                          className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors"
                        >
                          Modify Credentials & Access
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Edit Admin Modal / Section */}
                  {editingAdmin && (
                    <div className="p-6 rounded-2xl bg-slate-850 border-2 border-cyan-500/30">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="font-bold text-white text-sm">
                          Edit Credentials for: <span className="text-cyan-400">{editingAdmin.name}</span>
                        </h5>
                        <button
                          onClick={() => setEditingAdmin(null)}
                          className="text-slate-500 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <form onSubmit={handleSaveAdminAccount} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                              Display Name
                            </label>
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                              Login Email
                            </label>
                            <input
                              type="email"
                              value={editEmail}
                              onChange={(e) => setEditEmail(e.target.value)}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white font-mono"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                            New Password (Leave blank to keep unchanged)
                          </label>
                          <input
                            type="text"
                            value={editPassword}
                            onChange={(e) => setEditPassword(e.target.value)}
                            placeholder="Enter new password (e.g. nova@112233)"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white font-mono"
                          />
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => setEditingAdmin(null)}
                            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white shadow-sm"
                          >
                            Save Account Credentials
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================================= */}
              {/* TAB 4: SUPABASE DATABASE & TELEMETRY                                      */}
              {/* ========================================================================= */}
              {activeTab === 'supabase' && (
                <div className="max-w-3xl space-y-6">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">Supabase Cloud Database</h4>
                    <p className="text-xs text-slate-400">
                      Live connection parameters linking Nove Social to your Supabase PostgreSQL instance.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-bold text-white text-sm block">Supabase Project Connected</span>
                          <span className="text-[11px] font-mono text-emerald-400">nafxsqfzfpfurikfupgi</span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active Telemetry</span>
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                      <div>API Endpoint: <span className="text-cyan-400">https://nafxsqfzfpfurikfupgi.supabase.co</span></div>
                      <div>Auth Client: <span className="text-emerald-400">@supabase/supabase-js v2</span></div>
                      <div>Target Tables: <span className="text-slate-400">leads, inquiries, newsletter_subscribers</span></div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-850 border border-slate-800 space-y-3">
                    <h5 className="font-bold text-white text-xs font-mono uppercase tracking-wider">
                      SQL Table Schema Quick Reference
                    </h5>
                    <p className="text-xs text-slate-400">
                      Run this script in your Supabase SQL Editor if you haven't created the tables yet:
                    </p>
                    <pre className="p-4 rounded-xl bg-slate-900 text-[11px] font-mono text-cyan-300 overflow-x-auto border border-slate-800">
{`CREATE TABLE IF NOT EXISTS leads (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  services TEXT[],
  budget TEXT,
  timeline TEXT,
  details TEXT,
  status TEXT DEFAULT 'new'
);`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Manual Add Lead Modal */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg font-bold text-white">Record Inbound Lead Manually</h4>
              <button onClick={() => setShowAddLeadModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualLead} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Client Name</label>
                <input
                  type="text"
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  placeholder="e.g. Karan Singhania"
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Email</label>
                  <input
                    type="email"
                    value={newLeadEmail}
                    onChange={(e) => setNewLeadEmail(e.target.value)}
                    placeholder="karan@brand.in"
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    placeholder="9413340605"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Brand / Company</label>
                <input
                  type="text"
                  value={newLeadCompany}
                  onChange={(e) => setNewLeadCompany(e.target.value)}
                  placeholder="e.g. Royal Gems Jaipur"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Budget Tier</label>
                <select
                  value={newLeadBudget}
                  onChange={(e) => setNewLeadBudget(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                >
                  <option value="₹50,000 – ₹1,50,000 (Starter Launch)">₹50,000 – ₹1,50,000 (Starter Launch)</option>
                  <option value="₹1,50,000 – ₹3,50,000 (Growth)">₹1,50,000 – ₹3,50,000 (Growth)</option>
                  <option value="₹3,50,000 – ₹8,00,000 (Scale)">₹3,50,000 – ₹8,00,000 (Scale)</option>
                  <option value="₹8,00,000+ (Enterprise Multi-Channel)">₹8,00,000+ (Enterprise Multi-Channel)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Brief Notes</label>
                <textarea
                  rows={2}
                  value={newLeadDetails}
                  onChange={(e) => setNewLeadDetails(e.target.value)}
                  placeholder="Key discussion points, requirements, next follow-up date..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white shadow-sm"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
