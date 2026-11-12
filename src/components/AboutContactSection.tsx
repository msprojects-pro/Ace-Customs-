import { useState, useEffect, FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_MEDIA, BUSINESS_INFO, SERVICES } from '../data/siteData';
import { AutomotiveImage } from './AutomotiveImage';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

// Replace with your live Web3Forms public access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

interface AboutContactSectionProps {
  selectedService: string;
}

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export function AboutContactSection({ selectedService }: AboutContactSectionProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || SERVICES[0].title,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    if (selectedService) {
      setFormValues((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = (values: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const cleanedPhone = values.phone.replace(/[\s()-]/g, '');
    if (!cleanedPhone || !/^\+?\d{9,15}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (
      !values.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.service.trim()) {
      nextErrors.service = 'Please select a service.';
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message =
        'Please tell us a bit about your vehicle and what you need (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setSubmitStatus({
        type: 'error',
        message:
          'Online form delivery is awaiting activation (Web3Forms access key placeholder). Please call, WhatsApp, or email Acecustoms66@gmail.com directly.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry: ${formValues.service} — ${formValues.fullName}`,
          from_name: 'Ace Customs Website',
          name: formValues.fullName.trim(),
          phone: formValues.phone.trim(),
          email: formValues.email.trim(),
          service: formValues.service,
          message: formValues.message.trim(),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you. Your enquiry has been sent to Ace Customs and we will be in touch shortly.',
        });
        setFormValues({
          fullName: '',
          phone: '',
          email: '',
          service: SERVICES[0].title,
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            result.message ||
            'We could not send your enquiry right now. Please call or message us on WhatsApp.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          'Network error while sending your enquiry. Please call 07762 120472 or email Acecustoms66@gmail.com.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#08080B] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT SIDE: Cinematic vehicle photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[380px] overflow-hidden rounded-md border border-white/10 bg-[#15151B] lg:col-span-5"
          >
            <AutomotiveImage
              src={ABOUT_MEDIA.image}
              alt={ABOUT_MEDIA.alt}
              className="h-full w-full lg:absolute lg:inset-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-[#08080B]/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-medium tracking-wide text-[#B18AFF]">
                Preston · North West England
              </p>
              <p className="mt-2 font-['Outfit'] text-xl font-semibold text-[#F5F3FA]">
                Mobile Service Directly To Your Location
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: About, Contact Details, Direct Buttons & Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="mb-2.5 text-sm font-medium tracking-wide text-[#B18AFF]">
                About Ace Customs
              </p>
              <h2 className="font-['Outfit'] text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight tracking-tight text-[#F5F3FA] [text-wrap:balance]">
                Passion For Cars.{' '}
                <span className="text-[#8C4FF4]">Attention To Detail.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#92909D]">
                Ace Customs provides mobile detailing and automotive customisation
                services across Preston and the North West. Whether you&apos;re
                looking to give your vehicle a fresh look or need professional
                automotive care, get in touch to discuss your requirements.
              </p>
            </div>

            <div className="my-8 border-t border-white/10" />

            <div>
              <h3 className="font-['Outfit'] text-2xl font-semibold tracking-tight text-[#F5F3FA]">
                Let&apos;s Get Your Vehicle Looking Its Best.
              </h3>

              {/* Direct Contact Info */}
              <div className="mt-5 grid grid-cols-1 gap-4 rounded-md border border-white/10 bg-[#15151B] p-5 sm:grid-cols-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="group flex items-start gap-3 transition-colors hover:text-[#B18AFF]"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8C4FF4]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-[#92909D]">
                      Phone
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-[#F5F3FA] tabular-nums group-hover:text-[#B18AFF]">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.emailHref}
                  className="group flex items-start gap-3 transition-colors hover:text-[#B18AFF]"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8C4FF4]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-[#92909D]">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-[#F5F3FA] group-hover:text-[#B18AFF]">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8C4FF4]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-[#92909D]">
                      Location
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-[#F5F3FA]">
                      Preston, Lancashire, UK
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Social Links */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#8C4FF4] px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#9D67F8] hover:shadow-[0_0_24px_rgba(140,79,244,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B18AFF]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>

                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/15 bg-[#15151B] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#F5F3FA] transition-colors duration-200 hover:border-[#8C4FF4] hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email Us
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-[#8C4FF4]/45 bg-[#8C4FF4]/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-[#B18AFF] transition-all duration-200 hover:border-[#8C4FF4] hover:bg-[#8C4FF4]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={BUSINESS_INFO.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ace Customs on Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/12 bg-[#15151B] text-[#F5F3FA] transition-colors duration-200 hover:border-[#8C4FF4] hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={BUSINESS_INFO.tiktokHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ace Customs on TikTok"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/12 bg-[#15151B] text-[#F5F3FA] transition-colors duration-200 hover:border-[#8C4FF4] hover:text-[#B18AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C4FF4]"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-7 rounded-md border border-white/10 bg-[#15151B] p-6 sm:p-7"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="mb-1.5 block text-xs font-medium text-[#F5F3FA]"
                  >
                    Full Name
                  </label>
                  <input
                    id="enquiry-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formValues.fullName}
                    onChange={(e) => {
                      setFormValues((prev) => ({ ...prev, fullName: e.target.value }));
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.fullName)}
                    className="min-h-[44px] w-full rounded-sm border border-white/12 bg-[#08080B] px-3.5 py-2.5 text-sm text-[#F5F3FA] placeholder:text-[#92909D]/60 focus:border-[#8C4FF4] focus:outline-none"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="mb-1.5 block text-xs font-medium text-[#F5F3FA]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formValues.phone}
                    onChange={(e) => {
                      setFormValues((prev) => ({ ...prev, phone: e.target.value }));
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="07762 120472"
                    aria-invalid={Boolean(errors.phone)}
                    className="min-h-[44px] w-full rounded-sm border border-white/12 bg-[#08080B] px-3.5 py-2.5 text-sm text-[#F5F3FA] placeholder:text-[#92909D]/60 focus:border-[#8C4FF4] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="mb-1.5 block text-xs font-medium text-[#F5F3FA]"
                  >
                    Email Address
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={(e) => {
                      setFormValues((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="min-h-[44px] w-full rounded-sm border border-white/12 bg-[#08080B] px-3.5 py-2.5 text-sm text-[#F5F3FA] placeholder:text-[#92909D]/60 focus:border-[#8C4FF4] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-service"
                    className="mb-1.5 block text-xs font-medium text-[#F5F3FA]"
                  >
                    What service are you interested in?
                  </label>
                  <select
                    id="enquiry-service"
                    name="service"
                    value={formValues.service}
                    onChange={(e) => {
                      setFormValues((prev) => ({ ...prev, service: e.target.value }));
                      if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                    }}
                    aria-invalid={Boolean(errors.service)}
                    className="min-h-[44px] w-full rounded-sm border border-white/12 bg-[#08080B] px-3.5 py-2.5 text-sm text-[#F5F3FA] focus:border-[#8C4FF4] focus:outline-none"
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.service}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="enquiry-message"
                  className="mb-1.5 block text-xs font-medium text-[#F5F3FA]"
                >
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={3}
                  value={formValues.message}
                  onChange={(e) => {
                    setFormValues((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Tell us your vehicle make, model, location, and what you are looking for..."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full rounded-sm border border-white/12 bg-[#08080B] px-3.5 py-2.5 text-sm text-[#F5F3FA] placeholder:text-[#92909D]/60 focus:border-[#8C4FF4] focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
                )}
              </div>

              {submitStatus && (
                <div
                  role="status"
                  className={`mt-4 flex items-start gap-2.5 rounded-sm border p-3.5 text-sm ${
                    submitStatus.type === 'success'
                      ? 'border-emerald-500/35 bg-emerald-500/10 text-emerald-200'
                      : 'border-rose-500/35 bg-rose-500/10 text-rose-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                      aria-hidden="true"
                    />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#8C4FF4] px-7 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#9D67F8] hover:shadow-[0_0_24px_rgba(140,79,244,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B18AFF] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>
                <span className="text-xs text-[#92909D]">
                  Serving Preston &amp; North West England
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
