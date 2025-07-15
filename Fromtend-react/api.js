export const getAppointments = async (name, id) => {
    try {
        const url = `http://localhost:5223/api/Client/Get-Appointments?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getAvailableAppointments = async (date, treatmentType) => {
    try {
        const url = `http://localhost:5223/api/Appointment/available-appointments?date=${encodeURIComponent(date)}&treatmentType=${encodeURIComponent(treatmentType)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
export const fetchClientPost = async (path, data) => {
    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // המרת הנתונים ל-JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result; 
    } catch (error) {
        console.error('Error:', error);
    }
};

export const fetchAppointmentDelete = async (path, data) => {
    try {
        const response = await fetch(path, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // המרת הנתונים ל-JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result; 
    } catch (error) {
        console.error('Error:', error);
    }
};