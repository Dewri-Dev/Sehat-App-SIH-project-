from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__, static_folder='frontend')
CORS(app)

# Database Configuration
db_config = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASSWORD', 'Nayan@123'),
    'database': os.environ.get('DB_NAME', 'sehat'),
    'port': int(os.environ.get('DB_PORT', 3306))
}

# Mock Data Fallback
MOCK_DOCTORS = [
    { 'id': 1, 'name': "Dr. Priya Sharma", 'specialty': "Cardiology", 'experience': 15, 'rating': 4.9, 'reviews': 124 },
    { 'id': 2, 'name': "Dr. Vikram Singh", 'specialty': "General Physician", 'experience': 10, 'rating': 4.8, 'reviews': 98 },
    { 'id': 3, 'name': "Dr. Anika Patel", 'specialty': "Pediatrics", 'experience': 8, 'rating': 4.9, 'reviews': 150 },
    { 'id': 4, 'name': "Dr. Rahul Verma", 'specialty': "Dermatology", 'experience': 12, 'rating': 4.7, 'reviews': 85 },
    { 'id': 5, 'name': "Dr. Sneha Kapoor", 'specialty': "Cardiology", 'experience': 20, 'rating': 5.0, 'reviews': 210 },
    { 'id': 6, 'name': "Dr. Amit Das", 'specialty': "General Physician", 'experience': 5, 'rating': 4.6, 'reviews': 45 }
]

def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM doctors")
            results = cursor.fetchall()
            cursor.close()
            conn.close()
            if not results:
                return jsonify(MOCK_DOCTORS)
            return jsonify(results)
        except Exception as e:
            print(f"DB Error: {e}")
            return jsonify(MOCK_DOCTORS)
    return jsonify(MOCK_DOCTORS)

@app.route('/api/appointments', methods=['POST'])
def book_appointment():
    data = request.json
    patient_name = data.get('patient_name')
    doctor_id = data.get('doctor_id')
    appointment_date = data.get('appointment_date')
    appointment_time = data.get('appointment_time')

    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            sql = "INSERT INTO appointments (patient_name, doctor_id, appointment_date, appointment_time) VALUES (%s, %s, %s, %s)"
            cursor.execute(sql, (patient_name, doctor_id, appointment_date, appointment_time))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({'message': 'Appointment Booked!'})
        except Exception as e:
            print(f"DB Error: {e}")
            return jsonify({'message': 'Appointment Booked! (Simulated locally)'})
    return jsonify({'message': 'Appointment Booked! (Simulated locally)'})

@app.route('/api/health')
def health_check():
    return "Server running"

# Serve Frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'homepage.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=os.environ.get('DEBUG', 'False') == 'True')
