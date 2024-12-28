// import { SearchOptions } from "../types/SearchOptions";
// import { TrainInfo } from "../types/TrainInfo"; 

// export const searchDirections = async (
//     id_from: string,
//     id_to: string,
//     options: SearchOptions = {}
// ) => {
//     const queryParams = {
//         from_city_id: id_from,
//         to_city_id: id_to,
//         ...options,
//     };

//     // Преобразуем в URLSearchParams, фильтруя значения
//     const queryString = new URLSearchParams(
//         Object.entries(queryParams)
//             .filter(([,value]) => value !== undefined) // Убираем неопределенные значения
//             .map(([key, value]) => [key, String(value)]) // Преобразуем все значения в строки
//     ).toString();

//     try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/routes?${queryString}`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data: TrainInfo = await response.json(); 
//         return data;
//     } catch (error) {
//         console.error('Error:', error);
//         return null;
//     }
// };
