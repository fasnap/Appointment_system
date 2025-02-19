# Appointment Booking System

## Installation & Setup

### Backend Setup (Django)

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/appointment-booking.git
    cd appointment-booking
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Apply migrations:
    ```sh
    python manage.py migrate
    ```

5. Run the development server:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup (React.js)

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

## API Endpoints

### Get Available Slots

- **Endpoint**: `GET /slots/?date=YYYY-MM-DD`
- **Response**:
    ```json
    {
      "booked_slots": ["10:00", "10:30"]
    }
    ```

### Create an Appointment

- **Endpoint**: `POST /appointments/`
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "phone": "1234567890",
      "date": "2024-07-10",
      "time": "10:00"
    }
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "date": "2024-07-10",
      "time": "10:00"
    }
    ```

## Deployment

### Backend Deployment (AWS EC2)

1. Install necessary dependencies on the server:
    ```sh
    sudo apt update && sudo apt install python3-pip python3-venv
    ```

2. Clone the repository and set up the environment as done in the local setup.

3. Set up Gunicorn & Nginx for production.

### Frontend Deployment

1. Build the React app:
    ```sh
    npm run build
    ```

2. Deploy the static files to S3 or serve via Nginx.

## Usage

1. Open the application in your browser.
2. Select a date to view available slots.
3. Choose a time slot and enter your details.
4. Click "Book Appointment".
5. Receive a success message if the booking is successful.

## Contributors

- Your Name - [GitHub Profile](https://github.com/your-profile)

## License

This project is licensed under the MIT License.
```` ▋