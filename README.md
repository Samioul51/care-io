# Care.IO - Baby Sitting & Elderly Care Service Platform

A comprehensive web application that connects users with trusted caregiving services for babies, elderly, and sick individuals. Built with Next.js 16, MongoDB, and NextAuth.

## 🌟 Overview

Care.IO simplifies the process of booking reliable caregiving services. Users can easily find, book, and manage care services based on their specific needs, location, and schedule.

### Mission
Making caregiving simple, safe, and accessible for everyone.

## ✨ Key Features

### 🎨 User Experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Intuitive Interface**: Clean and easy-to-navigate design
- **Real-time Updates**: Dynamic cost calculation and booking status tracking

### 🔐 Authentication & Security
- Email & Password authentication
- Google Social Login integration
- Secure user sessions with NextAuth
- Password validation
- Protected routes for authenticated users

### 📅 Booking System
- **Dynamic Booking**: Select duration and location
- **Location-based Search**: Division → District → City → Area selection
- **Address Input**: Custom address for service delivery
- **Cost Calculator**: Automatic total cost calculation (duration × service charge)
- **Booking Status Tracking**: Pending → Confirmed → Completed → Cancelled

### 🏥 Services Offered
1. **Baby Care**: Professional childcare services
2. **Elderly Service**: Compassionate care for seniors
3. **Sick People Service**: Medical assistance and support

### 📧 Email Notifications
- Booking confirmation emails
- Invoice generation and delivery
- Status update notifications

## 🛣️ Route Summary

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Landing page with banner, services overview, FAQs, and newsletter. | Public |
| `/login` | Authentication page for existing users. | Public |
| `/signup` | Registration page for new users. | Public |
| `/services` | Browse all available caregiving categories. | Public |
| `/services/[id]`| Detailed view and description of a specific service. | Public |
| `/booking/[id]` | Specialized booking form with location selection. | Authenticated |
| `/my_bookings` | User dashboard to track personal booking history. | Authenticated |

## 🚀 Getting Started

### Prerequisites
- MongoDB Atlas account or local MongoDB
- Google OAuth credentials
- Email service (Gmail recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Samioul51/care-io.git
cd care-io
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB Credentials
MONGODB_URI=mongodb+srv://USER_NAME:PASSWORD@cluster.mongodb.net/DB_NAME?retryWrites=true&w=majority

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# Email Service (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
```

4. **Set up MongoDB**
- Create a MongoDB Atlas cluster
- Create a database (e.g., `careio`)
- Create collections: `users`, `services`, `orders`

5. **Set up Google OAuth**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project
- Enable Google+ API
- Create OAuth 2.0 credentials
- Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

6. **Generate NextAuth Secret**
```bash
openssl rand -base64 32
```

7. **Configure Email Service**
- Enable 2-Step Verification in your Google Account
- Generate an App Password
- Use this password in `EMAIL_PASS`

### Running the Application

**Development Mode**
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

**Production Build**
```bash
npm run build
npm start
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16.1.0 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.1.18 + DaisyUI 5.5.14
- **Animations**: GSAP 3.14.2, Motion 12.23.26
- **Icons**: Lucide React, React Icons
- **Notifications**: React Hot Toast

### Backend
- **Database**: MongoDB 7.0.0
- **Authentication**: NextAuth 4.24.13
- **Password Hashing**: bcryptjs 3.0.3
- **Email**: Nodemailer 7.0.12

### Development Tools
- **Linting**: ESLint
- **Build Tool**: Next.js built-in
- **Package Manager**: npm

## 👥 Author

- **A. K. M Samioul Islam** - [Samioul51](https://github.com/Samioul51)
