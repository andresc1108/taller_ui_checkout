"use client";

import { useState } from "react";

/* ============================================================
   SVG ICONS
   ============================================================ */

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
    <ellipse cx="16" cy="16" rx="7" ry="13" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
  </svg>
);

const ArrowLeftIcon = ({ color = "#6b7280" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14 9H4M4 9L8 5M4 9L8 13" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M1 1L12 12M12 1L1 12" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 1V9M1 5H9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1 5H9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" stroke="#eab308" strokeWidth="2.5" />
    <path d="M18 32L28 42L46 22" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CartEmptyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 22 22" fill="none">
    <path d="M2 2h2.5l2.2 9.5h9L18 4H7" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9.5" cy="18.5" r="1.5" fill="#9ca3af" />
    <circle cx="15.5" cy="18.5" r="1.5" fill="#9ca3af" />
  </svg>
);

const CartNavIcon = ({ count }: { count: number }) => (
  <div className="relative inline-flex">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 2h2.5l2.2 9.5h9L18 4H7" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="18.5" r="1.5" fill="#374151" />
      <circle cx="15.5" cy="18.5" r="1.5" fill="#374151" />
    </svg>
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
        {count}
      </span>
    )}
  </div>
);

/* ============================================================
   PAYMENT CARD SVGs
   ============================================================ */

const MastercardSVG = () => (
  <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
    <circle cx="16" cy="14" r="10" fill="#EB001B" />
    <circle cx="26" cy="14" r="10" fill="#F79E1B" />
    <path d="M21 6.2C23.1 7.8 24.5 10.2 24.5 14C24.5 17.8 23.1 20.2 21 21.8C18.9 20.2 17.5 17.8 17.5 14C17.5 10.2 18.9 7.8 21 6.2Z" fill="#FF5F00" />
  </svg>
);

const VisaSVG = () => (
  <svg width="50" height="28" viewBox="0 0 50 28" fill="none">
    <text x="2" y="20" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="18" fill="#9ca3af" letterSpacing="0.5">VISA</text>
  </svg>
);

const VerveSVG = () => (
  <svg width="54" height="28" viewBox="0 0 54 28" fill="none">
    <path d="M2 6 L8 20 L14 6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M16 16 Q16 10 21 10 Q26 10 26 15 L16 15" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M16 15 Q18 21 24 18" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M28 11 L28 20 M28 13 Q31 10 34 11" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M36 11 L40 20 L44 11" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M46 16 Q46 10 51 10 Q56 10 56 15 L46 15" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M46 15 Q48 21 54 18" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

/* ============================================================
   PRODUCT SVGs
   ============================================================ */

const DenimShirtImg = () => (
  <svg viewBox="0 0 80 90" fill="none" width="52" height="58">
    <path d="M14 18 L0 32 L14 38 L14 82 L66 82 L66 38 L80 32 L66 18 L52 6 Q40 13 28 6 Z" fill="#3b5998" />
    <path d="M28 6 Q40 13 52 6 L52 36 L28 36 Z" fill="#2d4a80" />
    <rect x="37" y="36" width="6" height="46" fill="#2d4a80" opacity="0.5" />
    <circle cx="40" cy="44" r="2" fill="#22376e" />
    <circle cx="40" cy="54" r="2" fill="#22376e" />
    <circle cx="40" cy="64" r="2" fill="#22376e" />
    <path d="M0 32 Q7 36 14 38" stroke="#2d4a80" strokeWidth="2" fill="none" />
    <path d="M80 32 Q73 36 66 38" stroke="#2d4a80" strokeWidth="2" fill="none" />
  </svg>
);

const DenimPantsImg = () => (
  <svg viewBox="0 0 60 90" fill="none" width="40" height="64">
    <rect x="2" y="0" width="56" height="34" rx="3" fill="#374a6e" />
    <path d="M2 34 L18 90 L30 90 L30 52 L30 90 L42 90 L58 34 Z" fill="#374a6e" />
    <line x1="30" y1="34" x2="30" y2="90" stroke="#2a3b58" strokeWidth="2" />
    <line x1="6" y1="6" x2="54" y2="6" stroke="#2a3b58" strokeWidth="1.5" />
    <rect x="22" y="2" width="16" height="8" rx="1.5" fill="#2a3b58" />
  </svg>
);

const SmartwatchImg = () => (
  <svg viewBox="0 0 60 80" fill="none" width="40" height="60">
    <rect x="20" y="0" width="20" height="14" rx="4" fill="#1a1a1a" />
    <rect x="20" y="66" width="20" height="14" rx="4" fill="#1a1a1a" />
    <rect x="8" y="12" width="44" height="56" rx="12" fill="#111111" />
    <rect x="12" y="16" width="36" height="48" rx="9" fill="#0f0f0f" />
    <circle cx="30" cy="40" r="14" fill="#1a3a5c" />
    <path d="M30 30 L30 40 L37 40" stroke="#60b8f5" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="30" cy="40" r="2" fill="white" />
  </svg>
);

const OxfordShoeImg = () => (
  <svg viewBox="0 0 90 60" fill="none" width="64" height="44">
    <path d="M6 42 Q12 18 40 14 Q65 11 80 24 L83 36 Q70 46 46 48 L12 50 Q3 48 6 42Z" fill="#8B4513" />
    <path d="M6 42 Q12 36 46 39 Q68 40 83 36 L83 40 Q70 50 46 52 L10 52 Q2 50 6 42Z" fill="#6B3410" />
    <path d="M34 15 Q40 9 50 14" stroke="#7a3d10" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M36 18 Q41 12 48 17" stroke="#7a3d10" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M38 21 Q41 16 46 20" stroke="#7a3d10" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <ellipse cx="18" cy="44" rx="10" ry="6" fill="#5a2c0e" />
  </svg>
);

const SneakerImg = () => (
  <svg viewBox="0 0 90 60" fill="none" width="64" height="44">
    <path d="M4 44 Q10 22 36 18 Q60 14 78 26 L81 38 Q66 50 42 52 L10 52 Q2 50 4 44Z" fill="#f1f5f9" />
    <path d="M4 44 Q10 38 42 41 Q66 42 81 38 L81 42 Q66 54 42 56 L8 56 Q1 54 4 44Z" fill="#e2e8f0" />
    <rect x="6" y="40" width="72" height="6" rx="2" fill="#3b82f6" opacity="0.25" />
    <path d="M22 19 L26 42" stroke="#94a3b8" strokeWidth="1.2" />
    <path d="M34 17 L37 42" stroke="#94a3b8" strokeWidth="1.2" />
    <ellipse cx="14" cy="46" rx="8" ry="5" fill="#cbd5e1" />
  </svg>
);

const JacketImg = () => (
  <svg viewBox="0 0 80 90" fill="none" width="52" height="64">
    <path d="M10 14 L0 26 L14 32 L14 82 L66 82 L66 32 L80 26 L70 14 L50 4 Q40 10 30 4 Z" fill="#374151" />
    <path d="M30 4 Q40 10 50 4 L50 32 L30 32 Z" fill="#1f2937" />
    <line x1="40" y1="32" x2="40" y2="82" stroke="#1f2937" strokeWidth="2" />
    <rect x="12" y="36" width="12" height="10" rx="2" fill="#1f2937" opacity="0.6" />
    <rect x="56" y="36" width="12" height="10" rx="2" fill="#1f2937" opacity="0.6" />
  </svg>
);

const BagImg = () => (
  <svg viewBox="0 0 70 80" fill="none" width="50" height="60">
    <rect x="5" y="24" width="60" height="52" rx="6" fill="#92400e" />
    <path d="M24 24 Q24 10 35 10 Q46 10 46 24" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
    <rect x="26" y="44" width="18" height="12" rx="2.5" fill="#78350f" />
    <circle cx="35" cy="50" r="2.5" fill="#d97706" />
    <line x1="5" y1="42" x2="65" y2="42" stroke="#78350f" strokeWidth="1.5" />
  </svg>
);

const GlassesImg = () => (
  <svg viewBox="0 0 90 50" fill="none" width="64" height="38">
    <line x1="0" y1="22" x2="12" y2="24" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="78" y1="24" x2="90" y2="22" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="12" y="12" width="28" height="22" rx="11" fill="#1f2937" />
    <rect x="50" y="12" width="28" height="22" rx="11" fill="#1f2937" />
    <line x1="40" y1="23" x2="50" y2="23" stroke="#1f2937" strokeWidth="2.5" />
    <rect x="15" y="15" width="10" height="8" rx="4" fill="#374151" opacity="0.5" />
    <rect x="53" y="15" width="10" height="8" rx="4" fill="#374151" opacity="0.5" />
  </svg>
);

/* ============================================================
   TYPES
   ============================================================ */

interface CartItem {
  id: number;
  name: string;
  ref: string;
  color: string;
  quantity: number;
  price: number;
  image: React.ReactNode;
}

interface ShopProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  image: React.ReactNode;
}

/* ============================================================
   DATA
   ============================================================ */

const SHOP_PRODUCTS: ShopProduct[] = [
  { id: 10, name: "Denim T-Shirt",    price: 3750,  category: "Ropa",        color: "Blue",   image: <DenimShirtImg /> },
  { id: 11, name: "Denim Pants",      price: 3000,  category: "Ropa",        color: "Blue",   image: <DenimPantsImg /> },
  { id: 12, name: "Sony Smartwatch",  price: 24500, category: "Electrónica", color: "Black",  image: <SmartwatchImg /> },
  { id: 13, name: "Cognac Oxford",    price: 4500,  category: "Calzado",     color: "Brown",  image: <OxfordShoeImg /> },
  { id: 14, name: "Sneakers Blancos", price: 5200,  category: "Calzado",     color: "White",  image: <SneakerImg /> },
  { id: 15, name: "Chaqueta Gris",    price: 8900,  category: "Ropa",        color: "Gray",   image: <JacketImg /> },
  { id: 16, name: "Bolso Marrón",     price: 6700,  category: "Accesorios",  color: "Brown",  image: <BagImg /> },
  { id: 17, name: "Gafas de Sol",     price: 3100,  category: "Accesorios",  color: "Black",  image: <GlassesImg /> },
];

const INITIAL_ITEMS: CartItem[] = [
  { id: 1, name: "Denim T-Shirt",    ref: "007197456", color: "Blue",  quantity: 2, price: 3750,  image: <DenimShirtImg /> },
  { id: 2, name: "Denim Pants",      ref: "011015233", color: "Blue",  quantity: 3, price: 3000,  image: <DenimPantsImg /> },
  { id: 3, name: "Sony Smartwat...", ref: "004822981", color: "Black", quantity: 1, price: 24500, image: <SmartwatchImg /> },
  { id: 4, name: "Cognac Oxford",    ref: "035772962", color: "Brown", quantity: 1, price: 4500,  image: <OxfordShoeImg /> },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function CheckoutPage() {
  const [view, setView]               = useState<"shop" | "cart" | "address" | "success">("cart");
  const [activePanel, setActivePanel] = useState(0);
  const [panelOpen, setPanelOpen]     = useState(true);
  const [items, setItems]             = useState<CartItem[]>(INITIAL_ITEMS);

  const [selectedCard, setSelectedCard] = useState<"mastercard" | "visa" | "verve">("mastercard");
  const [cardNumber, setCardNumber]     = useState("");
  const [expiryDate, setExpiryDate]     = useState("");
  const [cvv, setCvv]                   = useState("");
  const [errors, setErrors]             = useState<Record<string, string>>({});
  const [promoCode, setPromoCode]       = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError]     = useState("");

  // Address form state
  const [address, setAddress] = useState({
    fullName: "", phone: "", email: "",
    street: "", city: "", state: "", zip: "", country: "Colombia",
  });
  const [addressErrors, setAddressErrors] = useState<Record<string, string>>({});

  /* ── Cart helpers ─────────────────────────────────────────────────────── */

  const increaseQty = (id: number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));

  const decreaseQty = (id: number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));

  const removeItem = (id: number) =>
    setItems(prev => prev.filter(i => i.id !== id));

  const addToCart = (p: ShopProduct) =>
    setItems(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, {
        id: p.id, name: p.name, color: p.color,
        ref: String(Math.floor(Math.random() * 900000000 + 100000000)),
        quantity: 1, price: p.price, image: p.image,
      }];
    });

  /* ── Calculations ─────────────────────────────────────────────────────── */

  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total    = subtotal - discount;
  const fmt      = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });

  /* ── Card formatting ──────────────────────────────────────────────────── */

  const fmtCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const fmtExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length <= 2 ? d : `${d.slice(0, 2)} / ${d.slice(2)}`;
  };

  /* ── Checkout validation ──────────────────────────────────────────────── */

  const handleCheckout = () => {
    const e: Record<string, string> = {};
    if (items.length === 0)                           e.cart       = "Tu carrito está vacío.";
    if (cardNumber.replace(/\s/g, "").length < 16)   e.cardNumber = "Número de tarjeta inválido.";
    if (expiryDate.replace(/[\s/]/g, "").length < 4) e.expiryDate = "Fecha inválida.";
    if (cvv.length < 3)                               e.cvv        = "CVV inválido.";
    setErrors(e);
    if (Object.keys(e).length === 0) setView("address");
  };

  const handlePromo = () => {
    if (promoCode.toUpperCase() === "DESCUENTO10") {
      setPromoApplied(true); setPromoError("");
    } else {
      setPromoError("Código no válido. Prueba: DESCUENTO10");
    }
  };

  const resetAll = () => {
    setItems(INITIAL_ITEMS);
    setCardNumber(""); setExpiryDate(""); setCvv("");
    setPromoCode(""); setPromoApplied(false); setPromoError("");
    setErrors({}); setActivePanel(0);
    setAddress({ fullName: "", phone: "", email: "", street: "", city: "", state: "", zip: "", country: "Colombia" });
    setAddressErrors({});
  };

  /* ── Right panel renderer ─────────────────────────────────────────────── */

  const renderPanel = () => {
    /* Panel 1 — Order Summary */
    if (activePanel === 1) return (
      <div style={{ flex: 1, padding: "40px 32px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <h2 style={{ color: "#EAB308", fontSize: 20, fontWeight: 600, marginBottom: 32, letterSpacing: "0.05em" }}>
          Resumen del Pedido
        </h2>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {items.length === 0
            ? <p style={{ color: "#6b7280", fontSize: 14 }}>No hay productos en el carrito.</p>
            : items.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <span style={{ color: "#d1d5db", fontSize: 13, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.name}
                </span>
                <span style={{ color: "#9ca3af", fontSize: 13, flexShrink: 0 }}>×{item.quantity}</span>
                <span style={{ color: "#f3f4f6", fontSize: 13, flexShrink: 0 }}>{fmt(item.price * item.quantity)}</span>
              </div>
            ))
          }
        </div>
        <div style={{ borderTop: "1px solid #4b5563", marginTop: 24, paddingTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#9ca3af", fontSize: 13 }}>Subtotal</span>
            <span style={{ color: "#9ca3af", fontSize: 13 }}>{fmt(subtotal)} NGN</span>
          </div>
          {promoApplied && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#4ade80", fontSize: 13 }}>Descuento (10%)</span>
              <span style={{ color: "#4ade80", fontSize: 13 }}>−{fmt(discount)} NGN</span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ color: "white", fontSize: 15, fontWeight: 700 }}>Total</span>
            <span style={{ color: "white", fontSize: 15, fontWeight: 700 }}>{fmt(total)} NGN</span>
          </div>
        </div>
      </div>
    );

    /* Panel 2 — Promo Code */
    if (activePanel === 2) return (
      <div style={{ flex: 1, padding: "40px 32px 24px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "#EAB308", fontSize: 20, fontWeight: 600, marginBottom: 32, letterSpacing: "0.05em" }}>
          Código Promocional
        </h2>
        <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
          Ingresa tu código de descuento para obtener un beneficio en tu compra.
        </p>
        <label style={{ color: "#9ca3af", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>
          Código
        </label>
        <input
          type="text"
          value={promoCode}
          onChange={e => { setPromoCode(e.target.value); setPromoError(""); }}
          placeholder="Ej: DESCUENTO10"
          style={{
            background: "transparent", border: "none", borderBottom: "1px solid #6b7280",
            outline: "none", color: "white", fontSize: 14, paddingBottom: 6,
            letterSpacing: "0.1em", textTransform: "uppercase", width: "100%",
          }}
        />
        {promoError && <p style={{ color: "#f87171", fontSize: 12, marginTop: 6 }}>{promoError}</p>}
        {promoApplied && <p style={{ color: "#4ade80", fontSize: 13, marginTop: 10 }}>✓ Descuento del 10% aplicado.</p>}
        <button
          onClick={handlePromo}
          disabled={promoApplied}
          style={{
            marginTop: 24, alignSelf: "flex-start",
            background: promoApplied ? "#6b7280" : "#EAB308",
            color: "#111", fontWeight: 600, fontSize: 13,
            padding: "10px 24px", borderRadius: 8, border: "none", cursor: "pointer",
          }}
        >
          {promoApplied ? "Código aplicado" : "Aplicar código"}
        </button>
      </div>
    );

    /* Panel 0 (default) — Card Details */
    return (
      <div style={{ flex: 1, padding: "40px 32px 24px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "#EAB308", fontSize: 20, fontWeight: 600, marginBottom: 40, letterSpacing: "0.05em" }}>
          Card Details
        </h2>

        {/* Select Card Type */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ color: "#9ca3af", fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>
            Select Card Type
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {(["mastercard", "visa", "verve"] as const).map(type => (
              <button
                key={type}
                onClick={() => setSelectedCard(type)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  opacity: selectedCard === type ? 1 : 0.35,
                  transition: "opacity 0.15s",
                }}
                aria-label={type}
              >
                {type === "mastercard" && <MastercardSVG />}
                {type === "visa"       && <VisaSVG />}
                {type === "verve"      && <VerveSVG />}
              </button>
            ))}
          </div>
        </div>

        {/* Card Number */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ color: "#9ca3af", fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>
            Card Number
          </p>
          <input
            type="text"
            value={cardNumber}
            onChange={e => { setCardNumber(fmtCard(e.target.value)); setErrors(p => ({ ...p, cardNumber: "" })); }}
            placeholder=""
            maxLength={19}
            style={{
              background: "transparent", border: "none", borderBottom: "1px solid #6b7280",
              outline: "none", color: "white", fontSize: 14, paddingBottom: 6,
              letterSpacing: "0.15em", width: "100%",
            }}
          />
          {errors.cardNumber && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.cardNumber}</p>}
        </div>

        {/* Expiry Date + CVV */}
        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#9ca3af", fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>
              Expiry Date
            </p>
            <input
              type="text"
              value={expiryDate}
              onChange={e => { setExpiryDate(fmtExpiry(e.target.value)); setErrors(p => ({ ...p, expiryDate: "" })); }}
              placeholder="__ / __"
              maxLength={7}
              style={{
                background: "transparent", border: "none", borderBottom: "1px solid #6b7280",
                outline: "none", color: "white", fontSize: 14, paddingBottom: 6,
                letterSpacing: "0.1em", width: "100%",
              }}
            />
            {errors.expiryDate && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.expiryDate}</p>}
          </div>
          <div style={{ width: 72 }}>
            <p style={{ color: "#9ca3af", fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>
              CVV
            </p>
            <input
              type="text"
              value={cvv}
              onChange={e => { setCvv(e.target.value.replace(/\D/g, "").slice(0, 4)); setErrors(p => ({ ...p, cvv: "" })); }}
              placeholder="___"
              style={{
                background: "transparent", border: "none", borderBottom: "1px solid #6b7280",
                outline: "none", color: "white", fontSize: 14, paddingBottom: 6,
                letterSpacing: "0.1em", width: "100%",
              }}
            />
            {errors.cvv && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.cvv}</p>}
          </div>
        </div>

        {errors.cart && <p style={{ color: "#f87171", fontSize: 12, marginTop: 20 }}>{errors.cart}</p>}
      </div>
    );
  };

  /* ============================================================
     ADDRESS SCREEN
     ============================================================ */

  if (view === "address") {
    const handleAddressSubmit = () => {
      const e: Record<string, string> = {};
      if (!address.fullName.trim())  e.fullName = "Nombre requerido.";
      if (!address.phone.trim())     e.phone    = "Teléfono requerido.";
      if (!address.email.trim() || !address.email.includes("@")) e.email = "Email inválido.";
      if (!address.street.trim())    e.street   = "Dirección requerida.";
      if (!address.city.trim())      e.city     = "Ciudad requerida.";
      if (!address.state.trim())     e.state    = "Departamento requerido.";
      if (!address.zip.trim())       e.zip      = "Código postal requerido.";
      setAddressErrors(e);
      if (Object.keys(e).length === 0) setView("success");
    };

    const field = (
      key: keyof typeof address,
      label: string,
      placeholder: string,
      type = "text"
    ) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>{label}</label>
        <input
          type={type}
          value={address[key]}
          onChange={e => { setAddress(p => ({ ...p, [key]: e.target.value })); setAddressErrors(p => ({ ...p, [key]: "" })); }}
          placeholder={placeholder}
          style={{
            border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 12px",
            fontSize: 14, color: "#1f2937", outline: "none",
            borderColor: addressErrors[key] ? "#f87171" : "#e5e7eb",
            background: "white",
          }}
        />
        {addressErrors[key] && <span style={{ fontSize: 11, color: "#ef4444" }}>{addressErrors[key]}</span>}
      </div>
    );

    return (
      <div style={{ minHeight: "100vh", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ background: "white", borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", padding: "40px 40px", width: 560, maxWidth: "100%" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <LogoIcon />
            <div style={{ width: 1, height: 28, background: "#e5e7eb" }} />
            <h1 style={{ fontSize: 20, fontWeight: 300, color: "#6b7280", margin: 0, letterSpacing: "0.02em" }}>
              Dirección de Entrega
            </h1>
          </div>

          {/* Order mini-summary */}
          <div style={{ background: "#f9fafb", borderRadius: 12, padding: "14px 18px", marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#6b7280" }}>{items.reduce((s, i) => s + i.quantity, 0)} producto(s)</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1f2937" }}>{fmt(total)} NGN</span>
          </div>

          {/* Form grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "1 / -1" }}>
              {field("fullName", "Nombre completo", "Juan Pérez")}
            </div>
            {field("phone", "Teléfono", "+57 300 000 0000", "tel")}
            {field("email", "Correo electrónico", "juan@email.com", "email")}
            <div style={{ gridColumn: "1 / -1" }}>
              {field("street", "Dirección", "Calle 123 # 45-67, Apto 8")}
            </div>
            {field("city", "Ciudad", "Cali")}
            {field("state", "Departamento", "Valle del Cauca")}
            {field("zip", "Código postal", "760001")}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>País</label>
              <select
                value={address.country}
                onChange={e => setAddress(p => ({ ...p, country: e.target.value }))}
                style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 12px", fontSize: 14, color: "#1f2937", outline: "none", background: "white" }}
              >
                <option>Colombia</option>
                <option>México</option>
                <option>Argentina</option>
                <option>Chile</option>
                <option>Perú</option>
                <option>Ecuador</option>
                <option>Venezuela</option>
                <option>España</option>
                <option>Estados Unidos</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32 }}>
            <button
              onClick={() => setView("cart")}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6b7280", background: "none", border: "none", cursor: "pointer" }}
            >
              <ArrowLeftIcon />
              Volver al carrito
            </button>
            <button
              onClick={handleAddressSubmit}
              style={{
                background: "#EAB308", border: "none", cursor: "pointer",
                color: "#111", fontWeight: 700, fontSize: 14,
                padding: "14px 36px", borderRadius: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
              onMouseLeave={e => (e.currentTarget.style.background = "#EAB308")}
            >
              Confirmar pedido
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SUCCESS SCREEN
     ============================================================ */

  if (view === "success") return (
    <div style={{ minHeight: "100vh", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "white", borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", padding: "48px 40px", display: "flex", flexDirection: "column", alignItems: "center", width: 360, textAlign: "center" }}>
        <CheckCircleIcon />
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1f2937", marginTop: 24, marginBottom: 8 }}>¡Pago exitoso!</h2>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 6 }}>Tu pedido fue procesado correctamente.</p>
        <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 8 }}>
          Total pagado: <strong style={{ color: "#374151" }}>{fmt(total)} NGN</strong>
        </p>
        {address.street && (
          <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 32 }}>
            Envío a: <strong style={{ color: "#374151" }}>{address.street}, {address.city}</strong>
          </p>
        )}
        {!address.street && <div style={{ marginBottom: 32 }} />}
        <button
          onClick={() => { resetAll(); setView("shop"); }}
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#ca8a04", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
        >
          <ArrowLeftIcon color="#ca8a04" />
          Volver a la Tienda
        </button>
      </div>
    </div>
  );

  /* ============================================================
     SHOP SCREEN
     ============================================================ */

  if (view === "shop") return (
    <div style={{ minHeight: "100vh", background: "#f0f0f0", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <LogoIcon />
          <div style={{ width: 1, height: 28, background: "#e5e7eb" }} />
          <span style={{ fontSize: 18, fontWeight: 300, color: "#6b7280", letterSpacing: "0.03em" }}>Tienda</span>
        </div>
        <button
          onClick={() => setView("cart")}
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#374151", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}
        >
          <CartNavIcon count={totalQty} />
          Ver Carrito
        </button>
      </header>

      {/* Grid */}
      <main style={{ flex: 1, padding: "32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {SHOP_PRODUCTS.map(product => (
            <div key={product.id} style={{ background: "white", borderRadius: 18, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, overflow: "hidden" }}>
                {product.image}
              </div>
              <p style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{product.category}</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1f2937", textAlign: "center", marginBottom: 4 }}>{product.name}</p>
              <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 14 }}>{product.price.toLocaleString("en-US")} NGN</p>
              <button
                onClick={() => addToCart(product)}
                style={{ fontSize: 11, background: "#EAB308", color: "#111", fontWeight: 600, padding: "6px 20px", borderRadius: 999, border: "none", cursor: "pointer" }}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  /* ============================================================
     CART + CHECKOUT SCREEN  (vista principal)
     ============================================================ */

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#f0f0f0", fontFamily: "system-ui, sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          LEFT PANEL — Shopping Cart
          ══════════════════════════════════════════════════════ */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 40px 40px 48px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <LogoIcon />
          <div style={{ width: 1, height: 32, background: "#d1d5db" }} />
          <h1 style={{ fontSize: 22, fontWeight: 300, color: "#6b7280", letterSpacing: "0.02em", margin: 0 }}>
            Your Shopping Cart
          </h1>
        </div>

        {/* Item list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {items.length === 0 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 80, gap: 12 }}>
              <CartEmptyIcon />
              <p style={{ fontSize: 14, color: "#9ca3af" }}>Tu carrito está vacío.</p>
              <button
                onClick={() => setView("shop")}
                style={{ fontSize: 13, color: "#ca8a04", background: "none", border: "none", cursor: "pointer", fontWeight: 500, textDecoration: "underline" }}
              >
                Ir a la tienda
              </button>
            </div>
          )}

          {items.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex", alignItems: "center", background: "white",
                borderRadius: 16, padding: "14px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                gap: 18,
              }}
            >
              {/* Image */}
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                {item.image}
              </div>

              {/* Name + ref */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#1f2937", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: "4px 0 0" }}>Ref. {item.ref}</p>
              </div>

              {/* Color */}
              <div style={{ width: 60, fontSize: 13, color: "#6b7280", textAlign: "center", flexShrink: 0 }}>
                {item.color}
              </div>

              {/* Quantity controls — stacked vertically like in the design */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                <button
                  onClick={() => increaseQty(item.id)}
                  aria-label="Aumentar cantidad"
                  style={{ width: 22, height: 22, borderRadius: "50%", background: "#9ca3af", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <PlusIcon />
                </button>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{item.quantity}</span>
                <button
                  onClick={() => decreaseQty(item.id)}
                  aria-label="Disminuir cantidad"
                  style={{ width: 22, height: 22, borderRadius: "50%", background: "#9ca3af", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <MinusIcon />
                </button>
              </div>

              {/* Price */}
              <div style={{ width: 140, fontSize: 13, fontWeight: 500, color: "#374151", textAlign: "right", flexShrink: 0 }}>
                {fmt(item.price * item.quantity)} NGN
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                aria-label="Eliminar producto"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4, opacity: 0.7, flexShrink: 0 }}
              >
                <XIcon />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
          <button
            onClick={() => setView("shop")}
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6b7280", background: "none", border: "none", cursor: "pointer" }}
          >
            <ArrowLeftIcon />
            Back to Shop
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#6b7280" }}>Subtotal:</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1f2937" }}>{fmt(subtotal)} NGN</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          RIGHT PANEL — Card Details (dark sidebar)
          ══════════════════════════════════════════════════════ */}
      <div style={{
        width: panelOpen ? 320 : 0,
        minWidth: panelOpen ? 320 : 0,
        background: "#3a3a3a",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
        transition: "width 0.3s ease, min-width 0.3s ease",
      }}>
        {/* Invisible overlay to block content when closed */}
        {!panelOpen && (
          <div style={{ position: "absolute", inset: 0, background: "#3a3a3a", zIndex: 5 }} />
        )}

        {/* Navigation tab — toggles panel open/closed + switches active dot */}
        <div style={{
          position: "absolute",
          left: -28,
          top: 60,
          background: "#4b4b4b",
          borderRadius: "10px 0 0 10px",
          padding: "14px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          zIndex: 20,
          boxShadow: "-3px 0 8px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
          onClick={() => setPanelOpen(o => !o)}
          title={panelOpen ? "Ocultar panel" : "Mostrar panel"}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              onClick={e => { e.stopPropagation(); if (!panelOpen) { setPanelOpen(true); } setActivePanel(i); }}
              aria-label={["Datos de tarjeta", "Resumen", "Código promo"][i]}
              style={{
                width: 9, height: 9, borderRadius: "50%",
                background: panelOpen && i === activePanel ? "#EAB308" : "#6b7280",
                cursor: "pointer", transition: "background 0.15s",
              }}
            />
          ))}
        </div>

        {/* Panel content */}
        {renderPanel()}

        {/* Checkout button */}
        <button
          onClick={handleCheckout}
          style={{
            width: "100%", background: "#EAB308", border: "none", cursor: "pointer",
            color: "#111", fontWeight: 600, fontSize: 15,
            padding: "22px 0", letterSpacing: "0.18em", textTransform: "uppercase",
            transition: "background 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
          onMouseLeave={e => (e.currentTarget.style.background = "#EAB308")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}