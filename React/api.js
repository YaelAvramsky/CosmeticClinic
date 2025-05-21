// export const fetchLogin = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(async () => {
//             try {
//                 if (Math.random() < 0.0) {
//                     throw new Error("Simulated network error");
//                 }
//                 const response = await fetch('http://localhost:5223/api/Client');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const result = await response.json();
//                 console.log(result); 
//                 resolve(result.products); 
//             } catch (error) {
//                 reject(error.message);
//             }
//         });
//     });
// };
// export const fetchAppointments = async (name, id) => {
//     try {
//         const response = await fetch(`http://localhost:5223/api/Client?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log(result);
//         return result; 
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };
export const fetchClient  = async (path) => {
    try {
        const response = await fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
       // console.log(result);
        return result; 
    } catch (error) {
        console.error('Error:', error);
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
