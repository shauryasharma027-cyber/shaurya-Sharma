export interface AdminAccount {
  id: string;
  email: string;
  password: string; // Stored securely in client storage for panel authentication
  name: string;
  role: 'Super Admin' | 'Admin';
  lastLogin?: string;
  avatar: string;
}

const STORAGE_KEY_ADMINS = 'novesocial_admin_accounts_v1';
const STORAGE_KEY_SESSION = 'novesocial_active_admin_session';

const DEFAULT_ADMINS: AdminAccount[] = [
  {
    id: 'admin-1',
    email: 'shauryasharma027@gmail.com',
    password: 'nova@112233',
    name: 'Shaurya Sharma',
    role: 'Super Admin',
    avatar: 'SS',
  },
  {
    id: 'admin-2',
    email: 'partner@novesocial.in',
    password: 'nova@112233',
    name: 'Agency Partner / Co-Founder',
    role: 'Admin',
    avatar: 'AP',
  }
];

export function getAdminAccounts(): AdminAccount[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_ADMINS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading admin accounts:', e);
  }
  return DEFAULT_ADMINS;
}

export function saveAdminAccounts(accounts: AdminAccount[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_ADMINS, JSON.stringify(accounts));
  } catch (e) {
    console.error('Error saving admin accounts:', e);
  }
}

export function authenticateAdmin(emailInput: string, passwordInput: string): { success: boolean; admin?: AdminAccount; error?: string } {
  const accounts = getAdminAccounts();
  const cleanEmail = emailInput.trim().toLowerCase();
  const cleanPassword = passwordInput.trim();

  const found = accounts.find(
    (a) => a.email.toLowerCase() === cleanEmail && a.password === cleanPassword
  );

  if (found) {
    const updated = accounts.map((a) =>
      a.id === found.id ? { ...a, lastLogin: new Date().toISOString() } : a
    );
    saveAdminAccounts(updated);

    const sessionData = {
      ...found,
      lastLogin: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionData));
    return { success: true, admin: sessionData };
  }

  return { success: false, error: 'Invalid admin email or password. Only authorized Nove Social administrators may access this portal.' };
}

export function getActiveAdminSession(): AdminAccount | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_SESSION);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading active session:', e);
  }
  return null;
}

export function logoutAdmin(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  } catch (e) {
    console.error('Error removing session:', e);
  }
}

export function updateAdminAccount(id: string, updates: Partial<AdminAccount>): boolean {
  try {
    const accounts = getAdminAccounts();
    const updated = accounts.map((a) => (a.id === id ? { ...a, ...updates } : a));
    saveAdminAccounts(updated);
    
    // Also update active session if current admin
    const session = getActiveAdminSession();
    if (session && session.id === id) {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify({ ...session, ...updates }));
    }
    return true;
  } catch (e) {
    console.error('Error updating admin account:', e);
    return false;
  }
}
