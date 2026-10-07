import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nafxsqfzfpfurikfupgi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ncMcEGYOOFhX3pPoR87-GA_7Cb91ThR';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ProjectInquiryPayload {
  id?: string | number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
  status?: 'new' | 'contacted' | 'qualified' | 'in_sprints' | 'closed';
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string | number;
  email: string;
  created_at?: string;
}

/**
 * Submits a new project inquiry / lead to Supabase
 */
export async function submitProjectInquiry(payload: ProjectInquiryPayload) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          company: payload.company || null,
          services: payload.services,
          budget: payload.budget,
          timeline: payload.timeline,
          details: payload.details,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.warn('Supabase leads insert note:', error.message);
      // Try secondary table name fallback: inquiries
      const fallback = await supabase
        .from('inquiries')
        .insert([
          {
            name: payload.name,
            email: payload.email,
            phone: payload.phone || null,
            company: payload.company || null,
            services: payload.services,
            budget: payload.budget,
            timeline: payload.timeline,
            details: payload.details,
            status: 'new',
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (fallback.error) {
        console.warn('Supabase inquiries fallback note:', fallback.error.message);
        return { success: false, error: error.message };
      }
      return { success: true, data: fallback.data };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Failed to submit inquiry to Supabase:', message);
    return { success: false, error: message };
  }
}

/**
 * Fetches all project leads from Supabase
 */
export async function fetchLeads(): Promise<{ success: boolean; data: ProjectInquiryPayload[]; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // Try fallback to inquiries table
      const fallback = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (fallback.error) {
        return { success: false, data: [], error: error.message };
      }
      return { success: true, data: (fallback.data as ProjectInquiryPayload[]) || [] };
    }

    return { success: true, data: (data as ProjectInquiryPayload[]) || [] };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, data: [], error: message };
  }
}

/**
 * Updates a lead's status in Supabase
 */
export async function updateLeadStatus(id: string | number, status: string) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id);

    if (error) {
      const fallback = await supabase
        .from('inquiries')
        .update({ status })
        .eq('id', id);

      if (fallback.error) {
        return { success: false, error: error.message };
      }
      return { success: true, data: fallback.data };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

/**
 * Deletes a lead from Supabase
 */
export async function deleteLead(id: string | number) {
  try {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) {
      const fallback = await supabase
        .from('inquiries')
        .delete()
        .eq('id', id);

      if (fallback.error) {
        return { success: false, error: error.message };
      }
    }
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

/**
 * Subscribes an email to the newsletter in Supabase
 */
export async function subscribeNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      console.warn('Supabase newsletter note:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Failed to subscribe email to Supabase:', message);
    return { success: false, error: message };
  }
}

/**
 * Fetches newsletter subscribers from Supabase
 */
export async function fetchNewsletterSubscribers(): Promise<{ success: boolean; data: NewsletterSubscriber[]; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { success: false, data: [], error: error.message };
    }

    return { success: true, data: (data as NewsletterSubscriber[]) || [] };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, data: [], error: message };
  }
}
