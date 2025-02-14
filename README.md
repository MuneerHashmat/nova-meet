<h1 align="center">🌟 NovaMeet Online Meetings Website 🌟</h1>

## Overview

This project is a single-page online meeting and video conferencing website built with Next.js and Typescript.  It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.

![image](/public/images/image.png)

## Live Demo:

### [NovaMeet](https://nova-meet.vercel.app/)

## Features:

- 🔐 **Authentication** – Secure login via Clerk, supporting google sign-on & email/password, with protected routes and access control.  
- 🎥 **New Meeting** – Start meetings instantly with pre-join camera & mic setup.  
- 🎛️ **Meeting Controls** – Manage mic and camera, recording, reactions, screen sharing, layout, and participants.  
- 🚪 **Exit Meeting** – Leave anytime or end for all as the host.  
- 📅 **Schedule Meetings** – Plan future meetings & access them from the 'Upcoming Meetings' page.  
- 📜 **Past Meetings** – View previous meeting details and metadata.  
- 🎞️ **Recorded Meetings** – Access past meeting recordings for reference.  
- 🔗 **Personal Room** – Use a unique, shareable link for instant meetings.  
- 🚀 **Join via Link** – Easily join meetings using a shared link.    
- 📱 **Responsive Design** – Adapts to all devices for a smooth user experience.  

## Tech Stack:
- ⚡ **Next.js** – React framework for server-side rendering and static site generation.  
- 📝 **TypeScript** – Strongly typed JavaScript for better code quality and maintainability.  
- 🎨 **Tailwind CSS** – Utility-first CSS framework for fast and responsive UI styling.  
- 🔐 **Clerk** – Authentication and user management solution for seamless sign-in.  
- 🛠️ **ShadCN** – Pre-styled components built on Radix UI for a modern design system.  
- 🎥 **Stream Video SDK** – Real-time video conferencing and streaming functionality.  

## Quick Start:

1. Clone this repository :

```bash
git clone https://github.com/MuneerHashmat/nova-meet.git
```
2. Navigate to the folder: `cd nova-meet`
3. Install the dependencies: `npm install`
4. Create a file named '.env.local' on root directory and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your clerk publishable key>
CLERK_SECRET_KEY= <your clerk secret key>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=<your stream api key>
STREAM_SECRET_KEY=<your stream secret key> 

NEXT_PUBLIC_BASE_URL=localhost:3000
```
4. Start development server:

```bash
npm run dev
```