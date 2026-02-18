# Dashboard

A modern web dashboard for monitoring and managing data, built with React and Next.js.

## 📋 About the Project

This is a fully-featured dashboard application that provides:

- 📊 **Analytics & Reports** - data visualization with interactive charts
- 👥 **Customer Management** - view and manage customer information
- 📦 **Order Management** - monitor and track orders
- 📈 **Statistics** - key performance indicator cards
- 🎨 **Modern Interface** - responsive design with Material-UI components

## 🚀 Technology Stack

- **Next.js 16.1.6** - React framework with SSR and SSG
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development
- **Material-UI (MUI)** - Components and styling
- **Recharts** - Chart library
- **Emotion** - CSS-in-JS solution
- **ESLint** - Code linter

## 📦 Installation

### Requirements
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code with ESLint |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (Dashboard)
│   ├── customers/page.tsx    # Customers page
│   ├── orders/page.tsx       # Orders page
│   ├── reports/page.tsx      # Reports page
│   ├── layout.tsx            # Main layout
│   ├── globals.css           # Global styles
│   └── page.module.css       # Module styles
├── components/               # Components folder
└── theme.ts                  # Theme configuration
```

## 🎯 Main Pages

- **Dashboard** (`/`) - Home page with data overview, charts, and statistics
- **Customers** (`/customers`) - Customer management and viewing
- **Orders** (`/orders`) - Order monitoring and tracking
- **Reports** (`/reports`) - Analytics and statistical reports

## 🔧 Development

### Adding New Components

Create new components in the `src/components/` folder and use MUI for styling.

### Code Formatting

The project uses ESLint. Run the linter:
```bash
npm run lint
```



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
