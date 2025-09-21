# Artify - Full Stack (React + Tailwind + Express + MongoDB)

## Quick Start

### 1) Backend
```bash
cd server
cp .env.example .env
# Edit .env if needed (MONGO_URI, JWT_SECRET, CLIENT_URL)
npm install
npm run seed
npm run dev
```

### 2) Frontend
```bash
cd client
npm install
# point frontend to backend if not default:
# echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
```

Open http://localhost:5173

### Features
- Auth: Register, Login, JWT session (`/auth/*`)
- Gallery: Lippan & Mandala products, search, category filter (`/products`)
- Add to Cart: Requires login (`/cart`)
- Orders: Checkout to create order (`/orders`)
- Customize Your Order: form with WhatsApp quick link (`/custom`)
- WhatsApp floating popup

Product images are served from `server/uploads/*`.
