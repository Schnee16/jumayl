import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '10+', label: 'Project Coding' },
    { icon: Video, value: '20+', label: 'Eksperimen & Belajar' },
  ];

  const accordionData = [
    {
      title: "Pelajar & Calon OSN Fisika",
      content: "Saya adalah seorang pelajar SMA yang memiliki ketertarikan besar dalam bidang fisika, khususnya dalam persiapan Olimpiade Sains Nasional (OSN).",
      content2: "Saya senang mempelajari konsep-konsep fisika secara mendalam seperti mekanika, gelombang, dan listrik, serta terus melatih kemampuan problem solving.",
      content3: "Target saya adalah bisa lolos dan berprestasi di OSN Fisika, serta mengembangkan pola pikir analitis yang kuat."
    },
    {
      title: "Coding & Teknologi",
      content: "Selain belajar fisika, saya juga memiliki minat dalam dunia coding, terutama dalam pengembangan web menggunakan React JS.",
      content2: "Saya suka membangun project sederhana hingga kompleks untuk melatih logika dan kreativitas saya di bidang teknologi.",
      content3: "Bagi saya, coding dan fisika adalah kombinasi sempurna antara logika, kreativitas, dan pemecahan masalah."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest text-sm">
            Tentang Saya
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👨‍🎓</span>
                </div>
              </motion.div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border">
                <p className="font-bold text-2xl text-primary">OSN</p>
                <p className="text-sm text-muted-foreground">Target</p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === index ? -1 : index)
                    }
                    className="w-full p-4 flex justify-between"
                  >
                    <span className="font-bold">
                      {item.title}
                    </span>

                    {/* FIX ERROR DI SINI */}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 text-muted-foreground">
                          {item.content}
                        </div>
                        <div className="p-4 text-muted-foreground">
                          {item.content2}
                        </div>
                        <div className="p-4 text-muted-foreground">
                          {item.content3}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 text-center border rounded-xl">
                  <stat.icon className="mx-auto mb-2" />
                  <p className="font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}