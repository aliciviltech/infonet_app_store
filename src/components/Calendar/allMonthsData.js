export const allMonths = [
    {january: Array.from({ length: 31 }, (_, i) => i + 1)},
    {february: Array.from({ length: 28 }, (_, i) => i + 1)}, // 28 for non-leap year
    {march: Array.from({ length: 31 }, (_, i) => i + 1)},
    {april: Array.from({ length: 30 }, (_, i) => i + 1)},
    {may: Array.from({ length: 31 }, (_, i) => i + 1)},
    {june: Array.from({ length: 30 }, (_, i) => i + 1)},
    {july: Array.from({ length: 31 }, (_, i) => i + 1)},
    {august: Array.from({ length: 31 }, (_, i) => i + 1)},
    {september: Array.from({ length: 30 }, (_, i) => i + 1)},
    {october: Array.from({ length: 31 }, (_, i) => i + 1)},
    {november: Array.from({ length: 30 }, (_, i) => i + 1)},
    {december: Array.from({ length: 31 }, (_, i) => i + 1)},
];
  
  console.log(allMonths);