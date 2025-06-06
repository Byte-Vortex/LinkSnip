# LinkSnip   
LinkSnip is a modern URL shortening service that allows users to create, share, and track shortened links with ease. It offers features like custom slugs, QR code generation, and detailed analytics to monitor link performance.

#### [View Website ](https://linksnip.bytevortex.in)

## Table of Contents

- [Features](#features)
- [ScreenShots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- **Shorten URLs** — Easily generate short links from long URLs
- **Custom Slugs** — Create branded or user-friendly slugs
- **Analytics** — View link click stats, device info, referrers, and geolocation
- **QR Code Generator** — Instantly generate QR codes for any link
- **Authentication** — Login system for managing user links
- **Admin Dashboard** — Manage users and system stats
- **Fast & Responsive** — Built with Next.js for blazing performance

----

## Screenshots


![image](https://github.com/user-attachments/assets/13640224-6885-4f60-a6ae-d0b50fd8b6d6)
----
### User Dashboard Panel
![Screenshot 2025-05-14 131329](https://github.com/user-attachments/assets/fb013ae3-41f1-4033-a452-838e2b26858b)
----
![image](https://github.com/user-attachments/assets/c1e8345c-8c66-495f-8f44-6a4d56107d03)
----
![image](https://github.com/user-attachments/assets/5ecbbda9-748a-4df6-b07b-8dfef95546e2)
----
![image](https://github.com/user-attachments/assets/939e1e41-4c3a-4126-aec0-73fde8321f88)
----
### Admin Panel
![image](https://github.com/user-attachments/assets/63042b4c-f19f-4cd7-b838-b4d0664cb2a5)
---
![image](https://github.com/user-attachments/assets/952be809-cdba-4e5e-a637-2208a4f4f925)
---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm (Preferred Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/linksnip.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Streamify
    ```

3. Install the dependencies:
    ```sh
    pnpm install
    ```

---

## Usage

To start the development server, run:
```sh
pnpm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
SUPABASE_URL=https://<your-supabase-project>.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://<your-supabase-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-public-anon-key>
SUPABASE_JWT_SECRET=<your-jwt-secret>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
POSTGRES_URL=postgres://<user>:<password>@<host>:6543/postgres?sslmode=require
POSTGRES_PRISMA_URL=postgres://<user>:<password>@<host>:6543/postgres?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://<user>:<password>@<host>:5432/postgres?sslmode=require
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<your-database-password>
POSTGRES_DATABASE=postgres
POSTGRES_HOST=<your-db-host>
```

Replace `your_api_key_here` with your actual API keys.

---

## Deployment

This project is hosted on Vercel. You can visit the live application at [https://linksnip.bytevortex.in](https://linksnip.bytevortex.in).

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project.
2. Create your Feature Branch:
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes:
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the Branch:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

## Contact

**Byte-Vortex**  
GitHub: [@ByteVortex](https://github.com/Byte-Vortex)  
Email: akshatanwar24@gmail.com 

Project Link: [https://github.com/Byte-Vortex/Streamify](https://github.com/Byte-Vortex/LinkSnip)

