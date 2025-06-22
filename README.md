# Feeds Frontend

A modern React-based social media feed application with real-time posting, authentication, and a clean user interface.

## 🌐 Live Demo

**Try the application live:** [https://feeds-frontend-nflu0aub3-pallav-jain-au3s-projects.vercel.app](https://feeds-frontend-nflu0aub3-pallav-jain-au3s-projects.vercel.app)

## 🚀 Features

- **Social Feed**: View and interact with posts in a clean, modern interface
- **User Authentication**: Sign up, sign in, and manage user sessions
- **Post Creation**: Create and publish new posts
- **Real-time Updates**: Posts appear instantly in the feed
- **Responsive Design**: Optimized for desktop devices
- **Toast Notifications**: User-friendly feedback for actions
- **Modal Authentication**: Seamless sign-in/sign-up experience
- **Local Storage Persistence**: User sessions and data persist across browser sessions
- **Context-based State Management**: Centralized state management using React Context API
- **Custom Hooks**: Reusable logic with `useAppContext` hook
- **Form Validation**: Real-time validation for user inputs
- **Loading States**: Smooth loading indicators for better UX

## 🧠 State Management with Context API

### **AppProvider Architecture**
The application uses a centralized state management system built with React Context API:

```javascript
// Main App Provider wraps the entire application
<AppProvider>
  <AppContent />
</AppProvider>
```

### **Context Structure**
- **AuthContext**: Manages user authentication state, login/logout, and modal controls
- **FeedContext**: Handles posts data, CRUD operations, and feed updates
- **ToastContext**: Manages notification system for user feedback

### **Key Context Features**
- **Persistent Sessions**: User authentication state persists using localStorage
- **Real-time Updates**: Context updates trigger immediate UI re-renders
- **Modal Management**: Centralized control of authentication modals
- **Toast Notifications**: Global notification system for user feedback

### **Custom Hook Usage**
```javascript
const { auth, feed, toast } = useAppContext();
const { user, isAuthenticated, login, logout } = auth;
const { posts, addPost, fetchPosts } = feed;
const { showToast } = toast;
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 6.30.1
- **Styling**: Tailwind CSS 3.4.17
- **State Management**: React Context API with custom hooks
- **Build Tool**: Create React App 5.0.1
- **Testing**: React Testing Library
- **Deployment**: Vercel (Production)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pallav-jain-au3/frontend-feeds.git
   cd feeds-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Demo Credentials

For testing purposes, you can use these demo accounts:

### Demo User 1
- **Username**: `demo@example.com`
- **Password**: `password123`

### Demo User 2
- **Username**: `test@example.com`
- **Password**: `testpass`

> **Note**: These are demo accounts for testing. In a production environment, you would need to implement proper backend authentication.

## 🏗️ Project Structure

```
src/
├── Auth/                 # Authentication components
│   ├── AuthModal.js     # Modal for sign-in/sign-up
│   └── SignInForm.js    # Sign-in form component
├── components/          # Reusable UI components
│   ├── Header.js        # Navigation header
│   ├── PostEditor.js    # Post creation interface
│   ├── FeedCard.js      # Individual post display
│   └── Toast.js         # Notification component
├── contexts/           # React context providers
│   ├── AuthContext.js  # Authentication state management
│   ├── FeedContext.js  # Posts and feed data management
│   └── ToastContext.js # Notification system
├── hooks/              # Custom React hooks
│   └── useAppContext.js # Main app context hook
├── pages/              # Page components
│   ├── FeedPage.js     # Main feed page
│   ├── SignInPage.js   # Sign-in page
│   └── SignUpPage.js   # Sign-up page
├── providers/          # Context providers
│   └── AppProvider.js  # Main app provider
└── App.js              # Main application component
```

## 🎨 Key Components

### FeedPage
The main page displaying the social feed with:
- Post creation interface with real-time validation
- Dynamic post display with timestamps
- User authentication integration
- Loading states and error handling

### AuthModal
A modal component for seamless authentication:
- Sign-in and sign-up forms in a single modal
- Context-aware display and state management
- Smooth transitions and animations
- Form validation and error handling

### PostEditor
Rich text editor for creating new posts:
- Real-time content validation
- Toolbar actions for enhanced functionality
- Publish functionality with success feedback
- Integration with feed context for immediate updates

### Context Providers
- **AuthContext**: Manages user sessions, authentication state, and modal controls
- **FeedContext**: Handles posts data, CRUD operations, and real-time updates
- **ToastContext**: Provides global notification system

## 🔐 Authentication Flow

1. **Guest Users**: Can view posts but need to sign in to create content
2. **Sign In**: Users can sign in via the modal or dedicated page
3. **Sign Up**: New users can create accounts with validation
4. **Session Management**: Automatic session handling with localStorage persistence
5. **Modal Integration**: Seamless authentication experience without page navigation

## 🔧 Advanced Features

### **Local Storage Integration**
- User sessions persist across browser sessions
- Default demo users are automatically initialized
- Data persistence without backend dependency

### **Real-time Updates**
- Posts appear instantly in the feed after creation
- Context updates trigger immediate UI re-renders
- Optimistic updates for better user experience

### **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Responsive breakpoints for all screen sizes
- Touch-friendly interface elements

### **Error Handling**
- Comprehensive error boundaries
- User-friendly error messages
- Graceful fallbacks for failed operations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Live Deployment
The application is deployed on Vercel and available at:
**https://feeds-frontend-nflu0aub3-pallav-jain-au3s-projects.vercel.app**


