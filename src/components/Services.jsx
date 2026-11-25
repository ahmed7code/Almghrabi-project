import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaLayerGroup,
  FaPlug,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "Frontend Web Development",
    description:
      "Building fast, scalable, and maintainable web applications using React, Next.js, and modern JavaScript.",
    icon: <FaCode />,
    highlights: ["React & Next.js", "Clean Architecture", "Reusable Components"],
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Implementation",
    description:
      "Translating Figma designs and wireframes into pixel-perfect interfaces with smooth micro-interactions.",
    icon: <FaPaintBrush />,
    highlights: ["Figma to Code", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 3,
    number: "03",
    title: "Responsive Web Design",
    description:
      "Crafting fluid layouts that adapt seamlessly across mobile phones, tablets, and ultra-wide screens.",
    icon: <FaMobileAlt />,
    highlights: ["Mobile-First", "Cross-Browser", "Fluid Grids"],
  },
  {
    id: 4,
    number: "04",
    title: "Performance Optimization",
    description:
      "Improving Core Web Vitals, bundle sizes, and rendering speed for instant page loads and smoother UX.",
    icon: <FaRocket />,
    highlights: ["Code Splitting", "Fast Load Times", "SEO Friendly"],
  },
  {
    id: 5,
    number: "05",
    title: "Landing Pages & Portfolios",
    description:
      "Designing high-converting product pages and modern personal portfolios tailored to your brand identity.",
    icon: <FaLayerGroup />,
    highlights: ["Modern Dark UI", "Clear Hierarchy", "High Conversion"],
  },
  {
    id: 6,
    number: "06",
    title: "API Integration & State",
    description:
      "Connecting frontend interfaces with REST APIs, real-time data feeds, and predictable state flows.",
    icon: <FaPlug />,
    highlights: ["REST APIs", "Async Data", "Error Handling"],
  },
];

// مكون الكرت الفردي مع تأثير الميلان ثلاثي الأبعاد واللمعة التفاعلية
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  // تتبع موقع الماوس داخل الكرت
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // قيم نسبية لحساب زاوية الميلان
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, { stiffness: 250, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 250, damping: 22 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    // حساب زاوية ميلان خفيفة (-6 إلى +6 درجات)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateXRaw.set(((y - centerY) / centerY) * -6);
    rotateYRaw.set(((x - centerX) / centerX) * 6);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  // تدرج ضوئي يتبع المؤشر
  const spotlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.14), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full bg-[#121212] border border-zinc-800/80 rounded-2xl p-7 overflow-hidden transition-colors duration-300 hover:border-[#10b981]/50"
      >
        {/* طبقة التوهج اللي تتبع الماوس */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBg }}
        />

        {/* رقم الخدمة في الخلفية */}
        <span className="absolute top-5 right-6 text-4xl font-extrabold text-zinc-800/50 select-none group-hover:text-[#10b981]/15 transition-colors duration-300">
          {service.number}
        </span>

        {/* محتوى الكرت */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* الأيقونة */}
            <div className="w-13 h-13 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl text-[#10b981] mb-6 group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300">
              {service.icon}
            </div>

            {/* العنوان والوصف */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#10b981] transition-colors">
              {service.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          {/* نقاط سريعة أسفل الكرت */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/70">
            {service.highlights.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 scroll-mt-24 px-6 max-w-6xl mx-auto text-white"
    >
      {/* عنوان القسم */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What I <span className="text-[#10b981]">Offer</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          End-to-end frontend solutions focused on speed, clean code, and
          engaging user experiences.
        </p>
      </motion.div>

      {/* شبكة الـ 6 كروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;