import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import {
  FaSnowflake,
  FaStar,
  FaCheckCircle,
  FaTint,
  FaBolt,
  FaWind,
  FaChevronDown,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function App() {
  const [seconds, setSeconds] = useState(86400);

  const orderRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden min-h-screen">
      <Announcement />

      <div className="delivery px-4">
        <h3>
          Free Delivery + Payment on Delivery within Lagos
        </h3>

        <h3>
          Payment Before Delivery + A flat Delivery rate of ₦8000 outside Lagos
        </h3>
      </div>

      <Countdown h={h} m={m} s={s} onOrder={scrollToOrder} />

      <main className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-5 md:px-8 lg:px-10 py-8 md:py-10">
          <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
            <Hero onOrder={scrollToOrder} />

            <Benefits />

            <Description />

            <VideoSection />

            <Gallery />

            <ChatProofs />

            <TrustSection />

            <Testimonials />

            <FAQ />

            <OrderForm
              orderRef={orderRef}
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
          </div>
        </div>
      </main>

      <MobileStickyCTA onOrder={scrollToOrder} />
    </div>
  );
}

function SectionTitle({ tag, title }) {
  return (
    <div className="text-center mb-10 md:mb-14 px-2">
      <p className="text-green-400 font-bold tracking-[3px] text-xs sm:text-sm">
        {tag}
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-4 md:mt-5 leading-tight">
        {title}
      </h2>
    </div>
  );
}

function Announcement() {
  return (
    <div className="bg-red-600 py-3 px-4 text-center font-bold text-xs sm:text-sm tracking-wide w-full">
      🔥 LIMITED STOCK • 50% OFF TODAY • DELIVERY AVAILABLE
    </div>
  );
}

function Countdown({ h, m, s, onOrder }) {
  return (
    <section className="sticky top-0 z-50 backdrop-blur-xl bg-black/90 border-b border-zinc-800 w-full offer">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8 lg:px-10 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-red-400 font-bold text-xs md:text-sm">
            OFFER ENDS SOON
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-1 offerl">
            {h}:{m}:{s}
          </h2>
        </div>

        <button
          onClick={onOrder}
          className="bg-green-500 hover:bg-green-400 transition-all text-black px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-sm md:text-base shrink-0 but"
        >
          ORDER NOW
        </button>
      </div>
    </section>
  );
}

function Hero({ onOrder }) {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00ff8840,transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* HERO BADGE */}
        <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-400/30 text-green-300 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-black shadow-[0_0_30px_rgba(0,255,120,.12)] backdrop-blur-xl cooler">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-center">
            PORTABLE MINI AIR COOLER
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mt-6 md:mt-8 px-2">
          No More
          <br />
          Sweaty Nights
        </h1>

        <p className="mt-5 md:mt-6 text-zinc-400 text-sm sm:text-base md:text-xl leading-7 md:leading-8 max-w-2xl mx-auto px-2">
          Enjoy cool refreshing air anywhere you go with this powerful portable
          air cooler designed for bedrooms, offices, outdoor relaxation and
          peaceful overnight sleep.
        </p>

        <div className="mt-8 md:mt-10 space-y-4 md:space-y-5 max-w-xl w-full px-2">
          <FeatureText text="Portable USB charging cord included" />
          <FeatureText text="Battery lasts over 4 hours" />
          <FeatureText text="Large water tank for all-night cooling" />
          <FeatureText text="Works as air cooler and humidifier" />
          <FeatureText text="Strong airflow with quiet operation" />
        </div>

        <div className="flex gap-3 md:gap-4 items-center mt-8 md:mt-10 flex-wrap justify-center px-2">
          <span className="text-3xl sm:text-4xl md:text-6xl font-black text-green-400">
            ₦39 000
          </span>

          <span className="line-through text-red-500 text-xl sm:text-2xl md:text-3xl">
            ₦54 000
          </span>
        </div>

        {/* HERO BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 relative z-30 mb-12 md:mb-16 w-full sm:w-auto px-4">
          <button
            onClick={onOrder}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 transition-all text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-[0_0_45px_rgba(0,255,120,.35)] hover:scale-105 but"
          >
            ORDER NOW
          </button>

          <button className="w-full sm:w-auto border border-zinc-700 hover:border-green-400 hover:text-green-400 transition-all px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-white bg-zinc-900/60 backdrop-blur-xl but">
            LIMITED STOCK
          </button>
        </div>

        {/* PRODUCT IMAGE */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative max-w-[520px] mx-auto w-full mt-2 md:mt-4 z-10 px-2"
        >
          <div className="absolute inset-0 blur-[100px] bg-green-500/20" />

          <img
            src="/product.jpeg"
            className="relative z-10 rounded-[24px] md:rounded-[32px] shadow-[0_0_60px_rgba(0,255,120,.18)] w-full object-cover image1"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureText({ text }) {
  return (
    <div className="flex items-start sm:items-center justify-center gap-3 sm:gap-4 text-center">
      <div className="w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center shrink-0 mt-1 sm:mt-0">
        <FaCheckCircle className="text-green-400" size={12} />
      </div>

      <p className="text-zinc-300 leading-7 text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
}

function Benefits() {
  const data = [
    ["Fast Cooling", FaSnowflake],
    ["Purifies Air", FaWind],
    ["Humidifier Function", FaTint],
    ["Strong Air Delivery", FaBolt],
  ];

  return (
    <section className="text-center">
      <SectionTitle
        tag="WHY PEOPLE LOVE IT"
        title="Designed For Comfort"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {data.map(([title, Icon]) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={title}
            className="bg-zinc-900 border border-zinc-800 rounded-[28px] p-6 md:p-8 flex flex-col items-center text-center"
          >
            <Icon size={34} className="text-green-400" />

            <h3 className="mt-5 md:mt-6 text-lg md:text-xl font-bold">
              {title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Description() {
  return (
    <section>
      <div className="bg-zinc-900 border border-zinc-800 rounded-[24px] md:rounded-[32px] p-5 sm:p-6 md:p-12">
        <div className="flex flex-col items-center text-center image2">
          <img
            src="/1.jpeg"
            className="rounded-[20px] md:rounded-[28px] w-full max-w-[450px]"
          />

          <div className="mt-8 md:mt-12 max-w-3xl">
            <p className="text-green-400 font-bold tracking-[3px] text-xs sm:text-sm">
              ADVANCED COOLING SYSTEM
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mt-4 md:mt-5">
              Stay Fresh &
              <br />
              Comfortable Every Night
            </h2>

            <p className="mt-5 md:mt-6 text-zinc-400 leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
              This portable air cooler cools, purifies and increases airflow
              efficiently while helping you stay relaxed during hot weather.
            </p>

            <p className="mt-4 md:mt-5 text-zinc-400 leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
              The large water tank provides long-lasting overnight cooling with
              whisper-quiet operation for peaceful sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="text-center">
      <SectionTitle
        tag="LIVE DEMO"
        title="Watch It In Action"
      />

      <div className="max-w-4xl mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden border border-zinc-800">
        <video
          controls
          autoPlay
          muted
          loop
          className="w-full max-h-[260px] sm:max-h-[400px] md:max-h-[550px] object-cover"
        >
          <source src="/demo.mp4" />
        </video>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="text-center">
      <SectionTitle
        tag="PRODUCT SHOWCASE"
        title="Premium Cooling"
      />

      {/* FIRST 2 IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-[24px] md:rounded-[28px] border border-zinc-800 bg-zinc-900"
        >
          <img
            src="/1.jpeg"
            className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-[24px] md:rounded-[28px] border border-zinc-800 bg-zinc-900"
        >
          <img
            src="/2.jpeg"
            className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover"
          />
        </motion.div>
      </div>

      {/* CATCHY DESCRIPTION */}
      <div className="my-12 md:my-16 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 catchy">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
            Cool Air Anywhere.
            <br />
            Anytime You Need It.
          </h3>

          <p className="mt-5 md:mt-6 text-zinc-400 leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
            Whether you're relaxing at home, sleeping at night, working in your
            office or traveling outdoors, this mini air cooler delivers instant
            refreshing airflow that keeps you cool and comfortable all day long.
          </p>
        </div>
      </div>

      {/* LAST 2 IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-[24px] md:rounded-[28px] border border-zinc-800 bg-zinc-900"
        >
          <img
            src="/3.jpeg"
            className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-[24px] md:rounded-[28px] border border-zinc-800 bg-zinc-900"
        >
          <img
            src="/4.jpeg"
            className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ChatProofs() {
  const shots = [1, 2, 3, 4];

  return (
    <section className="text-center">
      <SectionTitle
        tag="WHAT CUSTOMERS SAY"
        title="Real Chat Feedback"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {shots.map((item) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={item}
            className="bg-zinc-900 border border-dashed border-zinc-700 rounded-[24px] md:rounded-[28px] min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center text-center p-6 md:p-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-800 mb-5" />

            <p className="text-lg sm:text-xl font-bold">
              Customer Chat Screenshot
            </p>

            <p className="mt-3 text-zinc-500 leading-7 text-sm sm:text-base">
              Replace with WhatsApp screenshots.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section>
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <TrustItem
            title="Nationwide Delivery"
            icon={<FaTruck />}
          />

          <TrustItem
            title="Payment On Delivery"
            icon={<FaShieldAlt />}
          />

          <TrustItem
            title="Fast Processing"
            icon={<FaBolt />}
          />

          <TrustItem
            title="Customer Support"
            icon={<FaHeadset />}
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ title, icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 text-xl sm:text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 md:mt-5 font-bold text-base sm:text-lg">
        {title}
      </h3>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    "Cooling stronger than expected.",
    "Perfect for hot nights and travel.",
    "Battery lasts very long.",
    "Works great indoors and outdoors.",
  ];

  return (
    <section className="text-center">
      <SectionTitle
        tag="VERIFIED REVIEWS"
        title="Customer Experience"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {reviews.map((r) => (
          <div
            key={r}
            className="bg-zinc-900 border border-zinc-800 rounded-[24px] md:rounded-[28px] p-6 md:p-8 text-center"
          >
            <div className="flex gap-1 text-yellow-400 justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-5 text-zinc-300 leading-7 md:leading-8 text-base md:text-lg">
              {r}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqData = [
    {
      q: "How long does the battery last?",
      a: "The rechargeable battery lasts over 4 hours depending on usage mode.",
    },
    {
      q: "Can it be used outdoors?",
      a: "Yes. It works perfectly both indoors and outdoors.",
    },
    {
      q: "Does it come with charging cord?",
      a: "Yes. A USB charging cord is included inside the package.",
    },
    {
      q: "Is payment on delivery available?",
      a: "Yes. We offer nationwide delivery and payment on delivery in selected locations.",
    },
  ];

  return (
    <section className="text-center">
      <SectionTitle
        tag="FAQ"
        title="Frequently Asked Questions"
      />

      <div className="space-y-5 max-w-4xl mx-auto">
        {faqData.map((item) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
          />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-zinc-900 border border-zinc-800 rounded-[24px] md:rounded-[28px] overflow-hidden text-left"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 md:p-7 hover:bg-zinc-800/40 transition-all gap-4"
      >
        <h3 className="font-bold text-base sm:text-lg md:text-xl pr-2 sm:pr-5 leading-snug">
          {q}
        </h3>

        <div
          className={`min-w-[38px] min-h-[38px] md:min-w-[42px] md:min-h-[42px] rounded-full flex items-center justify-center bg-green-500/10 text-green-400 transition-all ${
            open ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown />
        </div>
      </button>

      {open && (
        <div className="px-5 sm:px-6 md:px-7 pb-6 md:pb-7">
          <div className="border-t border-zinc-800 pt-5">
            <p className="text-zinc-400 leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
              {a}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function OrderForm({
  orderRef,
  submitted,
  setSubmitted,
}) {

    const [fullname, setFullname] = useState("");
const [phone, setPhone] = useState("");
const [state, setState] = useState("");
const [quantity, setQuantity] = useState(1);
const [address, setAddress] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(
      "https://backend-app-123.fly.dev/api/orders/create",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fullname,
          phone,
          state,
          quantity,
          address,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);

      setFullname("");
      setPhone("");
      setState("");
      setQuantity(1);
      setAddress("");
    }

  } catch (error) {
    console.log(error);

  } finally {
    setLoading(false);
  }
};

  return (
    <section ref={orderRef} className="pb-24 md:pb-10">
      <div className="max-w-4xl mx-auto bg-white text-black rounded-[24px] md:rounded-[36px] p-5 sm:p-6 md:p-12 shadow-2xl text-center">
        <p className="text-green-600 font-bold tracking-[3px] text-xs sm:text-sm">
          PLACE YOUR ORDER
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-4">
          Get Yours Today
        </h2>

        <p className="mt-5 text-zinc-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl mx-auto">
          Fill your details correctly and our agent will contact you immediately
          to confirm your order.
        </p>

        {submitted && (
          <div className="mt-8 bg-green-100 text-green-700 border border-green-300 p-4 sm:p-5 rounded-2xl font-bold text-center text-sm sm:text-base">
            Congratulations, your order has been submitted successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 md:mt-10 grid gap-4 md:gap-5"
        >
        <input
  required
  value={fullname}
  onChange={(e) => setFullname(e.target.value)}
  placeholder="Full Name"
  className="w-full border border-zinc-300 p-4 md:p-5 rounded-2xl outline-none focus:border-green-500 text-sm sm:text-base"
/>

         <input
  required
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Phone Number"
  className="w-full border border-zinc-300 p-4 md:p-5 rounded-2xl outline-none focus:border-green-500 text-sm sm:text-base"
/>

       <input
  required
  value={state}
  onChange={(e) => setState(e.target.value)}
  placeholder="State"
  className="w-full border border-zinc-300 p-4 md:p-5 rounded-2xl outline-none focus:border-green-500 text-sm sm:text-base"
/>
       <input
  type="number"
  required
  min="1"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
  placeholder="Quantity"
  className="w-full border border-zinc-300 p-4 md:p-5 rounded-2xl outline-none focus:border-green-500 text-sm sm:text-base"
/>

       <textarea
  required
  rows="5"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  placeholder="Full Delivery Address"
  className="w-full border border-zinc-300 p-4 md:p-5 rounded-2xl outline-none focus:border-green-500 text-sm sm:text-base resize-none"
/>

         <button
  disabled={loading}
  className="w-full bg-black hover:bg-zinc-800 transition-all text-white py-5 rounded-2xl font-black text-lg mt-2 disabled:opacity-50"
>
  {loading ? "Submitting..." : "SUBMIT ORDER"}
</button>
        </form>

        {/* DELIVERY INFO */}
        <div className="mt-10 md:mt-12 bg-zinc-100 rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-8 text-left remove">
          <h3 className="text-xl sm:text-2xl font-black">
            Delivery Information
          </h3>

          <p className="mt-4 md:mt-5 text-zinc-700 leading-7 md:leading-8 text-sm sm:text-base">
            Delivery is done within 24 to 72 hours after placing your order
            depending on your location.
          </p>

          <p className="mt-4 text-zinc-700 leading-7 md:leading-8 text-sm sm:text-base">
            Please make sure your phone number and delivery address are correct
            so our delivery agent can reach you easily.
          </p>

          <p className="mt-4 text-zinc-700 leading-7 md:leading-8 font-semibold text-sm sm:text-base">
            Avail yourself to receive your package once contacted for delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCTA({ onOrder }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-zinc-800 p-3 sm:p-4 md:hidden">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-green-400 font-black text-xl sm:text-2xl">
            ₦39 000
          </p>

          <p className="text-zinc-500 line-through text-xs sm:text-sm">
            ₦54 000
          </p>
        </div>

        <button
          onClick={onOrder}
          className="flex-1 bg-green-500 text-black py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-base"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}