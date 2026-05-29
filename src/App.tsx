import { useState, useEffect, createRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, Eye, Presentation, Layers, Zap, Pin, Send, X } from 'lucide-react';


// Hero Section
function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#e4a659]/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center"
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           <div className="relative">

  <img
    src="/logo.ico"
    alt="TOMODesk"

    className="
      w-12
      h-12

      rounded-xl

      object-cover
    "
  />

  <motion.div

    className="
      absolute
      inset-0

      rounded-xl

      bg-[#e4a659]/20

      blur-xl
    "

    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.35, 0.6, 0.35]
    }}

    transition={{
      duration: 3,
      repeat: Infinity
    }}
  />

</div>
            <span className="text-white text-3xl font-light tracking-wide">TOMODesk</span>
          </motion.div>

          {/* Tagline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your invisible workspace
            <br />
            <span className="text-[#e4a659]">during meetings</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Floating notes, teleprompter, pass-through mode, and privacy-first overlays
            <br className="hidden md:block" />
            built for modern professionals.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 bg-[#e4a659] text-black rounded-xl font-medium text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(228,166,89,0.4)]"
            >
              Join Waitlist
              <motion.span
                className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-gray-500 text-sm mt-4">Early users get lifetime launch pricing</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gray-600 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ProductVideo() {

  return (

    <section className="
      relative
      py-2
      px-6
    ">

      <div className="
        max-w-4xl
        mx-auto
      ">

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
          }}

          className="
            relative

  overflow-hidden

  rounded-[28px]


  bg-white/[0.03]

  shadow-2xl

  backdrop-blur-xl

  max-w-4xl
  mx-auto

  
          "
        >

          {/* GLOW */}
          <div className="
            absolute
            inset-0

            bg-[#e4a659]/5

            blur-[120px]

            pointer-events-none
          " />

          {/* VIDEO */}
          <video

            autoPlay
            muted
            loop
            playsInline

            className="
               relative
                  z-10

                  block
                  mx-auto

                  max-w-full
                  max-h-[70vh]

                  rounded-[28px]

                  object-contain
                            "
          >

            <source
              src="/demo.mp4"
              type="video/mp4"
            />

          </video>

        </motion.div>

      </div>

    </section>

  );

}


// Desktop Mockup


// Features
const features = [
  {
    icon: Eye,
    title: "Hidden from Screen Sharing",
    description: "Your notes stay completely invisible during Zoom, Teams, and Meet calls."
  },
  {
    icon: Zap,
    title: "Pass-through Interaction",
    description: "Click through overlays to control apps underneath while keeping notes visible."
  },
  {
    icon: Presentation,
    title: "Teleprompter Mode",
    description: "Scrolling notes that help you stay on script during presentations."
  },
  {
    icon: Layers,
    title: "Floating Workspace",
    description: "Multiple overlapping windows that float above all applications."
  },
  {
    icon: FileText,
    title: "Instant Note Capture",
    description: "Quick capture thoughts without switching contexts or apps."
  },
  {
    icon: Pin,
    title: "Always on Top",
    description: "Your workspace stays visible even during fullscreen presentations."
  }
];

function Features() {
  return (
    <section className="py-20 px-6">
      
    </section>
  );
}

// Waitlist Form
function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');

    

  /* SEND EMAIL NOTIFICATION */
  await fetch(
    '/api/waitlist',
    {

      method: 'POST',

      headers: {
        'Content-Type':
          'application/json',
      },

      body: JSON.stringify({

        name,
        email,

      }),

    }
  );

  setStatus('success');

  setName('');

  setEmail('');

  };

  return (
    <section id="waitlist" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e4a659]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                Reserve your <span className="text-[#e4a659]">early access</span>
              </h2>
              <p className="text-gray-400">
                Limited early access rollout. No spam, just launch updates.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400 transform -rotate-12" />
                </div>
                <p className="text-white text-xl mb-2">You're on the list!</p>
                <p className="text-gray-400 text-sm">We'll email you when early access opens.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e4a659]/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e4a659]/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-[#e4a659] text-black rounded-xl font-medium hover:bg-[#e4a659]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Reserving...</span>
                    </>
                  ) : (
                    'Reserve Early Access'
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
  src="/logo.ico"
  alt="TOMODesk"

  className="
    w-8
    h-8

    rounded-lg

    object-cover
  "
/>
            <span className="text-white font-light">TOMODesk</span>
          </div>

          <p className="text-gray-500 text-sm">Built for modern workflows</p>
          <div className="mt-5 space-y-2">

  

  <p className="
    text-gray-600
    text-xs
    tracking-wide
  ">
    “TOMO” means friend in Japanese —
    built to quietly assist you during meetings.
  </p>

</div>

          <div className="flex items-center gap-6">
           
            <a
              href="mailto:hello@tomodesk.com"
              className="text-gray-500 hover:text-[#e4a659] transition-colors text-sm"
            >
              Email:tomo@tomodeskapp.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom scrollbar */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.15);
        }
      `}</style>

      

      <Hero />

<ProductVideo />



<Features />  
     
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
