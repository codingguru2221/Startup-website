import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { NeonButton } from "@/components/ui/NeonButton";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

const LAMBDA_URL = "https://r2wuqhpjovygficsf43loa32sa0mxdze.lambda-url.us-east-1.on.aws/";

const SERVICES_LIST = [
  "Web Development", "App Development", "Web App Maintenance", 
  "Website & App Redesign", "AI Business Models", "Server Control Systems", 
  "Network Development", "NAS Setup", "LAN/WAN/MAN Development with AI", 
  "Ad Management", "Social Media Management & Marketing", 
  "Marketing Advice", "Investment Management"
];

export default function Buy() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "", age: "", email: "", phone: "",
    service: "", description: "",
    budget: "₹10,000 - ₹50,000"
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      toast({ title: "Validation Error", description: "Name and Email are required.", variant: "destructive" });
      return;
    }
    if (step === 2 && (!formData.service || !formData.description)) {
      toast({ title: "Validation Error", description: "Service and Description are required.", variant: "destructive" });
      return;
    }
    setStep(s => Math.min(3, s + 1));
  };

  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.description,
          service: formData.service,
          budget: formData.budget,
          type: "buy",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      alert("Submitted successfully");
      setStep(4);
    } catch (error) {
      alert("Something went wrong");
      const message = error instanceof Error ? error.message : "Unable to submit request.";
      toast({
        title: "Submission failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-24 pb-32 min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-background overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
          
          {step < 4 && (
            <div className="mb-10">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">Initialize <span className="text-primary text-glow">Project</span></h1>
              
              {/* Progress Bar */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step >= i ? "bg-primary text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-card border border-white/10 text-muted-foreground"
                    }`}>
                      {i}
                    </div>
                    {i < 3 && (
                      <div className={`w-12 md:w-24 h-1 mx-2 rounded transition-colors ${
                        step > i ? "bg-primary" : "bg-white/10"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="glass border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* STEP 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-8 md:p-10 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Client Identification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name *</label>
                        <input value={formData.name} onChange={e => updateForm('name', e.target.value)} type="text" className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Age</label>
                        <input value={formData.age} onChange={e => updateForm('age', e.target.value)} type="number" className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="25" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address *</label>
                        <input value={formData.email} onChange={e => updateForm('email', e.target.value)} type="email" className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@domain.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <input value={formData.phone} onChange={e => updateForm('phone', e.target.value)} type="tel" className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-10">
                    <NeonButton onClick={nextStep} icon={<ChevronRight className="w-4 h-4"/>}>Proceed</NeonButton>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Project Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-8 md:p-10 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Technical Requirements</h2>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Primary Service Needed *</label>
                      <select 
                        value={formData.service} 
                        onChange={e => updateForm('service', e.target.value)}
                        className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select a capability...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Specification *</label>
                      <textarea 
                        value={formData.description} 
                        onChange={e => updateForm('description', e.target.value)}
                        rows={5}
                        className="w-full bg-input border border-white/10 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                        placeholder="Detail the scope, required stack, and ultimate goal..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <button onClick={prevStep} className="text-muted-foreground hover:text-white transition-colors flex items-center font-medium px-4 py-2">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </button>
                    <NeonButton onClick={nextStep} icon={<ChevronRight className="w-4 h-4"/>}>Proceed</NeonButton>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Budget & Submit */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-8 md:p-10 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Budget Planning</h2>
                    <div className="space-y-4">
                      <label className="text-sm font-medium text-foreground">Estimated Budget Range</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["₹10,000 - ₹50,000", "₹50,000 - ₹1,50,000", "₹1,50,000 - ₹3,00,000", "₹3,00,000 - ₹5,00,000"].map(range => (
                          <div 
                            key={range}
                            onClick={() => updateForm('budget', range)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all text-center font-medium ${
                              formData.budget === range 
                                ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                                : "bg-card border-white/10 text-muted-foreground hover:border-primary/50"
                            }`}
                          >
                            {range}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <button onClick={prevStep} disabled={isSubmitting} className="text-muted-foreground hover:text-white transition-colors flex items-center font-medium px-4 py-2 disabled:opacity-50">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </button>
                    <NeonButton onClick={handleSubmit} disabled={isSubmitting} variant="secondary">
                      {isSubmitting ? "Initializing..." : "Submit Protocol"}
                    </NeonButton>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 md:p-12 h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground">Transmission Complete</h2>
                  <p className="text-muted-foreground max-w-md">
                    Your project details have been securely logged. A TheCOdex representative will contact you within 24 hours to begin architecture planning.
                  </p>
                  <div className="pt-6">
                    <NeonButton onClick={() => setLocation('/')} variant="outline">
                      Return to Dashboard
                    </NeonButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
}
