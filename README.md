# 🏥 Sehat Sahayak - Professional Healthcare Prototype

**Sehat Sahayak** is a premium, full-stack healthcare platform remodeled with a professional medical theme inspired by industry leaders like Pharmeasy. Designed with a focus on trust, accessibility, and modern UI/UX, this prototype bridges the gap between quality medical services and users, specifically tailored for regional accessibility in Punjab.

---

## 🎨 Remodeled UI/UX (Pharmeasy Theme)
The application has undergone a complete visual overhaul to project a professional medical identity:
- **Primary Palette:** Signature Medical Teal (`#10847e`) and Hospital White (`#f4f7f4`).
- **Modern Components:** 32px rounded corners, high-fidelity shadows, and smooth micro-interactions.
- **Responsive Layout:** A clean, grid-based architecture that works seamlessly across desktop and mobile devices.

---

## 🚀 Key Features

### 👨‍⚕️ Advanced Doctor Discovery
- **Dynamic Filtering:** Filter doctors by specialty (Cardiology, Pediatrics, etc.), experience levels, and location.
- **Real-time Search:** Instantly find doctors or specialties via the global search bar.
- **Dynamic Profiles:** Individual doctor pages with detailed bios, verified reviews, and ratings.

### 📅 Seamless Appointment Booking
- **Functional Scheduling:** Select preferred dates and time slots with an interactive UI.
- **Integrated Backend:** Appointments are processed via Flask API and stored in a MySQL database.
- **User Validation:** Interactive feedback and confirmation for successful bookings.

### 📚 Health & Wellness Hub
- **Information Repository:** A dedicated section for first aid guides, nutrition tips, and medical articles.
- **Content Filtering:** Searchable database of health topics and symptoms.

### 🛠 Robust Backend
- **Flask Integration:** Rebuilt from the ground up using Python's Flask framework.
- **Resilient Data Handling:** Automated fallback to mock data systems ensures the app remains functional even during database maintenance.

---

## 💻 Tech Stack

- **Frontend:** HTML5, Tailwind CSS v3, JavaScript (ES6+), Material Symbols.
- **Backend:** Python, Flask, Flask-CORS.
- **Database:** MySQL (Integrated via `mysql-connector-python`).
- **Architecture:** Restful API integration with static frontend serving.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dewri-Dev/Sehat-App-SIH-project-
   cd Sehat-App-SIH-project-
   ```

2. **Install Dependencies:**
   ```bash
   pip install flask flask-cors mysql-connector-python
   ```

3. **Database Configuration:**
   Update the `db_config` in `app.py` with your local MySQL credentials.

4. **Run the Application:**
   ```bash
   python app.py
   ```
   Access the app at: `http://localhost:5000`

---

## 👨‍💻 Developer Profile

Developed and Remodeled with ❤️ by **Nayan Dewri**.

- **LinkedIn:** [nayandewri](https://www.linkedin.com/in/nayandewri/)
- **GitHub:** [Dewri-Dev](https://github.com/Dewri-Dev)

---

## 📜 License
This project is part of a professional medical prototype series. All rights reserved.
