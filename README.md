# 🏥 Sehat Sahayak - Professional Healthcare Prototype

**Sehat Sahayak** is a premium, full-stack healthcare platform remodeled with a professional medical theme inspired by industry leaders like Pharmeasy. Designed with a focus on trust, accessibility, and modern UI/UX, this prototype bridges the gap between quality medical services and users.

---

## 🎨 UI/UX Features
- **Primary Palette:** Signature Medical Teal (`#10847e`) and Hospital White (`#f4f7f4`).
- **Modern Components:** 32px rounded corners, high-fidelity shadows, and smooth micro-interactions.
- **Responsive Layout:** A clean, grid-based architecture that works seamlessly across desktop and mobile devices.

---

## 🚀 Key Features

### 👨‍⚕️ Advanced Doctor Discovery
- **Dynamic Filtering:** Filter doctors by specialty, experience levels, and location.
- **Real-time Search:** Instantly find doctors or specialties via the global search bar.

### 📅 Seamless Appointment Booking
- **Functional Scheduling:** Select preferred dates and time slots with an interactive UI.
- **Integrated Backend:** Appointments are processed via Flask API and stored in a MySQL database.

### 🛠 Robust Backend
- **Flask Integration:** Built with Python's Flask framework.
- **Resilient Data Handling:** Automated fallback to mock data ensures functionality even without a live database.
- **Production Ready:** Configured for deployment on Render with Gunicorn.

---

## 💻 Tech Stack

- **Frontend:** HTML5, Tailwind CSS v3, JavaScript (ES6+), Material Symbols.
- **Backend:** Python (Flask), Gunicorn.
- **Database:** MySQL.
- **Deployment:** Render (configured via `render.yaml` and `Procfile`).

---

## ⚙️ Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dewri-Dev/Sehat-App-SIH-project-
   cd Sehat-App-SIH-project-
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=sehat
   DB_PORT=3306
   DEBUG=True
   ```

4. **Run the Application:**
   ```bash
   python app.py
   ```
   Access the app at: `http://localhost:5000`

---

## ☁️ Deployment on Render

This project is pre-configured for **Render**.

1. **Connect your GitHub repository** to Render.
2. Render will automatically detect the `render.yaml` and `Procfile`.
3. **Configure Environment Variables** in the Render Dashboard:
   - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`.
4. The build and start commands are automatically set:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`

---

## 👨‍💻 Developer Profile

Developed and Remodeled with ❤️ by **Nayan Dewri**.

- **LinkedIn:** [nayandewri](https://www.linkedin.com/in/nayandewri/)
- **GitHub:** [Dewri-Dev](https://github.com/Dewri-Dev)

---

## 📜 License
This project is part of a professional medical prototype series. All rights reserved.
