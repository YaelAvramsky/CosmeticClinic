
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
export const fetchClientPost = async (clientData) => {
  try {
    const query = new URLSearchParams(clientData).toString();
    const response = await fetch(`http://localhost:5223/api/Client?${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error posting client:', error);
  }
};

export const fetchAppointmentDelete = async (appointment) => {
  try {
    const response = await fetch('http://localhost:5223/api/Appointment', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting appointment:', error);
  }
};
// src/api/clientTreatment.ts

export const checkClientTreatmentPackage = async (clientId, treatmentType) => {
  try {
    const url = `http://localhost:5223/api/Client/check-treatment-package?clientId=${encodeURIComponent(clientId)}&treatmentType=${encodeURIComponent(treatmentType)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result; // מחזיר true או false לפי מה שהשרת נותן
  } catch (error) {
    console.error('Error checking treatment package:', error);
    throw error;
  }
};