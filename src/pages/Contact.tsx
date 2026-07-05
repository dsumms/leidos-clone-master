import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const org = (formData.get("org") as string).trim();
    const message = (formData.get("message") as string).trim();

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      organization: org || null,
      message,
    });

    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationRail />
      <main className="lg:content-offset pt-24 lg:pt-0">
        <section className="min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground max-w-3xl">
            Interested in <span className="gradient-text">Learning More?</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Contact us to learn more about Apaluma, request pricing, schedule a demo, or join our beta program.
          </p>
        </section>

        <section className="border-t border-border py-10 sm:py-16 px-6 sm:px-8 lg:px-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: "NAME", type: "text", name: "name" },
                    { label: "EMAIL", type: "email", name: "email" },
                    { label: "ORGANIZATION", type: "text", name: "org" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-display text-sm text-foreground tracking-widest block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.name !== "org"}
                        className="w-full bg-transparent border-b border-muted-foreground/40 py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-display text-sm text-foreground tracking-widest block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      className="w-full bg-transparent border-b border-muted-foreground/40 py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-display text-sm tracking-widest text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 mt-4 disabled:opacity-50"
                  >
                    {loading ? "SENDING..." : "SUBMIT"}
                  </button>
                </form>
              ) : (
                <div className="py-16">
                  <p className="font-display text-lg text-primary">Message received.</p>
                  <p className="font-body text-muted-foreground mt-4">
                    We will respond shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Contact;
