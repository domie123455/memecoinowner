import { FC } from "react";

export const FaqView: FC = () => {
  const question = [
    {
      question: "Which Wallets Are Supported?",
      answer: "Phantom, Solflare and Torus wallets.",
      id: "faq-1",
    },
    {
      question: "What can I do with my coin?",
      answer:
        "You can allow others to buy it just like Bitcoin or Dogecoin. You would have your own coin on the blockchain which you can manage any way you like.",
      wallets: undefined,
      id: "faq-2",
    },
    {
      question: "How do I contact you?",
      answer: "Message us under the contact tab or email coinownermeme@gmail.com",
      wallets: undefined,
      id: "faq-3",
    },
    {
      question: "How long until I have my coin and can access it?",
      answer:
        "Immediately — it will be added to your wallet. The process is very quick and simple.",
      wallets: undefined,
      id: "faq-4",
    },
    {
      question: "I have more questions.",
      answer:
        "Contact us anytime and we will answer any questions you have.",
      wallets: undefined,
      id: "faq-5",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Everything you need to know about creating and managing <br />
              your coin on MemecoinOwner.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {question.map((q, index) => (
              <div
                key={index}
                className="hs-accordion bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl"
                id={q.id}
              >
                <button
                  className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left text-white transition-all"
                  aria-controls={`faq-accordion-${index + 1}`}
                >
                  <h5 className="flex text-base font-semibold">
                    <i data-lucide="help-circle" className="me-3 h-5 w-5 stroke-white align-middle"></i>
                    {q.question}
                  </h5>
                  <i data-lucide="chevron-up" className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
                </button>
                <div
                  id={`faq-accordion-${index + 1}`}
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby={q.id}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-default-300 text-sm font-medium">{q.answer}</p>
                    {q.wallets && (
                      <div className="mt-4 flex items-center gap-4">
                        {q.wallets.map((w) => (
                          <div key={w.name} className="flex flex-col items-center gap-1">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                              <img src={w.icon} alt={w.name} className="h-7 w-7 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                            </div>
                            <span className="text-xs text-white/50">{w.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
