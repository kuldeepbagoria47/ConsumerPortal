# Genus Dashboard - Energy Management System

A modern, responsive energy management dashboard built with Next.js, React, and Tailwind CSS.

## Features

- **Dashboard**: Overview of energy consumption, bills, and meter status
- **Bills**: View and manage electricity bills with payment history
- **Usage**: Detailed energy consumption analytics with charts
- **Profile**: User profile management and preferences
- **Complaints**: Track and manage service complaints

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── bills/          # Bills page
│   ├── complaints/     # Complaints page
│   ├── profile/        # Profile page
│   ├── usage/          # Usage analytics page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Dashboard page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Top header component
│   └── Sidebar.tsx     # Navigation sidebar
└── public/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Dashboard (`/`)
Main dashboard with:
- Current bill overview
- Monthly usage summary
- Payment status
- Meter status
- Today's hourly usage chart
- Running bill estimate
- Insights snapshot
- Current bill details
- My connections

### Bills (`/bills`)
Bill management page with:
- Payment overview statistics
- Current bill details
- Bill history table with filters

### Usage (`/usage`)
Energy usage analytics with:
- Monthly consumption metrics
- Daily average usage
- Peak hour analysis
- Hourly usage charts
- Monthly consumption trends
- Usage hours breakdown

### Profile (`/profile`)
User profile management:
- Consumer information
- Account details
- Connection management
- Notification preferences
- Settings options

### Complaints (`/complaints`)
Service complaints tracking:
- Complaint listing
- Status tracking
- Priority management

## Customization

The design follows the Genus energy dashboard specifications with:
- Clean, modern UI
- Responsive layout
- Color-coded status indicators
- Interactive charts and graphs
- Accessible components

## License

This project is created for demonstration purposes.

