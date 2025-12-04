// JavaScript's Date function identifies real-world time by interfacing with the system clock of the device on which it is running. When you create a new Date object without any arguments (e.g., new Date()), JavaScript retrieves the current date and time from the user's operating system and represents it as the number of milliseconds that have elapsed since the Unix Epoch (January 1, 1970, 00:00:00 UTC)
// date 1 January 1970 se chalu hota h aur 1000 miliseconds add hua h date mein jo ki 1 second badh gya h toh Date 1 Jan 1970 time 00--00--01 ho rha h 
const date = new Date(1000);
console.log(date);
console.log(typeof date);
const dd = new Date();
console.log(dd.toDateString());
// console.log(dd.toString());
console.log(dd.toISOString());
// console.log(dd.getDate());
// // Date 1 , 2 , 3...31
// console.log(dd.getDay());
// // Day Sun (0) ,Mon (1), tue (2), wed (3) etc..
// console.log(dd.getMonth());
// // Month Jan (0), Feb (1), March (2) etc..
// console.log(dd.getFullYear());       
// console.log(dd.getMilliseconds());
// console.log(dd.getMinutes());
// console.log(dd.getTime());
// const now = Date.now();
// console.log(now);

// const d = new Date ("2022-10-19");
// console.log(d);
// console.log(d.toDateString());

const d = new Date ();
d.setDate(19); // yha par 19 likh kar aana chahiye par midninght mein system ke timezoone ke hisab se 19 hi likh kr aarha h
d.getFullYear(2025);
d.setMonth(5);// yha par 20 likha h par 19 date hoga kyunki 0 se strt hota h date , day , month
console.log(d);
console.log(d.toString());


// DATE CALCULATION
const date1 = new Date();
// // Jab string form mein likhenge date aur time tab woh 1 se hi consider krega  ,dateday,month  ko matlab 1 likha toh matlab january se strt hoga
const date2 = new Date("2025-05-19T10:10:00");
// // Jab number form mein likhenge date aur time tab woh 0 se hi consider krega  month , year ko matlab 0 likha toh matlab january se strt hoga
// const date30 = new Date(2025,5,19);
console.log(date2);
console.log(date2.toString());
// console.log(date30);
// console.log(date30.toString());

// // difference dono mein hamesha millisecond mein aayegi kyunki date millisecond mein store hui rehti h
console.log(date2-date1);
console.log(date2>date1);
console.log(date2<date1);

// Countdown timer
// Days , hours  , minutes , seconds
const date3 = new Date();
const date4 = new Date("2025-4-31");
const date5 = date4-date3;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor((date/(1000*60*60)%24));
const minutes = Math.floor((date/(1000*60)%60));
const seconds = Math.floor((date/(1000)%60));

console.log(`Birthday Timer: Days:${days} hours:${hours} minutes:${minutes} seconds${seconds} `);


 
// What the Code Does full Explanation here.
// It calculates how much time is left between today (date3) and April 30, 2025 (date4), broken into days, hours, minutes, and seconds.

// Step-by-Step Example
// Let's say today is April 20, 2025, 10:30:00 AM.

// 1. Get Dates
// date3 = new Date() → Today’s date/time (April 20, 2025, 10:30 AM).

// date4 = new Date("2025-4-30") → Target date (April 30, 2025, 12:00 AM).

// 2. Calculate Difference
// date4 - date3 → Time left in milliseconds (e.g., 9 days, 13 hours, 30 minutes = 825,000,000 ms).
// (Example numbers simplified for clarity)

// 3. Convert to Days, Hours, Minutes, Seconds
// Days: Math.floor(825,000,000 / 86,400,000) → 9 days
// (86,400,000 ms = 1 day)

// Hours: Math.floor((825,000,000 / 3,600,000) % 24) → 13 hours
// (3,600,000 ms = 1 hour; %24 removes full days)

// Minutes: Math.floor((825,000,000 / 60,000) % 60) → 30 minutes
// (60,000 ms = 1 minute; %60 removes full hours)

// Seconds: Math.floor((825,000,000 / 1,000) % 60) → 0 seconds
// (1,000 ms = 1 second; %60 removes full minutes)

// 4. Print Result
// javascript
// console.log(`Birthday Timer: Days:9 hours:13 minutes:30 seconds:0`); 