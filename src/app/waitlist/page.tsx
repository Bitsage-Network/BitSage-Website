'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PublicPageLayout } from '@/components/PublicPageLayout';
import { 
  Building2, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe,
  Cpu,
  Clock,
  Star
} from 'lucide-react';

export default function WaitlistPage() {
  const [userType, setUserType] = useState<'user' | 'provider'>('user');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    companySize: '',
    useCase: '',
    // Provider-specific fields
    gpuTypes: '',
    gpuCount: '',
    location: '',
    uptime: '',
    experience: '',
    additionalInfo: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUserTypeChange = (type: 'user' | 'provider') => {
    setUserType(type);
    // Reset form data when switching user types
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      companySize: '',
      useCase: '',
      gpuTypes: '',
      gpuCount: '',
      location: '',
      uptime: '',
      experience: '',
      additionalInfo: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Import form service dynamically to avoid SSR issues
      const { formService } = await import('@/lib/formSubmission');
      
      const submissionData = {
        ...formData,
        userType,
      };

      const result = await formService.submitWaitlist(submissionData);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PublicPageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Thank You for Your Interest!
            </h1>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our enterprise team will review your submission and contact you within 2-3 business days 
              to discuss your compute requirements and provide exclusive early access details.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>What's Next:</strong> You'll receive a confirmation email shortly, followed by a 
                personalized consultation to discuss your specific GPU compute needs and timeline.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2 justify-center"
              >
                Return to Homepage
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/manifesto"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Read Our Manifesto
              </a>
            </div>
          </div>
        </div>
      </div>
      </PublicPageLayout>
    );
  }

  return (
    <PublicPageLayout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Early Access Program
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {userType === 'user' ? 'Join the Future of' : 'Monetize Your GPUs with'} 
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {userType === 'user' ? 'Verifiable Computing' : 'Verifiable Network'}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {userType === 'user' 
                  ? 'Be among the first enterprises to access BitSage Network\'s revolutionary decentralized GPU compute infrastructure with cryptographic proof of execution.'
                  : 'Turn your idle GPU power into passive income by joining BitSage Network\'s verifiable distributed compute infrastructure as an early provider.'
                }
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                {userType === 'user' ? 'Enterprise Benefits' : 'Provider Benefits'}
              </h3>
              
              <div className="grid gap-4">
                {(userType === 'user' ? [
                  {
                    icon: Zap,
                    title: "70% Cost Reduction",
                    description: "Significant savings compared to traditional cloud GPU providers"
                  },
                  {
                    icon: Shield,
                    title: "Cryptographic Verification",
                    description: "Zero-knowledge proofs ensure computational integrity"
                  },
                  {
                    icon: Globe,
                    title: "Global GPU Network",
                    description: "Access to distributed compute resources worldwide"
                  },
                  {
                    icon: Building2,
                    title: "Enterprise SLAs",
                    description: "Dedicated support and guaranteed service levels"
                  }
                ] : [
                  {
                    icon: Zap,
                    title: "Competitive Earnings",
                    description: "Market-rate pricing with transparent, fair compensation"
                  },
                  {
                    icon: Shield,
                    title: "Secure Infrastructure",
                    description: "Protected execution environments with reputation system"
                  },
                  {
                    icon: Globe,
                    title: "Global Demand",
                    description: "Access to worldwide compute demand from enterprises"
                  },
                  {
                    icon: Building2,
                    title: "Provider Support",
                    description: "Technical support and onboarding assistance"
                  }
                ]).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border border-white/40">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-2">Expected Timeline</h3>
              <p className="text-slate-600 text-sm mb-3">
                <strong>Q1 2026:</strong> Testnet launch with select enterprise partners
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Q2 2026:</strong> Mainnet launch with full enterprise features
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              {/* User Type Toggle */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-slate-100 p-1 rounded-lg flex">
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange('user')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      userType === 'user'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-4 h-4 inline mr-2" />
                    I Need Compute
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange('provider')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      userType === 'provider'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Cpu className="w-4 h-4 inline mr-2" />
                    I Have GPUs
                  </button>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {userType === 'user' ? 'Request Enterprise Access' : 'Join as GPU Provider'}
              </h2>
              <p className="text-slate-600">
                {userType === 'user' 
                  ? 'Tell us about your compute needs and we\'ll prioritize your access to the network.'
                  : 'Share your GPU resources and we\'ll help you start earning with BitSage Network.'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="CTO, VP Engineering, etc."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Conditional Fields Based on User Type */}
              {userType === 'user' ? (
                // Enterprise User Fields
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Primary Use Case *
                    </label>
                    <select
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select primary use case</option>
                      <option value="ai-training">AI/ML Training</option>
                      <option value="ai-inference">AI Inference</option>
                      <option value="rendering">3D Rendering/VFX</option>
                      <option value="scientific">Scientific Computing</option>
                      <option value="crypto">Cryptocurrency/Blockchain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              ) : (
                // GPU Provider Fields
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      GPU Types *
                    </label>
                    <select
                      name="gpuTypes"
                      value={formData.gpuTypes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select your GPU type</option>
                      <option value="rtx-4090">RTX 4090</option>
                      <option value="rtx-3090">RTX 3090</option>
                      <option value="rtx-3080">RTX 3080</option>
                      <option value="a100">A100</option>
                      <option value="h100">H100</option>
                      <option value="rtx-a6000">RTX A6000</option>
                      <option value="multiple">Multiple GPU Types</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of GPUs *
                    </label>
                    <select
                      name="gpuCount"
                      value={formData.gpuCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select GPU count</option>
                      <option value="1-5">1-5 GPUs</option>
                      <option value="6-20">6-20 GPUs</option>
                      <option value="21-100">21-100 GPUs</option>
                      <option value="100+">100+ GPUs</option>
                    </select>
                  </div>
                </div>
              )}

              {userType === 'provider' && (
                // GPU Provider Additional Fields
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select your location</option>
                        <option value="north-america">North America</option>
                        <option value="europe">Europe</option>
                        <option value="asia-pacific">Asia Pacific</option>
                        <option value="south-america">South America</option>
                        <option value="africa">Africa</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Expected Uptime
                    </label>
                    <select
                      name="uptime"
                      value={formData.uptime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select uptime commitment</option>
                      <option value="24-7">24/7 (99%+ uptime)</option>
                      <option value="business-hours">Business Hours</option>
                      <option value="evenings-weekends">Evenings & Weekends</option>
                      <option value="flexible">Flexible Schedule</option>
                    </select>
                  </div>
                </div>
              )}

              {userType === 'provider' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Provider Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">New to GPU computing</option>
                    <option value="intermediate">Some experience with GPUs</option>
                    <option value="advanced">Experienced with GPU clusters</option>
                    <option value="datacenter">Data center operator</option>
                    <option value="mining">Crypto mining background</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {userType === 'user' ? 'Additional Requirements (Optional)' : 'Additional Information (Optional)'}
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={userType === 'user' 
                    ? "Tell us about any specific requirements, compliance needs, or questions you have..."
                    : "Tell us about your setup, technical capabilities, or any questions you have..."
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    {userType === 'user' ? <Users className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                    {userType === 'user' ? 'Request Enterprise Access' : 'Join as GPU Provider'}
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to be contacted by our enterprise team 
                regarding BitSage Network services and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PublicPageLayout>
  );
}