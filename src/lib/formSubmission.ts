// Form submission utilities for BitSage Network
// Supports multiple form submission services

export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone?: string;
  companySize?: string;
  useCase?: string;
  gpuTypes?: string;
  gpuCount?: string;
  location?: string;
  uptime?: string;
  experience?: string;
  additionalInfo?: string;
  userType: 'user' | 'provider';
}

export interface NewsletterFormData {
  email: string;
  source?: string; // Which page/component the signup came from
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'sales' | 'support' | 'partnership' | 'career';
}

export interface JobApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position: string;
  location?: string;
  experience: string;
  coverLetter?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  resumeFile?: File;
  availableStart?: string;
  salaryExpectation?: string;
  workAuthorization: string;
  referralSource?: string;
}

// Formspree implementation
export class FormspreeService {
  private formEndpoint: string;
  
  constructor(formEndpoint: string) {
    this.formEndpoint = formEndpoint;
  }

  async submitForm(data: any): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true, message: 'Form submitted successfully!' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Failed to submit form. Please try again.' };
    }
  }

  async submitFormWithFiles(data: any, files?: { [key: string]: File }): Promise<{ success: boolean; message: string }> {
    try {
      const formData = new FormData();
      
      // Add regular form fields
      Object.keys(data).forEach(key => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      // Add file fields
      if (files) {
        Object.keys(files).forEach(key => {
          if (files[key]) {
            formData.append(key, files[key]);
          }
        });
      }

      const response = await fetch(this.formEndpoint, {
        method: 'POST',
        body: formData, // Don't set Content-Type header, let browser set it with boundary
      });

      if (response.ok) {
        return { success: true, message: 'Application submitted successfully!' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Failed to submit application. Please try again.' };
    }
  }
}

// Netlify Forms implementation (if using Netlify hosting)
export class NetlifyFormsService {
  async submitForm(formName: string, data: any): Promise<{ success: boolean; message: string }> {
    try {
      const formData = new FormData();
      formData.append('form-name', formName);
      
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        return { success: true, message: 'Form submitted successfully!' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Failed to submit form. Please try again.' };
    }
  }
}

// Google Sheets implementation (via Google Apps Script)
export class GoogleSheetsService {
  constructor(private scriptUrl: string) {}

  async submitForm(data: any): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true, message: 'Form submitted successfully!' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Failed to submit form. Please try again.' };
    }
  }
}

// Airtable implementation
export class AirtableService {
  private baseUrl: string;
  
  constructor(private baseId: string, private tableName: string, private apiKey: string) {
    this.baseUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;
  }

  async submitForm(data: any): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: data,
        }),
      });

      if (response.ok) {
        return { success: true, message: 'Form submitted successfully!' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, message: 'Failed to submit form. Please try again.' };
    }
  }
}

// Main form submission service - configure which service to use
export class FormSubmissionService {
  private waitlistService: FormspreeService;
  private newsletterService: FormspreeService;
  private contactService: FormspreeService;
  private jobApplicationService: FormspreeService;

  constructor() {
    // BitSage Formspree Project ID: 2850396847564913748
    // Using the actual form endpoints from your Formspree project
    this.waitlistService = new FormspreeService('https://formspree.io/p/2850396847564913748/f/waitlist');
    this.newsletterService = new FormspreeService('https://formspree.io/p/2850396847564913748/f/newsletter');
    this.contactService = new FormspreeService('https://formspree.io/p/2850396847564913748/f/contact');
    // Job application form endpoint - supports file uploads
    this.jobApplicationService = new FormspreeService('https://formspree.io/p/2850396847564913748/f/careers');
  }

  async submitWaitlist(data: WaitlistFormData) {
    // Add metadata
    const submissionData = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: 'bitsage-website',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    };

    return this.waitlistService.submitForm(submissionData);
  }

  async submitNewsletter(data: NewsletterFormData) {
    const submissionData = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: data.source || 'website',
    };

    return this.newsletterService.submitForm(submissionData);
  }

  async submitContact(data: ContactFormData) {
    const submissionData = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: 'bitsage-website',
    };

    return this.contactService.submitForm(submissionData);
  }

  async submitJobApplication(data: JobApplicationFormData) {
    const { resumeFile, ...formData } = data;
    
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'bitsage-careers',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    };

    const files = resumeFile ? { resume: resumeFile } : undefined;

    return this.jobApplicationService.submitFormWithFiles(submissionData, files);
  }
}

// Export singleton instance
export const formService = new FormSubmissionService();
