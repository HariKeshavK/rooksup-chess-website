import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — ROOKS UP" },
      {
        name: "description",
        content:
          "ROOKS UP Chess Academy Privacy Policy. Learn how we collect, protect, and handle personal data.",
      },
      { property: "og:title", content: "Privacy Policy — ROOKS UP" },
      {
        property: "og:description",
        content: "ROOKS UP Chess Academy Privacy Policy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F3F1]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-[#080808]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-paper/70 transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/"
            className="font-display text-base font-black uppercase tracking-[0.42em] text-paper"
          >
            Rooks Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-24">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="prose prose-invert max-w-none text-paper/80"
        >
          <p className="eyebrow mb-4 text-steel">Legal & Governance</p>
          <h1 className="font-display text-4xl font-black uppercase tracking-tight text-paper md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium tracking-wide text-steel">
            <strong>Last Updated: September 7, 2026</strong>
          </p>

          <div className="mt-12 space-y-10 border-t border-paper/15 pt-10 text-base leading-relaxed text-paper/85">
            <p>
              ROOKS UP (&quot;ROOKS UP&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
              a chess coaching and chess education initiative. This Privacy Policy explains how we
              collect, use, store, and protect personal information submitted through our website,
              registration forms, and other communication channels.
            </p>

            <p>
              By submitting information to ROOKS UP, you acknowledge that you have read this Privacy
              Policy.
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                1. Information We Collect
              </h2>
              <p>
                When you submit a student enquiry or registration form, we may collect the following
                information:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-paper/80">
                <li>Student&apos;s name</li>
                <li>Student&apos;s age</li>
                <li>FIDE rating, if applicable</li>
                <li>Parent/guardian or contact phone number</li>
                <li>Email address, if provided</li>
                <li>Whether the student has previously attended chess classes</li>
              </ul>
              <p>
                We only request information that is reasonably necessary for evaluating and
                responding to chess class enquiries, organising chess coaching, and understanding
                the student&apos;s chess experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                2. How We Use the Information
              </h2>
              <p>We may use the information collected to:</p>
              <ul className="list-disc space-y-2 pl-6 text-paper/80">
                <li>
                  Contact the parent, guardian, or student regarding chess classes and enquiries
                </li>
                <li>Understand the student&apos;s age, chess experience, and playing level</li>
                <li>Determine appropriate coaching or training options</li>
                <li>Organise and administer chess classes</li>
                <li>
                  Communicate important information relating to classes, schedules, or programmes
                </li>
                <li>
                  Maintain basic administrative records relating to our chess coaching activities
                </li>
              </ul>
              <p>
                We will not use the information for purposes unrelated to the purposes described
                above without obtaining appropriate consent or otherwise having a lawful basis to do
                so.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                3. Children&apos;s Personal Data
              </h2>
              <p>ROOKS UP may provide chess coaching to students under the age of 18.</p>
              <p>
                Where personal data relating to a child is collected, ROOKS UP will take appropriate
                steps to obtain and maintain verifiable consent from the child&apos;s parent or
                lawful guardian as required by applicable data protection law.
              </p>
              <p>
                ROOKS UP does not intentionally use children&apos;s personal data for behavioural
                monitoring, targeted advertising, or other purposes prohibited by applicable law.
              </p>
              <p>
                Parents or lawful guardians may contact ROOKS UP to request information about,
                correction of, or deletion of their child&apos;s personal data, subject to
                applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                4. Consent
              </h2>
              <p>
                Where consent is required, ROOKS UP will request consent in a clear and
                understandable manner.
              </p>
              <p>
                Consent may be withdrawn by contacting us using the contact details provided below.
                Where processing is based on consent, we will stop the relevant processing within a
                reasonable period after a valid withdrawal request, unless continued processing is
                permitted or required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                5. Sharing of Personal Data
              </h2>
              <p>ROOKS UP does not sell personal data.</p>
              <p>
                We may share personal data with service providers that help us operate our website,
                forms, communications, storage, or other necessary services. Such service providers
                may process personal data only for the purposes for which they are engaged and
                subject to appropriate safeguards.
              </p>
              <p>
                We may also disclose information where required by applicable law, regulation, legal
                process, or a lawful request from a government or regulatory authority.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                6. Data Security
              </h2>
              <p>
                ROOKS UP takes reasonable measures to protect personal data against unauthorised
                access, loss, misuse, alteration, disclosure, or destruction.
              </p>
              <p>
                Access to student information should be limited to people who need the information
                for legitimate ROOKS UP activities.
              </p>
              <p>
                However, no electronic storage or transmission system can be guaranteed to be
                completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                7. Data Retention
              </h2>
              <p>
                ROOKS UP will retain personal data only for as long as reasonably necessary for the
                purposes for which it was collected, including administration of chess classes and
                legitimate record-keeping requirements.
              </p>
              <p>
                When personal data is no longer reasonably required, ROOKS UP will take appropriate
                steps to delete or anonymise it, subject to any legal requirement to retain the
                information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                8. Your Rights
              </h2>
              <p>
                Subject to applicable law, a student or the student&apos;s parent or lawful guardian
                may contact ROOKS UP to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-paper/80">
                <li>Request information about personal data held by ROOKS UP</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of personal data where applicable</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Raise a grievance regarding the handling of personal data</li>
              </ul>
              <p>Requests can be made using the contact details below.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                9. Third-Party Services
              </h2>
              <p>
                Our website or forms may use third-party services for hosting, form collection,
                communication, storage, analytics, or other operational purposes.
              </p>
              <p>
                Where such services process personal data on our behalf, ROOKS UP will take
                reasonable steps to use appropriate service providers and protect the personal data
                being processed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                services, technology, or applicable legal requirements.
              </p>
              <p>
                The updated version will be published on this page with a revised &quot;Last
                Updated&quot; date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-paper md:text-2xl">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, wish to exercise a privacy right,
                withdraw consent, or raise a grievance regarding personal data, please contact:
              </p>
              <div className="rounded-none border border-paper/15 bg-paper/5 p-6 font-sans">
                <p className="font-bold text-paper">ROOKS UP Chess Club</p>
                <p className="mt-1 text-paper/80">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:rooksup.chess@gmail.com"
                    className="text-paper underline underline-offset-4 hover:text-white"
                  >
                    rooksup.chess@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-paper/80">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://rooksup.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper underline underline-offset-4 hover:text-white"
                  >
                    https://rooksup.com
                  </a>
                </p>
              </div>
              <p className="text-sm text-paper/70">
                For requests concerning a child, we may take reasonable steps to verify that the
                person making the request is the child&apos;s parent or lawful guardian.
              </p>
            </section>

            <div className="border-t border-paper/15 pt-8 text-sm italic text-paper/60">
              By submitting information through a ROOKS UP form, you confirm that you have read this
              Privacy Policy and understand how the information will be handled as described above.
            </div>
          </div>
        </motion.article>
      </main>

      {/* Footer */}
      <footer className="border-t border-paper/12 py-12 text-paper/60">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 text-[11px] uppercase tracking-[0.28em] md:flex-row md:items-center md:justify-between md:px-12">
          <span className="font-display font-black tracking-[0.42em] text-paper">Rooks Up</span>
          <span>Online chess academy</span>
          <Link to="/" className="text-paper/70 hover:text-paper">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
