﻿
<div align="center">

<p align="center">
    <a href="">
        <img src="public/image1.png" alt="Paylio Homepage">
        <img src="public/image2.png" alt="Paylio Homepage">
        <img src="public/image3.png" alt="Paylio Homepage">
        <img src="public/image4.png" alt="Paylio Homepage">
        <img src="public/image5.png" alt="Paylio Homepage">
        <img src="public/image6.png" alt="Paylio Homepage">
    </a>    
</p>

<div>
  <img src="https://img.shields.io/badge/-Django-black?style=for-the-badge&logo=django&color=092E20" alt="Django" />
  <img src="https://img.shields.io/badge/-Python-black?style=for-the-badge&logo=python&color=3776AB" alt="Python" />
  <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript&color=F7DF1E" alt="Javascript" />
  <img src="https://img.shields.io/badge/-Bootstrap-black?style=for-the-badge&logo=bootstrap&color=7952B3" alt="Bootstrap" />
</div>

<h3 align="center">Paylio - Digital Payments Made Easy</h3>
</div>

---

## 📋 Table of Contents

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🛠️ [Requirements & Setup](#requirements--setup)
5. 🏎️ [Pages](#pages)
6. 📁 [Folder Structure](#folder-structure)
7. 🧾 [Deployment Notes](#deployment-notes)
8. 🤝 [Contribution](#contribution)

---

## 🚀 Introduction

**Paylio** is a Django-based fintech web application that allows users to send, receive, and request money online. Designed for simplicity and speed, it supports user-friendly transactions, KYC processing, and modern dashboard interfaces, with a strong admin backend powered by Django Jazzmin.

---

## ⚙️ Tech Stack

- **Backend**: Django 4.2.11, Python
- **Frontend**: HTML5, Bootstrap 5, JavaScript
- **Templating**: Django Templates
- **Styling**: Custom CSS, Bootstrap
- **Image Handling**: Pillow
- **Static Management**: WhiteNoise
- **Admin UI**: Django Jazzmin
- **Data Management**: SQLite with Django’s ORM
- **Deployment**: Railway, Gunicorn, Docker 
- **Env Management**: python-dotenv

---

## 🔋 Features

- 🧾 Request & send money functionality
- 🧍 User account management with KYC
- 💳 Payment requests and transaction tracking
- 🧠 Admin dashboard with import/export capabilities
- 🎨 Responsive frontend with dynamic dropdown menus
- 🌐 Multi-template support for personal, business, and company pages

---

## 🛠️ Requirements & Setup

### 📦 Requirements

```text
asgiref==3.8.1
diff-match-patch==20241021
Django==4.2.11
django-import-export==4.3.7
django-jazzmin==3.0.1
gunicorn==23.0.0
packaging==24.2
pillow==11.1.0
python-dotenv==1.1.0
shortuuid==1.0.13
sqlparse==0.5.3
tablib==3.8.0
tzdata==2025.2
whitenoise==6.9.0
```

### ⚙️ Local Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Mr-Perfectuz/paylio.git
   cd paylio
   ```

2. Create virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Windows: .venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create `.env`:
   ```env
   DEBUG=True
   SECRET_KEY=your-secret-key
   ```

5. Run server:
   ```bash
   python manage.py runserver
   ```

---

## 🏎️ Pages

### ▶ Dashboard
<p align="center">
    <a href="">
        <img src="public/account.png" alt="Paylio Homepage">
    </a>    
</p>
- Account
<p align="center">
    <a href="">
        <img src="public/account_main.png" alt="Paylio Homepage">
        <img src="public/notification.png" alt="Paylio Homepage">
        <img src="public/language.png" alt="Paylio Homepage">
    </a>    
</p>
- Transactions
<p align="center">
    <a href="">
        <img src="public/transactions.png" alt="Paylio Homepage">
    </a>    
</p>
- Receive
<p align="center">
    <a href="">
        <img src="public/sent.png" alt="Paylio Homepage">
    </a>    
</p>

- Payments
<p align="center">
    <a href="">
         <img src="public/payments.png" alt="Paylio Homepage">
    </a>    
</p>
- Card
<p align="center">
    <a href="">
         <img src="public/card_detail.png" alt="Paylio Homepage">
    </a>    
</p>

- Security
<p align="center">
    <a href="">
         <img src="public/security.png" alt="Paylio Homepage">
    </a>    
</p> 


- Admin
<p align="center">
    <a href="">
        <img src="public/admin_account.png" alt="Paylio Homepage">
        <img src="public/admin_notification.png" alt="Paylio Homepage">
        <img src="public/admin_transactions.png" alt="Paylio Homepage">
         <img src="public/admin_user_edit.png" alt="Paylio Homepage">
         <img src="public/admin_users.png" alt="Paylio Homepage">
         <img src="public/admin.png" alt="Paylio Homepage">
      </a> 
</p>

### ▶ Personal
- Freelancer Payments
<p align="center">
    <a href="">
      <img src="public/payment.png" alt="Paylio Homepage">
      <img src="public/payment1.png" alt="Paylio Homepage">
      <img src="public/payment2.png" alt="Paylio Homepage">
      <img src="public/payment3.png" alt="Paylio Homepage">
   </a> 

</p>

- Subscriptions
<p align="center">
    <a href="">
        <img src="public/subscriptions.png" alt="Paylio Homepage">
        <img src="public/subscriptions2.png" alt="Paylio Homepage">
        <img src="public/subscriptions3.png" alt="Paylio Homepage">
    </a>    
</p>
- Security
<p align="center">
    <a href="">
        <img src="public/security1.png" alt="Paylio Homepage">
        <img src="public/security3.png" alt="Paylio Homepage">
    </a>    
</p>
- Fees
<p align="center">
    <a href="">
        <img src="public/fees.png" alt="Paylio Homepage">
    </a>    
</p>

### ▶ Business
- Business Payments
<p align="center">
    <a href="">
        <img src="public/fees.png" alt="Paylio Homepage">
    </a>    
</p>

- Business Account
<p align="center">
    <a href="">
        <img src="public/BusinessAccount.png" alt="Business Homepage">
    </a>    
</p>

- Corporate Card
<p align="center">
    <a href="">
        <img src="public/CorporateCard.png" alt="Corporate Homepage">
        <img src="public/CorporateCard1.png" alt="Corporate Homepage">
    </a>    
</p>

- Expense Management
<p align="center">
    <a href="">
        <img src="public/ExpenseManagement.png" alt="ExpenseManagement Homepage">
    </a>    
</p>

- Budgeting & Analytics
<p align="center">
    <a href="">
        <img src="public/Budgeting.png" alt="Budgeting Homepage">
    </a>    
</p>

- Integrations
<p align="center">
    <a href="">
        <img src="public/Integrations.png" alt="Business Homepage">
    </a>    
</p>

- Invoice Management
<p align="center">
    <a href="">
        <img src="public/Invoice.png" alt="Business Homepage">
    </a>    
</p>

- Rewards
<p align="center">
    <a href="">
        <img src="public/Rewards.png" alt="Business Homepage">
    </a>    
</p>

### ▶ Company
- About Us
<p align="center">
    <a href="">
        <img src="public/About.png" alt="Business Homepage">
    </a>    
</p>

- Career
<p align="center">
    <a href="">
        <img src="public/career.png" alt="Business Homepage">
    </a>    
</p>

- Career Details
<p align="center">
    <a href="">
        <img src="public/careerDetails.png" alt="Business Homepage">
    </a>    
</p>

- Blog / Blog Details
<p align="center">
    <a href="">
        <img src="public/blog1.png" alt="Business Homepage">
    </a>    
</p>

- Error Page
<p align="center">
    <a href="">
        <img src="public/error.png" alt="Business Homepage">
    </a>    
</p>


### ▶ Help
- Help Center
<p align="center">
    <a href="">
        <img src="public/helpCenter.png" alt="Business Homepage">
    </a>    
</p>

- Help Category
<p align="center">
    <a href="">
        <img src="public/helpCategory.png" alt="Business Homepage">
    </a>    
</p>

---

## 📁 Folder Structure

```
paylio/
├── account/
├── core/
├── static/
│   ├── assets/
│   └── assets1/
├── templates/
│   ├── about/
│   ├── account/
│   ├── business/
│   ├── personal/
│   └── ...
└── manage.py
```

---

## 🧾 Deployment Notes

- **Static file serving**: Handled via `WhiteNoise`
- **Production server**: Use `Gunicorn` behind `Nginx`
- **Environment variables**: Managed via `.env` and `python-dotenv`

---

## 🤝 Contribution

We welcome contributions from developers, designers, and testers to improve Paylio.

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a pull request  

---

> Made with ❤️ by the Avnvarbek
