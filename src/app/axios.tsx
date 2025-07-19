import axios, { InternalAxiosRequestConfig } from 'axios';


const local:string = 'http://192.168.0.2:8080';
export const hosted:string = 'https://nadra-backend.onrender.com'
const vercel='/api'
export const apiUrl:string =vercel


export interface MultiPartAxiosConfig extends InternalAxiosRequestConfig {
  isMultipart?: boolean;
}

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000, 
});

// Function to wake up the server by hitting the wake-server endpoint

// Function to check if the server is awake







// Request Interceptor









