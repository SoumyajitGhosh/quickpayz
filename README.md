# QuickPayz

## Overview
QuickPayz – Experience lightning-fast, secure, and hassle-free digital payments anytime, anywhere. (PayTM Clone)

## Key Sections

### 1. Feature Planning

- Start with high-level design: 
  - **Auth provider**: Email/phone, Google sign-in.
  - **Database**: Postgres, Prisma ORM.
  - **Backend & Frontend Stack**: Next.js, Express, Tailwind CSS.
  
- **Modules**: Common/UI/backend.
- **Cloud Deployment**: Choose a cloud platform for deployment.

### 2. Design (UI/UX)

- **UX**: Based on principles or copying from the biggest websites for inspiration.
- **UI**: Utilize tools like Tailwind CSS for easy design.

### 3. Architecture

- High-level architecture focusing on:
  - **Sending/withdrawing money**.
  - **Supporting merchants** via webhooks and regular payments.
  
- The system design can scale with reduced scope by:
  - Simplifying the UI or reducing features.

### 4. Stack Used

- **Frontend**: Next.js
- **Backend**: Express, TurboRepo
- **Database**: Postgres with Prisma ORM
- **Styling**: Tailwind CSS

### 5. Low-Level Design

- **Schema**: Define the database schema for users, merchants, and transactions.
- **Routing**: Setup for API routes.
- **Frontend Components**: Reusable components with minimal dependencies.

### 6. Key Features

- **User Authentication**: Email, phone, Google, OTP.
- **Merchant Dashboard**: Transaction management, notifications on payment.
- **UI Components**: AppBar, Sidebar, Balance Cards.
- **Transactions**: On-ramp/off-ramp user transactions, webhook support for payment processors.


